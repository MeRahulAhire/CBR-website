import "../../style/home.css"
import cbr_video_demo from "../../assets/video/cbr-demo-video.webm"
export default function home() {
  return <>
  
  <div className="lp-s1">
    <div className="s1-subsec-1">
      <div className="subsec-1-container">
        <div className="subsec-1-head">Cloud Blender Render</div>
        <div className="subsec-1-head2">Smarter, affordable and open-source rendering</div>
        <div className="subsec-1-p">
          <p>RTX 5090 from $0.69/hour</p>
          <p>RTX 4090 from $0.34/hour</p>
        </div>
        <div className="subsec-1-btn-deploy">
          Deploy Now
        </div>
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
      <div className="subsec-2-info-label">4. Use our diagnostic dashboard to ensure you always get the best performance.</div>
      <div className="subsec-2-info-video">
        <p>4. Use our diagnostic dashboard to ensure you always get the best performance.</p>
        <video src={cbr_video_demo}></video>
      </div>
    </div>
  </div>
  
  <div className="lp-s3">
    <div className="subsec-3-head">Cloud Blender Render</div>

  </div>
  </>;
}
