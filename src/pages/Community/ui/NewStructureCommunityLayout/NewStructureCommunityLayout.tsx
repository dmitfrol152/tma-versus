import { NewAccordeon } from "@/features/NewAccordeon/NewAccordeon";
import type { NewStructureCommunityLayoutProps } from "./types";

export function NewStructureCommunityLayout({
  activeTeam,
  dataCommunityPage,
}: NewStructureCommunityLayoutProps) {
  return (
    <NewAccordeon
      activeTeam={activeTeam}
      dataCommunityPage={dataCommunityPage}
    />
  );
}
