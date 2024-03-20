import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <section className={cn("w-full max-w-screen-2xl mx-auto", className)}>
      {children}
    </section>
  );
};

export default Container;
