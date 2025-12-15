import { Building2, Users, BookOpen, GraduationCap } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";

const faculties = [
  { name: "Computer Science", departments: 4, students: 1250, courses: 45 },
  { name: "Business Administration", departments: 5, students: 980, courses: 38 },
  { name: "Engineering", departments: 6, students: 850, courses: 52 },
  { name: "Medicine", departments: 8, students: 620, courses: 64 },
  { name: "Law", departments: 3, students: 450, courses: 28 },
  { name: "Arts & Humanities", departments: 4, students: 382, courses: 32 },
];

export default function Academics() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Academic Management</h1>
        <p className="page-subtitle">Manage faculties, departments, and academic programs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Faculties" value="6" icon={Building2} />
        <StatCard title="Departments" value="30" icon={Users} />
        <StatCard title="Programs" value="48" icon={GraduationCap} />
        <StatCard title="Active Courses" value="259" icon={BookOpen} />
      </div>

      <div className="bg-card rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Faculties Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faculties.map((faculty, index) => (
            <div 
              key={faculty.name}
              className="p-4 border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-200 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{faculty.name}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-muted/50 rounded-lg">
                  <p className="text-lg font-bold text-foreground">{faculty.departments}</p>
                  <p className="text-xs text-muted-foreground">Depts</p>
                </div>
                <div className="p-2 bg-muted/50 rounded-lg">
                  <p className="text-lg font-bold text-foreground">{faculty.students}</p>
                  <p className="text-xs text-muted-foreground">Students</p>
                </div>
                <div className="p-2 bg-muted/50 rounded-lg">
                  <p className="text-lg font-bold text-foreground">{faculty.courses}</p>
                  <p className="text-xs text-muted-foreground">Courses</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
