import { Category } from '@/types';
import styled from 'styled-components';

interface IProps {
    onClick: (value: Category | string) => void;
    activated: boolean;
    children: React.ReactNode;
}

const Button = ({ onClick, activated, children }: IProps) => {
    return (
        <>
            <StyledButton
                type="button"
                onClick={(e) => onClick(e.currentTarget.textContent as string)}
                activated={activated ? 'true' : 'false'}
            >
                {children}
            </StyledButton>
        </>
    );
};

const StyledButton = styled.button<{ activated: string }>`
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

    height: 2.25rem;
    font-size: 1rem;

    background: ${(props) => (props.activated ? `#444094` : `#8884d8`)};
`;

export default Button;
