import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const reloadPage = () => {
        location.reload();
    };

    return (
        <StyledHeader>
            <ReloadContainer onClick={reloadPage}>
                <StyledLink to="/">Time-Series-Chart</StyledLink>
            </ReloadContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 2rem;
    font-size: 32px;
    font-weight: bold;
`;

const ReloadContainer = styled.div`
    display: inline-block;
    margin: 0 auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;

export default Header;
