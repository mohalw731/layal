import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="md:p-8 p-4" id="faq">
      <h2 className="text-2xl font-bold text-primary md:text-4xl lg:text-5xl my-6">
        Vanliga frågor <span className="text-secondary"> .</span>
      </h2>
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Hur går bokningen till när du bokar vår mirror booth?
          </AccordionTrigger>
          <AccordionContent>
            Tryck på ”få prisförslag” fyll sedan i formuläret så återkommer vi
            inom 24h via sms. Vi ser därefter till att du får den bästa möjliga
            servicen!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>När kan man senast avboka?</AccordionTrigger>
          <AccordionContent>
            Vi godkänner avbokningar max 4 veckor innan eventet, du avbokar
            genom att ringa eller maila oss!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Hur får man reda på våra priser?</AccordionTrigger>
          <AccordionContent>
            Fyll i formuläret på “Få prisförslag” så återkommer vi inom 24
            timmar via sms.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Hur levereras mirror boothen?</AccordionTrigger>
          <AccordionContent>
            Vi transporterar mirror boothen till dig inom det markerade området
            som finns på vår leverans karta, utanför området tillkommer en liten
            avgift. Vi är på plats 2h innan eventet börjar för uppsättning!{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Vart vänder man sig vid frågor och funderingar?
          </AccordionTrigger>
          <AccordionContent>
            Tveka inte på att kontakt oss på vår mail adress
            kontakt@leyalmirrorbooth.se vid frågor och funderingar!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Vilka event kan vi erbjuda vår minnesvärda mirror booth till?
          </AccordionTrigger>
          <AccordionContent>
            Vi erbjuder en förstklassig upplevelse för era gäster och kunder med
            många skratt i centrum. Om det är en nostalgisk temafest, ett
            bröllop, konferens eller ett bås på en mässa så ser vi stolt till
            att uppfylla era krav för ett lyckat event. Fotobås har en förmåga
            att dra folk till sig och blir automatiskt en samlingspunkt som
            ingen vill missa. Det finns få saker som lockar så mycket som en
            mirror booth.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Kan företag hyra vår photobooth?</AccordionTrigger>
          <AccordionContent>
            Med GDPR anpassade lösningar kan ni locka nya kunder samtidigt som
            de själva skapar innehåll till era sociala media-flöden. Det har
            aldrig varit enklare, eller roligare! För att det ska bli riktigt
            lyckat är miljön och motiven avgörande. Vi erbjuder rekvisita som
            passar evenemanget, brandade bakgrunder, och även anpassade
            animationer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            Finns vår photobooth tillgänglig till försäljning?
          </AccordionTrigger>
          <AccordionContent>
            Ja! Vi kommer strax att öppna upp för försäljning av vår minnesvärda
            mirror booth men även andra fotobås kommer att finnas i sortimentet!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
