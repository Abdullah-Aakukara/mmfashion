import React from "react";
import { Fabric } from "@/lib/types";
import { FabricCard } from "./FabricCard";

interface FabricGridProps {
  fabrics: Fabric[];
}

export function FabricGrid({ fabrics }: FabricGridProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {fabrics.map((fabric) => (
        <FabricCard key={fabric.id} fabric={fabric} />
      ))}
    </div>
  );
}

