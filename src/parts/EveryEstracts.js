import { deletCont } from "./mywallet.js";
import { Container , Text} from "./Subparts"
import styled from "styled-components"

export default function EveryEstracts({...props}){
    console.log(props)
    const {date, description, price, extract, _id} = props.obj;
    let increaseDecrease = `#C70000`;
    if(extract){
        increaseDecrease='#03AC00';
    }
    function del(){
        deletCont({ headers: { authorization: `Bearer ${_id}` } }).then(props.reload());
    }


    return(
        <Container >
           <Tex><Text color={'#C6C6C6'}>{date} <Text color={'#000000'}> &nbsp; {description}</Text> </Text><Text color={increaseDecrease}>{Number(price).toFixed(2)}<Text color={'#C6C6C6'} onClick={del} > &nbsp; X </Text></Text></Tex> 
        </Container>
    )
}

const Tex = styled.div`
    width: 100% ;
    display: flex ;
    justify-content:space-between ;
`;