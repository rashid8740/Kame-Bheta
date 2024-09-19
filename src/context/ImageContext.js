// context/ImageContext.js
"use client";

import React, { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [capturedImage, setCapturedImage] = useState(null);

  return (
    <ImageContext.Provider value={{ capturedImage, setCapturedImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  return useContext(ImageContext);
}
