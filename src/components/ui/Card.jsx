export default function Card({
  children,
  shadow = "md",
  rounded = "xl",
  padding = "p-4",
  ...props
}) {
  const shadowStyles = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const roundedStyles = {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
  };

  return (
    <div
      className={`bg-white ${shadowStyles[shadow]} ${roundedStyles[rounded]} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
