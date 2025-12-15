import { ClipboardList, UserPlus, Clock, CheckCircle } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";

const enrollments = [
  { id: "ENR001", student: "Sok Dara", course: "Advanced Algorithms", status: "approved", date: "Dec 14, 2025" },
  { id: "ENR002", student: "Chan Vanna", course: "Marketing 101", status: "pending", date: "Dec 15, 2025" },
  { id: "ENR003", student: "Kim Sokha", course: "Thermodynamics", status: "approved", date: "Dec 13, 2025" },
  { id: "ENR004", student: "Phan Sreymom", course: "Anatomy I", status: "pending", date: "Dec 15, 2025" },
];

export default function Enrollment() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Enrollment & Registration</h1>
        <p className="page-subtitle">Course registration and enrollment management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Enrollments" value="1,245" icon={ClipboardList} trend={{ value: 8.5, isPositive: true }} />
        <StatCard title="New This Week" value="87" icon={UserPlus} />
        <StatCard title="Pending Review" value="23" icon={Clock} />
        <StatCard title="Approved" value="1,135" icon={CheckCircle} />
      </div>

      <div className="bg-card rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Enrollment Requests</h2>
        <div className="space-y-3">
          {enrollments.map((enrollment, index) => (
            <div 
              key={enrollment.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {enrollment.student.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{enrollment.student}</p>
                  <p className="text-sm text-muted-foreground">{enrollment.course}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{enrollment.date}</span>
                <Badge variant={enrollment.status === "approved" ? "default" : "secondary"} className={enrollment.status === "approved" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}>
                  {enrollment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
