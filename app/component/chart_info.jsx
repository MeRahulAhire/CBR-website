// @ts-nocheck
import React from "react";
import store from "./store";
export default function Chart_info() {
  const { single_gpu_benchmark } = store();
  return (
    <>{!!single_gpu_benchmark ? <Single_gpu_info /> : <Multi_gpu_info />}</>
  );
}

const Single_gpu_info = () => {
  return (
    <>
      Whether you’re an indie artist or a professional studio, Cloud Blender
      Render can handle anything you throw at it.
    </>
  );
};

const Multi_gpu_info = () => {
  return (
    <>
      For heavy users, you can instantly deploy up to 8 GPUs without emailing
      the support team.
      <p>
        Get 8 RTX 5090 starting from $5.52/hour. The lowest price anywhere
        online.
      </p>
    </>
  );
};
