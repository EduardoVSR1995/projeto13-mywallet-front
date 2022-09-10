import styled from "styled-components"
import { Container, Text } from "./Subparts"
import { delHabts } from "./mywallet";
import UserContext from './UserContext';
import { useContext } from "react";

export default function EveryEstracts({obj}){
    const {user ,setUser} = useContext(UserContext);
    function del(){
        const boole =  window.confirm("desejaexcluir o habito")
        if(boole){
        const promis = delHabts(obj.id , {headers: {Authorization: `Bearer ${user.token}`}} )
        promis.then(sucess);
        promis.catch(err);
        }
    }
    function sucess(){
        setUser({...user, reload:true })
        user.reload2();        
    }
    function err(value){
        alert(value)

    }

    return(
        <Container size={"min"} >
           <Text>{obj.name} </Text><Img onClick={del} /> 
           <Days></Days>
        </Container>
    )
}
const Img = styled.img`
    position: relative;
    bottom: 20px;
    left: 300px;
    z-index: 0;
`;

const Days = styled.div`
    bottom: 10px;
    width: 320px;
    display: flex;
    
`;
