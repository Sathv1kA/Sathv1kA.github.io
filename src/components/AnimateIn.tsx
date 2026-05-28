"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  const reduced = useReducedMotion();
  return (
    <div
      ref={ref}
      className={className}
      style={
        reduced
          ? {}
          : inView
          ? { animation: `fadeUp 0.5s ease ${delay}ms both` }
          : { opacity: 0 }
      }
    >
      {children}
    </div>
  );
}
