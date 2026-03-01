import { Container } from "../common/Container"
import Title from "../common/Title"
import { countriesData } from "../../data/siteData";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import Flag from 'react-world-flags'

function Countries() {
    return (
        <>
            <Container>
                <div>
                    <Title
                        title={"Bu ölkələrdə təhsil ala bilərsən"}
                        description={`Dünyanın aparıcı universitetlərində təhsil 
                                    almaq fürsətini sizə təqdim edirik.`}
                    />
                </div>
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            490: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper sm:px-12"
                    >

                        {
                            countriesData.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className='relative min-h-110 w-90'>
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                opacity: '15%'
                                            }}
                                            className="absolute w-full h-full top-0"
                                        >
                                        </div>
                                        <div className="z-10 p-5 flex flex-col gap-5">
                                            <div className="text-[#414141] text-xl font-bold flex justify-between  items-center gap-3">
                                                {item.name}
                                                <Flag
                                                    code={item.flag}
                                                    className="w-10 "
                                                    style={{ boxShadow: '1px 1px 10px #555' }}
                                                />
                                            </div>
                                            <div className="text-[#3b3b3b]">{item.description}</div>
                                            <div className="flex flex-col gap-1.5">
                                                {
                                                    item.points.map((item, i) => {
                                                        return (
                                                            <div className="text-[#6f6f6f]" key={i}><span className="font-bold">•</span> {item}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </Container>
        </>
    )
}

export default Countries