import type { Step } from "react-joyride";

export const TEAM_TOUR_STEPS: Step[] = [
  {
    target: '[data-tour="teamPageStatistics"]',
    content:
      "It shows the season number, the total pool, and the time until the end of the season.",
    disableBeacon: true,
    placement: "bottom",
    locale: { last: "Finish" },
    floaterProps: {
      hideArrow: true,
    },
  },
];
