import "./xheader.css";

export default function xheader() {
    return (
        <>
            <header id="header">
                
                <h1 id="site-title"><a href="App.jsx"><img id="site-logo" src="/img/logo.svg" alt="" /></a></h1>

                <nav>
                    <ul id="nav-contents">
                        <li><a id="nav-cont" href="#about">About</a></li>
                        <li><a id="nav-cont" href="#works">Works</a></li>
                        <li><a id="nav-cont" href="#news">News</a></li>
                        <li><a id="nav-cont" href="#contact">Contact</a></li>
                        <li><a href="https://www.instagram.com/"><img id="insta-logo" src="/img/icon-instagram.png" alt="" /></a></li>
                    </ul>
                </nav>
                
            </header>
        </>
    );
}
