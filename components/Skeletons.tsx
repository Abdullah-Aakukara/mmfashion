import React from "react";

export function FabricCardSkeleton() {
  return (
    <div className="bg-surface rounded-card border border-thread p-3 shadow-subtle flex flex-col gap-2.5 animate-pulse">
      <div className="w-full aspect-square rounded-xl bg-linen relative overflow-hidden" />
      <div className="h-4 w-20 bg-linen rounded-full" />
      <div className="h-5 w-4/5 bg-linen rounded" />
      <div className="h-3 w-3/5 bg-linen rounded" />
      <div className="h-6 w-28 bg-zari-mist/60 rounded-full mt-1" />
      <div className="h-cta w-full bg-linen rounded-btn mt-2" />
    </div>
  );
}

export function FabricGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <FabricCardSkeleton key={i} />
      ))}
    </div>
  );
}

