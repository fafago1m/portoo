"use client"; // Pastikan ini ada di bagian atas file

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  </motion.div>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };