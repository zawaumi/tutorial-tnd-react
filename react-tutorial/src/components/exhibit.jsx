import "./exhibit_style.css";
import { useEffect, useRef } from "react";
import { exhibit_script } from "./exhibit_script.js";

export default function Exhibit() {
  const carouselRef = useRef(null);

  useEffect(() => {
    exhibit_script();
  }, []);

  const scrollAmount = 310;

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      <section id="works">
        <h2>Works</h2>
        <div className="carousel-container">
          <button className="scroll-btn left" onClick={scrollLeft}><span class="material-icons">chevron_left</span></button>
          <div className="carousel" id="carousel" ref={carouselRef}>
            <div className="spacer"></div>
            <img src="/img/works1.jpg" alt="Photo 1" />
            <img src="/img/works2.jpg" alt="Photo 2" />
            <img src="/img/works3.jpg" alt="Photo 3" />
            <img src="/img/works4.jpg" alt="Photo 4" />
            <img src="/img/works5.jpg" alt="Photo 5" />
            <img src="/img/works6.jpg" alt="Photo 6" />
            <div className="spacer"></div>
          </div>
          <button className="scroll-btn right" onClick={scrollRight}><span class="material-icons">chevron_right</span></button>
        </div>
        <div className="indicator-container" id="indicators"></div>
      </section>
    </>
  );
}
