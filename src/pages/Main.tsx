import { Chart } from '@/components';
import { useChartData } from '@/hooks';
import { Category } from '@/types';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Main = () => {
    const { chartDataByDistrict } = useChartData();
    const [params, setParams] = useSearchParams();
    const district = params.get('district') as string;
    const category = params.get('category') as Category;

    const handleSelectDistrict = (district: string) => {
        setParams({ category, district });
    };

    const handleSelectCategory = (category: string) => {
        setParams({
            category: category as Category,
            district,
        });
    };

    useEffect(() => {
        if (!district && !category) {
            params.set('category', '전체');
            params.set('district', '전체');
        }
    }, [category, district, params]);

    return (
        <>
            <div>
                <Chart
                    district={district}
                    category={category}
                    handleSelectDistrict={handleSelectDistrict}
                />
            </div>
        </>
    );
};

export default Main;
