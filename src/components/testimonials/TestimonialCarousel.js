import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard"
import Linda from '../../assets/linda.jpg';
import Annalise from '../../assets/annalise.jpg';
import DorothyNate from '../../assets/dorothy&nate.jpg';
import Maria from '../../assets/maria.jpg';
import Micah from '../../assets/micah.jpg';
import Pablo from '../../assets/pablo.jpg';
import PaulaRyan from '../../assets/paula&ryan.jpg';
import MarkGiselle from '../../assets/mark&giselle.jpg';
import "./testimonials.css";
import { useState, useRef, useEffect } from 'react';




    const TestimonialCarousel = (props) => {
        
        const {children, show, infiniteLoop} = props;

        props = [1, 2, 3, 4, 5, 6, 7, 8]

        const data = [
            { _id: 1, name:"Micheal Caldwell", review:"This is the best Mediterranean food that I've ever had!", image:{MarkGiselle} },
            { _id: 2, name:"Alan Chen", review:"My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",  image:{Pablo} },
            { _id: 3, name:"Casey Lau", review:"I've had some great Mediterranean food before, but none of them beatsLittle Lemon in flavor and texture.",  image:{PaulaRyan} },
            { _id: 4, name:"John Rosenblum", review:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",  image:{Annalise} },
            { _id: 5, name:"Jim Reynor", review:"The food here really refreshed me after a late night shift at the local supply depot.",  image:{Micah} },
            { _id: 6, name:"Brian Dean", review:"I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.",  image:{DorothyNate} },
            { _id: 7, name:"Tyler Tohmine", review:"The food here was fire!! Everyone should try this place out at least once if they live in Chicago.", image:{Maria}},
            { _id: 8, name:"Jack Hu", review:"This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!", image:{Linda} }
          ];

/*const names = ["Mark & Giselle", "Pablo", "PaulaRyan", "Linda", ""] */

const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
const [length, setLength] = useState(props.length);

const [isRepeating, setIsRepeating] = useState(infiniteLoop && props.length > show)
const [transitionEnabled, setTransitionEnabled] = useState(true)


        useEffect(() => {
                setLength(props.length)
                setIsRepeating(infiniteLoop && props.length > show)
            }, [props, infiniteLoop, show]);

        useEffect(() => {
                if (isRepeating) {
                    if (currentIndex === show || currentIndex === length) {
                        setTransitionEnabled(true)
                    }
                }
            }, [currentIndex, isRepeating, show, length]);
        




        const next = () => {
            if (isRepeating || currentIndex < (length - show)) {
                setCurrentIndex(prevState => prevState + 1)
            }
            };
            
            const prev = () => {
                if (isRepeating || currentIndex > 0) {
                    setCurrentIndex(prevState => prevState - 1)
                }
            };


            const handleTransitionEnd = () => {
                if (isRepeating) {
                    if (currentIndex === 0) {
                        setTransitionEnabled(false)
                        setCurrentIndex(length)
                    } else if (currentIndex === length + show) {
                        setTransitionEnabled(false)
                        setCurrentIndex(show)
                    }
                }
            }
        
            const renderExtraPrev = () => {
                let output = []
                for (let index = 0; index < show; index++) {
                    output.push(props[length - 1 - index])
                }
                output.reverse()
                return output
            }
        
            const renderExtraNext = () => {
                let output = []
                for (let index = 0; index < show; index++) {
                    output.push(props[index])
                }
                return output
            }




            const [touchPosition, setTouchPosition] = useState(null)
            // ...
            const handleTouchStart = (e) => {const touchDown = e.touches[0].clientX 
                setTouchPosition(touchDown)
            };

            const handleTouchMove = (e) => {
                const touchDown = touchPosition
            
                if(touchDown === null) {
                    return
                }
            
                const currentTouch = e.touches[0].clientX
                const diff = touchDown - currentTouch
            
                if (diff > 5) {
                    next()
                }
            
                if (diff < -5) {
                    prev()
                }
            
                setTouchPosition(null)
            };


 


        return (

            <div className="carouselContainer">
                <div className="carouselWrapper">
                    {/* You can alwas change the content of the button to other things */}
                    {
                        (isRepeating || currentIndex) > 0 &&
                        <button onClick={prev} className="leftArrow">
                            &lt;
                        </button>
                    }
                    <div className="carouselContentWrapper" onTouchStart={handleTouchStart}  onTouchMove={handleTouchMove}>
                    { /*...*/ }
                        <div className={`carouselContent show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined, 
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                        >

                        {
                            (length > show && isRepeating) &&
                            renderExtraPrev()
                        }

                            {data.map(item => (
                                        <TestimonialCard names={item.name} reviews={item.review} images={item.image}>
                                        </TestimonialCard>
                                    ))}

                        {
                            (length > show && isRepeating) &&
                            renderExtraNext()
                        }

                           

                        </div>

                    </div>
                    {/* You can alwas change the content of the button to other things */}
                    {
                    (isRepeating ||currentIndex < (length - show)) &&
                        <button onClick={next} className="rightArrow">
                            &gt;
                        </button>
                    }
                </div>
            </div>
        )
}

export default TestimonialCarousel


/*

 {names.map((name, index) => (
                                <TestimonialCard key={index} names={name} review={reviews} image={images}>
                                </TestimonialCard>
                            ))}

                            */


                            /*
                            
                {names.map((name, index)=> (<div><h2>{name}</h2>
                            {reviews.map((review, index)=>(<h3>{review}</h3>))}
                            {images.map((image, index)=>(<img src={image}></img>))}
                            </div>))}
                            */