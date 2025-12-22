import { NextResponse } from 'next/server';

const GL_API_KEY = (process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY || "").trim();
const SYSTEM_INSTRUCTION = `You are the GMP Payroll AI Specialist. You are professional, accurate, and helpful. You specialize in global payroll implementation, tax compliance (including MPF/CPF), and workflow automation. If you don't know an answer, politely ask the user to contact support@gmppayroll.org. Keep your answers concise and business-focused.`;

export async function POST(req) {
    if (!GL_API_KEY) {
        return NextResponse.json({ error: "Gemini API Key is missing on server." }, { status: 500 });
    }

    try {
        const { message } = await req.json();

        // Construct the prompt with system instruction context
        // Note: For 'flash' models, system instructions can be passed in 'system_instruction' field or prepended.
        // We will prepend for broader compatibility if using simple fetch.

        const payload = {
            contents: [{
                parts: [{ text: `System Instruction: ${SYSTEM_INSTRUCTION}\n\nUser Question: ${message}` }]
            }]
        };

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GL_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (response.status === 429) {
            return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
        }

        if (!response.ok) {
            const errorData = await response.text();
            console.error("Gemini API Error:", errorData);
            let errorMessage = "Failed to fetch from Gemini";
            try {
                const errorJson = JSON.parse(errorData);
                errorMessage = errorJson.error?.message || errorData;
            } catch (e) {
                errorMessage = errorData;
            }
            return NextResponse.json({ error: errorMessage }, { status: response.status });
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I couldn't generate a response.";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
