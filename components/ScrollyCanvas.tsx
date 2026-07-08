"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Map scroll progress 0 -> 1 to frame indices 0 -> 89
  const { scrollYProgress } = useScroll();
  const frameCount = 60;
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i <= frameCount; i++) {
      const img = new Image();
      // Format number to be padded, e.g. 00, 01 ... 89
      const frameNum = i.toString().padStart(2, '0');
      // The path requested by user: /sequence/frame_XX_delay-0.066s.png
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        // Re-render initially when first image is loaded so the canvas isn't blank
        if (i === 0) {
           drawFrame(img);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw frame helper function
  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Implementation of object-fit: cover for canvas
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw current frame
        const frame = Math.round(currentFrameIndex.get());
        if (images[frame]) {
          drawFrame(images[frame]);
        }
      }
    };
    
    // Initial setup
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, currentFrameIndex]);

  // Update canvas on scroll
  useEffect(() => {
    return currentFrameIndex.onChange((latest) => {
      const frameIndex = Math.round(latest);
      if (images[frameIndex]) {
        drawFrame(images[frameIndex]);
      }
    });
  }, [currentFrameIndex, images]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Fallback dark overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
}
