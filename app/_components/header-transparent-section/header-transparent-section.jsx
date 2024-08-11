"use client";
import { useEffect, useContext, useRef } from "react";
import { HeaderContext } from "@/app/_context/header-context";

export default function HeaderTransparentSection({ children }) {
  const { isTransparent, setIsTransparent } = useContext(HeaderContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTransparent(entry.isIntersecting);
      },
      {
        root: null, // ビューポートを基準にする
        threshold: 0, // ファーストビューが少しでも見えているかどうかで判定
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setIsTransparent]);

  return <div ref={sectionRef}>{children}</div>;
}
