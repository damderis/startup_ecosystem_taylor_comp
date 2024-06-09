import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PhaseBoxProps {
  phaseNumber: string;
  phaseTitle: string;
  goals: string;
  period: string;
  goalDetails: string[];
  keyActivities: string[];
  resourceAllocation: string[];
  risks: string[];
  kpis: string[];
}

function PhaseBox({
  phaseNumber,
  phaseTitle,
  goals,
  period,
  goalDetails,
  keyActivities,
  resourceAllocation,
  risks,
  kpis,
}: PhaseBoxProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={phaseNumber}>
        <AccordionTrigger className="flex flex-row p-4 rounded-lg mb-4 w-full">
          <div className="mr-4">
            <h2 className="text-xl font-bold">{phaseNumber}</h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{phaseTitle}</h3>
            <p className="text-sm">{goals}</p>
            <span className="text-gray-500 text-xs">{period}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4 border-green-500 rounded-lg mb-4">
          <div className="flex flex-row">
            <div className="flex-1 mr-4">
              <div className="mb-2">
                <h4 className="text-lg font-bold">Goal Details:</h4>
                <ul className="list-disc list-inside">
                  {goalDetails.map((detail, index) => (
                    <li key={index} className="ml-4">{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <h4 className="text-lg font-bold">Key Activities:</h4>
                <ul className="list-disc list-inside">
                  {keyActivities.map((activity, index) => (
                    <li key={index} className="ml-4">{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1 ml-4">
              <div className="mb-2">
                <h4 className="text-lg font-bold">Resource Allocation:</h4>
                <ul className="list-disc list-inside">
                  {resourceAllocation.map((resource, index) => (
                    <li key={index} className="ml-4">{resource}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <h4 className="text-lg font-bold">Risks:</h4>
                <ul className="list-disc list-inside">
                  {risks.map((risk, index) => (
                    <li key={index} className="ml-4">{risk}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold">KPIs & Metrics:</h4>
                <ul className="list-disc list-inside">
                  {kpis.map((kpi, index) => (
                    <li key={index} className="ml-4">{kpi}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
function Roadmap() {
  return (
    <div className="w-full p-8">
      <div className="flex flex-col w-full items-start">
        <h1 className="text-2xl font-bold">Roadmap</h1>
        <h2 className="text-lg text-gray-600">Our plan and milestones</h2>
        <div className="w-full border-t border-gray-300 my-4"></div>
      </div>

      <div className="flex flex-col">
        <PhaseBox
          phaseNumber="Phase 1"
          phaseTitle="Initial Setup"
          goals="Define the core structure and goals."
          period="January - March 2024"
          goalDetails={[
            "Establish company registration & compliance (RM 800)",
            "Develop business plan & set short-term objectives (free)",
            "Secure office space & equipment needs (RM 1000)",
            "Hire Founding Team Members: CEO/CTO, Sales Manager, Developer(s)"
          ]}
          keyActivities={[
            "Brand Identity Creation (logo, website, social media presence) (RM 1000)",
            "Set up CRM system (Salesforce or Hubspot) (RM 1000)"
          ]}
          resourceAllocation={[
            "Team: 4 members total",
            "Budget: Remaining RM 16000"
          ]}
          risks={[
            "Regulatory issues",
            "Slow hiring process",
            "High costs"
          ]}
          kpis={[
            "Number of product meetings",
            "Leads generated",
            "Coding hours completed"
          ]}
        />
        <PhaseBox
          phaseNumber="Phase 2"
          phaseTitle="Development"
          goals="Develop the main features and functionalities."
          period="April - June 2024"
          goalDetails={[
            "Conduct research into government agency requirements",
            "Design MVP addressing these needs",
            "Iterate design with feedback from customers",
            "Start building the product",
            "Test product internally"
          ]}
          keyActivities={[
            "Workshops with target customer groups (RM 2000)",
            "User interface prototyping tool (Figma)",
            "User testing sessions"
          ]}
          resourceAllocation={[
            "Team: Expand team if needed",
            "Budget: Focused on product development"
          ]}
          risks={[
            "Development timeline slips",
            "Quality concerns"
          ]}
          kpis={[
            "Progress updates",
            "User feedback",
            "Time spent on features"
          ]}
        />
        <PhaseBox
          phaseNumber="Phase 3"
          phaseTitle="Launch"
          goals="Release the product to the market."
          period="July - September 2024"
          goalDetails={[
            "Prepare for public beta release",
            "Conduct extensive internal testing",
            "Refine pricing strategy",
            "Finalize marketing materials",
            "Plan official launch event",
            "Begin outreach to government agencies"
          ]}
          keyActivities={[
            "Marketing Campaign Planning (RM 5000)",
            "Develop landing page & invest in SEO (RM 3000)",
            "Plan press releases, networking events",
            "Reach out to key influencers"
          ]}
          resourceAllocation={[
            "Team: Combination of employees and freelancers",
            "Budget: Covered by marketing campaign funds"
          ]}
          risks={[
            "Low adoption rate",
            "Competition"
          ]}
          kpis={[
            "Customer acquisition cost",
            "Conversion rates",
            "Monthly recurring revenue"
          ]}
        />
      </div>
    </div>
  );
}

export default Roadmap;
