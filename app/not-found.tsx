import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full text-center px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 dark:bg-white/10 blur-[120px] rounded-full pointer-events-none" />
      
      <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 select-none">
        404
      </h1>
      
      <h2 className="mt-4 text-2xl md:text-3xl font-medium text-zinc-800 dark:text-zinc-200">
        Lost in the architecture
      </h2>
      
      <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
        The page you are looking for doesn&apos;t exist, has been moved, or is currently under construction.
      </p>
      
      <Link 
        href="/"
        className="mt-8 px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:scale-105 transition-transform duration-300 ease-out shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
      >
        Return Home
      </Link>
    </div>
  );
}
