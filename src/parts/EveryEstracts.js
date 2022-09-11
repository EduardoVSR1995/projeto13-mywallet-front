import styled from "styled-components"
import { Container , Text} from "./Subparts"

export default function EveryEstracts({...props}){
    const {date, description, price, extract} = props.obj;
    let increaseDecrease = `#C70000`;
    if(extract){
        increaseDecrease='#03AC00';
    }
    return(
        <Container >
           <Tex><Text color={'#C6C6C6'}>{date} <Text color={'#000000'}> &nbsp; {description}</Text> </Text><Text color={increaseDecrease}>{Number(price).toFixed(2)}</Text></Tex> 
        </Container>
    )
}

const Tex = styled.div`
    width: 100% ;
    display: flex ;
    justify-content:space-between ;
`;