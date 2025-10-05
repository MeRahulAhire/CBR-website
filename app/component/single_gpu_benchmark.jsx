// @ts-nocheck
import { useEffect } from "react";
import * as echarts from "echarts";

export default function Single_gpu_benchmark() {
  useEffect(() => {
    const chart_box = document.getElementById("subsec-4-info-chart");
    if (!chart_box) return;

    // Initialize chart first
    const existing = echarts.getInstanceByDom(chart_box);
    if (existing) existing.dispose();
    const chart = echarts.init(chart_box);

    function resizePreviewBox() {
      const width = chart_box.offsetWidth;
      const height = width * 0.65;
      chart_box.style.height = `${height}px`;
      if (chart) chart.resize();
    }

    // Initial sizing
    resizePreviewBox();

    const benchmarks = ["4.1 Lynx Sofa", "Barbershop", "Laundromat"];
    const gpu_3090 = [95, 50, 32];
    const gpu_4090 = [47, 35, 21];
    const gpu_5090 = [33, 22, 15];

    chart.setOption({
      title: {
        text: "GPU Benchmark Comparison",
        left: "center",
        top: 10,
        textStyle: { color: "#e0e0e0", fontSize: 16 },
      },
      backgroundColor: "#212121",
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(50,50,50,0.25)",
        textStyle: { color: "#fff" },
        formatter: (params) => {
          return params
            .map((item) => {
              return (
                `<span style="display:inline-block;margin-right:5px;border-radius:1px;width:16px;height:2px;background-color:${item.color};"></span>` +
                `${item.seriesName}: ${item.value}s`
              );
            })
            .join("<br/>");
        },
      },
      legend: {
        data: [
          {
            name: "3090",
            icon: "rect",
            itemStyle: { color: "#00ffff" },
          },
          {
            name: "4090",
            icon: "rect",
            itemStyle: { color: "#00ff00" },
          },
          {
            name: "5090",
            icon: "rect",
            itemStyle: { color: "#ffff00" },
          },
        ],
        icon: "rect",
        itemWidth: 24,
        itemHeight: 3,
        bottom: 0,
        textStyle: { color: "#bbb", fontSize: 12 },
        selectedMode: false,
      },
      grid: { top: 60, bottom: 30, left: 50, right: 40, containLabel: true },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: benchmarks,
        axisLine: { lineStyle: { color: "#888" } },
        axisLabel: { 
          color: "#bbb",
          padding: [0, 10, 0, 0]
        },
      },
      yAxis: {
        type: "value",
        name: "Time (seconds)",
        nameGap: 40,
        nameLocation: "middle",
        nameTextStyle: { color: "#888" },
        axisLine: { lineStyle: { color: "#888" } },
        splitLine: { lineStyle: { color: "#333" } },
      },
      animation: true,
      animationEasing: "cubicOut",
      series: [
        {
          name: "3090",
          type: "line",
          smooth: true,
          showSymbol: true,
          data: gpu_3090,
          lineStyle: { color: "#00ffff", width: 2 },
          itemStyle: { color: "#00ffff" },
        },
        {
          name: "4090",
          type: "line",
          smooth: true,
          showSymbol: true,
          data: gpu_4090,
          lineStyle: { color: "#00ff00", width: 2 },
          itemStyle: { color: "#00ff00" },
        },
        {
          name: "5090",
          type: "line",
          smooth: true,
          showSymbol: true,
          data: gpu_5090,
          lineStyle: { color: "#ffff00", width: 2 },
          itemStyle: { color: "#ffff00" },
        },
      ],
    });

    // Resize handler
    window.addEventListener("resize", resizePreviewBox);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", resizePreviewBox);
    };
  }, []);

  return (
    <div className="subsec-4-info-chart" id="subsec-4-info-chart"></div>
  );
}