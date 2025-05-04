import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';

const app = express();

// Configure CORS
app.use(cors({
    origin: '*', // Allow all origins in development
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Check if API key is configured
if (!process.env.OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY is not configured in .env file');
    process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful Netflix assistant. Keep responses concise and friendly.' },
                { role: 'user', content: message }
            ],
            temperature: 0.7,
            max_tokens: 150
        });

        res.json({ reply: completion.choices[0].message.content });
    } catch (err) {
        console.error('OpenAI API Error:', err);
        res.status(500).json({ error: 'Failed to process your request' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`OpenAI API Key configured: ${process.env.OPENAI_API_KEY ? 'Yes' : 'No'}`);
}); 