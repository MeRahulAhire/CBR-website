// @ts-nocheck
import { create } from "zustand";
import { produce } from "immer";

const store = create((set) => ({
  cbr_video_info: `1. Upload your .blend file`,
  single_gpu_benchmark: true,
  set_cbr_video_info: (value) => {
    set(
      produce((state) => {
        state.cbr_video_info = value;
      })
    );
  },
  set_single_gpu_benchmark: (value) => {
    set(
      produce((state) => {
        state.single_gpu_benchmark = value;
      })
    );
  },
}));

export default store;
