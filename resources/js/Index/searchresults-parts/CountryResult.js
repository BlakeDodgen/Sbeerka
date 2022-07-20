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

    console.log(props.values);
    return (
        <>

            {isHovering && (
                <div className="hover">
                    <p className="search-result__brewery">{props.values.user.brewery_name}</p>
                    <p className="search-result__brewery">{props.values.city}</p>
                    <p className="search-result__brewery">{props.values.country}</p>
                    <p className="search-result__brewery">{props.values.history}</p>


                    {!props.values.brewery_pic ? <img src={`/img/breweries/sibeeria.png`} />
                        : <img src={`/img/breweries/${props.values.brewery_pic['picture']}`} alt="img" />}
                </div>

            )}

            <div className="search-result"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >

                {/* <p className="search-result__name">{props.name}</p> */}
                {/* <Link key={value.id} to={`/breweries/${value.id}`}><p>{value.brewery_name}</p></Link> */}


                <Link to={`/breweries/${props.values.id}`}>
                    <div className="search-result__container">
                        <div className="search-result__img-card">
                        </div>
                        <p className="search-result__name"> {props.values.user.brewery_name} / {props.values.country}</p>
                    </div>
                </Link>


                {/* <p className="search-result__type">{props.type}</p> */}

            </div>
        </>
    );
};

export default CountryResult;
