// 'use client'
// import { useState, useEffect } from 'react';

// const Loader = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [showLoader, setShowLoader] = useState(true);

//   useEffect(() => {
//     // Progress animation from 0 to 100 over 3 seconds
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 40); // 100 steps over 3000ms = 30ms per step

//     // Hide loader after 3 seconds
//     const hideTimer = setTimeout(() => {
//       setShowLoader(false);
//       setTimeout(onComplete, 500); // Wait for fade out animation
//     }, 4000);

//     return () => {
//       clearInterval(progressInterval);
//       clearTimeout(hideTimer);
//     };
//   }, [onComplete]);

//   if (!showLoader) {
//     return (
//       <div className="fixed inset-0 bg-loader-bg z-50 animate-fade-out" />
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-loader-bg text-loader-text z-50 flex flex-col items-center justify-center font-light">
//       {/* Progress line - appears first with delay */}
//       <div 
//         className="text-4xl md:text-6xl mb-8 animate-slide-up italic tracking-wider"
//         style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
//       >
//         {progress} - 100
//       </div>

//       {/* Main heading - appears second */}
//       <div 
//         className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-4 animate-slide-up tracking-wide"
//         style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
//       >
//         YOUR
//       </div>
//       <div 
//         className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-8 animate-slide-up tracking-wide"
//         style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
//       >
//         WEB EXPERIENCE
//       </div>

//       {/* Loading line - appears third */}
//       <div 
//         className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-12 animate-slide-up tracking-wide"
//         style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
//       >
//         IS LOADING RIGHT{' '}
//         <span className="italic animate-blink">NOW</span>
//       </div>

//       {/* Bottom text - appears last */}
//       <div 
//         className="text-sm text-loader-text/80 animate-slide-up"
//         style={{ animationDelay: '1.6s', animationFillMode: 'both' }}
//       >
//         Please wait
//       </div>
//       <div 
//         className="text-sm text-loader-text/80 animate-slide-up"
//         style={{ animationDelay: '1.8s', animationFillMode: 'both' }}
//       >
//         a few seconds
//       </div>
//     </div>
//   );
// };

// export default Loader;
'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // ~4s total

    const hideTimer = setTimeout(() => {
      setShowLoader(false);
      setTimeout(onComplete, 500); // wait for fade-out
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 bg-loader-bg text-loader-text z-50 flex flex-col items-center justify-center font-light"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress Line */}
          <motion.div
            className="text-4xl md:text-6xl mb-8 italic tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {progress} - 100
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            YOUR
          </motion.div>
          <motion.div
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-8 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            WEB EXPERIENCE
          </motion.div>

          {/* Loading line */}
          <motion.div
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-12 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            IS LOADING RIGHT{' '}
            <motion.span
              className="italic"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              NOW
            </motion.span>
          </motion.div>

          {/* Bottom text */}
          <motion.div
            className="text-sm text-loader-text/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            Please wait
          </motion.div>
          <motion.div
            className="text-sm text-loader-text/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            a few seconds
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
