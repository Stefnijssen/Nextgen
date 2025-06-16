interface LogoProps {
  className?: string
  variant?: "default" | "white"
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-gray-900"
  const accentColor = variant === "white" ? "bg-white" : "bg-green-600"

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className={`w-8 h-8 ${accentColor} rounded-lg flex items-center justify-center`}>
          <div
            className={`w-4 h-4 ${variant === "white" ? "bg-green-600" : "bg-white"} rounded-sm transform rotate-45`}
          />
        </div>
        <div className={`absolute -top-1 -right-1 w-3 h-3 ${accentColor} rounded-full opacity-80`} />
      </div>
      <span className={`text-2xl font-bold ${textColor}`}>Nextgen</span>
    </div>
  )
}
