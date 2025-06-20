export default function Xheader() {
    return (
        <div  className="flex items-center justify-between box-border max-w-[960px] h-[270px] mx-auto px-[4%] bg-white opacity-100">
            <div>
                <a href="App.jsx" className="block h-9">
                    <img 
                        className="box-border w-[120px] h-9 max-w-full m-0 p-0" 
                        src="/img/logo.svg" 
                        alt="" 
                    />
                </a>
            </div>
            
            <nav className="text-left font-[Meiryo] text-[0.9rem] flex items-center">
                <ul className="flex items-center box-border w-[346.6px] h-auto m-0 py-0 px-0">
                    <li className="list-none ml-[30px]">
                        <a className="no-underline m-0 p-0 text-[#24292E] hover:opacity-70" href="#about">About</a>
                    </li>
                    <li className="list-none ml-[30px]">
                        <a className="no-underline m-0 p-0 text-[#24292E] hover:opacity-70" href="#works">Works</a>
                    </li>
                    <li className="list-none ml-[30px]">
                        <a className="no-underline m-0 p-0 text-[#24292E] hover:opacity-70" href="#news">News</a>
                    </li>
                    <li className="list-none ml-[30px]">
                        <a className="no-underline m-0 p-0 text-[#24292E] hover:opacity-70" href="#contact">Contact</a>
                    </li>
                    <li className="list-none ml-[30px]">
                        <a href="https://www.instagram.com/">
                            <img 
                                className="w-5 h-5 hover:opacity-70"
                                src="/img/icon-instagram.png" 
                                alt="" 
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}