import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { scrollToSection } from '../../utils/helpers';

function Hero() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Image - positioned to show the graduate on the right */}
            <div className="absolute -z-10 inset-0 w-full h-full">
                <img
                    src="/hero/heroImage.png"
                    alt="Graduate student"
                    className="w-full h-full object-cover object-[70%_center]"
                    loading='lazy'
                />
            </div>

            {/* Overlay for better text readability (optional) */}
            <div className="absolute md:hidden inset-0 bg-[#aeaeae51] to-transparent"></div>

            {/* Content Overlay */}
            <Container>
                <div id='heroContent' className="h-[80dvh] xl:h-[88dvh] pt-20 pb-10 relative z-10 flex flex-col justify-between md:justify-center md:gap-10 max-w-md">
                    <div className='text-black w-[70%] md:w-[80%] lg:w-full flex flex-col gap-5'>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            Xaricdə təhsil arzunu gerçəkləşdir!
                        </h1>
                        <p className="text-sm md:text-[1rem] opacity-90">
                            2000+ uğurlu tələbə, 30+ təqaüd proqramı ilə biz sənin yanındayıq.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 text-sm md:text-[1rem] w-full items-center justify-center">
                        <button onClick={() => scrollToSection("olkeler")} className="xuduBg w-1/2 cursor-pointer hover:bg-[#115b58]! hover:scale-105 transition-all text-white font-semibold py-3 rounded">
                            Ölkələr
                        </button>
                        <button onClick={() => scrollToSection("paketler")} className="bg-[#ffffffc2] cursor-pointer  xuduText border border-[bg-teal-800] w-1/2 hover:bg-gray-100! hover:scale-105 hover:shadow-xl transition-all font-semibold py-3 rounded flex items-center justify-center gap-2">
                            Paketlərimiz
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Hero;