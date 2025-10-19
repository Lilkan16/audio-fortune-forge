import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
}

export const CTAButton = ({ children, className, size = "lg" }: CTAButtonProps) => {
  const handleClick = () => {
    // Placeholder for checkout integration
    window.open("https://pay.hotmart.com/", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "bg-success hover:bg-success/90 text-success-foreground font-poppins font-semibold",
        "shadow-[0_0_20px_rgba(0,255,127,0.4)] hover:shadow-[0_0_40px_rgba(0,255,127,0.6)]",
        "transition-all duration-300 transform hover:scale-105",
        "uppercase tracking-wide",
        size === "xl" && "text-xl py-8 px-12",
        size === "lg" && "text-lg py-6 px-10",
        size === "default" && "text-base py-4 px-8",
        className
      )}
    >
      {children}
    </Button>
  );
};
