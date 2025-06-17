import "./exhibit_style.css"
import "./exhibit_script.js"

function exhibit(){
  return(
    <>
      <section id="works">
        <h2>Works</h2>
        <div class="carousel-container">
          <button class="scroll-btn left" onclick="scrollleft()">&#10094;</button>
          <div class="carousel" id="carousel">
            <div class="spacer"></div>
            <img src="works1.jpg" alt="Photo 1"></img>
            <img src="works2.jpg" alt="Photo 2"></img>
            <img src="works3.jpg" alt="Photo 3"></img>
            <img src="works4.jpg" alt="Photo 4"></img>
            <img src="works5.jpg" alt="Photo 5"></img>
            <img src="works6.jpg" alt="Photo 6"></img>
            <div class="spacer"></div>
          </div>
          <button class="scroll-btn right" onclick="scrollright()">&#10095;</button>
        </div>
        <div class="indicator-container" id="indicators"></div>

        </section>
    </>
);
}

export default exhibit;