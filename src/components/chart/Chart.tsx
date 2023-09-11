import { useChartData } from '@/hooks';
import { Category } from '@/types';
import { useState } from 'react';
import {
    Area,
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { CustomisedDot } from '..';

interface IProps {
    district: string;
    category: Category;
    handleSelectDistrict: (value: string) => void;
}

const Chart = ({ district, category, handleSelectDistrict }: IProps) => {
    const { chartData } = useChartData();
    const [dot, setDot] = useState('');

    return (
        <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
                data={chartData}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                barGap={10}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="time" />
                <YAxis
                    yAxisId="left"
                    label={{
                        value: 'value_area',
                        angle: -90,
                        position: 'insideLeft',
                        offset: 1,
                    }}
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    label={{
                        value: 'value_bar',
                        angle: 90,
                        position: 'insideRight',
                        offset: -10,
                    }}
                />
                <Tooltip />
                <Legend height={50} />
                {category === '전체' || category === 'area' ? (
                    <Bar
                        dataKey="value_bar"
                        barSize={20}
                        fill="#8884d8"
                        yAxisId="right"
                        onClick={(data) => handleSelectDistrict(data.id)}
                    >
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={`${entry.id === district ? `#444094` : `#8884d8`}`}
                            />
                        ))}
                    </Bar>
                ) : (
                    ''
                )}
                {category === '전체' || category === 'area' ? (
                    <Area
                        type="monotone"
                        dataKey="value_area"
                        fill="#82ca9d"
                        stroke="#82ca9d"
                        yAxisId="left"
                        onClick={() => handleSelectDistrict(dot)}
                        dot={
                            <CustomisedDot
                                cx={0}
                                cy={0}
                                stroke="#86d3a4"
                                district={district}
                                payload={{ id: '', time: '', value_area: 0, value_bar: 0 }}
                            />
                        }
                    />
                ) : (
                    ''
                )}
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default Chart;
