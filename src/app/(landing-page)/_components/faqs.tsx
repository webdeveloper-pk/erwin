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
        Frequently Asked Questions
      </h1>
      <div
        className="mt-[30px] md:mt-[50px]"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1100"
        data-aos-easing="ease-in-sine"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  01
                </span>{" "}
                How does this service work?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                When you sign up for our service, you must choose the items
                appearing on your credit report you feel are incorrect, unfair,
                or questionable. You then can contact your creditors to demand
                their removal or correction. If the creditors do not fix the
                mistakes, you can up the pressure and give new information as to
                why this item should be removed from your reports. Additionally,
                we provide recommendations of products such as low interest
                credit cards, personal loans as well as auto and home loans.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  02
                </span>{" "}
                How much does your service cost?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                There is no cost for the platform and access to templates, this
                is a free service. This business model may seem bizarre because
                we do not charge anything for our service, but it is - we truly
                do not collect fees for our DIY credit repair service. Everyone
                should monitor his or her credit and in order to help you, we
                offer you the ability to keep an active credit monitoring
                account with our credit report partner{" "}
                <a
                  className="text-blue-500 hover:underline"
                  href="https://CreditStreak.com"
                >
                  CreditStreak.com
                </a>{" "}
                (Credit monitoring does have a cost to it and we cannot prevent
                them from collecting their fees and we do receive a referral fee
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  03
                </span>{" "}
                How long does it take?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                Many customers receive results within 45 days. The overall
                process can take six months to a year or longer depending on
                many different factors.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  04
                </span>{" "}
                Why is this better than hiring a credit repair company?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                Because it’s FREE! Even if you purchase the outside credit
                monitoring service to take full advantage of our free platform,
                you're saving much more than if you hired a third party credit
                repair company.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  05
                </span>{" "}
                What type of items can you delete?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                We do not delete anything from your credit reports. No one can
                predict that ANY item will be removed from your credit report
                and we don’t make any promises that you are able to get anything
                removed from your report. We can only give you the tools to best
                remove the items that are inaccurate, outdated or unverifiable.
                It is up to you to submit the forms you can prepare from our
                platform to your creditors and credit bureaus, they will
                determine whether matters need to be corrected or removed.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  06
                </span>{" "}
                Do you guarantee I get approved for a home or auto loan?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                Nope. Let us be clear, we do not guarantee any specific score
                improvement, and we definitely cannot promise you will be
                approved for financing of any kind. No one can. However by
                sending your dispute letters to the creditors and credit bureaus
                yourself, you may be able to remove errors and by removing those
                errors, it generally can have a positive impact on your credit
                score; but lenders take more than just your credit into
                consideration such as income, employment and other factors. By
                correcting inaccurate items in your credit report you will
                likely have a better chance at securing favorable terms.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  07
                </span>{" "}
                What is a credit report?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                A credit report is a track record of both your personal and
                financial credit information. Which includes information taken
                from public records, personal identification and debt
                information.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  08
                </span>{" "}
                What are the three credit bureaus?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                A credit bureau - sometimes called a "consumer reporting agency"
                - is a business that collects relevant consumer information from
                creditors and courthouses, and then sells that information to
                interested parties such as potential lenders. Such information
                is sold in the form of a credit report. In the U.S., the three
                major credit bureaus are TransUnion, Experian, and Equifax
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  09
                </span>{" "}
                Who can see my credit reports?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                If you are in the process of trying to get financing on a home,
                automobile, credit card, charge card or personal loan, any
                creditor who you are working with has the ability to pull your
                credit report, but only with your permission. This is called an
                inquiry. Employers may also review your credit file if you are
                applying for a job, especially if security clearance is a
                requirement.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] md:flex md:gap-6 md:items-center">
                <span className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[30px] hidden md:block">
                  10
                </span>{" "}
                What is the Fair Credit Reporting Act and why was it created?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className="font-regular text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                The Fair Credit Reporting Act (FCRA) was written in 1970 as an
                amendment to the Consumer Credit Protection Act. The FCRA
                provides additional measures of consumer protection in the areas
                of fairness, accuracy, and privacy of the information collected
                by the credit bureaus. It also allows you to personally engage
                in credit repair and maintenance processes, verifying that the
                information in your credit report is correct.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
