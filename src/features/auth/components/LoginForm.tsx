'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/shared/components/Button';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Basic validation
        if (!email || !password) {
            setError('Por favor, completa todos los campos.');
            setIsLoading(false);
            return;
        }

        if (!email.includes('@')) {
            setError('Por favor, ingresa un correo electrónico válido.');
            setIsLoading(false);
            return;
        }

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log('Login attempt:', { email, password });
            // Here you would integrate with Supabase Auth
        } catch (err) {
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="p-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg animate-in fade-in slide-in-from-top-1">
                    {error}
                </div>
            )}

            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    disabled={isLoading}
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                >
                    Contraseña
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    disabled={isLoading}
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                className="w-full"
                isLoading={isLoading}
            >
                Entrar
            </Button>
        </form>
    );
}
