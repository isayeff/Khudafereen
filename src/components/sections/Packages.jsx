import { Container } from "../common/Container"
import Title from "../common/Title"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import Flag from 'react-world-flags'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { packagesData } from "../../data/siteData";

function Packages() {
    return (
        <>
            <Container className="my-10">
                <div>
                    <Title
                        title={"Sənin üçün uyğun paket seç"}
                        description={`Fərqli ehtiyaclara uyğun hazırlanmış ödəniş paketlərimizi kəşf edin.
                                      Gələcəyiniz üçün ən uyğun planı seçin.`}
                    />
                </div>
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            640: {
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
                            packagesData.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className='rounded-sm border border-[#959595]'>
                                        <div className="min-h-130 flex flex-col justify-between w-full p-5">
                                            <div className="flex flex-col gap-2">
                                                <div className="text-[#414141] text-xl font-bold flex justify-between gap-3">
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
                                                        item.details.map((item, i) => {
                                                            return (
                                                                <div className="flex items-center gap-1" key={i}>
                                                                    <span className="font-bold"><IoCheckmarkDoneCircle className="xuduText" /></span>
                                                                    <div className="text-[#6f6f6f]">{item}</div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <button className="xuduBg w-full hover:bg-teal-800 text-white font-semibold py-3 rounded transition-colors">
                                                İlk addımı at
                                            </button>
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

export default Packages