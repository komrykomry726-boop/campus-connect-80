import { BarChart3, PieChart, TrendingUp, Download } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";

const reports = [
  { name: "Academic Performance Report", type: "PDF", date: "Dec 2025", size: "2.4 MB" },
  { name: "Enrollment Statistics", type: "Excel", date: "Dec 2025", size: "1.8 MB" },
  { name: "Financial Summary", type: "PDF", date: "Q4 2025", size: "3.1 MB" },
  { name: "Faculty Performance", type: "PDF", date: "Dec 2025", size: "1.2 MB" },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Reports & Analytics</h1>
        <p className="page-subtitle">Academic performance and institutional analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Avg. GPA" value="3.42" icon={TrendingUp} trend={{ value: 2.1, isPositive: true }} />
        <StatCard title="Pass Rate" value="94%" icon={BarChart3} />
        <StatCard title="Graduation Rate" value="89%" icon={PieChart} />
        <StatCard title="Reports Generated" value="24" icon={Download} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
          <div className="h-64 flex items-center justify-center border border-dashed border-border rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-muted-foreground/30 mx-auto" />
              <p className="text-sm text-muted-foreground mt-4">Performance analytics chart</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Available Reports</h2>
          <div className="space-y-3">
            {reports.map((report, index) => (
              <div 
                key={report.name}
                className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <p className="font-medium text-foreground">{report.name}</p>
                  <p className="text-xs text-muted-foreground">{report.type} • {report.date} • {report.size}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
