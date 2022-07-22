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
    const brewery = props.values.beers.map((item) => item.brewery_id)
    console.log(props.values);
    return (
        <>

            {isHovering && (
                <div className="hover">

                    {!props.pic ? <img src={`/img/breweries/sibeeria.png`} />
                        : <img className="search-result__img-hover" src={`/img/beers/${img[0]}.png`} alt="img" />}

                    <h2 className="search-result__name">{props.name}</h2>

                    {/* <img className="search-result__img-hover" src={`/img/breweries/sibeeria.png`} /> */}
                    {/* <p className="search-result__brewery">{props.values.city}</p>
                    <p className="search-result__brewery">{props.values.country}</p>
                    <p className="search-result__brewery">{props.values.history}</p> */}


                    {/* {!props.pic ? <img src={`/img/breweries/sibeeria.png`} />
                        : <img src={`/img/beers/${img[0]}.png`} alt="img" />} */}
                </div>

            )}

            <div className="search-result">

                {/* <p className="search-result__name">{props.name}</p> */}
                {/* <Link key={value.id} to={`/breweries/${value.id}`}><p>{value.brewery_name}</p></Link> */}

                <Link to={`/beers/${img[0]}`}>
                    <div className="search-result__container"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        <div className="search-result__img-card">

                        </div>
                        <p className="search-result__name">
                            <strong>{props.values.type}</strong><br />
                            <em>{props.name}</em></p>
                    </div>
                </Link>

                {/* <p className="search-result__type">{props.type}</p> */}

            </div>
        </>
    );
};

export default BeerTypeResult;
