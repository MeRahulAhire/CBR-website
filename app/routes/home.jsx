// @ts-nocheck
import "../../style/home.css";
// import cbr_video_demo from "../../assets/video/cbr-demo-video.mp4";
import cbr_runpod from "../../assets/images/cbr+runpod.svg";
import padlock from "../../assets/images/padlock.svg";
import cbr_vs_others from "../../assets/images/cbr-vs-other.png";
import price_chart from "../../assets/images/price-comparision.png";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { section2, chart_section } from "../component/animation_logic";
import store from "../component/store";
import Single_gpu_benchmark from "../component/single_gpu_benchmark";
import Multi_gpu_benchmark from "../component/multi_gpu_benchmark";
import Chart_info from "../component/chart_info";
import Home_seo from "../component/home_seo";
import Home_ld from "../component/home_ld";

export default function home() {
  const lenisRef = useRef(null);

  const { cbr_video_info, single_gpu_benchmark } = store();
  // const single_gpu_benchmark = store((state) => state.single_gpu_benchmark)
  useEffect(() => {
    
    section2();
    chart_section();

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
    <Home_seo/>
    <Home_ld/>
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
            <a href="/deploy" className="deploy-page-button"><div className="subsec-1-btn-deploy">Deploy Now</div></a>
            
            <div className="subsec-1-free-credit">
              Signup with our link and get additional $5-500 credits for free.
            </div>
            <div className="subsec-1-free-credit free-demo">
              For free demo with RTX 5090, email us at info@rahulahire.com.
            </div>
          </div>
        </div>
        <div className="s1-subsec-2"></div>
      </div>

      <div className="lp-s2">
        <div className="subsec-2-head">Here's how it works</div>
        <div className="subsec-2-info">
          <div className="subsec-2-info-label">
            {cbr_video_info}
          </div>
          <div className="subsec-2-info-video">
            <p>
              {cbr_video_info}
            </p>
            <video
              src="https://cbr.rahulahire.com/cbr-demo-video.mp4"
              id="cbr_video_demo"
              muted
              playsInline
              preload="auto"
            ></video>
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
          <img src={cbr_runpod} alt="Runpod and Cloud Blender Render Partnership" />
        </div>
      </div>

      <div className="lp-s4">
        <div className="s4-bg-opacity">
          <div className="subsec-4-head">
            Unlock the uncompromised performance
          </div>
          <div className="subsec-4-info">
            <div className="subsec-4-info-label">
              <Chart_info/>
            </div>
            {!!single_gpu_benchmark ? <Single_gpu_benchmark/> : <Multi_gpu_benchmark/>}
          </div>
        </div>
      </div>

      <div className="lp-s5">
        <div className="s5-bg-opacity">
          <div className="subsec-5-head">
            {" "}
            <div>
              Your data is always secure <img src={padlock} alt="padlock depicting security" />
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
              <img src={cbr_vs_others} alt="Cloud Blender Render vs other render farms" />
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
            <img src={price_chart} alt="Prices of Cloud Blender Render compared to other render farms" />
          </div>
        </div>
      </div>
      <div className="lp-s8">
        <div className="subsec-8-head">So what are you waiting for?</div>
        <a href="/deploy" className="deploy-page-button"><div className="subsec-8-deploy-btn">Deploy Now</div></a>
        
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
