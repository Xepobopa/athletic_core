export default function PlanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-[100px]">
      {children}
    </div>
  )
}