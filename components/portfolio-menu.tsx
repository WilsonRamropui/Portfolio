"use client";

import { ArrowLeftIcon, BookText, Layers3, Sun, Moon } from 'lucide-react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion, useAnimation } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export type PortfolioConfig = {
    image?: string;
    firstName: string;
    experience: number;
    domain: string;
    role: string;

    bioText: {
        prefix: string;
        emphasis1: string;
        midText: string;
        emphasis2: string;
        suffix: string;
    };

    colors: {
        bioButton: string;
        menuButton: string;
        plusButton: string;
    };

    cvLink: string;
    twitterUrl: string;
    layersLink: string;
    githubLink: string;
};

export const defaultPortfolioConfig: PortfolioConfig = {
    firstName: 'Wilson',
    experience: 5,
    domain: 'building AI products',
    role: 'AI builder',

    bioText: {
        prefix: "I am a Full-Stack Design Engineer with",
        emphasis1: 'years of experience',
        midText: "building structural and architectural plans and shipping products that matter.",
        emphasis2: 'turning complex tasks into simple, magical user experiences',
        suffix: ".",
    },

    colors: {
        bioButton: 'bg-orange-600',
        menuButton: 'bg-blue-600',
        plusButton: 'bg-green-600',
    },
    cvLink: '#',
    twitterUrl: '#',
    layersLink: '#',
    githubLink: '#',
};

export type Props = {
    config?: PortfolioConfig;
};

