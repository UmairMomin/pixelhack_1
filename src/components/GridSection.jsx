// 'use client'
// import React, { useEffect, useState } from 'react';
// import { Geist } from 'next/font/google';

// const gridItems = [
//   {
//     id: 1,
//     label: 'Box 1',
//     colStart: 1,
//     colEnd: 3,
//     rowStart: 1,
//     rowEnd: 3,
//     bgColor: '#82E0AA',
//   },
//   {
//     id: 2,
//     label: 'Box 2',
//     colStart: 3,
//     colEnd: 4,
//     rowStart: 1,
//     rowEnd: 2,
//     bgColor: '#82E0AA',
//   },
//   {
//     id: 3,
//     label: 'Box 3',
//     colStart: 4,
//     colEnd: 5,
//     rowStart: 1,
//     rowEnd: 2,
//     bgColor: '#FFEAA7',
//   },
//   {
//     id: 4,
//     label: 'Box 4',
//     colStart: 4,
//     colEnd: 5,
//     rowStart: 2,
//     rowEnd: 3,
//     bgColor: '#DDA0DD',
//   },
//   {
//     id: 5,
//     label: 'Box 5',
//     colStart: 3,
//     colEnd: 4,
//     rowStart: 2,
//     rowEnd: 3,
//     bgColor: '#FF6B6B',
//   },
// ];



// const GridSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [showBox6, setShowBox6] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     // Hide cursor globally
//     document.body.style.cursor = 'none';
//     document.documentElement.style.cursor = 'none';
//     const style = document.createElement('style');
//     style.textContent = `* { cursor: none !important; }`;
//     document.head.appendChild(style);

//     window.addEventListener('mousemove', handleMouseMove);

//     // Toggle Box 6 every 6 seconds
//     const interval = setInterval(() => {
//       setShowBox6(true);
//       setTimeout(() => setShowBox6(false), 3000); // Box6 shows for 3s
//     }, 6000); // Cycle every 6s

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       document.body.style.cursor = 'auto';
//       document.documentElement.style.cursor = 'auto';
//       if (style && style.parentNode) document.head.removeChild(style);
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="bitcount min-h-screen w-full flex flex-col justify-center items-center cursor-none relative overflow-hidden">
//       {/* Custom Cursor */}
//       <div
//         className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
//         style={{
//           left: mousePosition.x,
//           top: mousePosition.y,
//           transform: 'translate(-50%, -50%)',
//         }}
//       >
//         <div className="w-10 h-10 border-2 border-white rounded-full bg-transparent"></div>
//       </div>

//       {/* Background Gradient */}
//       <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 pointer-events-none"></div>

//       {/* Heading */}
//       <h1 className="bitcount text-8xl text-center font-bold text-white mb-10">Our Services</h1>

//       {/* Grid Section */}
//       <div className="w-full max-w-7xl px-10 relative">
//         <div
//           className="grid gap-1 w-full h-[700px] relative z-10"
//           style={{
//             gridTemplateColumns: 'repeat(4, 1fr)',
//             gridTemplateRows: 'repeat(3, 1fr)',
//           }}
//         >
//           {/* Grid Items */}
//           {gridItems.map((item) => (
//             <div
//               key={item.id}
//               className="bitcount flex items-center justify-center rounded-xl text-white text-2xl font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//               style={{
//                 gridColumn: `${item.colStart} / ${item.colEnd}`,
//                 gridRow: `${item.rowStart} / ${item.rowEnd}`,
//                 backgroundColor: item.bgColor,
//               }}
//             >
//               {item.label}
//             </div>
//           ))}

//                      {/* Animated Box 6 overlays Box 1 */}
//            <div
//              className={`absolute transition-all duration-700 ease-in-out ${
//                showBox6 ? 'translate-x-0 opacity-100 hover:scale-105 hover:shadow-2xl' : '-translate-x-full opacity-0'
//              } flex items-center justify-center rounded-xl text-white text-2xl font-semibold hover:scale-105 hover:shadow-2xl`}
//              style={{
//                gridColumn: '1 / 3',
//                gridRow: '1 / 3',
//                backgroundColor: '#3498DB',
//                zIndex: 20,
//                width: '100%',
//                height: '100%',
//              }}
//            >
//             Box 6
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GridSection;

// 'use client'
// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import * as THREE from 'three';
// import WAVES from 'vanta/dist/vanta.waves.min';
// import { useRef } from 'react';


