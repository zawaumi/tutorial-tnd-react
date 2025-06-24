import "./exhibit_style.css"
import "./exhibit_script.js"

export default function Exhibit(){
  return(
    <>
      <section id="works">
        <h2>Works</h2>
        <div className="carousel-container">
          <button className="scroll-btn left" onClick="scrollleft()">&#10094;</button>
          <div className="carousel" id="carousel">
            <div className="spacer"></div>
            <img src="/img/works1.jpg" alt="Photo 1"></img>
            <img src="/img/works2.jpg" alt="Photo 2"></img>
            <img src="/img/works3.jpg" alt="Photo 3"></img>
            <img src="/img/works4.jpg" alt="Photo 4"></img>
            <img src="/img/works5.jpg" alt="Photo 5"></img>
            <img src="/img/works6.jpg" alt="Photo 6"></img>
            <div className="spacer"></div>
          </div>
          <button className="scroll-btn right" onClick="scrollright()">&#10095;</button>
        </div>
        <div className="indicator-container" id="indicators"></div>

        </section>
    </>
);
}