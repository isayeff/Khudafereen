import { useState } from 'react';
import { Container } from '../common/Container';
import { CONTACT_INFO } from '../../data/siteData';

const { email, phone, phoneAlt, address, workingHours, social } = CONTACT_INFO

const SuccessPage = ({ onBack }) => (
    <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/contact/contactBG.png")' }}
    >

        <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Animated checkmark circle */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#1a9e8f' }}>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                    <path
                        d="M10 24L20 34L38 14"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            strokeDasharray: 50,
                            strokeDashoffset: 0,
                            animation: 'drawCheck 0.6s ease forwards',
                        }}
                    />
                </svg>
            </div>

            <h1 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Təşəkkürlər!
            </h1>
            <p className="text-white/80 text-lg mb-3 max-w-md">
                Mesajınız uğurla göndərildi. Khudafereen tezliklə sizinlə əlaqə saxlayacaq.
            </p>
            <p className="text-white/60 text-sm mb-10">
                Gözlənilən cavab müddəti: <span className="text-white/80">1–2 iş günü</span>
            </p>

            <button
                onClick={onBack}
                className="px-6 py-2 rounded text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#1a9e8f', letterSpacing: '0.05em' }}
            >
                Yeni Mesaj Yolla
            </button>

            {/* Info row */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 text-white/70 text-sm">
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                    </div>
                    <div>
                        <p>{workingHours.weekday}</p>
                        <p>{workingHours.saturday}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                    </div>
                    <div>
                        <p>{phone}</p>
                        <p>{phoneAlt}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <p>{email}</p>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>

        <style>{`
      @keyframes drawCheck {
        from { stroke-dashoffset: 50; }
        to { stroke-dashoffset: 0; }
      }
    `}</style>
    </div>
);

export default function ContactForm() {
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult('');

        const formData = new FormData(event.target);
        formData.append('access_key', 'ba7065fa-d962-466b-b002-67a82b8fa1a5');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                setSuccess(true);
                event.target.reset();
            } else {
                setResult('Something went wrong. Please try again.');
            }
        } catch {
            setResult('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return <SuccessPage onBack={() => setSuccess(false)} />;
    }

    const inputStyle = "bg-white/10 border border-white/25 rounded px-3 py-2 w-full text-white text-sm outline-none focus:border-teal-500 transition";

    const labelStyle = "text-white text-sm font-medium mb-2 block";

    return (
        <div
            id='elaqe'
            className="my-20 relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-cover bg-center"
            style={{ backgroundImage: 'url("/contact/contactBG.png")' }}
        >

            {/* Container */}
            <Container>
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-white text-3xl font-bold mb-4">
                        Bizimlə Əlaqə
                    </h1>
                    <p className="text-white/80 text-sm max-w-md mx-auto">
                        Xidmətlərimiz barədə daha ətraflı məlumat üçün komandamızla əlaqə yaradın.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit}>
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className={labelStyle}>Ad</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Adınızı daxil edin"
                                required
                                className={inputStyle}
                            />
                        </div>
                        <div>
                            <label className={labelStyle}>Telefon nömrəsi</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telefon nömrənizi daxil edin"
                                required
                                className={inputStyle}
                            />
                        </div>
                    </div>

                    {/* Row 2: Email + Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className={labelStyle}>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail adresinizi daxil edin"
                                required
                                className={inputStyle}
                            />
                        </div>
                        <div>
                            <label className={labelStyle}>Mövzu</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Məlumat almaq istədiyiniz mövzu"
                                className={inputStyle}
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label className={labelStyle}>Message</label>
                        <textarea
                            name="message"
                            placeholder="Mesajınızı daxil edin..."
                            required
                            rows={4}
                            className={`${inputStyle} resize-y min-h-25`}
                        />
                    </div>

                    {/* Error */}
                    {result && (
                        <p className="text-red-500 text-center mb-4">{result}</p>
                    )}

                    {/* Submit */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="xuduBg cursor-pointer w-full md:w-2/3 hover:bg-teal-800 text-white font-semibold py-3 rounded transition-colors"
                        >
                            {loading ? 'Göndərilir...' : 'Göndər'}
                        </button>
                    </div>
                </form>

                {/* Bottom info bar */}
                <div className="flex flex-wrap justify-center gap-10 mt-12 border-t pt-8 text-white/80 text-sm">
                    {/* Hours */}
                    <div className="flex items-center gap-4">
                        <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <div>
                            <p>{workingHours.weekday}</p>
                            <p>{workingHours.saturday}</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <p>{phone}</p>
                            <p>{phoneAlt}</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4">
                        <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <p>{email}</p>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}