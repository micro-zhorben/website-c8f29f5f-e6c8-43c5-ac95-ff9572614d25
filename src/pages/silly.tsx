import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Baby } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function Silly() {
  const { toast } = useToast();
  const [clickCount, setClickCount] = useState(0);
  const [isUpsideDown, setIsUpsideDown] = useState(false);

  const handleSillyButton = () => {
    setClickCount(prev => prev + 1);
    toast({
      title: "Ой-ой! 🙈",
      description: `Вы нажали глупую кнопку ${clickCount + 1} раз! Продолжайте в том же духе!`,
    });
  };

  return (
    <div className={`space-y-8 ${isUpsideDown ? "rotate-180" : ""}`}>
      <div className="text-center">
        <Typography.H1>
          Страница глупостей! <Baby className="inline-block h-8 w-8 animate-bounce" />
        </Typography.H1>
        <Typography.P>
          Эта страница настолько глупая, что даже не знает, что она страница!
        </Typography.P>
      </div>

      <Card className="p-6 text-center">
        <Typography.H2 className="mb-4">Счетчик глупости</Typography.H2>
        <Typography.P className="text-4xl font-bold">{clickCount}</Typography.P>
        <Button
          className="mt-4 animate-bounce"
          onClick={handleSillyButton}
        >
          Увеличить глупость!
        </Button>
      </Card>

      <div className="text-center">
        <Button
          variant="outline"
          className="text-foreground"
          onClick={() => setIsUpsideDown(!isUpsideDown)}
        >
          {isUpsideDown ? "Перевернуть обратно" : "Перевернуть страницу"}
        </Button>
      </div>

      <Card className="p-6">
        <Typography.H3 className="mb-4">Глупый совет дня:</Typography.H3>
        <Typography.P>
          Если вы читаете этот текст вверх ногами, возможно, вам стоит перевернуть
          монитор. Или себя. Или нажать кнопку выше. Выбор за вами!
        </Typography.P>
      </Card>
    </div>
  );
}