import { SillyHero } from "@/components/silly-hero";
import { SillyCard } from "@/components/silly-card";
import { useToast } from "@/components/ui/use-toast";

export function Home() {
  const { toast } = useToast();

  const handleHeroAction = () => {
    toast({
      title: "Ура! 🎉",
      description: "Вы нажали на самую глупую кнопку в мире!",
    });
  };

  return (
    <div className="space-y-8">
      <SillyHero
        title="Добро пожаловать на самый глупый сайт в мире!"
        description="Здесь вы найдете самые нелепые вещи, которые только можно представить. Нажимайте на все кнопки, они делают забавные штуки!"
        onActionClick={handleHeroAction}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SillyCard
          title="Глупая карточка"
          description="Эта карточка такая глупая, что даже не знает, что она карточка! Нажмите на кнопку, чтобы она затряслась от смеха."
          icon="baby"
        />
        <SillyCard
          title="Очень важная карточка"
          description="Эта карточка думает, что она очень важная. Но на самом деле она просто притворяется! Нажмите на кнопку, чтобы разоблачить её."
          icon="crown"
        />
        <SillyCard
          title="Звёздная карточка"
          description="Эта карточка мечтает стать звездой. Помогите её мечте сбыться, нажав на кнопку! Спойлер: ничего не произойдет."
          icon="star"
        />
      </div>
    </div>
  );
}