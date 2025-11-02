type CostItem = {
  label: string;
  value: string;
};

type CostTableProps = {
  title?: string;
  items: CostItem[];
  totalLabel?: string;
  totalValue?: string;
};

export default function CostTable({
  title,
  items,
  totalLabel = "Spolu (odhad):",
  totalValue,
}: CostTableProps) {
  if (!items || items.length === 0) return null;

  // First item is used as header
  const [header, ...rows] = items;

  return (
    <div className="w-1/2 mx-auto mt-12 bg-white rounded-2xl shadow-xl p-10 font-[Jost] text-3xl">
      {title && (
        <h2 className="text-5xl font-bold mb-8 text-gray-900 text-center">
          {title}
        </h2>
      )}

      <table className="w-full border-separate border-spacing-y-2">
        <tbody className="text-gray-800">
          {/* Header row */}
          <tr className="border-b border-gray-200">
            <td className="py-3 font-semibold">{header.label}</td>
            <td className="py-3 text-right font-semibold">{header.value}</td>
          </tr>

          {/* Data rows */}
          {rows.map((item, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3">{item.label}</td>
              <td className="py-3 text-right font-semibold text-gray-900">
                {item.value}
              </td>
            </tr>
          ))}

          {/* Total row */}
          {totalValue && (
            <tr>
              <td className="pt-6 font-bold text-gray-900">{totalLabel}</td>
              <td className="pt-6 text-right font-bold text-gray-900">
                {totalValue}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}