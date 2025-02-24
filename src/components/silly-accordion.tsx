import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { Baby } from "lucide-react";

interface SillyAccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

export function SillyAccordion({ items }: SillyAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="flex items-center gap-2 text-foreground">
            <Baby className="h-4 w-4 animate-bounce" />
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            <Typography.P>{item.content}</Typography.P>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}