//Can this be deleted???

import { useState } from "react";

// const selectedItems = [
//     { key: 'page', text: 'This Page', value: 'page' },
//     { key: 'org', text: 'This Organization', value: 'org' },
//     { key: 'site', text: 'Entire Site', value: 'site' },
//   ];

const selectItems = [
    "ALL",
    "Breweries",
    "Beer",
    "Flavors",
    "Alcohol Content",
    "Beer Type",
    "Random Beer",
];

function SearchDropDown() {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("All");

    const toggle = () => setActive((prevState) => !prevState);

    const handleItemClick = (item) => {
        setSelected(item);
        toggle();
    };

    return (
        <div>
            <div className="custom-select">
                <div
                    className={`select-selected ${active ? "select-arrow-active" : ""
                        }`}
                    onClick={toggle}
                >
                    {selected}
                </div>
                <div className="select-items">
                    {active &&
                        selectItems.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    onClick={() => handleItemClick(item)}
                                    className={`${item === selected
                                            ? "same-as-selected"
                                            : ""
                                        }`}
                                >
                                    {item}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default SearchDropDown;

// ReactDOM.render(<App />, document.querySelector('.react'));
