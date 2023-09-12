import { Button, Chart } from '@/components';
import { CATEGORY } from '@/constants';
import { useChartData } from '@/hooks';
import { Category } from '@/types';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
    const { chartDataByDistrict } = useChartData();
    const [searchParams, setSearchParams] = useSearchParams();
    const district = searchParams.get('district') as string;
    const category = searchParams.get('category') as Category;

    const handleSelectDistrict = (district: string) => {
        setSearchParams({ category, district });
    };

    const handleSelectCategory = (category: string) => {
        setSearchParams({
            category: category as Category,
            district,
        });
    };

    useEffect(() => {
        if (!district && !category) {
            searchParams.set('category', '전체');
            searchParams.set('district', '전체');
        }
    }, []);

    return (
        <>
            <ButtonContainer>
                {CATEGORY.map((item) => (
                    <Button onClick={handleSelectCategory} isActivated={item === category}>
                        {item}
                    </Button>
                ))}
            </ButtonContainer>
            <div>
                <Chart
                    district={district}
                    category={category}
                    handleSelectDistrict={handleSelectDistrict}
                />
            </div>
            <ButtonContainer>
                <Button onClick={handleSelectDistrict} isActivated={district === '전체'}>
                    전체
                </Button>
                {chartDataByDistrict.map((item) => (
                    <Button onClick={handleSelectDistrict} isActivated={item === district}>
                        {item}
                    </Button>
                ))}
            </ButtonContainer>
        </>
    );
};

const ButtonContainer = styled.div`
    justify-content: center;
    display: flex;
    gap: 10px;
`;

export default Main;
