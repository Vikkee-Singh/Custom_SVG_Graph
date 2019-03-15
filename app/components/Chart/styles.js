import { css } from "glamor";
import { Colors, Metrics } from "../../theme";

const styles = css({
    "& .graph": { width: '100%' },
    "& .graph .labels.x-labels": {
        textAnchor: 'middle'
    },

    "&  .graph .labels.y-labels": {
        textAnchor: 'end'
    },
    "& .graph": {
        height: '500px',
        width: '800px'
    },
    "& .graph .grid": {
        stroke: '#ccc',
        strokeDasharray: 0,
        strokeWidth: 1
    },
    "& .labels": {
        fontSize: '13px'
    },
    "& .label-title": {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '12px',
        fill: 'black',
    },

    "& .data": {
        fill: 'red',
        strokeWidth: 1
    },
    "& .loaderStyle": {
        width: '100%',
        padding: '20px',
        height: `${48 * 5}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
});
const lineStyles = css({
    "display": "flex",
    "justifyContent": "center",
    // "background": "grey",
    "& .OHLCChart_path": {
        strokeWidth: 2,
        fill: 'none'
    },

    "& .OHLCChart_axis": {
        stroke: '#000000'
    }
});
export { lineStyles, styles };