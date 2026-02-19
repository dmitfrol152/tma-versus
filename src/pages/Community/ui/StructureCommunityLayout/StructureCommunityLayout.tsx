import { Accordeon } from "@/features/Accordeon/Accordeon";
import type { StructureCommunityLayoutProps } from "./types";

export function StructureCommunityLayout({
  activeTeam,
}: StructureCommunityLayoutProps) {
  return <Accordeon activeTeam={activeTeam} />;
}
