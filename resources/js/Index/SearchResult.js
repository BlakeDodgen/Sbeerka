import { useState } from "react";
import { Link } from "react-router-dom";




const SearchResult = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (e) => {
        setIsHovering(true);
    }

    const handleMouseOut = (e) => {
        setIsHovering(false);
    }
    return (
        <>
            {isHovering && (
                <div className="hover">
                    <img src={`/img/beers/${props.beer_pic_id}.png`} className="search-result__img-hover" alt="beer-item-img" />
                    <h2 className="search-result__name">{props.name}</h2>
                    {/* <p className="search-result__brewery">{props.brewery}</p>
                    <p className="search-result__type">{props.type}</p>
                    <p className="search-result__rating">Rating</p> */}
                </div>

            )}

            <div className="search-result">
                <Link to={`/beers/${props.beer_id}`} >

                    <div className="search-result__container"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>

                        <div className="search-result__img-card">
                            {/* <img className="search-result__img" src={`/img/beers/${props.beer_pic_id}.png`} alt="beer-item-img" /> */}
                        </div>
                        <p className="search-result__name">
                            <strong>{props.name}</strong><br />
                            <em>{props.type}  |  {props.brewery} | {props.alcohol_volume}% Alcohol By Volume</em>
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SearchResult;
