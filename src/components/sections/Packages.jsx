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

function Packages() {

    const packagesData = [
        {
            id: 1,
            name: "8 Noyabr",
            details: [
                "Araşdırma",
                "5-ə qədər universitetə müraciət",
                "Motivasiya və CV məktublarının hazırlanması",
                "Universitetlərlə yazışmalar və əlaqələrin idarə olunması"
            ]
        },
        {
            id: 2,
            name: "9 Noyabr",
            details: [
                "Araşdırma",
                "8-ə qədər universitetə müraciət",
                "Motivasiya və CV məktublarının hazırlanması",
                "Universitetlərlə yazışmalar və əlaqələrin idarə olunması",
                "Yataqxana müraciəti"
            ]
        },
        {
            id: 3,
            name: "10 Noyabr (Premium)",
            details: [
                "Araşdırma",
                "Limitsiz sayda universitetə müraciət",
                "Limitsiz sayda akademik təqaüdə müraciət",
                "Motivasiya məktubunun hazırlanması",
                "CV hazırlanması",
                "IELTS qeydiyyatına dəstək (BC)",
                "Müsahibə hazırlığı (DP, HTP, Viza)",
                "Partner universitetlərdə xüsusi dəstək",
                "Yataqxana müraciəti (rəsmi)",
                "Viza dəstəyi"
            ]
        },
        {
            id: 4,
            name: "PhD - 8 Noyabr",
            details: [
                "Araşdırma",
                "Öz universitetlərə müraciət",
                "Viza dəstəyi",
                "Təqaüd müraciəti",
                "Motivasiya məktubunun hazırlanması"
            ]
        },
        {
            id: 5,
            name: "PhD - 9 Noyabr",
            details: [
                "Araşdırma",
                "Öz universitetlərə müraciət",
                "Professorla danışıq aparılması",
                "Research proposal hazırlanmasına nəzarət",
                "Viza dəstəyi",
                "Təqaüd müraciəti",
                "Motivasiya məktubunun hazırlanması"
            ]
        },
        {
            id: 6,
            name: "PhD - 9 Noyabr (Ingilətərə, Amerikaya)",
            details: [
                "Araşdırma",
                "İngiltərə, Amerika daxil olmaqla digər ölkələrin özəl və dövlət universitetlərinə müraciət",
                "Professorla danışıq aparılması",
                "Research proposal hazırlanmasına nəzarət",
                "Viza dəstəyi",
                "Təqaüd müraciəti",
                "Motivasiya məktubunun hazırlanması"
            ]
        }
    ]

    return (
        <>
            <Container className="my-10">
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
                                    <SwiperSlide key={item.id} className='mb-40 rounded-sm border border-[#959595]'>
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