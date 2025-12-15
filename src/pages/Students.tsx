import { useState } from "react";
import { Search, Plus, Filter, Download, MoreHorizontal, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const students = [
  {
    id: "STU001",
    name: "Sok Dara",
    nameKh: "សុខ តារា",
    email: "sok.dara@university.edu",
    phone: "+855 12 345 678",
    faculty: "Computer Science",
    year: 3,
    status: "active",
    gpa: 3.75,
  },
  {
    id: "STU002",
    name: "Chan Vanna",
    nameKh: "ចាន់ វណ្ណា",
    email: "chan.vanna@university.edu",
    phone: "+855 12 456 789",
    faculty: "Business Administration",
    year: 2,
    status: "active",
    gpa: 3.52,
  },
  {
    id: "STU003",
    name: "Kim Sokha",
    nameKh: "គីម សុខា",
    email: "kim.sokha@university.edu",
    phone: "+855 12 567 890",
    faculty: "Engineering",
    year: 4,
    status: "active",
    gpa: 3.88,
  },
  {
    id: "STU004",
    name: "Phan Sreymom",
    nameKh: "ផាន ស្រីមុំ",
    email: "phan.sreymom@university.edu",
    phone: "+855 12 678 901",
    faculty: "Medicine",
    year: 1,
    status: "active",
    gpa: 3.91,
  },
  {
    id: "STU005",
    name: "Ly Chanthy",
    nameKh: "លី ចន្ធី",
    email: "ly.chanthy@university.edu",
    phone: "+855 12 789 012",
    faculty: "Law",
    year: 3,
    status: "inactive",
    gpa: 3.15,
  },
  {
    id: "STU006",
    name: "Meas Sopheak",
    nameKh: "មាស សុភ័ក្រ",
    email: "meas.sopheak@university.edu",
    phone: "+855 12 890 123",
    faculty: "Computer Science",
    year: 2,
    status: "active",
    gpa: 3.67,
  },
];

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.faculty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="page-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="page-title">Student Management</h1>
          <p className="page-subtitle">គ្រប់គ្រងនិស្សិត • Manage student profiles and records</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>

      <div className="bg-card rounded-xl shadow-md">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, ID, or faculty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Student ID</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Faculty</TableHead>
                <TableHead className="font-semibold text-center">Year</TableHead>
                <TableHead className="font-semibold text-center">GPA</TableHead>
                <TableHead className="font-semibold text-center">Status</TableHead>
                <TableHead className="font-semibold text-center">Contact</TableHead>
                <TableHead className="font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <TableRow 
                  key={student.id} 
                  className="animate-fade-in hover:bg-muted/30 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="font-mono text-sm font-medium text-primary">
                    {student.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {student.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.nameKh}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{student.faculty}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="font-medium">
                      Year {student.year}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`font-semibold ${student.gpa >= 3.5 ? "text-success" : student.gpa >= 3.0 ? "text-warning" : "text-destructive"}`}>
                      {student.gpa.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge 
                      variant={student.status === "active" ? "default" : "secondary"}
                      className={student.status === "active" ? "bg-success/10 text-success border-success/20" : ""}
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Grades</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing {filteredStudents.length} of {students.length} students</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
