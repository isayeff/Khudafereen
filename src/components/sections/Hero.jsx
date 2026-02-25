import React from 'react';
import { Container } from '../common/Container';

function Hero() {
    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            {/* Hero Image - positioned to show the graduate on the right */}
            <div className="absolute -z-10 inset-0 w-full h-full">
                <img
                    src="/hero/heroImage.png"
                    alt="Graduate student"
                    className="w-full h-full object-cover object-[70%_center]"
                />
            </div>

            {/* Overlay for better text readability (optional) */}
            <div className="absolute inset-0 bg-[#aeaeae51] to-transparent"></div>

            {/* Content Overlay */}
            <Container>
                <div className="relative mt-20 z-10 top-0 h-full flex flex-col justify-between max-w-md">
                    <div className='text-black w-[90%]'>
                        <h1 className="text-2xl font-bold mb-4 leading-tight">
                            Xaricdə təhsil arzunu gerçəkləşdir!
                        </h1>
                        <p className="text-sm mb-8 opacity-90">
                            2000+ uğurlu tələbə, 30+ təqaüd proqramı ilə biz sənin yanındayıq.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-50 w-full items-center justify-center">
                        <button className="bg-teal-700 w-1/2 hover:bg-teal-800 text-white font-semibold py-3 rounded transition-colors">
                            İlk addımı at
                        </button>
                        <button className="bg-[#ffffffc2] w-1/2 hover:bg-gray-100 text-teal-700 font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2">
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