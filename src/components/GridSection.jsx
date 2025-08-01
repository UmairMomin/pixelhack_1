'use client'
import React, { useEffect, useState } from 'react';
import { Geist } from 'next/font/google'
const gridItems = [
  {
    id: 1,
    label: 'Box 1',
    colStart: 1,
    colEnd: 3,
    rowStart: 1,
    rowEnd: 3,
    bgColor: '#82E0AA',
  },
  {
    id: 2,
    label: 'Box 2',
    colStart: 3,
    colEnd: 4,
    rowStart: 1,
    rowEnd: 2,
    bgColor: '#82E0AA',
  },
  {
    id: 3,
    label: 'Box 3',
    colStart: 4,
    colEnd: 5,
    rowStart: 1,
    rowEnd: 2,
    bgColor: '#FFEAA7',
  },
  {
    id: 4,
    label: 'Box 4',
    colStart: 4,
    colEnd: 5,
    rowStart: 2,
    rowEnd: 3,
    bgColor: '#DDA0DD',
  },
  {
    id: 5,
    label: 'Box 5',
    colStart: 3,
    colEnd: 4,
    rowStart: 2,
    rowEnd: 3,
    bgColor: '#FF6B6B',
  },
];


 
const geist = Geist({
  subsets: ['latin'],
})

const GridSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Hide the default cursor globally
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    
    // Also hide cursor on all elements
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Restore cursor when component unmounts
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
      // Check if style element exists before removing
      if (style && style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="bitcount-prop-single min-h-screen w-full flex flex-col justify-center items-center cursor-none">
      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-10 h-10 border-2 border-white rounded-full bg-transparent"></div>
      </div>
     <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 pointer-events-none"></div>
      <h1 className="bitcount-prop-single text-5xl text-center font-bold text-white mb-10">Our Services</h1>

      <div className="w-full max-w-7xl px-10">
        <div
          className="grid gap-1 w-full h-[700px]"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
          }}
        >
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="bitcount-prop-single flex items-center justify-center rounded-xl text-white text-2xl font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                gridColumn: `${item.colStart} / ${item.colEnd}`,
                gridRow: `${item.rowStart} / ${item.rowEnd}`,
                backgroundColor: item.bgColor,
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridSection;
