// app/check-drug/preview/page.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { useImage } from "@/context/ImageContext";

export default function PreviewPage() {
  const router = useRouter();
  const { capturedImage } = useImage();

  const handleBack = () => {
    router.push("/check-drug");
  };

  const handleUpload = () => {
    router.push("/check-drug/processing");
  };

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
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={handleUpload}
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
            >
              Upload
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
