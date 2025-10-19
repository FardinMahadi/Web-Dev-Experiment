import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordPage() {
  const faq = [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Can I use it with Tailwind?",
      answer: "Yes, it works perfectly fine with Tailwind CSS.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="w-[500px] p-4">
        {faq.map((aq, index) => (
          <Accordion key={index} type="single" collapsible className="mb-2">
            <AccordionItem value={`item-${index}`} className="px-4">
              <AccordionTrigger>{aq.question}</AccordionTrigger>
              <AccordionContent>{aq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </main>
    </div>
  );
}
