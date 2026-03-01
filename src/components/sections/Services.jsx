import { GoArrowUpRight } from 'react-icons/go';
import { Container } from '../common/Container'
import Title from '../common/Title';
import { serviceCards } from '../../data/siteData';

function Services() {

    return (
        <>
            <div className='bg-[#E8F1F1]'>
                <Container>
                    <Title
                        title={"Niyə Biz?"}
                        description={"Çünki biz təcrübəmiz, peşəkar komandamız və etibarlı nəticələrimizlə fərqlənirik."}
                    />
                    <div className='flex flex-col gap-7 md:flex-row md:flex-wrap justify-center items-center pb-10'>
                        {
                            serviceCards.map((item, i) => {
                                return (
                                    <div key={i} className='bg-[#F7FAFA] flex p-4 rounded-xl w-full md:w-96'>
                                        <div className='flex flex-col max-h-45 justify-between w-7/12'>
                                            <GoArrowUpRight color='white' size={40} className='xuduBg p-1 rounded-full' />
                                            <div>
                                                <div className='text-[18px] text-[#414141] font-bold'>{item.title}</div>
                                                <div className='text-[13px] text-[#898A8C] w-[95%]'>{item.description}</div>
                                            </div>
                                        </div>
                                        <div className='w-5/12'>
                                            <img className='w-full h-full object-cover' src={item.image} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Services