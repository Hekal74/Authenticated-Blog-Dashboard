// import { useState } from "react";
// import SideBar from "../SideBar/SideBar";
import AnalyticsSection from "../AnalyticsSection";
import AtlassianLogo from "/assets/Logo Box.svg";
import AmazonLogo from "/assets/Logo Box-1.svg";
import GoogleLogo from "/assets/Logo Box-2.svg";
import ZohoLogo from "/assets/Logo Box-3.svg";
import MicrosoftLogo from "/assets/Logo Box-4.svg";
import WhatsappLogo from "/assets/Logo Box-5.svg";
import TelegramLogo from "/assets/Logo Box-6.svg";
import InstaLogo from "/assets/Logo Box-7.svg";
import OtherIntegrationLogo from "/assets/Logo Box-8.svg";
import MessengerLogo from "/assets/Logo Box-9.svg";
import BajajLogo from "/assets/Logo Box-10.svg";
import HyundaiLogo from "/assets/Logo Box-12.svg";
import ApolloLogo from "/assets/Logo Box-11.svg";
import PepsiLogo from "/assets/Logo Box-13.svg"; 
import FortisLogo from "/assets/Logo Box-14.svg";

const MainContent = () => { 
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  return (
    <div className="flex bg-[#FCFCFD] min-h-screen flex-1 w-full"> 
      <div className="flex-grow transition-all duration-300 w-full">
        <div className="p-4 lg:p-6 w-full">
          <div className='h-auto md:h-[156px] gap-4 flex-col flex'>
            <div className="text-left w-full h-auto md:h-[80px]">
              <h1 className="font-semibold text-2xl h-auto md:h-[32px] text-[#20232C]">Welcome to WordWorksAI</h1>
              <p
                className={'font-medium text-sm h-auto md:h-[40px] mt-2 lg:text-left'}
                style={{ color: "#9199B0" }}
              >
                Enhance response accuracy and speed with our Gen AI chatbots, providing instant,
                reliable support 24/7 to <br className="hidden md:block" /> boost customer engagement and efficiency.
              </p>
            </div>
            <div
              className={`justify-between h-auto md:h-[60px] w-full flex flex-col md:flex-row gap-5`}
            >
              {/* Our Partners */}
              <div  
                className={`text-center w-full md:w-1/3 lg:w-[360px] lg:text-left flex flex-row items-center justify-between gap-5 bg-white px-4 py-2 border-[1px] border-[#F3F4F6] rounded-md`}
              >
                <p className={`mt-0 text-[#20232C] text-sm font-medium leading-5`}>Our Partners</p>
                <div className="flex w-[168px] -space-x-2 lg:mb-3">
                  <img
                    className={`transition-all h-10 sm:w-8 sm:h-8 w-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={AtlassianLogo}
                    alt="atlassiam-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={AmazonLogo}
                    alt="aws-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={GoogleLogo}
                    alt="google-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={ZohoLogo}
                    alt="zoho-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={MicrosoftLogo}
                    alt="microsoft-logo"
                  />
                </div>
              </div>
              {/* Integrations */}
              <div  
                className={`text-center w-full md:w-1/3 lg:text-left flex flex-row items-center justify-between gap-5 bg-white px-4 py-2 lg:w-[360px] border-[1px] border-[#F3F4F6] rounded-md`}
              >
                <p className={`mt-0 text-[#20232C] text-sm font-medium leading-5`}>Integrations</p>
                <div className="flex w-[168px] -space-x-2 lg:mb-3">
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={WhatsappLogo}
                    alt="whatsapp-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={TelegramLogo}
                    alt="telegram-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={InstaLogo}
                    alt="insta-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={OtherIntegrationLogo}
                    alt="other-integration"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={MessengerLogo}
                    alt="messanger-logo"
                  />
                </div>
              </div>
              {/* Our Customers */}
              <div
                className='text-center w-full md:w-1/3 lg:text-left flex flex-row justify-between items-center gap-5 bg-white px-2 py-2 lg:w-[360px] border-[1px] border-[#F3F4F6] rounded-md'
              >
                <p className='mt-0 text-[#20232C] text-sm font-medium leading-5'>Our Customers</p>
                <div className="flex w-[168px] -space-x-2 lg:mb-3">
                  <img  
                    className='transition-all w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 lg:mt-2'
                    src={BajajLogo}
                    alt="bajaj-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={HyundaiLogo}
                    alt="hyundai-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={ApolloLogo}
                    alt="apollo-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={PepsiLogo}
                    alt="pepsi-logo"
                  />
                  <img
                    className={`transition-all sm:w-8 sm:h-8 w-10 h-10 lg:w-10 lg:h-10 lg:mt-2`}
                    src={FortisLogo}
                    alt="fortis-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Analytics Section */}
          <AnalyticsSection />
        </div>
      </div>
    </div>
  );
};
export default MainContent;