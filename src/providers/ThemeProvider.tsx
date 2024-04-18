"use client"

import { useTheme } from "@/context/ThemeContext";
import { ScriptProps } from "next/script";
import React, { ReactNode, useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children } : ScriptProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  } else {
    return <div className="light">{children}</div>;
  }
};

export default ThemeProvider;
