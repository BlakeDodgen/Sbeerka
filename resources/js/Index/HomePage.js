import HomePageMainProduct from "./HomePageMainProduct";
import HomePageProductList from "./HomePageProductList";

function HomePage() {


    return (
        <div className="main">
            {/* Left side -- Featured beer */}
            <HomePageMainProduct />

            {/* Right Side -- Beers you might light */}
            <HomePageProductList />
        </div>
    )

}

export default HomePage;