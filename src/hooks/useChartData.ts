import { getChartData } from '@/api';
import { ArrChartData, ChartDataResponse } from '@/types';
import { useEffect, useState } from 'react';

const useChartData = () => {
    const [chartData, setChartData] = useState<ArrChartData[]>([]);

    useEffect(() => {
        const editChartData = async () => {
            const data: ChartDataResponse = await getChartData();
            const arrData: ArrChartData[] = Object.entries(data).map(([time, item]) => {
                const timeParts = time.split(' ');
                const timeOnly = timeParts[1];

                return {
                    time: timeOnly,
                    ...item,
                };
            });

            setChartData(arrData);
        };

        editChartData();
    }, []);

    const chartDataByDistrict = [...new Set(chartData.map((data) => data.id))].sort();

    return { chartData, chartDataByDistrict };
};

export default useChartData;
