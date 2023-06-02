export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline rounded-md bg-primary-100 
                px-2 py-1 font-mono text-sm font-medium 
                uppercase tracking-normal text-primary-700"
    >
      {children}
    </div>
  )
}
