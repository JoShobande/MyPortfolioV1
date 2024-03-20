import Image from "next/image"


const Skills = () => {

    const skills = [
        {
            name: 'Javascript',
            level: '95%'
        },
        {
            name: 'Typescript',
            level: '80%'
        },
        {
            name: 'React',
            level: '98%'
        },
        {
            name: 'Next',
            level: '80%'
        },
        {
            name: 'HTML',
            level: '100%'
        },
        {
            name: 'CSS',
            level: '100%'
        },
        {
            name: 'SASS',
            level: '98%'
        },
        {
            name: 'Tailwind',
            level: '98%'
        },
        {
            name: 'GitHub',
            level: '90%'
        },
      
    ]
    
    return(
        <section className='mt-[30px] pb-[50px]'>
            <h1 className='text-[32px] lg:text-[42px]'>Skills & Experience</h1>
            <div className='lg:grid grid-cols-2 gap-x-[200px]  mt-[20px]'>
                <div className='bg-[#101319] w-full p-[20px] lg:p-[30px]'>
                    {
                        skills?.map((skill, index)=>{
                            return(
                                <div key={index} className='grid grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr] mb-[20px] lg:mb-[30px]'>
                                    <p className='w-max text-[14px] lg:text-[16px]'>{skill.name}</p>
                                    <div className='bg-[#A8ADB7] w-full rounded-[10px]'> 
                                        <div className={`bg-[#CED4E0] h-[30px] rounded-l-[10px] ${skill.level === '100%' ? `rounded-r-[10px]` : ''}`} style={{width: `${skill.level}`}}  />
                                    </div>  
                                </div>
                            )
                        })
                    }
                </div>

                <div className='mt-[50px] lg:mt-0'>
                    <div className='flex'>
                        <div>
                            <div className='w-[32px] h-[32px] rounded-full border  border-[#66CCFF]'/>
                            <div className='flex flex-col items-center'>
                                <div className='h-[100px] bg-white w-[1px] mt-[10px] mb-[10px]'/>
                            </div>
                            
                        </div>
                        <div className='ml-[20px]'>
                            <p>2009-2010</p>
                            <p>consectetur adipiscing elit. Non mass dolor. </p>
                        </div>
                        
                    </div>
                    <div className='flex'>
                        <div>
                            <div className='w-[32px] h-[32px] rounded-full border  border-[#66CCFF]'/>
                            <div className='flex flex-col items-center'>
                                <div className='h-[100px] bg-white w-[1px] mt-[10px]  mb-[10px]'/>
                            </div>
                            
                        </div>
                        <div className='ml-[20px]'>
                            <p>2009-2010</p>
                            <p>consectetur adipiscing elit. Non mass dolor. </p>
                        </div>
                        
                    </div>
                    <div className='flex'>
                        <div>
                            <div className='w-[32px] h-[32px] rounded-full border  border-[#66CCFF]'/>
                            <div className='flex flex-col items-center'>
                                <div className='h-[100px] bg-white w-[1px] mt-[10px]  mb-[10px]'/>
                            </div>
                            
                        </div>
                        <div className='ml-[20px]'>
                            <p>2009-2010</p>
                            <p>consectetur adipiscing elit. Non mass dolor. </p>
                        </div>
                        
                    </div>
                    <div className='flex'>
                        <div>
                            <div className='w-[32px] h-[32px] rounded-full border  border-[#66CCFF]'/>
                            {/* <div className='flex flex-col items-center'>
                                <div className='h-[100px] bg-white w-[1px] mt-[10px]'/>
                            </div> */}
                            
                        </div>
                        <div className='ml-[20px]'>
                            <p>2009-2010</p>
                            <p>consectetur adipiscing elit. Non mass dolor. </p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Skills;