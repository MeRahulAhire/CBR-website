// @ts-nocheck
import "../../style/home.css";
import cbr_video_demo from "../../assets/video/cbr-demo-video.webm";
import cbr_runpod from "../../assets/images/cbr+runpod.svg"
import { useEffect } from "react";
export default function home() {
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

  },[])
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
              Signup with our link and get additional $5-500 for free
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
            <video src={cbr_video_demo}></video>
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
        <div className="subsec-4-head">
          Unlock the uncompromised performance
        </div>
        <div className="subsec-4-info">
          <div className="subsec-4-info-label">
            Whether you’re an indie artist or a professional studio, Cloud Blender Render can handle anything you throw at it.
          </div>
          <div className="subsec-4-info-chart" id="subsec-4-info-chart">

          </div>
        </div>
      </div>
    </>
  );
}
