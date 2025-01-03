import { Wrapper, Logo, Phones, Adres, ButtonWrap, Button } from "./Header.styled";
import logo from '../../images/logo.png';
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();

    const handleCalculate = () => {
        navigate('/calculator');
    }
    return (
        <Wrapper>
            <a href="/">
                <Logo src={logo} alt="logo"/>
            </a>
            <Adres>ООО "Рефреш-К", г.Минск, 10 км от Могилевского шоссе</Adres>
            <Phones>
                <p>+375 17 517-65-00</p>
                <p>+375 44 765-02-68</p>
            </Phones>
            <ButtonWrap>
            <Button type="button" onClick={handleCalculate}>Рассчитать стоимость</Button>
                <Button type="button" onClick={handleCalculate}>Заказать звонок</Button>
                </ButtonWrap>
        </Wrapper>
    )
}