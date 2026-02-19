import type { Step } from "react-joyride";

export const OFFICE_TOUR_STEPS: Step[] = [
  {
    target: '[data-tour="officePageBasic"]',
    content:
      "It shows the season number, the total pool, and the time until the end of the season.",
    disableBeacon: true,
    locale: { next: "Next step" },
    floaterProps: {
      hideArrow: true,
    },
  },
  {
    target: '[data-tour="officePageSafe"]',
    content:
      "It shows the season number, the total pool, and the time until the end of the season.",
    disableBeacon: true,
    locale: { next: "Next step" },
    floaterProps: {
      hideArrow: true,
    },
  },
  {
    target: '[data-tour="officePageTraders"]',
    content:
      "It shows the season number, the total pool, and the time until the end of the season.",
    disableBeacon: true,
    locale: { last: "Finish" },
    floaterProps: {
      hideArrow: true,
    },
  },
];
