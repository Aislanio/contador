import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const startDate = new Date('2025-04-11');

    try {
        const now = new Date();
        const diffInMs = now - startDate; // Calcula a diferença em milissegundos

        // Convertendo a diferença para anos, meses, dias, horas, minutos e segundos
        const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000); // Calculando os segundos

        // Enviar a resposta única com todos os dados
        res.json({
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        });

    } catch (error) {
        // Se ocorrer um erro, retornar a resposta de erro
        res.status(500).json({ message: 'Erro ao calcular tempo de relacionamento', error });
    }
});

app.listen(2000, () => {
    console.log("SERVIDOR RODANDO");
});
