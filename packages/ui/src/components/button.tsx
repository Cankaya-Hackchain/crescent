import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../lib/cn";

// Defining button variants using class-variance-authority (cva)
// This allows for different styles of buttons (e.g., default, destructive, outline, etc.)
// and different sizes (e.g., default, small, large, icon)
const buttonVariants = cva(
  // Common styles for all buttons
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // The 'variant' property defines the different styles of the button
      variant: {
        // The 'default' variant applies a primary background color, primary text color, and a hover effect
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // The 'destructive' variant applies a destructive background color, destructive text color, and a hover effect
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // The 'outline' variant applies a border, background color, and changes the background and text color on hover
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // The 'secondary' variant applies a secondary background color, secondary text color, and a hover effect
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // The 'ghost' variant changes the background and text color on hover
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // The 'link' variant applies primary text color, underlines the text, and adds an underline on hover
        link: "text-primary underline-offset-4 hover:underline",
        // The 'nav' variant applies muted text color and a hover effect
        nav: "text-muted-foreground hover:text-primary",
      },
      // The 'size' property defines the different sizes of the button
      size: {
        // The 'default' size applies a height of 10 units, padding of 4 units horizontally and 2 units vertically
        default: "h-10 px-4 py-2",
        // The 'sm' size applies a height of 9 units, rounded medium border, and padding of 3 units horizontally
        sm: "h-9 rounded-md px-3",
        // The 'lg' size applies a height of 11 units, rounded medium border, and padding of 8 units horizontally
        lg: "h-11 rounded-md px-8",
        // The 'icon' size applies a height and width of 10 units
        icon: "h-10 w-10",
      },
    },
    // The 'defaultVariants' property sets the default styles and sizes of the button
    defaultVariants: {
      // The default style is 'default'
      variant: "default",
      // The default size is 'default'
      size: "default",
    },
  },
);

// Defining the properties for the Button component
// It extends the properties of a standard HTML button and the variant properties defined above
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // Optional property to determine if the button is a child component
  asChild?: boolean;
}

// Defining the Button component
// It uses the forwardRef function to allow the parent component to access the ref of this component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Determine the component type based on the asChild property
    const Comp = asChild ? Slot : "button";
    return (
      // Apply the button variant styles and other properties
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

// Setting the display name of the component for debugging purposes
Button.displayName = "Button";

// Exporting the Button component and the button variants
export { Button, buttonVariants };
