import '../../styles/winSwiper.css'
import { Container } from '../common/Container'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { winnersData } from '../../data/siteData';
import Title from '../common/Title';

function Winners() {
    return (
        <>
            <div className='mt-20 mb-30'>
                <Container className='flex flex-col justify-center items-center text-center gap-5'>
                    <Title
                        title={"Haqqımızda və Uğurlarımız"}
                        description={`Bizim missiyamız gənclərimizin xaricdə keyfiyyətli təhsil almasına dəstək olmaq və onların 
                            gələcək karyeralarına möhkəm zəmin yaratmaqdır. Məqsədimiz tələbələrə düzgün seçimlərdə yol 
                            göstərmək və uğurlu gələcək qurmaqda onların etibarlı tərəfdaşı olmaqdır.`}
                    />
                    <h3 className='xuduText text-[1.3rem] font-bold'></h3>
                    <div className='text-[#898A8C]'>

                    </div>
                </Container>

                <Container>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        breakpoints={{
                            100: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            490: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper1"
                    >

                        {
                            winnersData.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className='relative z-1'>
                                        <div className='w-full h-full relative'>
                                            <div className='h-100'>
                                                <img src={item.imgPath} alt="" />
                                            </div>
                                            <div id='cardShortText' className='text-white text-start p-2 absolute bottom-0 translate-y-0 z-100'>
                                                <div className='font-bold'>
                                                    {item.name}
                                                </div>
                                                <div className='text-[12px] pl-2'>
                                                    • {item.shortText}
                                                </div>
                                            </div>
                                            <div id='cardTextOverlay'>
                                                {item.longText}
                                            </div>
                                            <div className='cardOverlay'></div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Container>
            </div>
        </>
    )
}

export default Winners