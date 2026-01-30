import { LoginForm } from '@/features/auth/components/LoginForm';

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-md z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                            Bienvenido
                        </h1>
                        <p className="text-gray-400">
                            Ingresa tus credenciales para acceder al sistema
                        </p>
                    </div>

                    <LoginForm />

                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <p className="text-sm text-gray-500">
                            ¿No tienes una cuenta?{' '}
                            <a href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                                Regístrate
                            </a>
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-gray-600 uppercase tracking-widest font-semibold">
                    SaaS Factory Version 3.0
                </p>
            </div>
        </main>
    );
}
