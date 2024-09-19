// app/check-drug/camera/page.js
"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Camera } from "lucide-react";
import Header from "@/components/Header";
import { useImage } from "@/context/ImageContext";

export default function CameraPage() {
  const router = useRouter();
  const videoRef = useRef(null);
  const { setCapturedImage } = useImage();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing camera:", err));

    return () => {
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageDataUrl = canvas.toDataURL("image/jpeg");
    setCapturedImage(imageDataUrl);
    router.push("/check-drug/preview");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <video
            ref={videoRef}
            autoPlay
            className="rounded-lg shadow-md mb-8"
          />
          <button
            onClick={captureImage}
            className="p-4 bg-blue-900 text-white rounded-full hover:bg-blue-800"
          >
            <Camera size={32} />
          </button>
        </div>
      </main>
    </div>
  );
}
