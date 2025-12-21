"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hello! I'm the GMP Payroll AI Specialist. How can I help you with global payroll or compliance today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError429, setIsError429] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            if (response.status === 429) {
                setIsError429(true);
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: "Our AI assistant is currently resting. Please leave your email here, and a human expert will get back to you shortly.",
                        isError: true
                    },
                ]);
            } else {
                const data = await response.json();
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: data.reply },
                ]);
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "I'm having trouble connecting right now. Please try again later or contact support@gmppayroll.org." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this email to your backend
        alert("Thank you! A human expert will contact you shortly.");
        setIsOpen(false);
        setIsError429(false);
        setMessages([
            {
                role: "assistant",
                content: "Hello! I'm the GMP Payroll AI Specialist. How can I help you with global payroll or compliance today?",
            },
        ]);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: "fixed",
                    bottom: "32px",
                    right: "32px",
                    backgroundColor: "#003366",
                    color: "white",
                    borderRadius: "50px",
                    padding: "12px 24px",
                    boxShadow: "0 8px 16px rgba(0,51,102,0.25)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    zIndex: 9999,
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    width: isOpen ? "0px" : "auto", // Hide roughly when open
                    opacity: isOpen ? 0 : 1,
                    pointerEvents: isOpen ? "none" : "auto",
                }}
            >
                <span style={{ fontSize: "24px" }}>🤖</span>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>AI Assistant</span>
            </button>

            {/* Chat Window */}
            <div
                style={{
                    position: "fixed",
                    bottom: "32px",
                    right: "32px",
                    transform: `scale(${isOpen ? 1 : 0.8})`,
                    transformOrigin: "bottom right",
                    width: "90%",
                    maxWidth: "400px",
                    height: "600px",
                    maxHeight: "80vh",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 9999,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden"
                }}
            >
                {/* Header */}
                <div
                    style={{
                        backgroundColor: "#003366",
                        color: "white",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "8px", height: "8px", backgroundColor: "#4ADE80", borderRadius: "50%" }}></div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "700", color: "white" }}>GMP AI Specialist</h3>
                            <p style={{ margin: 0, fontSize: "12px", opacity: 0.8 }}>Online | Powered by Gemini 2.5</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "white",
                            fontSize: "24px",
                            cursor: "pointer",
                            padding: "4px",
                        }}
                    >
                        ×
                    </button>
                </div>

                {/* Messages Area */}
                <div style={{ flex: 1, padding: "20px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#F8FAFC" }}>
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            style={{
                                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                                backgroundColor: msg.role === "user" ? "#003366" : "white",
                                color: msg.role === "user" ? "white" : "#334155",
                                padding: "12px 16px",
                                borderRadius: msg.role === "user" ? "16px 16px 0 16px" : "16px 16px 16px 0",
                                maxWidth: "80%",
                                boxShadow: msg.role === "assistant" ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                border: msg.role === "assistant" ? "1px solid #E2E8F0" : "none",
                            }}
                        >
                            {msg.content}
                        </div>
                    ))}
                    {isLoading && (
                        <div style={{ alignSelf: "flex-start", backgroundColor: "white", padding: "12px 16px", borderRadius: "16px 16px 16px 0", border: "1px solid #E2E8F0" }}>
                            <div className="typing-dot-indicator" style={{ display: "flex", gap: "4px" }}>
                                <span style={{ width: "6px", height: "6px", backgroundColor: "#94A3B8", borderRadius: "50%", animation: "bounce 1.4s infinite ease-in-out both" }}></span>
                                <span style={{ width: "6px", height: "6px", backgroundColor: "#94A3B8", borderRadius: "50%", animation: "bounce 1.4s infinite ease-in-out both", animationDelay: "0.16s" }}></span>
                                <span style={{ width: "6px", height: "6px", backgroundColor: "#94A3B8", borderRadius: "50%", animation: "bounce 1.4s infinite ease-in-out both", animationDelay: "0.32s" }}></span>
                                <style>{`@keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }`}</style>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div style={{ padding: "16px", backgroundColor: "white", borderTop: "1px solid #E2E8F0" }}>
                    {isError429 ? (
                        <form onSubmit={handleEmailSubmit} style={{ display: "flex", gap: "8px" }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                style={{
                                    flex: 1,
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid #CBD5E1",
                                    fontSize: "14px",
                                    outline: "none"
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "#003366",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "0 20px",
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}
                            >
                                Send
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about payroll compliance..."
                                style={{
                                    flex: 1,
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid #CBD5E1",
                                    fontSize: "14px",
                                    outline: "none",
                                    color: "#0F172A"
                                }}
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                style={{
                                    backgroundColor: "#003366",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "0 16px",
                                    cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                                    opacity: isLoading || !input.trim() ? 0.5 : 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <span style={{ fontSize: "18px" }}>➤</span>
                            </button>
                        </form>
                    )}
                    <div style={{ textAlign: "center", marginTop: "8px" }}>
                        <span style={{ fontSize: "10px", color: "#94A3B8" }}>AI can make mistakes. Contact our experts for critical advice.</span>
                    </div>
                </div>
            </div>
        </>
    );
}
