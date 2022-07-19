import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
    {
        value: 0,
        label: '',
    },
    {
        value: 1,
        label: '',
    },
    {
        value: 2,
        label: '',
    },
    {
        value: 3,
        label: '',
    },

    {
        value: 4,
        label: '',
    },
    {
        value: 5,
        label: '',
    },
    {
        value: 6,
        label: '',
    },
    {
        value: 7,
        label: '',
    },

    {
        value: 8,
        label: '',
    },
    {
        value: 9,
        label: '',
    },
    {
        value: 10,
        label: '',
    }

];

function valuetext(value) {
    return `${value}`;
}

export default function DiscreteSliderMarks({ setGraphValues, setValue, name, value = 5 }) {

    const [innerValue, setInnerValue] = React.useState(value);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(event);
        setInnerValue(newValue)
        setGraphValues(newValue)
    };

    React.useEffect(() => {
        setInnerValue(value)
    }, [])

    return (
        <Box sx={{ width: 100 }}>
            <Slider
                aria-label="Custom marks"
                defaultValue={innerValue}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={10}
                name={name}
                value={innerValue}
                onChange={handleChange}

            />
            {/* <p>{innerValue}</p> */}
        </Box>

    );
}
