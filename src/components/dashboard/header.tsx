// siyaKhanya — kimmy@siyaKhanya
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import Link from "next/link";

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
        <div className="flex items-center gap-4">
            <p className="text-muted-foreground hidden md:block">Community energy forecasting & payback</p>
            <Button asChild variant="ghost">
                <Link href="/faq">FAQ</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
