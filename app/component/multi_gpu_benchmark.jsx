// @ts-nocheck
import { useEffect } from "react";
import * as echarts from "echarts";

export default function Multi_gpu_benchmark() {
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

    const gpu_counts = ["1", "2", "4", "8"];
    const lynx_sofa = [33, 18, 10, 8];
    const barbershop = [22, 11, 5, 4];
    const laundromat = [15, 8, 4, 3];

    chart.setOption({
      title: {
        text: "Multi GPU Rendering with RTX 5090",
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
            name: "4.1 Lynx Sofa",
            icon: "rect",
            itemStyle: { color: "#00ffff" },
          },
          {
            name: "Barbershop",
            icon: "rect",
            itemStyle: { color: "#00ff00" },
          },
          {
            name: "Laundromat",
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
      grid: { top: 60, bottom: 60, left: 50, right: 40, containLabel: true },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: gpu_counts,
        name: "Number of GPUs",
        nameLocation: "middle",
        nameGap: 30,
        nameTextStyle: { color: "#888" },
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
          name: "4.1 Lynx Sofa",
          type: "line",
          smooth: true,
          showSymbol: true,
          data: lynx_sofa,
          lineStyle: { color: "#00ffff", width: 2 },
          itemStyle: { color: "#00ffff" },
        },
        {
          name: "Barbershop",
          type: "line",
          smooth: true,
          showSymbol: true,
          data: barbershop,
          lineStyle: { color: "#00ff00", width: 2 },
          itemStyle: { color: "#00ff00" },
        },
        {
          name: "Laundromat",
          type: "line",
          smooth: true,
          showSymbol: true,
          data: laundromat,
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