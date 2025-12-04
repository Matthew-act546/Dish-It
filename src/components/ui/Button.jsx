export default function Button({
  children,
  className = "",
  variant = "accent",
  size = "md",
  as: Component = "button",
  ...props
}) {
  const base = "inline-flex shadow-2xl items-center rounded-lg border focus:ring-4 focus:outline-none ";

  const variants = {
    primary: "bg-primary text-primary border border-primary hover:bg-primary/10",
    accent: "bg-accent border-accent hover:bg-accent-dark text-white focus:ring-accent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm font-medium",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Component
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

