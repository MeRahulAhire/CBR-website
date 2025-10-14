// @ts-nocheck
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import store from "./store";

gsap.registerPlugin(ScrollTrigger);

// Section 2 scroll animation
export const section2 = () => {
  const video = document.getElementById("cbr_video_demo");

  video.pause();

  ScrollTrigger.create({
    trigger: ".lp-s2",
    start: "top top",
    end: "+=900%",
    pin: true,
    scrub: 1, // Small smoothing value
    onUpdate: (self) => {
      const time = self.progress * video.duration;
      const scroll_percent = self.progress * 100;
      if (Math.abs(video.currentTime - time) > 0.01) {
        video.currentTime = time;
      }

      // Get current state value directly using getState()
      const currentInfo = store.getState().cbr_video_info;
      const { set_cbr_video_info } = store.getState();

      if (scroll_percent > 0 && scroll_percent < 1/6 * 100 && currentInfo !== "1. Upload your .blend file") {
        set_cbr_video_info("1. Upload your .blend file");
      }
      if (scroll_percent > (1/6 * 100) && scroll_percent < (2/6 * 100) && currentInfo !== "2. Select your render settings") {
        set_cbr_video_info("2. Select your render settings");
      }
      if (scroll_percent > (2/6 * 100) && scroll_percent < (4/6 * 100) && currentInfo !== "3. Watch your frames come alive") {
        set_cbr_video_info("3. Watch your frames come alive");
      }
      if (scroll_percent > (4/6 * 100) && scroll_percent < (5/6 * 100) && currentInfo !== "4. Save your frames directly in your folder") {
        set_cbr_video_info("4. Save your frames directly in your folder");
      }
      if (scroll_percent > (5/6 * 100) && scroll_percent <= (6/6 * 100) && currentInfo !== "5. Use our diagnostic dashboard to ensure you always get the best performance ") {
        set_cbr_video_info("5. Use our diagnostic dashboard to ensure you always get the best performance ");
      }


    },
    onRefresh: (self) => {
      // Add custom class to pin spacer
      const pinSpacer = self.pin.parentElement;
      if (pinSpacer.classList.contains("pin-spacer")) {
        pinSpacer.style.backgroundColor = "#0f210f";
      }
    },
  });
};

export const chart_section = () => {

  const { single_gpu_benchmark, set_single_gpu_benchmark } = store.getState();
  // const set_single_gpu_benchmark = store.getState().set_single_gpu_benchmark;
  ScrollTrigger.create({
    trigger: ".lp-s4",
    start: "top top",
    end: "+=50%",
    pin: true,
    scrub: 1, // Small smoothing value
    onUpdate: (self) => {
    const scroll_percent = self.progress * 100;

    if (scroll_percent >= 0 && scroll_percent < 50) {
      set_single_gpu_benchmark(true)
    }
    if (scroll_percent > 50 && scroll_percent <= 100) {
      set_single_gpu_benchmark(false)
    }


    },
    onRefresh: (self) => {
      // Add custom class to pin spacer
      const pinSpacer = self.pin.parentElement;
      if (pinSpacer.classList.contains("pin-spacer")) {
        pinSpacer.style.backgroundColor = "rgba(15, 15, 15, 0.95)";
      }
    },
  });
}