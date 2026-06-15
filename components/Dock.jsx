'use client';

import { Children, cloneElement, useState } from 'react';
import './Dock.css';

function DockItem({ children, className = '', onClick, baseItemSize }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      style={{
        width: baseItemSize,
        height: baseItemSize
      }}
    >
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </div>
  );
}

function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;

  if (!isHovered) return null;

  return (
    <div
      className={`dock-label ${className}`}
      role="tooltip"
      style={{ transform: 'translateX(-50%)' }}
    >
      {children}
    </div>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  panelHeight = 68,
  baseItemSize = 50
}) {
  return (
    <div style={{ height: panelHeight }} className="dock-outer">
      <div
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </div>
    </div>
  );
}
