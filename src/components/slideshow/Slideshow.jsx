"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Slideshow extends Component {
    render() {
        return (
            <Carousel showThumbs={false} autoPlay={true} transitionTime={1000} infiniteLoop={true}>
                <div>
                    <img src="/p1.jpg"/>
                </div>
                <div>
                    <img src="/p2.jpg"/>
                </div>
                <div>
                    <img src="/p3.jpg"/>
                </div>
            </Carousel>
        );
    }
};

export default Slideshow
