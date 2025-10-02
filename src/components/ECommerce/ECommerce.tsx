import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
import ecommerce1 from '/assets/ecommerce1.png';
import ecommerce2 from '/assets/ecommerce2.png';
import ecommerce3 from '/assets/ecommerce3.png';
import ecommerce4 from '/assets/ecommerce4.png';
import FreshMillersBot from '../FreshMillersBot';
import WatermelonBot from '../WaterMelonBot';


// Define the structure of a use case
interface UseCase {
  title: string;
  description: string;
  image: string; // Changed to accept the actual image import 
}


const useCases: UseCase[] = [
  { 
    title: "Customer Support & Insights", 
    description: "24/7 AI assistance for queries on shipping, returns, and policies to enhance shopping experiences.",
    image: ecommerce1
  },
  {   
    title: "Ordering, Tracking & Engagement ", 
    description: "Real-time updates, secure payments, and seamless purchasing. ",
    image: ecommerce2
  },
  { 
    title: "Intelligent Cart Recovery", 
    description: "Notify customers when out-of-stock items are back Matching new products interest with users.",
    image: ecommerce3
  },
  { 
    title: "Order Tracking & Upselling", 
    description: "Provide real-time updates on order status. Suggest complementary or upgraded products to boost order value.",
    image: ecommerce4
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
 
const ECommerce: React.FC = () => {
  return (
    <div className='p-6 bg-[#FCFCFD] w-full'>
      <div className="container mx-auto">
        <div className="mb-6">
          <h1 className="font-semibold text-2xl text-[#20232C] mb-2">E-commerce</h1>
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
          <FreshMillersBot />
        </div>
        <div>
          <WatermelonBot />
        </div>
       
      </div>      
    </div>
  );
};

export default ECommerce;