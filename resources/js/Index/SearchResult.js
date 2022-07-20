import { useState } from "react";
import { Link } from "react-router-dom";
import SearchResultBig from "./searchresults-parts/SearchResultBig";



const SearchResult = (props) => {
    //beertype , alcohol, degree, brewery review

    // change the path beer_pic.

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
                    <p className="search-result__name">{props.name}</p>
                    <p className="search-result__brewery">{props.brewery}</p>
                    <p className="search-result__type">{props.type}</p>
                    <p className="search-result__rating">Rating</p>
                </div>

            )}

            <div className="search-result"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <Link to={`/beers/${props.beer_id}`}><div className="search-result__container">
                    <div className="search-result__img-card">
                        <img className="search-result__img" src={`/img/beers/${props.beer_pic_id}.png`} alt="beer-item-img" />
                    </div>
                    <p className="search-result__name">
                        <strong>{props.name}</strong><br />
                        <em>{props.type}  |  {props.brewery} | {props.alcohol_content}</em>
                    </p>
                </div></Link>


            </div>
        </>
    );
};

export default SearchResult;
