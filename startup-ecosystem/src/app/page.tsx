'use client'
import { useState } from 'react';
import { Button, Input, Spacer, useDisclosure } from '@nextui-org/react';
import { Toggle } from "@/components/ui/toggle";
import MarketTrendsGraph from '@/components/MarketTrendsGraph';

// Placeholder component for the recent projects toggle
const RecentProjectsToggle = () => {
  const projects = [
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    { id: 3, name: 'Project Gamma' },
    { id: 4, name: 'Project Delta' },
    { id: 5, name: 'Project Epsilon' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className="flex items-center justify-between border p-2 rounded-lg hover:bg-gray-100">
            <span className="text-sm">{project.name}</span>
            <Toggle className="w-4 h-4" />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {projects.slice(3).map((project) => (
          <div key={project.id} className="flex items-center justify-between border p-2 rounded-lg hover:bg-gray-100">
            <span className="text-sm">{project.name}</span>
            <Toggle className="w-4 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  // Dummy data to simulate the form data from RegComp
  const [companyDetails, setCompanyDetails] = useState({
    companyName: 'Tech Corp',
    companySector: 'Technology',
    location: 'New York',
    estYear: 2000,
    currentRevenue: 5000000,
  });

  // Dummy data for investors
  const investors = {
    angelInvestors: 5,
    government: 3,
    banks: 7,
  };


  return (
    <div className="w-full p-8 overflow-hidden">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <h2 className="text-lg text-gray-600">Overview of your company</h2>
        <div className="w-full border-t border-gray-300 my-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="p-4 rounded-lg border transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
          <h3 className="text-xl font-bold">{companyDetails.companyName}</h3>
          <p className="text-md mt-2"><strong>Sector:</strong> {companyDetails.companySector}</p>
          <p className="text-md"><strong>Location:</strong> {companyDetails.location}</p>
          <p className="text-md"><strong>Est. Year:</strong> {companyDetails.estYear}</p>
          <p className="text-md"><strong>Current Revenue:</strong> ${companyDetails.currentRevenue.toLocaleString()}</p>
        </div>

        <div className="p-4 rounded-lg border transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
          <h3 className="text-xl font-bold">Investors</h3>
          <ul className="list-none mt-2">
            <li className="flex justify-between">
              <span>Angel Investors</span>
              <span>{investors.angelInvestors}</span>
            </li>
            <li className="flex justify-between mt-2">
              <span>Government</span>
              <span>{investors.government}</span>
            </li>
            <li className="flex justify-between mt-2">
              <span>Banks</span>
              <span>{investors.banks}</span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
          <h3 className="text-xl font-bold">Recent Deployment</h3>
          <div className="mt-2">
            <RecentProjectsToggle />
          </div>
        </div>      
      </div>
      
      <div className="mt-4">
        <div className="mt-2 p-4 rounded-lg border transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
        <h3 className="text-xl font-bold">Market Trends</h3>
          <MarketTrendsGraph />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
