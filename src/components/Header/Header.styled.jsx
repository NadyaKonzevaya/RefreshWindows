import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    width: 100%;
    /* max-width: 1280px; */
    /* height: 100vh; */
    margin: 0 auto;
    padding: 20px;
    /* border-bottom: 1px solid grey; */
`;

export const Logo = styled.img`
    width: 120px;
`;

export const Adres = styled.p`
    width: 250px;
`;

export const Phones = styled.div`
    
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Button = styled.button`
padding: 10px;
    background-color: #be0404;
    color: #ffffff;
    outline: 1px solid transparent;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:focus {
        outline: 1px solid transparent;
    }
`;