import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
//import { postLogin } from "./parts/trackit";
import {Button , Input, Linkers} from "./parts/Subparts";
import UserContext from './parts/UserContext';

export default function Enter(){
    const {user ,setUser} = useContext(UserContext);
    const [loginDate , setLogindate] = useState({});
    const [lo , setLo] = useState(false);
    const navigat = useNavigate()
    function login(event){
        event.preventDefault();
        const obj= {
            email: loginDate.email,
            password: loginDate.password
        } 
  //      const promise = postLogin(obj);
        // promise.catch(err);
        // promise.then(sucess);
        
    }
    function sucess(value){
        const obj= value.data;
        setUser(obj)
        return  navigat("/habitos");
    }
    function err(value){
        return alert(value),setLo(!lo);
    }
    return(

        <Container>
             
            <form onSubmit={login} disabled={lo} >   
                <span> MyWallet </span>
                <Input type={"email"} background={lo} placeholder={"E-mail"} onChange={e => setLogindate({...loginDate, email: e.target.value })} required readOnly={lo}/> 
                <Input type={"password"} background={lo} placeholder={"Senha"} onChange={e => setLogindate({...loginDate, password: e.target.value }) }  required readOnly={lo}/>
                <Button type={"submit"} width={"100%"} bolean={lo} heigt={"58px"} onClick={()=>{!lo ? setLo(!lo): setLo(lo)}}> Entrar </Button>
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
    span{
        font-family: 'Saira Stencil One';
        width: 147px;
        height: 50px;
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }
    form{
        margin-top: 33px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    
    }
    `;

