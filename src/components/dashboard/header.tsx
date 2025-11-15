// siyaKhanya — kimmy@siyaKhanya
import { Sun } from "lucide-react";

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
             <Sun className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">siyaKhanya</h1>
        </div>
        <p className="text-muted-foreground hidden md:block">Community energy forecasting & payback</p>
      </div>
    </header>
  );
}
