import React from 'react';
import MarioAdrian from './Mario and Adrian b.jpg';

const Testimonials = () => {

    return(
        <div>
            <h4> Testimonials </h4>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20}}>
                <div className="reviews">
                    <img src={MarioAdrian} width = {200} alt="Little Lemon's Greek Salad" />
                    <div  >
                        <h5>Greek Salad</h5>
                        <p>The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                </div>
                <div className="reviews">
                <img src={MarioAdrian} width = {200} alt="Little Lemon's Greek Salad" />
                    <div  >
                        <h5>Greek Salad</h5>
                        <p>The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                </div>
                <div className="reviews">
                <img src={MarioAdrian} width = {200} alt="Little Lemon's Greek Salad" />
                    <div  >
                        <h5>Greek Salad</h5>
                        <p>The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                </div>
                <div className="reviews">
                <img src={MarioAdrian} width = {200} alt="Little Lemon's Greek Salad" />
                    <div  >
                        <h5>Greek Salad</h5>
                        <p>The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                </div>
             </div>
        </div>
    )
 }

export default Testimonials;