import type { ChartOptions } from "chart.js";
import { useMemo } from "react";

export function useNewChartOptions() {
  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
          external: function (context) {
            const { chart, tooltip } = context;
            let tooltipEl = document.getElementById("chartjs-tooltip-custom");

            if (!tooltipEl) {
              tooltipEl = document.createElement("div");
              tooltipEl.id = "chartjs-tooltip-custom";
              document.body.appendChild(tooltipEl);
            }

            if (tooltip.body) {
              const dataPoints = tooltip.dataPoints;
              const chartRect = chart.canvas.getBoundingClientRect();

              const x = tooltip.caretX;
              if (!dataPoints || dataPoints.length < 2) return;

              const yBulls = dataPoints[0].element.y;
              const yBears = dataPoints[1].element.y;

              const isCloseToRight = chartRect.width - x < 16;
              const transformX = isCloseToRight ? "-100%" : "-50%";
              const leftOffset = isCloseToRight ? -10 : 0;

              tooltipEl.innerHTML = `
                <div style="position: absolute; left: ${
                  x + leftOffset
                }px; top: ${
                  yBulls - 10
                }px; transform: translate(${transformX}, -100%); display: flex; gap: 4px; align-items: center; background: #1f1f1f; padding: 4px 8px; border: 1px solid rgba(255,255,255,0.08);">
                  <span style="background-color: #43F872; width: 8px; height: 8px; border-radius: 50%">

                  </span>
                  <span style="color: #43F872; font-family: RobotoMono; font-size: 14px;">
                    ${
                      typeof dataPoints[0].raw === "number"
                        ? dataPoints[0].raw.toLocaleString("en-EN")
                        : typeof dataPoints[0].raw === "string"
                          ? dataPoints[0].raw
                          : "Нет данных"
                    }
                  </span>
                </div>
                <div style="position: absolute; left: ${
                  x + leftOffset
                }px; top: ${
                  yBears + 10
                }px; transform: translate(${transformX}, 0); display: flex; gap: 4px; align-items: center; background: #1f1f1f; padding: 4px 8px; border: 1px solid rgba(255,255,255,0.08);">
                  <span style="background-color: #FF00FE; width: 8px; height: 8px; border-radius: 50%">

                  </span>
                  <span style="color: #FF00FE; font-family: RobotoMono; font-size: 14px;">
                    ${
                      typeof dataPoints[1].raw === "number"
                        ? dataPoints[1].raw.toLocaleString("en-EN")
                        : typeof dataPoints[1].raw === "string"
                          ? dataPoints[1].raw
                          : "Нет данных"
                    }
                  </span>
                </div>
              `;
            }

            const position = chart.canvas.getBoundingClientRect();
            tooltipEl.style.opacity = "1";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.left = position.left + window.pageXOffset + "px";
            tooltipEl.style.top = position.top + window.pageYOffset + "px";
            tooltipEl.style.pointerEvents = "none";
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#6B6B6B",
            font: {
              family: "RobotoMono",
              size: 14,
              weight: "normal",
              lineHeight: 16 / 14,
            },
          },
          afterFit: (scale) => {
            scale.paddingLeft = 0;
          },
          grid: {
            display: true,
            color: (item) => {
              const labels = item.chart.data.labels;
              if (labels && labels.length > 0) {
                const lastIndex = labels.length - 1;

                if (item.index === lastIndex) {
                  return "rgba(255, 255, 255, 0.24)";
                }
              }

              return "rgba(107, 107, 107, 0.12)";
            },
            lineWidth: 2,
          },
        },
        y: {
          display: false,
        },
      },
    }),
    [],
  );

  return { options };
}
