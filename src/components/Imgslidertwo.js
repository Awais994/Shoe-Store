import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Imgslidertwo() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop  useKeyboardArrows autoPlay showThumbs={false} showIndicators={false} showStatus={false} showArrows={false}  >
                <div>
                    <img src="ban7.png" />
                </div>
                <div>
                    <img src="ban8.png" />
                </div>
                <div>
                    <img src="ban9.png" />
                </div>
                <div>
                    <img src="ban7.png"  />
                </div>
                <div>
                    <img src="ban6.png"  />
                </div>

            </Carousel>
        </div>
    );
}
