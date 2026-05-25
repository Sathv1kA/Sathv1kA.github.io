export default function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ animation: `fadeUp 0.7s ease ${delay}ms both` }}
    >
      {children}
    </div>
  );
}
