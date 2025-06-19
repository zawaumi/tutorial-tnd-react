export default function Xheader() {
    return (
        <>
            <header className="flex items-center justify-between max-w-[60.00rem] h-64 my-0 m-auto py-0 px-16 opacity-100;">
                
                <h1 className="block h-9;"><a href="App.jsx"><img className="w-28 h-9 max-w-full m-0 p-0;" src="/img/logo.svg" alt="" /></a></h1>

                <nav>
                    <ul className="flex w-80 h-7 m-0 py-2 px-0;">
                        <li className=" ml-8;"><a className="no-underline text-[#24292E] m-0 p-0 text-left text-[0.9rem]2" href="#about">About</a></li>
                        <li className=" ml-8;"><a className="text-[#24292E] m-0 p-0; text-left text-[0.90rem] leading-5" href="#works">Works</a></li>
                        <li className=" ml-8;"><a className="text-[#24292E] m-0 p-0; text-left text-[0.90rem] leading-5" href="#news">News</a></li>
                        <li className=" ml-8;"><a className="text-[#24292E] m-0 p-0; text-left text-[0.90rem] leading-5" href="#contact">Contact</a></li>
                        <li className=" ml-8;"><a href="https://www.instagram.com/"><img className="w-5 h-5;" src="/img/icon-instagram.png" alt="" /></a></li>
                    </ul>
                </nav>
                
            </header>
        </>
    );
}
