import { FileText, Calendar, CheckSquare, AlertCircle } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";

const exams = [
  { id: "EXM001", course: "Data Structures", date: "Dec 18, 2025", time: "09:00 AM", room: "Hall A", status: "scheduled" },
  { id: "EXM002", course: "Financial Accounting", date: "Dec 18, 2025", time: "02:00 PM", room: "Hall B", status: "scheduled" },
  { id: "EXM003", course: "Physics II", date: "Dec 19, 2025", time: "09:00 AM", room: "Lab 3", status: "scheduled" },
  { id: "EXM004", course: "Constitutional Law", date: "Dec 20, 2025", time: "10:00 AM", room: "Room 101", status: "pending" },
];

export default function Examinations() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Examinations & Grading</h1>
        <p className="page-subtitle">Exam scheduling and grade management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Upcoming Exams" value="24" icon={Calendar} />
        <StatCard title="This Week" value="8" icon={FileText} />
        <StatCard title="Graded" value="156" icon={CheckSquare} />
        <StatCard title="Pending Grades" value="12" icon={AlertCircle} />
      </div>

      <div className="bg-card rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Exam Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Exam ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Course</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Room</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr 
                  key={exam.id} 
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="py-3 px-4 font-mono text-sm text-primary">{exam.id}</td>
                  <td className="py-3 px-4 font-medium">{exam.course}</td>
                  <td className="py-3 px-4 text-muted-foreground">{exam.date}</td>
                  <td className="py-3 px-4 text-muted-foreground">{exam.time}</td>
                  <td className="py-3 px-4 text-muted-foreground">{exam.room}</td>
                  <td className="py-3 px-4">
                    <Badge className={exam.status === "scheduled" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}>
                      {exam.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
