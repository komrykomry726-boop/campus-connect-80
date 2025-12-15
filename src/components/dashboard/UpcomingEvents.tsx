import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    title: "Faculty Meeting",
    date: "Dec 16, 2025",
    time: "09:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Final Exam - CS101",
    date: "Dec 18, 2025",
    time: "02:00 PM",
    type: "exam",
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    date: "Dec 20, 2025",
    time: "10:00 AM",
    type: "ceremony",
  },
  {
    id: 4,
    title: "Staff Training",
    date: "Dec 22, 2025",
    time: "01:00 PM",
    type: "training",
  },
];

const typeColors: Record<string, string> = {
  meeting: "bg-info/10 text-info border-info/20",
  exam: "bg-warning/10 text-warning border-warning/20",
  ceremony: "bg-accent/10 text-accent border-accent/20",
  training: "bg-success/10 text-success border-success/20",
};

export function UpcomingEvents() {
  return (
    <div className="bg-card rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
        <Calendar className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className={cn(
              "p-3 rounded-lg border animate-slide-up",
              typeColors[event.type]
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-sm font-medium">{event.title}</p>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-xs opacity-80">{event.date}</span>
              <div className="flex items-center gap-1 text-xs opacity-80">
                <Clock className="w-3 h-3" />
                {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