// const gridItems = [
//   {
//     id: 1,
//     label: 'Box 1',
//     colStart: 1,
//     colEnd: 3,
//     rowStart: 1,
//     rowEnd: 3,
//     bgColor: '#82E0AA',
//   },
//   {
//     id: 2,
//     label: 'Box 2',
//     colStart: 3,
//     colEnd: 4,
//     rowStart: 1,
//     rowEnd: 2,
//     bgColor: '#82E0AA',
//   },
//   {
//     id: 3,
//     label: 'Box 3',
//     colStart: 4,
//     colEnd: 5,
//     rowStart: 1,
//     rowEnd: 2,
//     bgColor: '#FFEAA7',
//   },
//   {
//     id: 4,
//     label: 'Box 4',
//     colStart: 4,
//     colEnd: 5,
//     rowStart: 2,
//     rowEnd: 3,
//     bgColor: '#DDA0DD',
//   },
//   {
//     id: 5,
//     label: 'Box 5',
//     colStart: 3,
//     colEnd: 4,
//     rowStart: 2,
//     rowEnd: 3,
//     bgColor: '#FF6B6B',
//   },
// ];

// const GridSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [showBox6, setShowBox6] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     document.body.style.cursor = 'none';
//     document.documentElement.style.cursor = 'none';
//     const style = document.createElement('style');
//     style.textContent = `* { cursor: none !important; }`;
//     document.head.appendChild(style);

//     window.addEventListener('mousemove', handleMouseMove);

//     const interval = setInterval(() => {
//       setShowBox6(true);
//       setTimeout(() => setShowBox6(false), 3000);
//     }, 6000);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       document.body.style.cursor = 'auto';
//       document.documentElement.style.cursor = 'auto';
//       if (style && style.parentNode) document.head.removeChild(style);
//       clearInterval(interval);
//     };
//   }, []);

//   const [vantaEffect, setVantaEffect] = useState(null);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(WAVES({
//         el: vantaRef.current,
//         THREE,
//         mouseControls: true,
//         touchControls: true,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         color: 0x58aef1,
//         shininess: 50,
//         waveHeight: 20,
//         waveSpeed: 0.5,
//         zoom: 0.85,
//       }));
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);


//   return (
//     <div>
//       <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />

// <div className="bitcount min-h-screen w-full flex flex-col justify-center items-center cursor-none relative overflow-hidden">
//   {/* Custom Cursor */}
//   <div
//     className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
//     style={{
//       left: mousePosition.x,
//       top: mousePosition.y,
//       transform: 'translate(-50%, -50%)',
//     }}
//   >
//     <div className="w-10 h-10 border-2 border-white rounded-full bg-transparent"></div>
//   </div>

//   {/* Background */}
//   <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 pointer-events-none"></div>

//   <h1 className="bitcount text-8xl text-center font-bold text-white mb-10">Our Services</h1>

//   <div className="w-full max-w-7xl px-10 relative">
//     <div
//       className="grid gap-1 w-full h-[700px] relative z-10"
//       style={{
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gridTemplateRows: 'repeat(3, 1fr)',
//       }}
//     >
//       {/* Grid Items */}
//       {gridItems.map((item) => (
//         <div
//         key={item.id}
//         className="bitcount ripple-box flex items-center justify-center rounded-xl text-white text-2xl font-semibold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl z-0 hover:z-10"
//         style={{
//           gridColumn: `${item.colStart} / ${item.colEnd}`,
//           gridRow: `${item.rowStart} / ${item.rowEnd}`,
//           backgroundColor: item.bgColor,
//         }}
//       >
//         <span className="ripple-overlay" />
//         {item.label}
//       </div>
//       ))}

//       {/* Box 6 Overlay */}
//       <AnimatePresence>
//         {showBox6 && (
//           <motion.div
//             initial={{ x: '-100%', opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: '-100%', opacity: 0 }}
//             transition={{ duration: 0.7, ease: 'easeInOut' }}
//             whileHover={{ scale: 1.05 }}
//             className="absolute flex items-center justify-center rounded-xl text-white text-2xl font-semibold box6-ripple hover:shadow-2xl z-20 hover:z-30"
//             style={{
//               top: 0,
//               left: 0,
//               width: '50%', // 2 out of 4 columns
//               height: '66.66%', // 2 out of 3 rows
//               backgroundColor: '#3498DB',
//             }}
//           >
//             <span className="ripple-overlay" />
//             Box 6
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   </div>

//   {/* Ripple + Grayscale Effect */}
//   <style jsx>{`
//     .ripple-box, .box6-ripple {
//       position: relative;
//       filter: grayscale(100%);
//       overflow: hidden;
//       transition: filter 0.3s ease-in-out, z-index 0.3s;
//     }

//     .ripple-box:hover, .box6-ripple:hover {
//       filter: none;
//     }

//     .ripple-overlay {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       width: 200%;
//       height: 200%;
//       background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 60%);
//       transform: translate(-50%, -50%) scale(0);
//       animation: ripple-effect 0.8s ease-out forwards;
//       opacity: 0;
//       pointer-events: none;
//       z-index: 1;
//     }

//     .ripple-box:hover .ripple-overlay,
//     .box6-ripple:hover .ripple-overlay {
//       animation: ripple-effect 0.8s ease-out forwards;
//       opacity: 1;
//     }

//     @keyframes ripple-effect {
//       0% {
//         transform: translate(-50%, -50%) scale(0);
//         opacity: 0.8;
//       }
//       100% {
//         transform: translate(-50%, -50%) scale(1);
//         opacity: 0;
//       }
//     }
//   `}</style>
// </div>
//     </div>
    
//   );
// };

// export default GridSection;


'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

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

const GridSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBox6, setShowBox6] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  // Handle Vanta.js Waves
  useEffect(() => {
    let effect;
    if (!vantaEffect) {
      import('vanta/dist/vanta.waves.min').then((WAVES) => {
        effect = WAVES.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x58aef1,
          shininess: 50,
          waveHeight: 20,
          waveSpeed: 0.5,
          zoom: 0.85,
        });
        setVantaEffect(effect);
      });
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [vantaEffect]);

  // Mouse + Box6 Animation Timer
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    const style = document.createElement('style');
    style.textContent = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setShowBox6(true);
      setTimeout(() => setShowBox6(false), 3000);
    }, 6000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
      if (style && style.parentNode) document.head.removeChild(style);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bitcount min-h-screen w-full flex flex-col justify-center items-center cursor-none relative overflow-hidden">

      {/* Vanta Waves Background */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />

      {/* Custom Cursor */}
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

      {/* Background */}
      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 pointer-events-none"></div>

      <h1 className="bitcount text-8xl text-center font-bold text-white mb-10">Our Services</h1>

      <div className="w-full max-w-7xl px-10 relative">
        <div
          className="grid gap-1 w-full h-[700px] relative z-10"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
          }}
        >
          {/* Grid Items */}
          {gridItems.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' }, // Matches Box 6
    }}
    transition={{
      duration: 0.6,
      ease: 'easeInOut',
      delay: index * 0.1,
    }}
    className="bitcount ripple-box flex items-center justify-center rounded-xl text-white text-2xl font-semibold z-0 hover:z-30 shadow-md"
    style={{
      gridColumn: `${item.colStart} / ${item.colEnd}`,
      gridRow: `${item.rowStart} / ${item.rowEnd}`,
      backgroundColor: item.bgColor,
    }}
  >
    <span className="ripple-overlay" />
    {item.label}
  </motion.div>
))}


          {/* Box 6 Overlay */}
          <AnimatePresence>
            {showBox6 && (
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                className="absolute flex items-center justify-center rounded-xl text-white text-2xl font-semibold box6-ripple hover:shadow-2xl z-20 hover:z-30"
                style={{
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '66.66%',
                  backgroundColor: '#3498DB',
                }}
              >
                <span className="ripple-overlay" />
                Box 6
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Ripple + Grayscale Effect */}
      <style jsx>{`
        .ripple-box, .box6-ripple {
          position: relative;
          filter: grayscale(100%);
          overflow: hidden;
          transition: filter 0.3s ease-in-out, z-index 0.3s;
        }

        .ripple-box:hover, .box6-ripple:hover {
          filter: none;
        }

        .ripple-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 60%);
          transform: translate(-50%, -50%) scale(0);
          animation: ripple-effect 0.8s ease-out forwards;
          opacity: 0;
          pointer-events: none;
          z-index: 1;
        }

        .ripple-box:hover .ripple-overlay,
        .box6-ripple:hover .ripple-overlay {
          animation: ripple-effect 0.8s ease-out forwards;
          opacity: 1;
        }

        @keyframes ripple-effect {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GridSection;

