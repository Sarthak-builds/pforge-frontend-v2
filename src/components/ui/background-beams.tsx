"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 h-full w-full bg-white overflow-hidden pointer-events-none",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-zinc-400 opacity-20 blur-[100px]"></div>
      <div className="absolute inset-0 bg-white [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
    </div>
  );
};
