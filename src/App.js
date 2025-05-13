import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectItem } from '@/components/ui/select';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { v4 as uuidv4 } from 'uuid';

const RiskAssessmentSystem = () => {
    const [equipment, setEquipment] = useState('');
    const [severity, setSeverity] = useState(1);
    const [frequency, setFrequency] = useState(1);
    const [probability, setProbability] = useState(1);
    const [avoidability, setAvoidability] = useState(1);
    const [riskRecords, setRiskRecords] = useState([]);

    const calculateRisk = () => {
        const risk = severity * frequency * probability * avoidability;
        const classification = getRiskClassification(risk);
        const newRecord = {
            id: uuidv4(),
            equipment,
            severity,
            frequency,
            probability,
            avoidability,
            risk,
            classification,
            date: new Date().toLocaleDateString()
        };
        setRiskRecords([...riskRecords, newRecord]);
        resetForm();
    };

    const getRiskClassification = (risk) => {
        if (risk <= 10) return 'Baixo';
        if (risk <= 40) return 'Moderado';
        if (risk <= 80) return 'Alto';
        if (risk <= 160) return 'Muito Alto';
        return 'Crítico';
    };

    const resetForm = () => {
        setEquipment('');
        setSeverity(1);
        setFrequency(1);
        setProbability(1);
        setAvoidability(1);
    };

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-4">
                <CardHeader>Cadastro de Equipamento</CardHeader>
                <CardContent>
                    <Input placeholder="Nome do Equipamento" value={equipment} onChange={(e) => setEquipment(e.target.value)} className="mb-2" />
                    <Select value={severity} onChange={(e) => setSeverity(parseInt(e.target.value))} className="mb-2">
                        <SelectItem value="1">Leve (1)</SelectItem>
                        <SelectItem value="2">Moderado (2)</SelectItem>
                        <SelectItem value="3">Grave (3)</SelectItem>
                        <SelectItem value="4">Fatal (4)</SelectItem>
                    </Select>
                    <Select value={frequency} onChange={(e) => setFrequency(parseInt(e.target.value))} className="mb-2">
                        <SelectItem value="1">Raro (1)</SelectItem>
                        <SelectItem value="2">Ocasional (2)</SelectItem>
                        <SelectItem value="3">Frequente (3)</SelectItem>
                        <SelectItem value="4">Muito Frequente (4)</SelectItem>
                    </Select>
                    <Select value={probability} onChange={(e) => setProbability(parseInt(e.target.value))} className="mb-2">
                        <SelectItem value="1">Muito Improvável (1)</SelectItem>
                        <SelectItem value="2">Improvável (2)</SelectItem>
                        <SelectItem value="3">Possível (3)</SelectItem>
                        <SelectItem value="4">Provável (4)</SelectItem>
                    </Select>
                    <Select value={avoidability} onChange={(e) => setAvoidability(parseInt(e.target.value))} className="mb-4">
                        <SelectItem value="1">Fácil de evitar (1)</SelectItem>
                        <SelectItem value="2">Difícil de evitar (2)</SelectItem>
                        <SelectItem value="3">Muito difícil de evitar (3)</SelectItem>
                        <SelectItem value="4">Impossível de evitar (4)</SelectItem>
                    </Select>
                    <Button onClick={calculateRisk}>Calcular Risco</Button>
                </CardContent>
            </Card>

            <Card className="mb-4">
                <CardHeader>Histórico de Avaliações de Risco</CardHeader>
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Data</TableCell>
                                <TableCell>Equipamento</TableCell>
                                <TableCell>Risco</TableCell>
                                <TableCell>Classificação</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {riskRecords.map(record => (
                                <TableRow key={record.id}>
                                    <TableCell>{record.date}</TableCell>
                                    <TableCell>{record.equipment}</TableCell>
                                    <TableCell>{record.risk}</TableCell>
                                    <TableCell>{record.classification}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="mb-4">
                <CardHeader>Gráfico de Distribuição de Riscos</CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={riskRecords}>
                            <XAxis dataKey="equipment" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="risk" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
};

export default RiskAssessmentSystem;
