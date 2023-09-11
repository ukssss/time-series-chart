import { ArrChartData } from '@/types';

interface IProps {
    cx: number;
    cy: number;
    stroke: string;
    payload: ArrChartData;
    district: string;
}

const CustomisedDot = ({ cx, cy, stroke, payload, district }: IProps) => {
    if (payload.id === district) {
        return (
            <svg x={cx - 3} y={cy - 3} fill="white">
                <g transform="translate(4 4)">
                    <circle r="4" fill={stroke} />
                    <circle r="2" fill={stroke} />
                </g>
            </svg>
        );
    } else {
        return null;
    }
};

export default CustomisedDot;
