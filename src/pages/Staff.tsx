import { UserCog, Users, Briefcase, Award } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";

const staff = [
  { id: "LEC001", name: "Dr. Chea Sovannarith", department: "Computer Science", role: "Professor", courses: 4 },
  { id: "LEC002", name: "Dr. Kem Piseth", department: "Business", role: "Associate Professor", courses: 3 },
  { id: "LEC003", name: "Ms. Heng Sreyleak", department: "Engineering", role: "Lecturer", courses: 5 },
  { id: "LEC004", name: "Dr. Noun Sophea", department: "Medicine", role: "Professor", courses: 2 },
  { id: "STF001", name: "Mr. Prak Visal", department: "Administration", role: "Staff", courses: 0 },
];

export default function Staff() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Lecturers & Staff</h1>
        <p className="page-subtitle">Manage lecturer and staff profiles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Lecturers" value="248" icon={UserCog} />
        <StatCard title="Administrative Staff" value="86" icon={Users} />
        <StatCard title="Full-time" value="198" icon={Briefcase} />
        <StatCard title="PhD Holders" value="124" icon={Award} />
      </div>

      <div className="bg-card rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Staff Directory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {staff.map((member, index) => (
            <div 
              key={member.id}
              className="flex items-center gap-4 p-4 border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-semibold text-primary">
                  {member.name.split(" ").slice(-1)[0][0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.department}</p>
              </div>
              <div className="text-right">
                <Badge variant="secondary">{member.role}</Badge>
                {member.courses > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">{member.courses} courses</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
