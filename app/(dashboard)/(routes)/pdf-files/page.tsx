"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { pools } from "@/constants";

export default function ProjectPage() {
  const router = useRouter();
    
  return (
      <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Project Dashboard
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Let&apos;s Get Started, !!
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
         Enjoy the Experience - Just Upload your Assets, Logos and Info regarding your Project/s
        </p>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Collaborate on shared projects, track progress, and manage budgeting from one dashboard. - All in one
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
  <div className="flex flex-wrap -mx-4">
  </div>
</div>

    </div>
  );
}