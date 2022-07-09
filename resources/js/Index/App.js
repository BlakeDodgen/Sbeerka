import Nav from "./Nav";
import Footer from "./Footer";
import HomePageMainProduct from "./HomePageMainProduct";
import HomePageProductList from "./HomePageProductList";

const App = () => {

    return (
        <>
            <Nav />
            <div className="main">



                {/* Left side -- Featured beer */}
                <HomePageMainProduct />

                {/* Right Side -- Beers you might light */}
                <HomePageProductList />

            </div>

            <Footer />
        </>
    )
}

export default App;