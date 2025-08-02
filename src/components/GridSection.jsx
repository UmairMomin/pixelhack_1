'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// ✅ Image imports from /assetss (ensure folder name is correct)
import box1Img from '@/assetss/img1.jpg';
import box2Img from '@/assetss/img2.jpg';
import box3Img from '@/assetss/img3.jpg';
import box4Img from '@/assetss/img4.jpg';
import box5Img from '@/assetss/img5.jpg';
import box6Img from '@/assetss/img6.jpg';

const gridItems = [
  {
    id: 1,
    label: '',
    colStart: 1,
    colEnd: 3,
    rowStart: 1,
    rowEnd: 3,
    image: box1Img,
  },
  {
    id: 2,
    label: '',
    colStart: 3,
    colEnd: 4,
    rowStart: 1,
    rowEnd: 2,
    image: box2Img,
  },
  {
    id: 3,
    label: '',
    colStart: 4,
    colEnd: 5,
    rowStart: 1,
    rowEnd: 2,
    image: box3Img,
  },
  {
    id: 4,
    label: '',
    colStart: 4,
    colEnd: 5,
    rowStart: 2,
    rowEnd: 3,
    image: box4Img,
  },
  {
    id: 5,
    label: '',
    colStart: 3,
    colEnd: 4,
    rowStart: 2,
    rowEnd: 3,
    image: box5Img,
  },
];

const GridSection = () => {
  const [showBox6, setShowBox6] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBox6(true);
      setTimeout(() => setShowBox6(false), 3000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bitcount min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />

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
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
              className="bitcount ripple-box relative flex items-center justify-center rounded-xl text-white text-2xl font-semibold z-0 hover:z-30 shadow-md"
              style={{
                gridColumn: `${item.colStart} / ${item.colEnd}`,
                gridRow: `${item.rowStart} / ${item.rowEnd}`,
                backgroundImage: `url(${item.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 z-10 rounded-xl" />
              <span className="ripple-overlay z-20" />
              <span className="z-20">{item.label}</span>
            </motion.div>
          ))}

          {/* Box 6 */}
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
                  backgroundImage: `url(${box6Img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/40 z-10 rounded-xl" />
                <span className="ripple-overlay z-20" />
                <span className="z-20"></span>
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