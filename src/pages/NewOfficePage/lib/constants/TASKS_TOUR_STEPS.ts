import type { Step } from "react-joyride";

export const TASKS_TOUR_STEPS: Step[] = [
  {
    target: '[data-tour="officePageTasks"]',
    content:
      "It shows the season number, the total pool, and the time until the end of the season.",
    disableBeacon: true,
    locale: { next: "Next step" },
    floaterProps: {
      hideArrow: true,
    },
  },
  {
    target: '[data-tour="officePageCollect"]',
    content:
      "It shows the season number, the total pool, and the time until the end of the season.",
    disableBeacon: true,
    locale: { last: "Finish" },
    floaterProps: {
      hideArrow: true,
    },
  },
];
