import React from 'react';
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
  return (
    
    <div className={`${geist.className} min-h-screen w-full flex flex-col justify-center items-center`}>
      <h1 className="text-5xl text-center font-bold text-white mb-10">Our Services</h1>

      <div className="w-full max-w-7xl px-10">
        <div
          className="grid gap-3 w-full h-[700px]"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
          }}
        >
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center rounded-xl text-white text-2xl font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
