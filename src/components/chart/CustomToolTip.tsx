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
                <Title>{payload[0].payload.id}</Title>
                <Detail>
                    {category === 'area' || category === '전체' ? (
                        <DetailInfo>
                            <DetailSpan>value_area</DetailSpan>
                            <DetailSpan>{payload[0].payload.value_area}</DetailSpan>
                        </DetailInfo>
                    ) : (
                        ''
                    )}
                    {category === 'bar' || category === '전체' ? (
                        <DetailInfo>
                            <DetailSpan>value_bar</DetailSpan>
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
`;
const Title = styled.h4``;
const Detail = styled.div``;
const DetailInfo = styled.div``;
const DetailSpan = styled.span``;

export default CustomToolTip;
