import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1,
        label: '·',
    },
    {
        value: 2,
        label: '·',
    },
    {
        value: 3,
        label: '·',
    },

    {
        value: 4,
        label: '·',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '·',
    },
    {
        value: 7,
        label: '·',
    },

    {
        value: 8,
        label: '·',
    },
    {
        value: 9,
        label: '·',
    },
    {
        value: 10,
        label: '10',
    }

];

function valuetext(value) {
    return `${value}`;
}

export default function DiscreteSliderMarks({ setValue, name, value = 1 }) {

    const [innerValue, setInnerValue] = React.useState(value);

    const handleChange = (event, newValue) => {
        
        setValue(event);
        setInnerValue(newValue)

    };

    React.useEffect(() => {
        setInnerValue(value)
    }, [])

    return (
        <Box sx={{ width: 150 }}>
            <Slider
                //aria-label="Custom marks"
                defaultValue={innerValue}
                getAriaValueText={valuetext}
                step={1}
                size="small"
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={10}
                name={name}
                value={innerValue}
                onChange={handleChange}
                sx={{
                    color:"red"
                }}

            />
            {/* <p>{innerValue}</p> */}
        </Box>

    );
}
