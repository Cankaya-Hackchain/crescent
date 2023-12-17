import { DashboardNavigationBar, HomeNavigationBar, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ebot Automations",
  description: "We provide top-notch automation solutions.",
  url: "https://www.ebot.com.tr",
  openGraphImage: "https://www.ebot.com.tr/images/og-image.jpg",
  favicon: "https://www.ebot.com.tr/favicon.ico",
  links: {
    twitter: "https://twitter.com/ebotautomations",
    github: "https://github.com/ebotautomations",
    linkedin: "https://linkedin.com/company/ebotautomations",
    facebook: "https://facebook.com/ebotautomations",
  },
};

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
