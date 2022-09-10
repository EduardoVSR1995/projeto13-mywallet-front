import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { postLogin } from "./parts/mywallet";
import {Button , Input, Linkers, Heade} from "./parts/Subparts";
import UserContext from './parts/UserContext';


export default function Enter(){
    const {user ,setUser} = useContext(UserContext);
    const [loginDate , setLogindate] = useState({});
    const [boolean , setBoolean] = useState(false);
    const navigate = useNavigate()

    function login(event){
        event.preventDefault();
        setBoolean(boolean)
        const obj= {
            email: loginDate.email,
            password: loginDate.password
        } 
    postLogin(obj).catch(err).then(sucess);
        
    }
    function sucess(value){
        setUser(value.data);
        return navigate('/Extrato')
    }
    function err(value){
        return alert(value) && setBoolean(!boolean);
    }
    return(

        <Container>   
            <form onSubmit={login} >   
                <Heade> MyWallet </Heade>
                <Input type={"email"} background={boolean} placeholder={"E-mail"} onChange={e => setLogindate({...loginDate, email: e.target.value })} required readOnly={boolean}/> 
                <Input type={"password"} background={boolean} placeholder={"Senha"} onChange={e => setLogindate({...loginDate, password: e.target.value }) }  required readOnly={boolean}/>
                <Button type={"submit"} width={"100%"} bolean={boolean} heigt={"58px"} > Entrar </Button>
                <Linkers to={"/cadastro"}> Primeira vez? Cadastre-se!</Linkers>
            </form>
        </Container> 
    )

}

const Container = styled.div`
    margin-top: 68px ;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    form{
        margin-top: 33px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    
    }
    `;

