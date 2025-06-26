import { useState, useEffect } from "react";

export default function Xheader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#works", label: "Works" },
        { href: "#news", label: "News" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <div className={`
            flex items-center justify-between box-border max-w-[960px] mx-auto px-[4%] 
            bg-white transition-all duration-500 ease-out
            ${isScrolled ? 'h-[180px] shadow-lg' : 'h-[270px]'}
        `}>
            {/* ロゴ部分 */}
            <div className="group">
                <a href="App.jsx" className="block h-9 transition-transform duration-300 hover:scale-110">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            className="box-border w-[120px] h-9 max-w-full m-0 p-0 transition-all duration-300 group-hover:brightness-110"
                            src="/img/logo.svg"
                            alt=""
                        />
                        {/* ロゴホバー時のシャイン効果 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </div>
                </a>
            </div>
        
            {/* ナビゲーション */}
            <nav className="text-left font-[Meiryo] text-[0.9rem] flex items-center">
                <ul className="flex items-center box-border w-[346.6px] h-auto m-0 py-0 px-0">
                    {navItems.map((item, index) => (
                        <li 
                            key={item.href}
                            className="list-none ml-[30px] animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <a 
                                className="relative no-underline m-0 p-2 text-[#24292E] 
                                            transition-all duration-300 hover:text-blue-600 
                                            hover:-translate-y-1 hover:scale-105 block group"
                                href={item.href}
                                onMouseEnter={() => setActiveNav(item.href)}
                                onMouseLeave={() => setActiveNav('')}
                            >
                                {item.label}
                                {/* アンダーラインアニメーション */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                                                from-blue-500 to-purple-500 group-hover:w-full 
                                                transition-all duration-300"></span>
                                
                                {/* ホバー時のグロー効果 */}
                                <span className="absolute inset-0 rounded-md bg-blue-500/0 
                                                group-hover:bg-blue-500/10 transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                    
                    {/* Instagram アイコン */}
                    <li className="list-none ml-[30px] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a 
                            href="https://www.instagram.com/"
                            className="block p-2 group relative"
                        >
                            <div className="relative">
                                {/* カスタムInstagramアイコン */}
                                <div className="w-5 h-5 relative transition-all duration-300 
                                                group-hover:scale-125 group-hover:rotate-12">
                                    <div className="w-full h-full border-2 border-[#24292E] rounded-lg 
                                                    group-hover:border-pink-500 transition-colors duration-300"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                                    w-2 h-2 border border-[#24292E] rounded-full 
                                                    group-hover:border-pink-500 transition-colors duration-300"></div>
                                    <div className="absolute top-1 right-1 w-1 h-1 bg-[#24292E] rounded-full 
                                                    group-hover:bg-pink-500 transition-colors duration-300"></div>
                                </div>
                                {/* Instagram アイコンのカラフルなグロー効果 */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                                                from-pink-500 via-purple-500 to-orange-500 
                                                opacity-0 group-hover:opacity-30 blur-md 
                                                transition-all duration-300 scale-150"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* カスタムCSS */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
                    }
                }
            `}</style>
        </div>
    );
}