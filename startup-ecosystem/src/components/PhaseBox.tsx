import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

const PhaseBox: React.FC<PhaseBoxProps> = ({
  phaseNumber,
  phaseTitle,
  goals,
  period,
  goalDetails,
  keyActivities,
  resourceAllocation,
  risks,
  kpis,
}) => {
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
        <AccordionContent className="p-4 rounded-lg mb-4">
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
                <h4 className="text-lg font-bold">KPI's & Metrics:</h4>
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
};

export default PhaseBox;
