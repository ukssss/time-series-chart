import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to="/">Time-Series-Chart</StyledLink>
        </StyledHeader>
    );
};

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;

const StyledHeader = styled.header`
    font-size: 32px;
    font-weight: bold;
`;

export default Header;
