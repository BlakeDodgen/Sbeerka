//Blake's Test Dropdown. If it works, we can integrate into main search bar somehow

function Dropdown() {
    return (
        <div className="dropdown">
            <div className="dropdown__btn">All</div>
            <div className="dropdown__content">
                <div className="dropdown__item">
                    All
                </div>
                <div className="dropdown__item">
                    Breweries
                </div>
                <div className="dropdown__item">
                    Alcohol Content
                </div>
                <div className="dropdown__item">
                    Beer Type
                </div>
                <div className="dropdown__item">
                    Random Beer
                </div>
            </div>
        </div>
    )
}

export default Dropdown;