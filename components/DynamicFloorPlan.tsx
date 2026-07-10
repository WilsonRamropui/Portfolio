"use client";

import dynamic from 'next/dynamic';

export const DynamicFloorPlan = dynamic(() => import('@/components/FloorPlan3D'), { ssr: false });
