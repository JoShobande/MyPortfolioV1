import Image from "next/image";
import Link from "next/link";
import projects from '../../projects.json'


const Portfolio = () => {

    return(
        <section className='mt-[30px]'>
            <h1 className='text-[32px] lg:text-[42px]'>Project Portfolio</h1>
            <div className='lg:flex flex-wrap mt-[40px] justify-between'>
                {
                    projects.map((project, index)=>{
                        return(
                            <div className='border border-[#66CCFF] p-[20px] rounded-[8px] mb-[20px]' key={index}>
                                <div className='bg-[white] lg:w-[300px] h-[200px] rounded-[16px] mb-[10px] relative'>
                                    <Image
                                        src={project.image}
                                        alt='project1'
                                        layout='fill'
                                        objectFit='contain'

                                    />
                                </div>
                                <div className='w-[300px]'>
                                    <p className='mb-[10px] text-[16px]'>{project.name}</p>
                                    <p className='mb-[10px] text-[14px]'>
                                         {project.description}
                                    </p>    
                                    <div className='flex gap-x-[10px]'>
                                        {
                                            project.technology?.map((item, index)=>{
                                                return(
                                                    <p 
                                                        key={index}
                                                        className='bg-white rounded-[10px] text-[#101319] p-[10px] text-[12px]'> 
                                                        {item}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>  
                                <Link href={`${project.link}`} target='_blank'  className='flex flex-col items-center mt-[20px]'>
                                    <button className='bg-[white] text-[#06070A] text-[16px] font-[700] rounded-t-[20px] rounded-br-[20px] w-[250px] h-[50px]'>
                                        View Live
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;