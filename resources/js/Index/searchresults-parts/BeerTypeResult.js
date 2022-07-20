import { useState } from "react";
import { Link } from "react-router-dom";

const BeerTypeResult = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (e) => {
        setIsHovering(true);
    }

    const handleMouseOut = (e) => {
        setIsHovering(false);
    }

    console.log(props.values);
    return (
        <>

            {isHovering && (
                <div className="hover">
                    <img className="search-result__img-hover" src={`/img/breweries/sibeeria.png`} />
                    <h2 className="search-result__brewery">{props.name}</h2>
                    {/* <p className="search-result__brewery">{props.values.city}</p>
                    <p className="search-result__brewery">{props.values.country}</p>
                    <p className="search-result__brewery">{props.values.history}</p> */}


                    {!props.pic ? <img src={`/img/breweries/sibeeria.png`} />
                        : <img src={`/img/breweries/${props.pic}`} alt="img" />}
                </div>

            )}

            <div className="search-result"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >

                {/* <p className="search-result__name">{props.name}</p> */}
                {/* <Link key={value.id} to={`/breweries/${value.id}`}><p>{value.brewery_name}</p></Link> */}
                <Link to={`/breweries/${props.values.id}`}><p className="search-result__brewery"> {props.name} / {props.values.type}</p></Link>
                {/* <p className="search-result__type">{props.type}</p> */}

            </div>
        </>
    );
};

export default BeerTypeResult;
