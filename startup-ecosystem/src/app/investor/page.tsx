import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Grant = {
  grantName: string;
  agencyName: string;
  amount: string;
  type: string;
  category: string;
  sector: string;
  learnMore: string;
};

type Fund = {
  fundName: string;
  targetAudience: string;
  purpose: string;
  financingRate: string;
  availability: string;
};

type Investor = {
  name: string;
  type: string;
  category: string;
  company: string;
  location: string;
  pastInvestments?: string[];
  stage?: string;
  industry?: string;
  vertical?: string;
  website?: string;
};

const investors: Investor[] = [
  {
    name: 'Accord Ventures',
    type: 'Venture Capital',
    category: 'Venture Capital',
    company: 'Accord Ventures',
    location: 'Tokyo, Japan',
    pastInvestments: ['StoreHub', 'Wobb', 'Galapagos', 'GTRIP', 'Housemart', 'Spider Labs', 'Flow Solutions', 'Interviewer.AI', 'Luminoso'],
    stage: 'Seed, Series A, Series B, Series C',
    industry: 'Information and Communications Technology, Finance & Insurance',
    vertical: 'AI/ML, IoT, Fintech',
    website: 'https://accordventures.co.jp/',
  },
  {
    name: 'Asia GreenTech Fund',
    type: 'Venture Capital',
    category: 'Venture Capital',
    company: 'Asia GreenTech Fund',
    location: 'Malaysia',
    pastInvestments: ['Sunview'],
    stage: 'Seed',
    industry: 'Agriculture, Energy',
    vertical: 'Renewable Tech, Agritech, Waste & Waste Water',
    website: 'https://asiagreentechfund.com/',
  },
];

const funds: Fund[] = [
  {
    fundName: 'High Tech & Green Facility (HTG)',
    targetAudience: 'SMEs and innovative start-ups',
    purpose: 'To help SMEs and start-ups grow their businesses and invest in digital tech, green tech, and biotech for a sustainable economic recovery.',
    financingRate: 'Up to 3.5% per annum without guarantee; up to 5% per annum inclusive of guarantee fee',
    availability: 'Until full utilisation',
  },
  {
    fundName: 'Agrofood Facility (AF)',
    targetAudience: 'SMEs involved in agrofood production',
    purpose: 'To increase food production for Malaysia and for export purposes.',
    financingRate: 'Not specified',
    availability: 'Until full utilisation',
  },
];

const grants: Grant[] = [
  {
    grantName: 'Bumiputera Enterprise Enhancement Programme (BEEP)',
    agencyName: 'SME Corporation Malaysia',
    amount: 'Up to RM500,000',
    type: 'Matching Grant',
    category: 'Bumiputera-owned, SME',
    sector: 'Agnostic / All Sectors',
    learnMore: 'https://www.smecorp.gov.my/index.php/en/programmes1/2015-12-21-10-03-39/bumiputera-enterprise-enhancement-programme-beep',
  },
  {
    grantName: 'Business Scale-Up Programme (Biz-Up Programme)',
    agencyName: 'SME Corporation Malaysia',
    amount: 'Up to RM400,000',
    type: 'Matching Grant',
    category: 'SME',
    sector: 'Industry 4.0 / Automation / Digitalisation, Smart Cities, Wholesale and Retail, Agriculture',
    learnMore: 'https://www.smecorp.gov.my/index.php/en/programmes1/2015-12-21-09-53-14/business-scale-up-programme-biz-up-programme',
  },
];

const angelInvestors: Investor[] = [
  {
    name: 'John Woo',
    type: 'Micro VC',
    category: 'Angel Investor',
    company: 'John Woo',
    location: 'Kuala Lumpur, Malaysia',
    pastInvestments: ['FREY', 'Cliently', 'Ettorney'],
  },
  {
    name: 'Taraec Hussein',
    type: 'Micro VC',
    category: 'Angel Investor',
    company: 'Taraec Hussein',
    location: 'Kuala Lumpur, Malaysia',
    pastInvestments: ['U-Parking', 'iPrice Group', 'Tripvisto'],
  },
  {
    name: 'Herman Syah',
    type: 'Angel/Individual',
    category: 'Angel Investor',
    company: 'Herman Syah',
    location: 'Petaling Jaya, Malaysia',
    pastInvestments: ['CreoPop', 'Plunify'],
  },
];

const InvestorComponent: React.FC = () => {
  const categories = ['Angel Investor', 'Venture Capital'];

  const getTopInvestorsByCategory = (category: string): Investor[] => {
    const allInvestors = [...investors, ...angelInvestors];
    return allInvestors
      .filter((investor) => investor.category === category)
      .slice(0, 4);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Investors</h1>
      <p className="mb-4 text-gray-500">Contact your possible investors to help your start-up growth.</p>
      <div className="w-full border-t border-gray-300 my-4"></div>
      <div className="grid gap-4">
        {categories.map((category, index) => {
          const topInvestors = getTopInvestorsByCategory(category);

          return (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{category}</h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investor Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affiliation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Past Investment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Get Connect</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topInvestors.length > 0 ? (
                    topInvestors.map((investor, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{investor.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{investor.company}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{investor.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <ul className="list-disc list-inside">
                            {investor.pastInvestments?.map((investment, i) => (
                              <li key={i}>{investment}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button className="p-4 bg-gradient-to-r from-purple-800 to-purple-500 transform transition-transform duration-300 hover:scale-105 text-white">Contact</Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center">No investors found in this category.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Funds</h2>
          <div className="min-w-full divide-y divide-gray-200">
            {funds.map((fund, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold">{fund.fundName}</p>
                <p>Target Audience: {fund.targetAudience}</p>
                <p>Purpose: {fund.purpose}</p>
                <p>Financing Rate: {fund.financingRate}</p>
                <p>Availability: {fund.availability}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Grants</h2>
          <div className="min-w-full divide-y divide-gray-200">
            {grants.map((grant, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold">{grant.grantName}</p>
                <p>{grant.agencyName}</p>
                <p>Amount: {grant.amount}</p>
                <p>Type: {grant.type}</p>
                <p>Category: {grant.category}</p>
                <p>Sector: {grant.sector}</p>
                <Button className="p-4 bg-gradient-to-r from-purple-800 to-purple-500 transform transition-transform duration-300 hover:scale-105 text-white" asChild>
                <Link href={grant.learnMore}>Learn More</Link></Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorComponent;