export default function Portfolio({ config = defaultPortfolioConfig }: Props) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isBio, setIsBio] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const isAnimatingRef = useRef(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                if (!isAnimatingRef.current) {
                    setIsOpen(false);
                    setIsBio(false);
                    setIsMenu(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        setMounted(true);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const controls = useAnimation();
    const imageControls = useAnimation();
    const plusControls = useAnimation();
    const iconsControls = useAnimation();
    const profileControls = useAnimation();
    const aboutControls = useAnimation();
    const menuControls = useAnimation();

    const containerVariants = {
        closed: { width: '2.5rem', height: '2.5rem', minWidth: '2.5rem', minHeight: '2.5rem' },
        open: { width: '16rem', height: '3.5rem', minWidth: '16rem', minHeight: '3.5rem' },
        bio: { width: 'min(22.8rem, calc(100vw - 4rem))', height: '14.5rem', minHeight: '14.5rem', minWidth: 'min(22rem, calc(100vw - 4rem))' },
        menu: { width: '10.25rem', height: '2rem', minWidth: '10.25rem', minHeight: '2rem' },
    };

    const aboutVariants = {
        closed: { opacity: 0, scale: 0.5 },
        bio: { opacity: 1, scale: 1 },
    };

    const imageVariants = {
        closed: {
            width: '24px',
            height: '24px',
            translateX: 0,
            opacity: 1,
        },
        open: {
            width: '2.2rem',
            height: '2.2rem',
            translateX: '4px',
            opacity: 1,
        },
        bio: { opacity: 0, translateX: '-3px' },
    };

    const plusVariants = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    };

    const iconsVariants = {
        closed: { opacity: 0, gap: '2px' },
        open: { opacity: 1, gap: '4px' },
    };

    const profileVariants = {
        closed: {
            scale: 0.5,
            left: '40px',
            opacity: 0,
            filter: 'blur(4px)',
            y: '-50%',
        },
        open: {
            scale: 1,
            left: '60px',
            opacity: 1,
            filter: 'blur(0)',
            y: '-50%',
        },
    };

    const menuVariants = {
        closed: { opacity: 0, scale: 0, y: '-50%' },
        menu: { opacity: 1, scale: 1, y: '-50%' },
    };

    useEffect(() => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        const sequence = async () => {
            const state =
                isOpen && !isBio
                    ? 'openButBioClosed'
                    : isOpen && isBio
                        ? 'openButBioOpen'
                        : isMenu && !isOpen && !isBio
                            ? 'menuOpened'
                            : !isOpen && !isBio
                                ? 'closedButBioClosed'
                                : !isOpen && isBio
                                    ? 'closedButBioOpen'
                                    : null;

            switch (state) {
                case 'openButBioClosed': {
                    await Promise.all([
                        aboutControls.start('closed'),
                        plusControls.start('open'),
                        imageControls.start('open'),
                        menuControls.start('closed'),
                        controls.start('open'),
                        iconsControls.start('open'),
                        profileControls.start('open'),
                    ]);
                    break;
                }
                case 'closedButBioClosed': {
                    await Promise.all([
                        aboutControls.start('closed'),
                        menuControls.start('closed'),
                        profileControls.start('closed'),
                        iconsControls.start('closed'),
                        controls.start('closed'),
                        imageControls.start('closed'),
                        plusControls.start('closed'),
                    ]);
                    break;
                }
                case 'openButBioOpen': {
                    await Promise.all([
                        imageControls.start('bio'),
                        menuControls.start('closed'),
                        plusControls.start('open'),
                        profileControls.start('closed'),
                        iconsControls.start('closed'),
                        controls.start('bio'),
                        aboutControls.start('bio'),
                    ]);
                    break;
                }
                case 'menuOpened': {
                    await Promise.all([
                        imageControls.start('bio'),
                        profileControls.start('closed'),
                        iconsControls.start('closed'),
                        controls.start('menu'),
                        menuControls.start('menu'),
                    ]);
                    break;
                }
            }
            // Unlock only after all animations have fully resolved
            isAnimatingRef.current = false;
        };

        sequence();
    }, [
        isOpen,
        controls,
        imageControls,
        plusControls,
        iconsControls,
        profileControls,
        aboutControls,
        isBio,
        isMenu,
        menuControls,
    ]);

    return (
        <div ref={menuRef} className={cn('fixed bottom-8 right-8 z-[9999] justify-end items-center bg-transparent', pathname?.startsWith('/showcase') ? 'hidden' : 'flex')}>
            <motion.div
                variants={containerVariants}
                initial="closed"
                animate={controls}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative overflow-hidden flex justify-center items-center bg-black/5 dark:bg-white/5 backdrop-blur-2xl border border-black/10 dark:border-white/10 border-t-black/20 dark:border-t-white/30 border-l-black/10 dark:border-l-white/20 p-3 rounded-[30px] w-[2.5rem] h-[2.5rem] cursor-pointer shadow-[0_16px_32px_-8px_rgba(0,0,0,0.2),0_8px_16px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),0_8px_16px_-4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.1)]"
            >
                <div className="top-1/2 left-[8px] z-[9999] absolute flex justify-center items-center origin-left transition-all -translate-y-1/2 duration-350 ease-out">
                    <motion.div
                        variants={imageVariants}
                        initial="closed"
                        animate={imageControls}
                        onClick={() => {
                            if (!isAnimatingRef.current) {
                                setIsOpen((prev) => !prev);
                            }
                        }}
                    >
                        <div className="flex flex-col justify-center items-center gap-[4px] bg-transparent w-full h-full">
                            <span className="bg-zinc-800 dark:bg-white/80 rounded-full w-[16px] h-[1.5px]" />
                            <span className="bg-zinc-800 dark:bg-white/80 rounded-full w-[16px] h-[1.5px]" />
                            <span className="bg-zinc-800 dark:bg-white/80 rounded-full w-[16px] h-[1.5px]" />
                        </div>
                    </motion.div>
                </div>



                <motion.div
                    variants={iconsVariants}
                    initial="closed"
                    animate={iconsControls}
                    className="top-1/2 right-[0.685rem] z-[999] absolute flex items-center gap-1 -translate-y-1/2"
                >
                    <div
                        onClick={() => {
                            if (!isAnimatingRef.current) {
                                setIsBio(true);
                            }
                        }}
                        className="flex justify-center items-center gap-[2px] bg-orange-600 rounded-full size-[36px]"
                    >
                        <div className="bg-white rounded-full w-[1.5px] h-[4px]" />
                        <div className="bg-white rounded-full w-[1.5px] h-[8px]" />
                        <div className="bg-white rounded-full w-[1.5px] h-[14px]" />
                        <div className="bg-white rounded-full w-[1.5px] h-[5px]" />
                        <div className="bg-white rounded-full w-[1.5px] h-[10px]" />
                        <div className="bg-white rounded-full w-[1.5px] h-[5px]" />
                    </div>
                    <div
                        onClick={() => {
                            if (!isAnimatingRef.current) {
                                setIsMenu(true);
                                setIsBio(false);
                                setIsOpen(false);
                            }
                        }}
                        className="flex justify-center items-center gap-[3px] bg-blue-600 rounded-full size-[36px]"
                    >
                        <div className="bg-white rounded-full size-[2.5px]" />
                        <div className="bg-white rounded-full size-[2.5px]" />
                        <div className="bg-white rounded-full size-[2.5px]" />
                    </div>
                </motion.div>

                <AnimatePresence>
                    <motion.div
                        key="profile"
                        variants={profileVariants}
                        initial="closed"
                        animate={profileControls}
                        exit="closed"
                        transition={{
                            duration: 0.35,
                            ease: 'easeOut',
                        }}
                        className="top-1/2 z-[50] absolute flex flex-col items-start origin-left"
                    >
                        <span className="text-zinc-600 dark:text-gray-400 text-sm select-none">{"Hello, I'm"}</span>
                        <h1 className="m-0 font-normal text-base text-zinc-900 dark:text-white leading-[16px] select-none">
                            {config?.firstName}
                        </h1>
                    </motion.div>
                </AnimatePresence>
                <motion.div
                    variants={aboutVariants}
                    initial="closed"
                    animate={aboutControls}
                    onClick={() => {
                        if (!isAnimatingRef.current) {
                            setIsBio(false);
                        }
                    }}
                    className="relative flex w-full max-w-[372px] h-[100%] origin-center transition-all duration-350 overflow-hidden ease-out"
                >
                    <div className="px-4 py-6 w-full h-full overflow-hidden flex items-center justify-center">
                        <p className="relative m-0 text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 select-none">
                            {config?.bioText?.prefix} <span className="text-zinc-900 dark:text-white">{config?.experience} {config?.bioText?.emphasis1}</span>{' '}
                            {config?.bioText?.midText}{' '}
                            <span className="text-zinc-900 dark:text-white">“{config?.bioText?.emphasis2}”</span>{config?.bioText?.suffix}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate={menuControls}
                    className="top-1/2 left-[0.7rem] z-[9999] absolute origin-center"
                >
                    <div className="flex items-center gap-4">
                        <div
                            onClick={() => {
                                if (!isAnimatingRef.current) {
                                    setIsMenu(false);
                                    setIsOpen(true);
                                }
                            }}
                            className="cursor-pointer"
                        >
                            <ArrowLeftIcon size={16} className="text-zinc-900 dark:text-white" suppressHydrationWarning />
                        </div>
                        <Link href={config?.cvLink || '#'}>
                            <BookText size={16} className="rotate-[30deg] text-zinc-900 dark:text-white hover:text-orange-400 transition-colors" suppressHydrationWarning />
                        </Link>
                        <Link href={config?.twitterUrl || '#'}>
                            <FaTwitter size={16} className="text-zinc-900 dark:text-white hover:text-blue-400 transition-colors" suppressHydrationWarning />
                        </Link>
                        <Link href={config?.layersLink || '#'}>
                            <Layers3 size={16} className="rotate-[30deg] text-zinc-900 dark:text-white hover:text-green-400 transition-colors" suppressHydrationWarning />
                        </Link>
                        <Link href={config?.githubLink || '#'}>
                            <FaGithub size={16} className="text-zinc-900 dark:text-white hover:text-purple-400 transition-colors" suppressHydrationWarning />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
