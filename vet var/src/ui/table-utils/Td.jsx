export function Td({ children, align = "center" }) {
  const alignCls =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";
  return <td className={`px-3 py-2 ${alignCls}`}>{children}</td>;
}