import * as React from "react";
import { House, SquareLibrary, Bubbles, SwatchBook } from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import TeamSwitcher from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "MiguelTFD",
    email: "migueltfd@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inicio",
      url: "/",
      icon: House,
      isActive: true,
    },
  ],
  projects: [
    {
      title: "Productos",
      url: "/productos",
      icon: Bubbles,
    },
    {
      title: "Categorias",
      url: "/categorias",
      icon: SquareLibrary,
    },
    {
      title: "SubCategorias",
      url: "/subcateorias",
      icon: SwatchBook,
    },
  ],
  audit: [
    {
      title: "Stock de productos",
      url: "/stockproductos",
      icon: Bubbles,
    },
    {
      title: "Auditoria de productos",
      url: "/auditoriaproductos",
      icon: Bubbles,
    },
    {
      title: "Logs del sistema",
      url: "/logs",
      icon: Bubbles,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.navMain} groupName={"Principal"} />
        <NavProjects projects={data.projects} groupName={"Acciones"} />
        <NavProjects projects={data.audit} groupName={"reportes"} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
