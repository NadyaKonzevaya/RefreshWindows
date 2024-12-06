import styled from "@emotion/styled";

export const NavList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
`;

export const NavItem = styled.li`
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
        border-right: 1px solid grey;
    }
`;