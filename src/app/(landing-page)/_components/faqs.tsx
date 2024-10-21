import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faqs = () => {
  return (
    <div
      id="faqs"
      className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[160px] pb-[50px] overflow-hidden"
    >
      <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-center">
        Frequently Asked question
      </h1>
      <div className="mt-[30px] md:mt-[50px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  01
                </span>{" "}
                How long will it take to build my credit?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                How long will it take to build my credit?
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  02
                </span>{" "}
                How can i get started with CreditBuilderIq?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                How can i get started with CreditBuilderIq?
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  03
                </span>{" "}
                How much does credit BuilderIq Cost?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                How much does credit BuilderIq Cost?
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  04
                </span>{" "}
                Why should i use CreditBuilderIq?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                Why should i use CreditBuilderIq?
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  05
                </span>{" "}
                Another Question Here.
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                Another Question Here.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
