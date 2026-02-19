import type { PoolCommunityLayoutProps } from "./types";
import { Pool } from "./ui/Pool";
import { Progress } from "./ui/Progress";
import { SharePayment } from "./ui/SharePayment";

export function PoolCommunityLayout({ activeTeam }: PoolCommunityLayoutProps) {
  return (
    <>
      <Pool activeTeam={activeTeam} />
      <Progress activeTeam={activeTeam} />
      <SharePayment activeTeam={activeTeam} />
    </>
  );
}
