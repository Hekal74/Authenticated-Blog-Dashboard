import React from 'react';

import MotorHubBot from '../MotorHub';



interface UseCase {
  title: string;
  description: string;
  image: string; 
}


const useCases: UseCase[] = [
  
  {
    title: "Automated Appointment Booking",
    description: "AI-driven automation personalises scheduling and reminders, optimising patient flow.",
    image: "/assets/health-care2.png"
  },
  {
    title: "Personalized Health Insights",
    description: "Real-time updates that empower patients with timely information and enhance their experience.",
    image: "/assets/health-care3.png"
  },
  {
    title: "Gen –AI Insurance RPA",
    description: "Gen –AI driven automation for streamline insurance approvals, validating Clinical procedures, & disbursals.",
    image: "/assets/health-care4.png"
  },
  {
    title: "Intelligent Prescription Detection",
    description: "Automatically detects prescription requirements, ensuring only valid prescriptions are accepted.",
    image: "/assets/health-care5.png"
  },
  {
    title: "Medication Adherence Monitoring",
    description: "Out Gen AI assistant tracks medication schedules and sends reminders with automated alerts.",
    image: "/assets/health-care6.png"
  },
  {
    title: "Operational Support for Staff",
    description: "Gen AI based optimisation for staff workflows such as Payroll and Leave Management enhancing efficiency.",
    image: "/assets/health-care7.png"
  },
  {
    title: "Streamlined Emergency Handling",
    description: "Our Gen-AI assistant analyzes feedback instantly, to help hospital improve emergency care and responsiveness.",
    image: "/assets/health-care8.png"
  },
  {
    title: "Real-Time Lab Results",
    description: "Access medical records and lab results, with simplified explanations, insights, and actionable steps based on the findings.",
    image: "/assets/health-care9.png"
  },
];

const UseCase: React.FC<UseCase> = ({ title, description, image }) => {
  return (
    <div className="w-full sm:w-[264px] h-[252px] rounded-lg overflow-hidden shadow-sm">
      {/* Top Section - Image */}
      <div className="h-[144px] bg-[#F3F4F6] flex justify-center items-center p-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Bottom Section - Description */}
      <div className="h-[108px] bg-white p-4 flex flex-col gap-2">
        <h3 className="text-[#20232C] font-medium text-sm">{title}</h3>
        <p className="text-[#9199B0] text-xs font-medium">{description}</p>
      </div>
    </div>
  );
};

const AutoMotive: React.FC = () => {
  return (
    <div className='p-6 bg-[#FCFCFD] w-full'>
      <div className="container mx-auto">
        <div className="mb-6">
          <h1 className="font-semibold text-2xl text-[#20232C] mb-2">Automotive</h1>
          <p className="font-medium text-sm text-[#9199B0]">
            Empowering hospitals with Gen-AI chatbots and voicebots for efficient 24/7 patient support, personalized
            assistance, and a seamless healthcare experience.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-[#20232C] mb-4">Use Cases</h2>

          {/* Large Screens: Grid Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <UseCase key={index} {...item} />
            ))}
          </div>

          {/* Medium Screens: 2 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            {useCases.map((item, index) => (
              <UseCase key={index} {...item} />
            ))}
          </div>

          {/* Small Screens: Single column layout */}
          <div className="grid md:hidden grid-cols-1 gap-4">
            {useCases.map((item, index) => (
              <UseCase key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-20 '>

        <div>
          {/* Your existing content */}
          <MotorHubBot />
        </div>
        
      </div>
    </div>
  );
};

export default AutoMotive;