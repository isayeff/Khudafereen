import React from 'react';
import { Container } from '../common/Container';

function Hero() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Image - positioned to show the graduate on the right */}
            <div className="absolute -z-10 inset-0 w-full h-full">
                <img
                    src="/hero/heroImage.png"
                    alt="Graduate student"
                    className="w-full h-full object-cover object-[70%_center]"
                />
            </div>

            {/* Overlay for better text readability (optional) */}
            <div className="absolute md:hidden inset-0 bg-[#aeaeae51] to-transparent"></div>

            {/* Content Overlay */}
            <Container>
                <div className="h-[70vh] xl:h-[85vh] py-15 relative z-10 flex flex-col justify-between md:justify-center md:gap-10 max-w-md">
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
                        <button className="bg-teal-700 w-1/2 hover:bg-teal-800 text-white font-semibold py-3 rounded transition-colors">
                            İlk addımı at
                        </button>
                        <button className="bg-[#ffffffc2] xuduText border-1 border-[bg-teal-800] w-1/2 hover:bg-gray-100 font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2">
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