import { Link, useNavigate } from "react-router-dom";
import { NavList, NavItem } from "./Navigation.styled";

export default function Navigation() {
    // const navigate = useNavigate();

    // const handleWindows = () => {
    //     navigate('');
    // }

    return (
        <NavList>
            <NavItem >
                <Link to="/windows">Окна</Link>
            </NavItem>
            <NavItem>
                <Link to="doors">Двери</Link>
            </NavItem>
            <NavItem>
                <Link to="balcons">Балконы</Link>
            </NavItem>
            <NavItem>
                <Link to="contacts">Контакты</Link>
            </NavItem>
        </NavList>
    )
};