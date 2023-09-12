import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const reloadPage = () => {
        location.reload();
    };

    return (
        <StyledHeader onClick={reloadPage}>
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
    margin-bottom: 30px;
`;

export default Header;
