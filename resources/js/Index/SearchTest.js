import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// const SearchTest = () => {
//     const [user, setUser] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (user) {
//             setUser("");
//         }
//         console.log(user);
//     };
function SearchTest({ data, search }) {
    const [searchString, setSearchString] = useState("");

    const [searchItems, setSearchItems] = useState([]);

    const [searchOption, setSearchOption] = useState(search);

    const navigate = useNavigate();

    const handleSearchQuery = (e) => {
        //const searchItem = e.target.value;
        const prop = searchOption;
        const newSearch = data.filter((item) => {
            //return value if true-> if object.name includes search items
            //compare the user input and data-> lowercase both values
            console.log(item);
            return item.toLowerCase().match(searchString.toLowerCase());
        });
        if (searchItems === "") {
            setSearchItems([]);
        } else {
            setSearchItems(newSearch);
        }
    };
    const handleSearchBarChange = (e) => {
        handleSearchQuery(e);
        setSearchString(e.target.value);
    };
    const redirect = () => {
        navigate(`/results/${search}/${searchString}`);
        //clearinput func
    };

    console.log(searchString);
    return (
        <section className="section">
            <Wrapper className="section-center">
                <form onSubmit={redirect}>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="go through sbeerka"
                            value={searchString}
                            onChange={handleSearchBarChange}
                        />
                    </div>
                    {searchItems && (
                        <div className="search__result">
                            {/* loops in the array which contains updated search items */}
                            {/* for less displayed results use splice method on array .splice(0,10) */}
                            {searchItems.map((value, index) => {
                                return (
                                    <a className="search__items" key={index}>
                                        {value}
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </form>
            </Wrapper>
        </section>
    );
}

const Wrapper = styled.div`
    position: relative;
    display: grid;
    gap: 1rem 1.75rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr max-content;
        align-items: center;
        h3 {
            padding: 0 0.5rem;
        }
    }
    .form-control {
        background: var(--clr-white);
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr auto;
        column-gap: 0.5rem;
        border-radius: 5px;
        padding: 0.5rem;
        input {
            border-color: transparent;
            outline-color: orange;
            letter-spacing: var(--spacing);
            color: var(--clr-grey-3);
            padding: 0.25rem 0.5rem;
        }
        input::placeholder {
            color: lightgray;
            text-transform: capitalize;
            letter-spacing: var(--spacing);
        }
        svg {
            color: var(--clr-grey-5);
        }
        input,
        button,
        svg {
            font-size: 1.3rem;
        }
        @media (max-width: 800px) {
            button,
            input,
            svg {
                font-size: 0.85rem;
            }
        }
    }
    h3 {
        margin-bottom: 0;
        color: var(--clr-grey-5);
        font-weight: 400;
    }
`;
const ErrorWrapper = styled.article`
    position: absolute;
    width: 90vw;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    text-transform: capitalize;
    p {
        color: red;
        letter-spacing: var(--spacing);
    }
`;
export default SearchTest;
