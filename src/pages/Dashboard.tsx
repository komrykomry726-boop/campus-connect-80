import { Users, GraduationCap, BookOpen, DollarSign, TrendingUp, UserCheck } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's what's happening at your university.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value="4,532"
          subtitle="Active enrollments"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Active Courses"
          value="156"
          subtitle="This semester"
          icon={BookOpen}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title="Lecturers"
          value="248"
          subtitle="Full-time & Part-time"
          icon={UserCheck}
        />
        <StatCard
          title="Revenue"
          value="$2.4M"
          subtitle="This academic year"
          icon={DollarSign}
          trend={{ value: 15.3, isPositive: true }}
          variant="accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Enrollment Trends</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-success" />
                <span>+24% this year</span>
              </div>
            </div>
            <div className="h-64 flex items-center justify-center border border-dashed border-border rounded-lg">
              <div className="text-center">
                <BarChartPlaceholder />
                <p className="text-sm text-muted-foreground mt-4">Enrollment statistics chart</p>
              </div>
            </div>
          </div>
        </div>
        <UpcomingEvents />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <div className="bg-card rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Add Student", icon: Users, color: "bg-primary/10 text-primary hover:bg-primary/20" },
              { label: "New Course", icon: BookOpen, color: "bg-info/10 text-info hover:bg-info/20" },
              { label: "Record Payment", icon: DollarSign, color: "bg-accent/10 text-accent hover:bg-accent/20" },
              { label: "Schedule Exam", icon: GraduationCap, color: "bg-success/10 text-success hover:bg-success/20" },
            ].map((action, index) => (
              <button
                key={action.label}
                className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-200 animate-scale-in ${action.color}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <action.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChartPlaceholder() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-muted-foreground/30">
      <rect x="0" y="40" width="20" height="40" rx="4" fill="currentColor" />
      <rect x="25" y="20" width="20" height="60" rx="4" fill="currentColor" />
      <rect x="50" y="30" width="20" height="50" rx="4" fill="currentColor" />
      <rect x="75" y="10" width="20" height="70" rx="4" fill="currentColor" />
      <rect x="100" y="25" width="20" height="55" rx="4" fill="currentColor" />
    </svg>
  );
}
