// @ts-nocheck
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Section 2 scroll animation
export const section2 = () => {
  const video = document.getElementById("cbr_video_demo");
  
  video.pause(); // Prevent the video from playing on its own

  ScrollTrigger.create({
  trigger: ".lp-s2",
  start: "top top",
  end: "+=900%",
  pin: true,
  scrub: 1, // Small smoothing value
  onUpdate: (self) => {
    const time = self.progress * video.duration;
    if (Math.abs(video.currentTime - time) > 0.01) { // Only update if difference is significant
      video.currentTime = time;

    }
  },
});
};
