import type { DashboardNavigationBar, HomeNavigationBar } from "~/types";

export const homeNavigationBar: HomeNavigationBar = {
  items: [
    {
      label: "Features",
      href: "/#features",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Documentation",
      href: "/docs",
    },
  ],
};

export const dashboardNavigationBar: DashboardNavigationBar = {
  items: [
    {
      label: "Home",
      href: "/dashboard",
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
    },
  ],
};
