// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import {FreeMode, Freemode, Pagination} from 'swiper'



// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'I create memorable and impactful brand identities that resonate with your audience, helping your business leave a lasting impression in the market.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'My creative designs captivate and communicate, from stunning visuals to user-friendly interfaces, enhancing your visual identity and inspiring engagement.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'I build robust online solutions, including websites, apps, and software, tailored to your goals, ensuring your digital dreams become a reality.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'I craft compelling content and narratives that connect with your audience, inspire action, and tell your brand`s unique story.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Our data-driven approach boosts your online visibility, helping your website rise in search engine rankings, drive organic traffic, and increase conversions.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640:
    {slidesPerView: 3,spaceBetween: 15},

  }}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  modules={[FreeMode, Pagination]}
  className='h-[240px] sm:h-[340px]'
  
  >
    {
      serviceData.map((item, index)=> {
        return <SwiperSlide key={index}>
        <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
        hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
          {/* icon */}
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          {/* title and desc */}
          <div className='mb-8'>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[350px] leading-normal'>{item.description}</p>
          </div>
          {/* arrow */}
          <div className='text-3xl '>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
          </div>
        </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default ServiceSlider;
