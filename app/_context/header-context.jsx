"use client";

import React, { createContext, useState } from "react";

// Contextの作成
export const HeaderContext = createContext();

// Providerコンポーネント
export const HeaderContextProvider = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  return <HeaderContext.Provider value={{ isTransparent, setIsTransparent }}>{children}</HeaderContext.Provider>;
};
