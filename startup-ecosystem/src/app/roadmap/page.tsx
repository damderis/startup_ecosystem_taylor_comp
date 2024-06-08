'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhaseBox from '@/components/PhaseBox'; 

interface PhaseData {
  phaseNumber: string;
  phaseTitle: string;
  goals: string;
  goalDetails: string[];
  keyActivities: string[];
  resourceAllocation: string[];
  risks: string[];
  kpis: string[];
}

const Roadmap: React.FC = () => {
  const [phases, setPhases] = useState<PhaseData[]>([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api/roadmap')  // Adjust the API endpoint as needed
      .then(response => {
        setPhases(response.data);
      })
      .catch(error => {
        console.error('Error fetching roadmap data:', error);
      });
  }, []);

  // Fixed phase numbers and periods
  const fixedPhases = [
    { phaseNumber: '1', period: '2 quarters' },
    { phaseNumber: '2', period: '1 quarter' },
    { phaseNumber: '3', period: '1 quarter' },
  ];

  // Check if there's no data
  const noData = phases.length === 0;

  return (
    <div className="w-full p-8">
      <div className="flex flex-col w-full items-start">
        <h1 className="text-2xl font-bold">Roadmap</h1>
        <h2 className="text-lg text-gray-600">Our plan and milestones</h2>
        <div className="w-full border-t border-gray-300 my-4"></div>
      </div>

      {noData ? (
        <div className="flex justify-center items-center h-full">
          <h3 className="text-md text-gray-500">Please update your company details.</h3>
        </div>
      ) : (
        <div className="flex flex-col">
          {fixedPhases.map(fixedPhase => {
            const phaseData = phases.find(p => p.phaseNumber === fixedPhase.phaseNumber);

            return (
              <PhaseBox
                key={fixedPhase.phaseNumber}
                phaseNumber={fixedPhase.phaseNumber}
                phaseTitle={phaseData?.phaseTitle || ''}
                goals={phaseData?.goals || ''}
                period={fixedPhase.period}
                goalDetails={phaseData?.goalDetails || []}
                keyActivities={phaseData?.keyActivities || []}
                resourceAllocation={phaseData?.resourceAllocation || []}
                risks={phaseData?.risks || []}
                kpis={phaseData?.kpis || []}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Roadmap;
