import { Container } from "../common/Container"
import Title from "../common/Title"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import Flag from 'react-world-flags'

function Countries() {

    const countriesData = [
        {
            id: 1,
            name: "Macarıstan",
            flag: "HU",
            image: "/countries/hungary.jpg",
            description:
                "Stipendium Hungaricum proqramı çərçivəsində beynəlxalq tələbələrə tam maliyyəli təhsil imkanı təqdim edilir. Bakalavr, magistr və doktorantura səviyyələrini əhatə edir.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq 130 EUR yaşayış müavinəti",
                "Pulsuz yataqxana və ya aylıq 40.000 HUF ev icarəsi dəstəyi",
                "Tibbi sığorta",
            ],
        },
        {
            id: 2,
            name: "Litva",
            flag: "LT",
            image: "/countries/lithuania.jpg",
            description:
                "Litva Dövlət Təqaüdü proqramı magistr və qısamüddətli tədris üçün tam maliyyə dəstəyi təqdim edir. Azərbaycan Litvanın əlaqədar ölkələr siyahısında yer alır.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq 550–825 EUR yaşayış müavinəti",
                "Yarım iş saatı çalışmaq hüququ",
                "Məzuniyyətdən sonra 15 ay qalma icazəsi",
            ],
        },
        {
            id: 3,
            name: "Estoniya",
            flag: "EE",
            image: "/countries/estonia.jpg",
            description:
                "Estoniya Hökuməti Təqaüdü magistr və doktorantura səviyyələri üçün maliyyə dəstəyi təqdim edir. Azərbaycan prioritet ölkələr qrupunda yer alır.",
            points: [
                "Aylıq 350 EUR (magistr) / 660 EUR (doktorantura) müavinəti",
                "Bütün sahələrdə magistr dəstəyi",
                "Mübadiləçi tələbə imkanları",
                "Məzuniyyətdən sonra 9 ay qalma icazəsi",
            ],
        },
        {
            id: 4,
            name: "Latviya",
            flag: "LV",
            image: "/countries/latvia.jpg",
            description:
                "Latviya Dövlət Təqaüdü bakalavr, magistr və doktorantura tələbələrinə aylıq maliyyə dəstəyi verir. Avropa İttifaqı üzvü ölkədə keyfiyyətli təhsil imkanı.",
            points: [
                "Aylıq 500 EUR (bakalavr) / 600 EUR (magistr) / 700 EUR (doktorantura)",
                "Bakalavr, Magistr və PhD tədrisinə dəstək",
                "Yarım iş saatı çalışmaq hüququ",
                "30-dan çox ölkə tələbəsi üçün açıqdır",
            ],
        },
        {
            id: 5,
            name: "Polşa",
            flag: "PL",
            image: "/countries/poland.jpg",
            description:
                "NAWA Banach Təqaüd Proqramı inkişaf etməkdə olan ölkələrdən olan tələbələrə Polşada magistr dərəcəsi almaq üçün tam maliyyəli imkan təqdim edir.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq 1.700 PLN yaşayış müavinəti",
                "Polşa dili kurslarına dəstək",
                "Yerləşmə dəstəyi",
            ],
        },
        {
            id: 6,
            name: "Çin",
            flag: "CN",
            image: "/countries/china.webp",
            description:
                "Çin Hökuməti Təqaüdü (CSC) bakalavr, magistr və doktorantura üçün tam maliyyəli proqram təklif edir. Dünyanın ən böyük təqaüd proqramlarından biridir.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq 2.500–3.500 CNY müavinəti",
                "Pulsuz yataqxana",
                "Tibbi sığorta",
            ],
        },
        {
            id: 7,
            name: "Böyük Britaniya",
            flag: "GB",
            image: "/countries/uk.avif",
            description:
                "Chevening Təqaüdü gələcəyin liderlərinə Böyük Britaniyada 1 illik magistr proqramı üçün tam dövlət maliyyəsi təqdim edir. Dünyada ən prestijli proqramlardan biridir.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq yaşayış müavinəti",
                "Gediş-qayıdış aviabilet",
                "Viza xərclərinin ödənilməsi",
            ],
        },
        {
            id: 8,
            name: "İtaliya",
            flag: "IT",
            image: "/countries/italy.jpg",
            description:
                "İtaliya Hökuməti Təqaüdü magistr və doktorantura tələbələrinə aylıq müavinət və tam təhsil haqqı azadolması təqdim edir. \"Invest Your Talent\" proqramı da mövcuddur.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq 900 EUR müavinəti (cəmi 8.100 EUR)",
                "Tibbi sığorta",
                "Universitetlərin öz təqaüd proqramları",
            ],
        },
        {
            id: 9,
            name: "İsveç",
            flag: "SE",
            image: "/countries/sweden.jpg",
            description:
                "İsveç İnstitutu Qlobal Peşəkarlar üçün Təqaüd (SISGP) proqramı magistr tədrisinə tam maliyyəli dəstək verir. Liderlik potensialı olan tələbələr üçün nəzərdə tutulub.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq 12.000 SEK (~1.100 USD) müavinəti",
                "15.000 SEK səyahət qrantı",
                "Qlobal peşəkarlar şəbəkəsinə üzvlük",
            ],
        },
        {
            id: 10,
            name: "Türkiyə",
            flag: "tr",
            image: "/countries/turkiye.jpg",
            description:
                "Türkiyə Burslari proqramı bakalavr, magistr və doktorantura üçün tam maliyyəli dövlət təqaüdü təqdim edir. Universitetə yerləşdirmə xidməti də daxildir.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Aylıq müavinət (bakalavr: 4.500 TL, magistr: 6.500 TL, doktorantura: 9.000 TL)",
                "Pulsuz yataqxana",
                "Gediş-qayıdış aviabilet və sağlamlıq sığortası",
            ],
        },
        {
            id: 11,
            name: "Almaniya",
            flag: "de",
            image: "/countries/germany.avif",
            description:
                "DAAD Təqaüdü magistr və doktorantura tələbələrinə aylıq müavinət və dəstək paketləri təqdim edir. Dövlət universitetlərinin əksəriyyəti onsuz da pulsuz təhsil verir.",
            points: [
                "Dövlət universitetlərində ödənişsiz təhsil",
                "Aylıq 992 EUR (magistr) / 1.300 EUR (doktorantura) DAAD müavinəti",
                "Sağlamlıq, qəza və məsuliyyət sığortası",
                "Səyahət müavinəti",
            ],
        },
        {
            id: 12,
            name: "Çexiya",
            flag: "cz",
            image: "/countries/czech.jpg",
            description:
                "Çexiya Hökuməti inkişaf etməkdə olan ölkələrdən tələbələr üçün magistr və doktorantura proqramları üzrə dövlət təqaüdləri təqdim edir. Çex dilini öyrənmək üçün hazırlıq kursu da mövcuddur.",
            points: [
                "Tam təhsil haqqından azadolma",
                "Çex dili hazırlıq kursuna dəstək",
                "Magistr və doktorantura proqramları əhatə olunur",
                "Universitet daxili əlavə təqaüd imkanları",
            ],
        },
    ];

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