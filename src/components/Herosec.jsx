"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function SeizeText({ word = "GANDHAR BAGDE" }) {
  const layers = Array.from({ length: word.length }, (_, i) =>
    word.slice(0, i + 1)
  );

  const layerRefs = useRef([]);
  const [visibilities, setVisibilities] = useState(
    new Array(layers.length).fill(1)
  );
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically control the `top` offset for sticky layers
  const dynamicTop = Math.min(scrollY * 0.4); // cap at 200px

  useEffect(() => {
    const handleScroll = () => {
      const newVis = [];

      for (let i = 0; i < layers.length; i++) {
        if (i === layers.length - 1) {
          newVis[i] = 1;
          continue;
        }

        const curr = layerRefs.current[i];
        const next = layerRefs.current[i + 1];

        if (!curr || !next) {
          newVis[i] = 1;
          continue;
        }

        const currRect = curr.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();

        const halfway = currRect.top + currRect.height / 2;

        newVis[i] = nextRect.top < halfway ? 0 : 1;
      }

      setVisibilities(newVis);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [layers.length]);

  return (
    <>
    
       <Box
      sx={{
        color: "#fff",
        padding:"5rem 5rem",
      }}
    >
      {layers.map((layer, i) => (
        <Box
          key={i}
          ref={(el) => (layerRefs.current[i] = el)}
          sx={{
            position: "sticky",
            top: `${dynamicTop}px`,
            zIndex: layers.length - i,
            transition: "opacity 0.3s ease-out, top 0.2s ease-out",
            opacity: visibilities[i],
            lineHeight: 0.85,
            pointerEvents: "none",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: "bold",
              lineHeight: 0.85,
              letterSpacing: "0.02em",
              margin: 0,
              padding: 0,
            }}
          >
            {layer}
          </Typography>
        </Box>
      ))}
    </Box>
    </>
   
  );
}
