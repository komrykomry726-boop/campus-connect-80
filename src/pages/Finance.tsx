import { DollarSign, TrendingUp, CreditCard, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";

const transactions = [
  { id: "TXN001", student: "Sok Dara", amount: 2500, type: "Tuition", status: "paid", date: "Dec 14, 2025" },
  { id: "TXN002", student: "Chan Vanna", amount: 2500, type: "Tuition", status: "pending", date: "Dec 15, 2025" },
  { id: "TXN003", student: "Kim Sokha", amount: 150, type: "Lab Fee", status: "paid", date: "Dec 13, 2025" },
  { id: "TXN004", student: "Phan Sreymom", amount: 3200, type: "Tuition", status: "overdue", date: "Dec 01, 2025" },
];

export default function Finance() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Finance & Fees</h1>
        <p className="page-subtitle">Tuition fees and financial management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Revenue" 
          value="$2.4M" 
          icon={DollarSign} 
          trend={{ value: 15.3, isPositive: true }}
          variant="accent"
        />
        <StatCard title="This Month" value="$324K" icon={TrendingUp} />
        <StatCard title="Pending Payments" value="$89K" icon={CreditCard} />
        <StatCard title="Overdue" value="$12K" icon={AlertTriangle} />
      </div>

      <div className="bg-card rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-3">
          {transactions.map((tx, index) => (
            <div 
              key={tx.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  tx.status === "paid" ? "bg-success/10" : tx.status === "pending" ? "bg-warning/10" : "bg-destructive/10"
                }`}>
                  <DollarSign className={`w-5 h-5 ${
                    tx.status === "paid" ? "text-success" : tx.status === "pending" ? "text-warning" : "text-destructive"
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{tx.student}</p>
                  <p className="text-sm text-muted-foreground">{tx.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-semibold text-foreground">${tx.amount.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground w-24">{tx.date}</span>
                <Badge className={
                  tx.status === "paid" ? "bg-success/10 text-success" : 
                  tx.status === "pending" ? "bg-warning/10 text-warning" : 
                  "bg-destructive/10 text-destructive"
                }>
                  {tx.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
