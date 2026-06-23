import React from 'react';

export interface LogoLoopProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logos?: any[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  fadeOut?: boolean;
  ariaLabel?: string;
  [key: string]: unknown;
}

declare const LogoLoop: React.FC<LogoLoopProps>;
export default LogoLoop;
