// @ts-nocheck

import "../../style/deploy.css";
import one from "../../assets/images/deploy/1.webp";
import two from "../../assets/images/deploy/2.webp";
import three from "../../assets/images/deploy/3.webp";
import four from "../../assets/images/deploy/4.webp";
import five from "../../assets/images/deploy/5.webp";
import six from "../../assets/images/deploy/6.webp";
import seven from "../../assets/images/deploy/7.webp";
import eight from "../../assets/images/deploy/8.webp";
import nine from "../../assets/images/deploy/9.webp";
import ten from "../../assets/images/deploy/10.webp";
import eleven from "../../assets/images/deploy/11.webp";
import twelve from "../../assets/images/deploy/12.webp";
import thirteen from "../../assets/images/deploy/13.webp";
import fourteen from "../../assets/images/deploy/14.webp";
import fifteen from "../../assets/images/deploy/15.webp";
import sixteen from "../../assets/images/deploy/16.webp";
import seventeen from "../../assets/images/deploy/17.webp";
import eighteen from "../../assets/images/deploy/18.webp";
import gift from "../../assets/images/deploy/gift.svg";
import { useEffect } from "react";
import ComparisonTable from "../component/table";

export default function deploy() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      let yt_embed = document.getElementById("yt-embed");
      yt_embed.style.height = yt_embed.offsetWidth * 0.5625 + "px";
    });

    // Also run on load
    window.addEventListener("load", () => {
      let yt_embed = document.getElementById("yt-embed");
      yt_embed.style.height = yt_embed.offsetWidth * 0.5625 + "px";
    });
  }, []);
  return (
    <>
      <div className="deploy-container">
        <div className="deploy-head">How to Deploy Cloud Blender Render</div>
      </div>
      <div className="deploy-instruct-container">
        <div className="instruct-box">
          <div className="deploy-button-box">
            <a
              href="https://console.runpod.io/deploy?template=ada1xq99pb&ref=g168bg1u"
              target="_blank"
            >
              <div className="deploy-button">
                Sign up here and get free credits{" "}
                <img src={gift} alt="gift icon" />
              </div>
            </a>
          </div>
          <div className="referral-details">
            <ul>
              <li>
                If you sign up using the button above, you’ll receive an
                additional $5 to $500 in free credits for the first time.
              </li>
              <li>
                This means if you sign up through our link and add $10, you’ll
                see at least $15 worth of credits.
              </li>
              <li>
                The additional free credit amount is randomized — meaning if you
                load $20 or $50, you may receive even more extra credits
                proportionally.
              </li>
              <li>
                This offer of extra free credits is only available for new
                users.
              </li>
              <li>
                If you’re already a RunPod user and want to avail this offer,
                try signing up with another Gmail ID.
              </li>
            </ul>
            </div>
            <div className="deploy-subsection-head">
              Deployment Instructions
            </div>
            <div className="deploy-info">
              You can also follow along with this video.
            </div>
            <div className="yt-embed">
              <iframe
                id="yt-embed"
                src="https://www.youtube.com/embed/feiuoMz57Ho?si=MCmpFq7L7JqPmvd6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="deploy-info">
              When you sign up through our link, you’ll be directed to this
              page. Click Sign up & Claim reward, and proceed to sign up using
              your Google ID.
            </div>
            <img src={one} alt="Signup on Runpod" className="deploy-img" />
            <div className="deploy-info">
              After signing up, you’ll see your dashboard with your balance
              displayed at the top-left corner. For a new account, this will
              initially be zero.
            </div>
            <img src={two} alt="Balance info" className="deploy-img" />
            <div className="deploy-info">
              Click on the <span className="bold">Billing</span> section and
              choose your desired amount, starting from $10. You can pay using
              either a credit card or a crypto wallet.
            </div>
            <img src={three} alt="Load balance" className="deploy-img" />
            <div className="deploy-info">
              Once your payment is complete, your balance will update along with
              the extra free credits.
            </div>
            <img src={four} alt="Updated balance" className="deploy-img" />
            <div className="deploy-info">
              Next, click on <span className="bold">Pods</span>, and you’ll see
              two options: <span className="bold">Secure Cloud</span> and{" "}
              <span className="bold">Community Cloud</span>.
            </div>
            <img src={five} alt="Selecting pods in Secure Cloud and Community Cloud" className="deploy-img" />
            <div className="deploy-info">
              The differences between them are as follows:
            </div>
            <div className="diff-table">
            <ComparisonTable />
            </div>
          
          <div className="deploy-subsection-head">
            Which GPU Should You Choose
          </div>
          <div className="gpu-option">
            <ul>
              <li>
                For rendering, always go for <span className="bold">RTX-based NVIDIA GPUs</span>, as they perform best for this purpose.
              </li>
              <li>
                Recommended options include <span className="bold">RTX 5090, RTX 4090, RTX 3090</span> and others.
              </li>
              <li>
                If you’re unsure which RTX GPU to choose, visit <a href="https://opendata.blender.org/" target="_blank" rel="noopener noreferrer" className="link-info">Blender Benchmark</a> to compare GPU scores.
              </li>
            </ul>
            </div>
            <div className="deploy-subsection-head">
            Deploying the Instance
          </div>
          <div className="deploy-info">Let’s say we select <span className="bold">RTX 5090</span> in the <span className="bold">Community Cloud</span>.</div>
          <img src={six} alt="Choosing RTX 5090" className="deploy-img" />
          <div className="deploy-info">Click on <span className="bold">Change the Template</span>, as highlighted below.</div>
          <img src={seven} alt="Changing Template" className="deploy-img" />
          <div className="deploy-info">A dialog box will appear. Type <span className="italic">"blender"</span> and select the <span className="bold">Cloud Blender Render</span> template.</div>
          <img src={eight} alt="Selecting Cloud Blender Render as Template" className="deploy-img" />
          <div className="deploy-info">If you need more storage, click on <span className="bold">Edit</span>.</div>
          <img src={nine} alt="Editing storage" className="deploy-img" />
          <div className="deploy-info">The default storage is <span className="bold">50 GB</span>, but you can adjust it as needed and then click <span className="bold">Set Overrides</span>.</div>
          <img src={ten} alt="Changing option for storage size" className="deploy-img" />
          <div className="deploy-info">If you’re satisfied with the default settings, always choose <span className="bold">On-Demand</span>, which is selected by default.
Avoid <span className="bold">Spot Instances</span>, as they are interruptible. Then click <span className="bold">Deploy On-Demand</span>.</div>
          <img src={eleven} alt="Deployment settings" className="deploy-img" />
          <div className="deploy-info"> Wait for 1–2 minutes, and you should be good to go. Click <span className="bold">Connect to Cloud Blender Render</span>. If the instance takes too long to start, stop and terminate it, then create a new one.</div>
          <img src={twelve} alt="Spinning up instance" className="deploy-img" />
          <div className="deploy-info">Now you’re all set! Upload your <span className="bold">.blend</span> file, choose your settings, and hit <span className="bold">Render</span>.
For more details, please refer to the video above.</div>
          <img src={thirteen} alt="View of the Cloud Blender Render instance" className="deploy-img" />
          

        </div>
      </div>
    </>
  );
}
