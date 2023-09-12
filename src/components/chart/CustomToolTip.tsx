import { ArrChartData, Category } from '@/types';
import { Dispatch, useEffect } from 'react';
import styled from 'styled-components';

interface PayloadProps {
    payload: ArrChartData;
}

interface IProps {
    active: boolean;
    payload: PayloadProps[];
    setDot: Dispatch<React.SetStateAction<string>>;
    category: Category;
}

const CustomToolTip = ({ active, payload, setDot, category }: IProps) => {
    useEffect(() => {
        if (payload && payload.length) {
            setDot(payload[0].payload.id);
        }
    }, [payload, setDot]);

    if (active && payload && payload.length) {
        return (
            <Container>
                <Title>📊 {payload[0].payload.id}</Title>
                <Detail>
                    {category === 'area' || category === '전체' ? (
                        <DetailInfo>
                            <DetailTitle>value_area</DetailTitle>
                            <DetailSpan>{payload[0].payload.value_area}</DetailSpan>
                        </DetailInfo>
                    ) : (
                        ''
                    )}
                    {category === 'bar' || category === '전체' ? (
                        <DetailInfo>
                            <DetailTitle>value_bar</DetailTitle>
                            <DetailSpan>{payload[0].payload.value_bar}</DetailSpan>
                        </DetailInfo>
                    ) : (
                        ''
                    )}
                </Detail>
            </Container>
        );
    } else {
        return null;
    }
};

const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 1rem;
`;
const Title = styled.h4`
    font-size: 20px;
    font-weight: bold;
`;
const Detail = styled.div``;
const DetailInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const DetailTitle = styled.span`
    font-weight: bold;
`;
const DetailSpan = styled.span``;

export default CustomToolTip;
