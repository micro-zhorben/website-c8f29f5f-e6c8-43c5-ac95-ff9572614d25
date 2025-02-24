import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Baby, Crown, Star } from "lucide-react";

interface SillyCardProps {
  title: string;
  description: string;
  icon?: "baby" | "crown" | "star";
}

export function SillyCard({ title, description, icon = "star" }: SillyCardProps) {
  const [isWobbling, setIsWobbling] = useState(false);

  const icons = {
    baby: Baby,
    crown: Crown,
    star: Star,
  };

  const Icon = icons[icon];

  return (
    <Card
      className={`transition-all hover:scale-105 ${
        isWobbling ? "animate-wiggle" : ""
      }`}
    >
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-6 w-6 animate-bounce text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Typography.P>{description}</Typography.P>
        <Button
          className="mt-4 w-full text-foreground"
          variant="outline"
          onClick={() => {
            setIsWobbling(true);
            setTimeout(() => setIsWobbling(false), 1000);
          }}
        >
          Потрясти карточку!
        </Button>
      </CardContent>
    </Card>
  );
}