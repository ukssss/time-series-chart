import { Category } from '@/types';
import styled from 'styled-components';

interface IProps {
    onClick: (value: Category | string) => void;
    isActivated: boolean;
    children: React.ReactNode;
}

const Button = ({ onClick, isActivated, children }: IProps) => {
    return (
        <>
            <StyledButton
                type="button"
                onClick={(e) => onClick(e.currentTarget.textContent as string)}
                isActivated={isActivated}
            >
                {children}
            </StyledButton>
        </>
    );
};

const StyledButton = styled.button<{ isActivated: boolean }>`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    background: ${(props) => (props.isActivated ? `#444094` : `#8884d8`)};
`;

export default Button;
