



// Circle size and concentric cirles
const chartSize = 450;
const numberOfScales = 5;
const scale = (value) => (
    <circle
        key={`scale-${value}`}
        cx={0}
        cy={0}
        r={((value / numberOfScales) * chartSize) / 2}
        fill="#fbc014"
        stroke="#31475e"
        strokeWidth="3"
    />
);
const polarToX = (angle, distance) => Math.cos(angle - Math.PI / 2) * distance;
const polarToY = (angle, distance) => Math.sin(angle - Math.PI / 2) * distance;
const pathDefinition = (points) => {
    let d = "M" + points[0][0].toFixed(4) + "," + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++) {
        d += "L" + points[i][0].toFixed(4) + "," + points[i][1].toFixed(4);
    }
    return d + "z";
};

// shaping of graph ratings
const shape = (columns) => (chartData, i) => {
    const data = chartData;
    return (
        <path
            key={`shape-${i}`}
            d={pathDefinition(
                columns.map((col) => {
                    const value = data[col.key];
                    return [
                        polarToX(col.angle, (value * chartSize) / 2),
                        polarToY(col.angle, (value * chartSize) / 2),
                    ];
                })
            )}
            stroke={`#c2702a-${1}`}
            fill={`#c2702a`}
            className="graph-data__1"
        />
    );
};
const points = (points) => {
    return points
        .map((point) => point[0].toFixed(4) + "," + point[1].toFixed(4))
        .join(" ");
};

const axis = () => (col, i) =>
(
    <polyline
        key={`poly-axis-${i}`}
        points={points([
            [0, 0],
            [
                polarToX(col.angle, chartSize / 2),
                polarToY(col.angle, chartSize / 2),
            ],
        ])}
        stroke="#31475e"
        strokeWidth="1"
    />
);

const BeerGraph = (props) => {
    //Data should be 0-1 rather than 0-10


    const data = [
        //inputed rating from user
        {
            herbal: (props.graphValues.herbal / 10),
            bitter: (props.graphValues.bitter / 10),
            sour: (props.graphValues.sour / 10),
            body: (props.graphValues.body / 10),
            linger: (props.graphValues.linger / 10),
            citrus: (props.graphValues.citrus / 10),
            hoppy: (props.graphValues.hoppy / 10),
        },
        //avarage rating
        {
            herbal: (props.averageValues.herbal / 10),
            bitter: (props.averageValues.bitter / 10),
            sour: (props.averageValues.sour / 10),
            body: (props.averageValues.body / 10),
            linger: (props.averageValues.linger / 10),
            citrus: (props.averageValues.citrus / 10),
            hoppy: (props.averageValues.hoppy / 10)
        },
    ];

    const groups = [];
    const scales = [];
    for (let i = numberOfScales; i > 0; i--) {
        scales.push(scale(i));
    }
    groups.push(<g key={`scales`}>{scales}</g>);
    const middleOfChart = (chartSize / 2).toFixed(4);
    const captions = Object.keys(data[0]);
    const columns = captions.map((key, i, all) => {
        return {
            key,
            angle: (Math.PI * 2 * i) / all.length,
        };
    });

    //axis, graph, and names
    groups.push(<g key={`group-axes`}>{columns.map(axis())}</g>);
    groups.push(<g key={`groups}`}>{data.map(shape(columns))}</g>);
    groups.push(<g key={`group-captions`}>{columns.map(caption())}</g>);
    return (
        <svg
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            width={chartSize}
            height={chartSize}
            viewBox={`0 0 ${chartSize} ${chartSize}`}
            className="beer-graph"
        >
            <g transform={`translate(${middleOfChart},${middleOfChart})`}>
                {groups}
            </g>
        </svg>
    );
};

const caption = () => (col) =>
(
    <text
        key={`caption-of-${col.key}`}
        x={polarToX(col.angle, (chartSize / 2) * 0.75).toFixed(4)}
        y={polarToY(col.angle, (chartSize / 2) * 0.75).toFixed(4)}
        dy={10 / 2}
        fill="#444"
        fontWeight="300"
        textshadow="1px 1px 0 #fff"
    >
        {col.key}
    </text>
);

export default BeerGraph;
