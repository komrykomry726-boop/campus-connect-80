import { UserPlus, BookOpen, DollarSign, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "enrollment",
    title: "New student enrolled",
    description: "Sok Dara enrolled in Computer Science",
    time: "2 minutes ago",
    icon: UserPlus,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    id: 2,
    type: "course",
    title: "Course registration opened",
    description: "Spring 2024 course registration is now open",
    time: "15 minutes ago",
    icon: BookOpen,
    iconBg: "bg-info/10",
    iconColor: "text-info",
  },
  {
    id: 3,
    type: "payment",
    title: "Tuition payment received",
    description: "Payment of $2,500 from Chan Vanna",
    time: "1 hour ago",
    icon: DollarSign,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    id: 4,
    type: "exam",
    title: "Exam results published",
    description: "Midterm results for Mathematics 101",
    time: "3 hours ago",
    icon: FileCheck,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export function RecentActivity() {
  return (
    <div className="bg-card rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className="flex items-start gap-4 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
              activity.iconBg
            )}>
              <activity.icon className={cn("w-5 h-5", activity.iconColor)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{activity.description}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
