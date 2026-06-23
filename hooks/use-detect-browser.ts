"use client";

import { useState } from "react";

export default function useDetectBrowser() {
  const [browser] = useState<string>(() => {
    if (typeof window === "undefined") return "Unknown";
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Firefox") > -1) {
      return "Firefox";
    } else if (userAgent.indexOf("SamsungBrowser") > -1) {
      return "SamsungBrowser";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      return "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      return "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
      return "Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    } else {
      return "Unknown";
    }
  });

  return browser;
}
