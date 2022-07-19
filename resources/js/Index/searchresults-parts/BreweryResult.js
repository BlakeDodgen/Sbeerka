import { useState } from "react";
import { Link } from "react-router-dom";




const BreweryResult = (props) => {
    //beertype , alcohol, degree, brewery review

    // change the path beer_pic.

    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = (e) => {
        setIsHovering(true);
    }

    const handleMouseOut = (e) => {
        setIsHovering(false);
    }

    console.log(props.values.brewery.brewery_pic);
    return (
        <>
       
            {isHovering && (
                <div className="hover2">
                    <p className="search-result__brewery">{props.name}</p>
                    
                    {!props.values.brewery.brewery_pic ? <img src={`/img/breweries/sibeeria.png`} /> 
                    : <img src= {`/img/breweries/${props.values.brewery.brewery_pic['picture']}`} alt="img"/> }
                </div>

            )}

            <div className="search-result"
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
            >
                {/* <div className="search-result__container">
                    <img src={`/img/beers/${props.beer_pic_id}.png`} className="search-result__img" alt="beer-item-img" />
                </div> */}
                {/* <p className="search-result__name">{props.name}</p> */}
                <p className="search-result__brewery">{props.name}</p>
                {/* <p className="search-result__type">{props.type}</p> */}
                
            </div>
        </>
    );
};

export default BreweryResult;
