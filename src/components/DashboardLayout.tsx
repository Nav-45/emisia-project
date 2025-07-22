import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { 
  Building2, 
  BarChart3, 
  Upload, 
  Package, 
  List, 
  Plus,
  ChevronDown,
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

const organizationItems = [
  { title: "Company Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "Add Data", url: "/dashboard/add-data", icon: Upload },
];

const productItems = [
  { title: "Product Dashboard", url: "/dashboard/products", icon: BarChart3 },
  { title: "Product List", url: "/dashboard/products/list", icon: List },
  { title: "Add Product", url: "/dashboard/products/add", icon: Plus },
];

export function DashboardLayout() {
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const isGroupExpanded = (groupName: string) => {
    // Show group if hovered
    if (hoveredGroup === groupName) return true;
    
    // Show group if it has an active item (always keep active group expanded)
    const hasActiveItem = (groupName === "organization" && isGroupActive(organizationItems)) ||
                         (groupName === "products" && isGroupActive(productItems));
    
    return hasActiveItem;
  };

  const isActive = (path: string) => location.pathname === path;

  const isGroupActive = (items: any[]) => {
    return items.some(item => isActive(item.url));
  };

  const handleGroupClick = (groupName: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupName) 
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const handleItemClick = (groupName: string) => {
    if (!expandedGroups.includes(groupName)) {
      setExpandedGroups(prev => [...prev, groupName]);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-border">
          <SidebarContent className="bg-background">
            {/* Logo */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/05c202bc-a4d7-4f3f-800a-7d21233786b9.png" 
                  alt="Emisia" 
                  className="w-6 h-6"
                />
                <span className="font-bold text-lg text-foreground">Emisia</span>
              </div>
            </div>

            {/* Organization Group */}
            <SidebarGroup>
              <SidebarGroupLabel
                className={cn(
                  "flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-muted/50 transition-colors text-muted-foreground",
                  isGroupActive(organizationItems) && "text-foreground bg-muted/30"
                )}
                onClick={() => handleGroupClick("organization")}
                onMouseEnter={() => setHoveredGroup("organization")}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Organisation</span>
                </div>
                {isGroupExpanded("organization") ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupLabel>

              {isGroupExpanded("organization") && (
                <SidebarGroupContent
                  onMouseEnter={() => setHoveredGroup("organization")}
                  onMouseLeave={() => setHoveredGroup(null)}
                >
                  <SidebarMenu>
                    {organizationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-3 px-8 py-2 text-sm transition-colors",
                                isActive
                                  ? "bg-green-100 text-green-800 font-medium rounded-md mx-2"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              )
                            }
                            onClick={() => handleItemClick("organization")}
                          >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>

            {/* Products Group */}
            <SidebarGroup>
              <SidebarGroupLabel
                className={cn(
                  "flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-muted/50 transition-colors text-muted-foreground",
                  isGroupActive(productItems) && "text-foreground bg-muted/30"
                )}
                onClick={() => handleGroupClick("products")}
                onMouseEnter={() => setHoveredGroup("products")}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <span>Products</span>
                </div>
                {isGroupExpanded("products") ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupLabel>

              {isGroupExpanded("products") && (
                <SidebarGroupContent
                  onMouseEnter={() => setHoveredGroup("products")}
                  onMouseLeave={() => setHoveredGroup(null)}
                >
                  <SidebarMenu>
                    {productItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-3 px-8 py-2 text-sm transition-colors",
                                isActive
                                  ? "bg-green-100 text-green-800 font-medium rounded-md mx-2"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              )
                            }
                            onClick={() => handleItemClick("products")}
                          >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-background flex items-center px-6">
            <SidebarTrigger />
          </header>
          <main className="flex-1 p-6 bg-muted/20">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}