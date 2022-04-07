import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
    const data = [
        {
            image: "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
            caption: "First Slide",
            description: "Description Here"
        },
        {
            image: "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
            caption: "Second Slide",
            description: "Description Here"
        },
        {
            image: "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
            caption: "Third Slide",
            description: "Description Here"
        }
    ]

    return (
        <div>
            <h1>React-Bootstrap Carousel Component - technostuf.com</h1>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            {data.map((slide, i) => {
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slide.image}
                                            alt={slide.caption}
                                        />
                                        <Carousel.Caption>
                                            <h3>{slide.caption}</h3>
                                            <p>{slide.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselComponent;