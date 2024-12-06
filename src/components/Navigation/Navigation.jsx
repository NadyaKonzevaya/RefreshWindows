import { NavList, NavItem } from "./Navigation.styled";

export default function Navigation() {
    return (
        <NavList>
            <NavItem>
                <a>Окна</a>
            </NavItem>
            <NavItem>
                <a>Двери</a>
            </NavItem>
            <NavItem>
                <a>Балконы</a>
            </NavItem>
            <NavItem>
                <a>Контакты</a>
            </NavItem>
        </NavList>
    )
};