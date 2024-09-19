// app/check-drug/processing/page.js
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { useImage } from "@/context/ImageContext";

export default function ProcessingPage() {
  const { capturedImage } = useImage();
  const router = useRouter();

  useEffect(() => {
    // Simulate processing time
    const timer = setTimeout(() => {
      router.push("/check-drug/details");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!capturedImage) {
    router.push("/check-drug");
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mb-8">
            <img
              src={capturedImage}
              alt="Captured drug package"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
            <p className="text-xl font-semibold">Processing...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
