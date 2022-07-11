import HomePageMainProduct from "./HomePageMainProduct";
import HomePageProductList from "./HomePageProductList";


function HomePage() {


    return (
        <>
            {/* Left side -- Featured beer */}
            <HomePageMainProduct />

            {/* Right Side -- Beers you might light */}
            <HomePageProductList />
        </>
    )

}

export default HomePage;