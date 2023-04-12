import React, {Fragment} from 'react';
import Bruchetta from './bruchetta.svg';
import GreekSalad from './greek salad.jpg';
import LemonDessert from './lemon dessert.jpg';

const Highlights = () => {

    const specialsStyle = {
        width: 400,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    }

    return(
        <div>
            <h2> This weeks Specials! </h2>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                <div className="specials">
                    <img src={GreekSalad} style={specialsStyle} alt="Little Lemon's Greek Salad" />
                    <Fragment>
                        <h4>Greek Salad</h4>
                        <p>The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </Fragment>
                </div>
                <div className="specials">
                    <img src={Bruchetta} style={specialsStyle} alt="Little Lemon's Bruchetta" />
                    <div>
                        <h4>Bruchetta</h4>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    </div>
                </div>
                <div className="specials">
                    <img src={LemonDessert} style={specialsStyle} alt="Little Lemon's Lemon Dessert"/>
                    <div>
                        <h4>Lemon Dessert</h4>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </div>
                </div>
             </div>
        </div>
    )
 }

export default Highlights;