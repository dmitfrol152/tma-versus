import type {
  ChartDataset,
  LineElement,
  LineOptions,
  Plugin,
  PointElement,
  PointOptions,
} from "chart.js";
import type {
  NewChartPluginsHookGlowProps,
  NewChartPluginsHookTeamProps,
} from "./types";

export function useNewChartPlugins() {
  const purpleShadowLayers: NewChartPluginsHookTeamProps[] = [
    { blur: 2.54, color: "rgba(255, 0, 254, 0.2)", offsetY: 2.54 * 0.55 },
    { blur: 6.43, color: "rgba(255, 0, 254, 0.28)", offsetY: 6.43 * 0.55 },
    { blur: 13.11, color: "rgba(255, 0, 254, 0.35)", offsetY: 13.11 * 0.55 },
    { blur: 27.01, color: "rgba(255, 0, 254, 0.43)", offsetY: 27.01 * 0.55 },
    { blur: 74, color: "rgba(255, 0, 254, 0.63)", offsetY: 74 * 0.55 },
  ];

  const greenShadowLayers: NewChartPluginsHookTeamProps[] = [
    { blur: 7, color: "rgba(67, 248, 114, 0.26)", offsetY: 13 },
    { blur: 10, color: "rgba(67, 248, 114, 0.05)", offsetY: 20 },
    { blur: 21, color: "rgba(67, 248, 114, 0.46)", offsetY: 35 },
    { blur: 30, color: "rgba(67, 248, 114, 0.1)", offsetY: 60 },
    { blur: 50, color: "rgba(67, 248, 114, 0.6)", offsetY: 80 },
    { blur: 100, color: "rgba(67, 248, 114, 0.7)", offsetY: 100 },
  ];

  const alwaysShowTooltip: Plugin<"line"> = {
    id: "alwaysShowTooltip",
    afterDraw: (chart) => {
      const { tooltip } = chart;
      if (!tooltip) return;

      const last = chart.data.labels?.length;
      if (!last) return;
      const lastIndex = last - 1;

      chart.tooltip?.setActiveElements(
        [
          { datasetIndex: 0, index: lastIndex },
          { datasetIndex: 1, index: lastIndex },
        ],
        { x: 0, y: 0 },
      );
    },
  };

  const outerGlow: Plugin<"line"> = {
    id: "outerGlow",
    afterDatasetsDraw: (chart) => {
      const { ctx } = chart;

      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const { outerGlowColor = "transparent", outerGlowWidth = 0 } =
          dataset as ChartDataset<"line"> & NewChartPluginsHookGlowProps;

        if (!outerGlowWidth || outerGlowColor === "transparent") {
          return;
        }

        const meta = chart.getDatasetMeta(datasetIndex);
        if (!meta || meta.hidden || !meta.dataset) return;

        const line = meta.dataset as LineElement;
        const lineOptions = line.options as LineOptions;
        const baseStroke = (lineOptions.borderColor ||
          outerGlowColor) as string;
        const baseWidth = (lineOptions.borderWidth ?? 3) + 2;

        // Определяем, какая линия: 1 или 2
        const borderColor = String(lineOptions.borderColor);
        const isGreen = borderColor.includes("67, 248, 114");
        const shadowLayers = isGreen ? greenShadowLayers : purpleShadowLayers;

        // Многослойное свечение вокруг линии
        shadowLayers.forEach((layer) => {
          ctx.save();
          ctx.shadowColor = layer.color;
          ctx.shadowBlur = layer.blur;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = layer.offsetY ?? 0;

          ctx.lineWidth = baseWidth;
          ctx.lineJoin = "round";
          ctx.lineCap = "round";
          ctx.strokeStyle = baseStroke;
          ctx.beginPath();
          line.path(ctx);
          ctx.stroke();
          ctx.restore();
        });

        // Многослойное свечение вокруг точек
        meta.data.forEach((pointElement) => {
          const point = pointElement as PointElement;
          const pointOptions = point.options as PointOptions;

          shadowLayers.forEach(() => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointOptions.radius ?? 0, 0, Math.PI * 2);
            ctx.fillStyle = pointOptions.backgroundColor as string;
            ctx.fill();
            if ((pointOptions.borderWidth ?? 0) > 0) {
              ctx.lineWidth = pointOptions.borderWidth ?? 0;
              ctx.strokeStyle = pointOptions.borderColor as string;
              ctx.stroke();
            }

            ctx.restore();
          });
        });
      });
    },
  };

  return { plugins: [alwaysShowTooltip, outerGlow] };
}
