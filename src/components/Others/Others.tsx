import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
import finance1 from '/assets/finance1.png';
import finance2 from '/assets/finance2.png';
import finance3 from '/assets/finance3.png';
import finance4 from '/assets/finance4.png';
// import OkasBot from '../Okas';
import HarleyBot from '../HarleyLondon';
import WordWorksAIBot from '../WordWorksAI';


// Define the structure of a use case
interface UseCase {
  title: string;
  description: string;
  image: string; // Changed to any to accept the actual image import
  customHeight?: number; // Optional prop for custom height
}


const useCases: UseCase[] = [
  { 
    title: "Seamless Customer Onboarding", 
    description: "Automate KYC and document upload. Streamline onboarding processes for faster account activation.",
    image: finance1
  },
  {   
    title: "Personalized Multilingual Engagement", 
    description: "Engage borrowers in their preferred language. Enhance communication to improve retention and conversions.",
    image: finance2,
    customHeight: 272
  },
  { 
    title: "24/7 AI Assistance", 
    description: "Provide round-the-clock support for borrower inquiries. Enhance customer satisfaction with immediate responses.",
    image: finance3,
  },
  { 
    title: "Smart Debt Collection ", 
    description: "Leverage AI-driven payment reminders. Optimise recovery strategies for better outcomes.",
    image: finance4
  },
];

const UseCase: React.FC<UseCase> = ({ title, description, image, customHeight = 252 }) => {
  return (
    <div className={`w-full sm:w-[264px] rounded-lg overflow-hidden shadow-sm`} style={{ height: `${customHeight}px` }}>
      {/* Top Section - Image */}
      <div className="h-[144px] bg-[#F3F4F6] flex justify-center items-center p-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Bottom Section - Description */}
      <div className={`bg-white p-4 flex flex-col gap-2`} style={{ height: `${customHeight - 144}px` }}>
        <h3 className="text-[#20232C] font-medium text-sm">{title}</h3>
        <p className="text-[#9199B0] text-xs font-medium">{description}</p>
      </div>
    </div>
  );  
};
 
const Others: React.FC = () => {
  return (
    <div className='p-6 bg-[#FCFCFD] w-full'>
      <div className="container mx-auto">
        <div className="mb-6">
          <h1 className="font-semibold text-2xl text-[#20232C] mb-2">Others</h1>
          <p className="font-medium text-sm text-[#9199B0]">
            Empowering financial institutions with Gen-AI chatbots and voicebots for efficient 24/7 customer support, 
            personalized assistance, and seamless financial services.
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
          <HarleyBot />
        </div>
        <div>
          <WordWorksAIBot />
        </div>
        
      </div>
    </div>
  );
};

export default Others;