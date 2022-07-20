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
    const img = props.values.beers.map((item) => item.id)
    return (
        <>
           
            {isHovering && (
                <div className="hover">

                    {!props.pic ? <img src={`/img/breweries/sibeeria.png`} />
                        : <img src={`/img/beers/${img[0]}.png`} alt="img" />}



                    {/* <img className="search-result__img-hover" src={`/img/breweries/sibeeria.png`} /> */}
                    <h2 className="search-result__brewery">{props.name}</h2>
                    {/* <p className="search-result__brewery">{props.values.city}</p>
                    <p className="search-result__brewery">{props.values.country}</p>
                    <p className="search-result__brewery">{props.values.history}</p> */}


                    {/* {!props.pic ? <img src={`/img/breweries/sibeeria.png`} />
                        : <img src={`/img/beers/${img[0]}.png`} alt="img" />} */}
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
                        <p className="search-result__name">
                            <strong>{props.values.type}</strong><br />
                            <em>{props.name} | </em></p>
                    </div>
                </Link>

                {/* <p className="search-result__type">{props.type}</p> */}

            </div>
        </>
    );
};

export default BeerTypeResult;
