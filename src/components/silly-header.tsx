import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { Baby, Crown, Star } from "lucide-react";

export function SillyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center gap-2">
          <Baby className="h-8 w-8 animate-bounce text-primary" />
          <Typography.H2 className="hidden sm:inline-block">
            Самый глупый сайт
          </Typography.H2>
        </div>
        <nav className="flex flex-1 items-center gap-6 text-sm">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <Star className="h-4 w-4" />
            Главная
          </Link>
          <Link to="/fun" className="flex items-center gap-2 text-foreground">
            <Crown className="h-4 w-4" />
            Веселье
          </Link>
          <Link to="/silly" className="flex items-center gap-2 text-foreground">
            <Baby className="h-4 w-4" />
            Глупости
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="animate-pulse text-foreground">
            Нажми меня!
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}