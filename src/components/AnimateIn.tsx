"use client";
import { useInView } from "@/hooks/useInView";

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
  return (
    <div
      ref={ref}
      className={className}
      style={
        inView
          ? { animation: `fadeUp 0.7s ease ${delay}ms both` }
          : { opacity: 0 }
      }
    >
      {children}
    </div>
  );
}
