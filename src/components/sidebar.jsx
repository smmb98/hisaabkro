import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="md:w-64 hidden md:block border-r p-4 bg-muted/40">
      <h2 className="text-lg font-semibold mb-4">Logo</h2>
      <p className="text-sm text-muted-foreground">
        Coming soon: Budget Planner, Estimator...
      </p>
    </aside>
  );
}
