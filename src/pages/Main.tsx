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
                    <Button key={item} onClick={handleSelectCategory} activated={item === category}>
                        {item}
                    </Button>
                ))}
            </ButtonContainer>

            <ButtonContainer>
                <Button key={'전체'} onClick={handleSelectDistrict} activated={district === '전체'}>
                    전체
                </Button>
                {chartDataByDistrict.map((item) => (
                    <Button key={item} onClick={handleSelectDistrict} activated={item === district}>
                        {item}
                    </Button>
                ))}
            </ButtonContainer>

            <Chart
                district={district}
                category={category}
                handleSelectDistrict={handleSelectDistrict}
            />
        </>
    );
};

const ButtonContainer = styled.div`
    justify-content: center;
    display: flex;
    gap: 10px;
    margin: 0 auto;
    margin-bottom: 10px;
`;

export default Main;
