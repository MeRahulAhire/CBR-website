// @ts-nocheck
import "../../style/home.css";
import cbr_video_demo from "../../assets/video/cbr-demo-video.webm";
import cbr_runpod from "../../assets/images/cbr+runpod.svg";
import padlock from "../../assets/images/padlock.svg";
import cbr_vs_others from "../../assets/images/cbr-vs-other.png";
import price_chart from "../../assets/images/price-comparision.png";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function home() {
  const lenisRef = useRef(null);
  useEffect(() => {
    const chart_box = document.getElementById("subsec-4-info-chart");

    function resizePreviewBox() {
      const width = chart_box.offsetWidth;
      const height = width * 0.65;
      chart_box.style.height = `${height}px`;
    }

    // Initial sizing
    resizePreviewBox();

    // Resize handler
    window.addEventListener("resize", resizePreviewBox);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
  return (
    <>
      <div className="lp-s1">
        <div className="s1-subsec-1">
          <div className="subsec-1-container">
            <div className="subsec-1-head">Cloud Blender Render</div>
            <div className="subsec-1-head2">
              Smarter, affordable and open-source rendering
            </div>
            <div className="subsec-1-p">
              <p>RTX 5090 from $0.69/hour</p>
              <p>RTX 4090 from $0.34/hour</p>
            </div>
            <div className="subsec-1-btn-deploy">Deploy Now</div>
            <div className="subsec-1-free-credit">
              Signup with our link and get additional $5-500 credits for free
            </div>
          </div>
        </div>
        <div className="s1-subsec-2"></div>
      </div>

      <div className="lp-s2">
        <div className="subsec-2-head">Here's how it works</div>
        <div className="subsec-2-info">
          <div className="subsec-2-info-label">
            4. Use our diagnostic dashboard to ensure you always get the best
            performance.
          </div>
          <div className="subsec-2-info-video">
            <p>
              4. Use our diagnostic dashboard to ensure you always get the best
              performance.
            </p>
            <video src={cbr_video_demo} id="cbr_video_demo"></video>
          </div>
        </div>
      </div>

      <div className="lp-s3">
        <div className="subsec-3-head">
          <div>Cloud Blender Render</div>
          <p>
            is a free and open-source software written in Rust and JavaScript.
            You only pay for the GPU you rent on platforms like Runpod.
          </p>
        </div>
        <div className="subsec-3-info">
          <img src={cbr_runpod} alt="Runpod Cloud Blender illustration" />
        </div>
      </div>

      <div className="lp-s4">
        <div className="s4-bg-opacity">
          <div className="subsec-4-head">
            Unlock the uncompromised performance
          </div>
          <div className="subsec-4-info">
            <div className="subsec-4-info-label">
              Whether you’re an indie artist or a professional studio, Cloud
              Blender Render can handle anything you throw at it.
            </div>
            <div className="subsec-4-info-chart" id="subsec-4-info-chart"></div>
          </div>
        </div>
      </div>

      <div className="lp-s5">
        <div className="s5-bg-opacity">
          <div className="subsec-5-head">
            {" "}
            <div>
              Your data is always secure <img src={padlock} alt="" srcset="" />
            </div>{" "}
          </div>
          <div className="subsec-5-info">
            <div className="subsec-5-info-label-1">
              Runpod is fully security-compliant, with many enterprise customers
              already running their workloads on the platform. You can even
              request the compliance report from Runpod support team.
            </div>
            <div className="subsec-5-info-label-2">
              <ul>
                <li>ISO 27001</li>
                <li>ISO 20000-1</li>
                <li>ISO 22301</li>
                <li>ISO 14001</li>
                <li>HIPAA</li>
                <li>NIST</li>
                <li>PCI</li>
                <li>SOC 1 Type 2</li>
                <li>SOC 2 Type 2</li>
                <li>SOC 3</li>
                <li>HITRUST</li>
                <li>GDPR compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="lp-s6">
        <div className="s6-bg-opacity">
          <div className="subsec-6-head">No oversharing</div>
          <div className="subsec-6-info">
            <div className="subsec-6-info-label">
              Most render farms, in pursuit of maximizing profits, overshare
              machines with rendering jobs from other users, leading to slower
              and unpredictable performance. Cloud Blender Render gives you full
              control over your machine. When you deploy an instance, no one
              else but you are in charge of it.
            </div>
            <div className="subsec-6-info-chart">
              <img src={cbr_vs_others} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lp-s7">
        <div className="subsec-7-head">
          Unbeatable prices anywhere online 🌐
        </div>
        <div className="subsec-7-info">
          <div className="subsec-7-info-label">
            <p>
              No inflated pricing. No shady crypto payments. No complicated
              pay-per-frame model. Just pay only for what you use. Nothing comes
              close to the price and experience of Cloud Blender Render.
            </p>
            <p>
              Cloud Blender Render is one of the few online renderers that gives
              you access to the RTX 5090.
            </p>
          </div>
          <div className="subsec-7-info-chart">
            <img src={price_chart} alt="" />
          </div>
        </div>
      </div>
      <div className="lp-s8">
        <div className="subsec-8-head">So what are you waiting for?</div>
        <div className="subsec-8-deploy-btn">Deploy Now</div>
        <div className="subsec-8-email">
          We’re also offering a free demo for you to try out. Just send us an
          email at <a href="mailto:info@rahulahire.com">info@rahulahire.com</a>{" "}
          and we’ll get back to you in 2 hours.
        </div>
        <div className="subsec-8-footer">
          <a
            href="http://github.com/merahulahire/cloud-blender-render"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-github">⭐ Star us on GitHub</div>
          </a>
          <div className="made-by">
            Project made by Rahul Ahire in Pune, India
          </div>
        </div>
      </div>
    </>
  );
}
