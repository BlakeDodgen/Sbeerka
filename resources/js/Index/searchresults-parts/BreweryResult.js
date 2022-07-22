import { useState } from "react";
import { Link } from "react-router-dom";




const BreweryResult = (props) => {

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
                    {!props.values.brewery.brewery_pic ?
                        <img className="search-result__img-hover" src={`/img/breweries/sibeeria.png`} />
                        : <img className="search-result__img-hover" src={`/img/breweries/${props.values.brewery.brewery_pic['picture']}`} alt="img" />}
                    <h2 className="search-result__name">{props.name}</h2>
                    {/* <p className="search-result__brewery">{props.values.brewery.city}</p>
                    <p className="search-result__brewery">{props.values.brewery.country}</p> */}
                </div>

            )}

            <div className="search-result">

                {/* <p className="search-result__name">{props.name}</p> */}
                {/* <Link key={value.id} to={`/breweries/${value.id}`}><p>{value.brewery_name}</p></Link> */}


                <Link to={`/breweries/${props.values.id}`}>
                    <div className="search-result__container"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        <div className="search-result__img-card">

                        </div>
                        <p className="search-result__name">
                            <strong>{props.name}</strong><br />
                            <em>{props.values.brewery.city}, {props.values.brewery.country}</em>
                        </p>
                    </div>
                </Link>


                {/* <p className="search-result__type">{props.type}</p> */}

            </div>
        </>
    );
};

export default BreweryResult;
