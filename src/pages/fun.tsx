import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SillyAccordion } from "@/components/silly-accordion";
import { Baby, Crown, Star } from "lucide-react";

export function Fun() {
  const [danceParty, setDanceParty] = useState(false);

  const sillyFacts = [
    {
      title: "Почему пингвины не летают?",
      content: "Потому что они слишком заняты съемками документальных фильмов о себе!",
    },
    {
      title: "Почему банан кривой?",
      content: "Потому что он не ходил к стоматологу исправлять прикус!",
    },
    {
      title: "Почему программисты путают Хэллоуин и Рождество?",
      content: "Потому что Oct 31 = Dec 25! (Это программистская шутка)",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Typography.H1 className="animate-bounce">Страница веселья! 🎉</Typography.H1>
        <Typography.P>Здесь собраны самые глупые вещи, которые мы смогли придумать!</Typography.P>
      </div>

      <div className="flex justify-center gap-4">
        <Baby className={`h-12 w-12 text-primary ${danceParty ? "animate-bounce" : ""}`} />
        <Crown className={`h-12 w-12 text-accent ${danceParty ? "animate-spin" : ""}`} />
        <Star className={`h-12 w-12 text-secondary ${danceParty ? "animate-pulse" : ""}`} />
      </div>

      <div className="text-center">
        <Button
          size="lg"
          className="animate-pulse"
          onClick={() => setDanceParty(!danceParty)}
        >
          {danceParty ? "Остановить" : "Начать"} танцевальную вечеринку!
        </Button>
      </div>

      <div className="mx-auto max-w-2xl">
        <Typography.H2 className="mb-4 text-center">Глупые факты</Typography.H2>
        <SillyAccordion items={sillyFacts} />
      </div>
    </div>
  );
}