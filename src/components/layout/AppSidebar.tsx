import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  ClipboardList, 
  FileText, 
  UserCog, 
  DollarSign, 
  BarChart3,
  LayoutDashboard,
  Building2,
  Calendar,
  CreditCard,
  TrendingUp,
  Menu
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
];

const moduleItems = [
  { 
    title: "Student Management", 
    subtitle: "គ្រប់គ្រងនិស្សិត",
    url: "/students", 
    icon: Users 
  },
  { 
    title: "Academic Management", 
    subtitle: "Faculties & Departments",
    url: "/academics", 
    icon: Building2 
  },
  { 
    title: "Enrollment", 
    subtitle: "Course Registration",
    url: "/enrollment", 
    icon: ClipboardList 
  },
  { 
    title: "Examinations", 
    subtitle: "Exam Scheduling & Grading",
    url: "/examinations", 
    icon: FileText 
  },
  { 
    title: "Lecturers & Staff", 
    subtitle: "Staff Profiles",
    url: "/staff", 
    icon: UserCog 
  },
  { 
    title: "Finance & Fees", 
    subtitle: "Tuition Management",
    url: "/finance", 
    icon: DollarSign 
  },
  { 
    title: "Reports & Analytics", 
    subtitle: "Academic Performance",
    url: "/reports", 
    icon: BarChart3 
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-sidebar-foreground text-lg tracking-tight">UniSys</span>
              <span className="text-xs text-sidebar-foreground/60">Management System</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className={cn(
                      "h-11 transition-all duration-200",
                      location.pathname === item.url && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary"
                    )}
                  >
                    <NavLink to={item.url}>
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider px-2">
            Modules
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {moduleItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className={cn(
                      "h-12 transition-all duration-200",
                      location.pathname === item.url && "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && (
                        <div className="flex flex-col min-w-0">
                          <span className="font-medium text-sm truncate">{item.title}</span>
                          <span className="text-[10px] text-sidebar-foreground/50 truncate">{item.subtitle}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center">
              <span className="text-sm font-semibold text-sidebar-accent-foreground">A</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium text-sidebar-foreground truncate">Admin User</span>
              <span className="text-xs text-sidebar-foreground/50 truncate">admin@university.edu</span>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
