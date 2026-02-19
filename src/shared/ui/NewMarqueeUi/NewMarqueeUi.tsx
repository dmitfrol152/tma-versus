import Marquee from "react-fast-marquee";
import type { NewMarqueeUiProps } from "./types";

export function NewMarqueeUi({ children }: NewMarqueeUiProps) {
  return <Marquee>{children}</Marquee>;
}
