import Nav from "./Nav";
import Footer from "./Footer";

const App = () => {

    return (
        <>
            <Nav />
            <div className="">

            {/* Left side -- Featured beer */}
            <HomePageMainProduct />

            {/* Right Side -- Beers you might light */}
            <HomePageMainProductList />
            </div>
            
            <Footer />
        </>
    )
}

export default App;