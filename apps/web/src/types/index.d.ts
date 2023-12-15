/**
 * Represents the configuration settings for a website.
 */
export interface SiteConfig {
  /**
   * The unique identifier for the website, typically the brand or company name.
   */
  name: string;
  /**
   * A brief summary about the website, its purpose, or its services.
   */
  description: string;
  /**
   * The primary web address where the website can be accessed.
   */
  url: string;
  /**
   * The URL of the image used for Open Graph protocol. This image represents the website when shared on social media platforms.
   */
  openGraphImage: string;
  /**
   * The URL of the website's favicon, a small icon displayed in the browser tab.
   */
  favicon: string;
  /**
   * A collection of URLs to the website's associated social media profiles.
   */
  links: {
    /**
     * The URL of the website's Twitter profile.
     */
    twitter: string;
    /**
     * The URL of the website's GitHub profile.
     */
    github: string;
    /**
     * The URL of the website's LinkedIn profile.
     */
    linkedin: string;
    /**
     * The URL of the website's Facebook profile.
     */
    facebook: string;
  };
}

/**
 * Represents a single item in a navigation bar.
 */
export interface NavigationItem {
  /**
   * The text that will be displayed for this navigation item.
   */
  label: string;
  /**
   * The URL that this navigation item points to.
   */
  href: string;
  /**
   * Optional property that determines whether this navigation item is disabled.
   * If true, the navigation item will be unclickable.
   */
  disabled?: boolean;
}

/**
 * Represents the navigation bar on the home page.
 */
export interface HomeNavigationBar {
  /**
   * An array of items to be displayed in the navigation bar.
   */
  items: NavigationItem[];
}

/**
 * Represents the navigation bar on the dashboard page.
 */
export interface DashboardNavigationBar {
  /**
   * An array of items to be displayed in the navigation bar.
   */
  items: NavigationItem[];
}
