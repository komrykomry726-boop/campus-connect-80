import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "accent";
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  subtitle,
  icon: Icon, 
  trend,
  variant = "default",
  className 
}: StatCardProps) {
  return (
    <div 
      className={cn(
        "stat-card animate-fade-in",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "accent" && "bg-accent text-accent-foreground",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className={cn(
            "text-sm font-medium",
            variant === "default" ? "text-muted-foreground" : "opacity-80"
          )}>
            {title}
          </span>
          <span className="text-3xl font-bold tracking-tight">{value}</span>
          {subtitle && (
            <span className={cn(
              "text-xs mt-1",
              variant === "default" ? "text-muted-foreground" : "opacity-70"
            )}>
              {subtitle}
            </span>
          )}
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <span className={cn(
                "text-xs font-medium px-1.5 py-0.5 rounded",
                trend.isPositive 
                  ? "bg-success/10 text-success" 
                  : "bg-destructive/10 text-destructive"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
              <span className={cn(
                "text-xs",
                variant === "default" ? "text-muted-foreground" : "opacity-60"
              )}>
                vs last month
              </span>
            </div>
          )}
        </div>
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          variant === "default" && "bg-primary/10",
          variant === "primary" && "bg-primary-foreground/20",
          variant === "accent" && "bg-accent-foreground/20"
        )}>
          <Icon className={cn(
            "w-6 h-6",
            variant === "default" && "text-primary"
          )} />
        </div>
      </div>
    </div>
  );
}
