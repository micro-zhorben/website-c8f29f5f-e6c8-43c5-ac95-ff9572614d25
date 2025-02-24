import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Baby, Crown, Star } from "lucide-react";

interface SillyHeroProps {
  title: string;
  description: string;
  onActionClick?: () => void;
}

export function SillyHero({ title, description, onActionClick }: SillyHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background px-4 py-12 shadow-lg sm:px-6 sm:py-16 md:p-20">
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="flex justify-center gap-4">
          <Baby className="h-12 w-12 animate-bounce text-primary" />
          <Crown className="h-12 w-12 animate-pulse text-accent" />
          <Star className="h-12 w-12 animate-spin text-secondary" />
        </div>
        <Typography.H1 className="mt-8 animate-fade-up bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          {title}
        </Typography.H1>
        <Typography.P className="mt-6 animate-fade-up text-muted-foreground">
          {description}
        </Typography.P>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className="animate-bounce"
            onClick={onActionClick}
          >
            Нажми для веселья!
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="animate-pulse text-foreground"
            onClick={onActionClick}
          >
            И меня тоже!
          </Button>
        </div>
      </div>
    </div>
  );
}