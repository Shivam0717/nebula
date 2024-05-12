import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function SPLIDER(){
    return(
        <>
     <Splide hasTrack={ false } aria-label="...">
  <SplideTrack>
    <SplideSlide>
    <img src="https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
    <img src="https://images.unsplash.com/photo-1499364520535-b9991714d9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNhZ2VzfGVufDB8fDB8fHww&w=1000&q=80" alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
    <img src="https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1"/>
    </SplideSlide>
  </SplideTrack>

  <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev">Prev</button>
    <button className="splide__arrow splide__arrow--next">Next</button>
  </div>
</Splide>
        </>
    )
}
export {SPLIDER}