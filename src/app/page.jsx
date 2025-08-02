'use client';

import './globals.css';
import { useState } from 'react';
import GridSection from "@/components/GridSection";
import Herosec from "@/components/Herosec";
import NavbarPage from '@/components/navbar';
import Loader from '@/components/Loader';
import CompanyMarquee from "@/components/marquee"
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isLoading && (
          <Loader onComplete={() => setIsLoading(true)} />
        )}
      </AnimatePresence>

      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 pointer-events-none"></div>
      <>
      <NavbarPage />
      </>
      <AnimatePresence>
        {isLoading && (
          <motion.main
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >

            <Herosec />
          </motion.main>
        )}
      </AnimatePresence>
      <>
      <GridSection />
      <CompanyMarquee />
      </> 
    </>
  );
}
