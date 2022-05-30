import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Imgslider() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop  useKeyboardArrows autoPlay showThumbs={false} showIndicators={false} showStatus={false} showArrows={false}  >
                <div>
                    <img src="ban1.png" />
                </div>
                <div>
                    <img src="ban2.png" />
                </div>
                <div>
                    <img src="ban3.png"  />
                </div>
                <div>
                    <img src="ban4.png"  />
                </div>

            </Carousel>
        </div>
    );
}

