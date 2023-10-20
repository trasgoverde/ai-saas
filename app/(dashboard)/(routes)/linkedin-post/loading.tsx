import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl">Linkedin Posts</p>
      <div className="mt-4">
        <RefreshCw
          size={100} // Adjust the size as needed
          strokeWidth={2} // Adjust the stroke width as needed
          color="#007AFF" // Change the color to your preferred color
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin"
        />
      </div>
    </div>
  );
}
