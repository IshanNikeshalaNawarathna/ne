import React from "react";

export function NoteSkeleton() {
  return (
    <div className="bg-card/50 border border-border/50 p-5 rounded-2xl h-64 flex flex-col animate-pulse">
      <div className="h-6 bg-muted rounded-md w-3/4 mb-4"></div>
      <div className="space-y-2 flex-1">
        <div className="h-4 bg-muted rounded-md w-full"></div>
        <div className="h-4 bg-muted rounded-md w-full"></div>
        <div className="h-4 bg-muted rounded-md w-5/6"></div>
        <div className="h-4 bg-muted rounded-md w-4/6"></div>
      </div>
      <div className="mt-4 flex items-center justify-between pt-4 border-t border-border/30">
        <div className="h-3 bg-muted rounded-md w-16"></div>
        <div className="flex gap-2">
          <div className="h-5 bg-muted rounded-md w-12"></div>
          <div className="h-5 bg-muted rounded-md w-12"></div>
        </div>
      </div>
    </div>
  );
}
