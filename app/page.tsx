

export default function Home() {
  return (
    <main className=' mt-[80px] lg:mt-[100px]'>
      <div className='lg:flex items-center justify-between gap-x-[50px]'>
          <div className=''>
            <p className='text-[18px] lg:text-[32px] font-[300]'>Hello, my name is</p>
            <p className='text-[44px] lg:text-[94px] font-[400] leading-[55.31px] lg:leading-[118.16px]'>Josephine</p>
            <p className='text-[44px] lg:text-[94px] font-[400] leading-[55.31px] lg:leading-[118.16px]'>Shobande</p>
            <p className='text-[18px] lg:text-[32px] font-[300]'>Front-end developer</p>
          </div>
          <div className='lg:w-[50%] text-[14px] lg:text-[18px] text-[#707FB7] mt-[20px] lg:mt-[0]'>
            <p>
              I am a passionate Front-End Developer with a keen eye for user-centric design and a knack for crafting engaging web experiences.
              With 3+ years of experience in front-end development, I specialize in bringing designs to live using the latest frontend technologies.
            </p>
            <p className='mt-[20px]'>
              My goal is to create intuitive, responsive and visually appealing websites.
              Feel free to explore my portfolio and do not hesitate to get in touch to discuss how we can collaborate on your next web venture.
            </p>
            <p className='mt-[20px]'> Let's build something remarkable together!</p>
          </div>
      </div>
    </main>
  );
}
