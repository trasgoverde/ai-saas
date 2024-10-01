"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Changed "next/navigation" to "next/router"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { pools } from "@/constants";
import UploadButton from '@/components/UploadButton'; // Updated the import statement

export default function PdfPage() {
  const router = useRouter();
    
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Project Dashboard
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Let's Get Started, !!
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Enjoy the Experience - Just Upload your Assets, Logos, and Info regarding your Project/s
        </p>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Collaborate on shared projects, track progress, and manage budgeting from one dashboard. - All in one
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        <div className="flex flex-wrap -mx-4">
          {/* Your content here */}
        </div>
      </div>
      <div className='mx-auto max-w-7xl md:p-10'>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-5xl text-gray-900'>
          Pdf Files
        </h1>

        <UploadButton />
        </div>


        
      </div>
    </div>
  );
}
