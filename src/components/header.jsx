import { ModeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-semibold">Utility Dashboard</h1>
      <ModeToggle />
    </header>
  );
}
