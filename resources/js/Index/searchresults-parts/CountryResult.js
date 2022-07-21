import { useState } from "react";
import { Link } from "react-router-dom";




const CountryResult = (props) => {

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
                    {!props.values.brewery_pic ?
                        <img className="search-result__img-hover" src={`/img/breweries/sibeeria.png`} />
                        : <img className="search-result__img-hover" src={`/img/breweries/${props.values.brewery_pic['picture']}`} alt="img" />}
                    <h2 className="search-result__name">{props.values.user.brewery_name}</h2>
                    {/* <p className="search-result__brewery">{props.values.city}</p>
                    <p className="search-result__brewery">{props.values.country}</p>
                    <p className="search-result__brewery">{props.values.history}</p> */}
                </div>

            )}

            <div className="search-result"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >

                {/* <p className="search-result__name">{props.name}</p> */}
                {/* <Link key={value.id} to={`/breweries/${value.id}`}><p>{value.brewery_name}</p></Link> */}


                <Link to={`/breweries/${props.values.user.id}`}>
                    <div className="search-result__container">
                        <div className="search-result__img-card">
                        </div>
                        <p className="search-result__name">
                            {props.values.city}, <strong>{props.values.country}</strong><br />
                            <em>{props.values.user.brewery_name}</em>
                        </p>
                    </div>
                </Link>


                {/* <p className="search-result__type">{props.type}</p> */}

            </div>
        </>
    );
};

export default CountryResult;
