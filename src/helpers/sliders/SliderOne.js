import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";


export default function SliderOne({ props }) {
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider slider-1">
            <div className="title">
                <h2> Slider-1 </h2>
                <p>Show All</p>
            </div>
            <Slider {...settings}>
                {
                    props.map((el, index) => (
                        <div className="slide-item-1" key={index}>
                            <p>Allergies</p>
                            <div className="slick-slide-1-img-area">
                                <img src={el} />
                            </div>
                        </div>
                    ))
                }

            </Slider>
        </div>
    );
}