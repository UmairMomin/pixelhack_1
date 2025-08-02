'use client';

import { 
  Apple, Chrome, Github, Slack, Music, 
  Twitter, Youtube, Zap, Coffee, 
  Camera, Gamepad2, Headphones 
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const companies = [
  { name: "Apple", icon: Apple },
  { name: "Google", icon: Chrome },
  { name: "GitHub", icon: Github },
  { name: "Slack", icon: Slack },
  { name: "Spotify", icon: Music },
  { name: "Twitter", icon: Twitter },
  { name: "YouTube", icon: Youtube },
  { name: "Tesla", icon: Zap },
  { name: "Starbucks", icon: Coffee },
  { name: "Canon", icon: Camera },
  { name: "Nintendo", icon: Gamepad2 },
  { name: "Sony", icon: Headphones },
];

export const CompanyMarquee = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: 'linear',
      },
    });
  }, [controls]);

  return (
    <>
      <p className="text-5xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
        Discover the companies we've partnered with and the innovative solutions we've created together
      </p>
      <br />
      <br />

      <div className="w-full py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our Companies
          </h2>

          <div 
            className="relative overflow-hidden bg-secondary/20 rounded-2xl border border-border backdrop-blur-sm"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => controls.start({
              x: ['0%', '-50%'],
              transition: {
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
              },
            })}
          >
            <motion.div
              className="flex space-x-8 py-8 w-max"
              animate={controls}
            >
              {[...companies, ...companies].map((company, index) => {
                const Icon = company.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 flex-shrink-0 min-w-[200px]"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
          </div>

          <p className="text-2xl mt-2 text-muted-foreground text-center">
            Join our growing network of successful partnerships
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyMarquee;
