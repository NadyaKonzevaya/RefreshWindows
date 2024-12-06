import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding: 20px;
`;

export const Title = styled.h1`
    padding-bottom: 20px;
`;

export const Form = styled.div`
    display: flex;
`;
export const Image = styled.img`
    margin: 0 auto;
`;

export const ImageSmall = styled.img`
    width: 100px;
`

export const InputWrapper = styled.div`
    margin-bottom: 15px;
`


export const Input = styled.input`
    width: 80px;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #6c695e;
    padding: 5px;
    margin-right: 10px;
`;

export const Sizes = styled.div`
    width: 50%;
`;
export const Description = styled.div`
    width: 50%;
`;
export const Configuration = styled.div`

    /* border: 1px solid brown; */
`;

export const OptionList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
`;

export const OptionItem = styled.li`
    flex-basis: calc((100% - 20px) / 2);
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
margin-left: 5px;
text-align: left;
`;

export const Extras = styled.div`
display: flex;
flex-direction: column;
text-align: start;
gap: 10px;
margin-bottom: 15px;
`;

export const ExtraWrap = styled.div`
    
`
export const ExtraLabel = styled.label`
    display: inline-block;
    min-width: 125px;
`
export const Select = styled.select`

    width: auto;
    height: 33px;
    border-radius: 5px;
    border: 1px solid #6c695e;
    padding: 5px;
    margin-left: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6c695e;
`

export const SizeText = styled.span`
    display: inline-block;
    min-width: 90px;
`