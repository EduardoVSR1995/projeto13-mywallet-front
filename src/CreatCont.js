import {Button, Input, Linkers, Heade} from './parts/Subparts';
import { useNavigate} from 'react-router-dom';
import { postCreat } from './parts/mywallet';
import styled from 'styled-components';
import { useState} from 'react';

export default function CreatCont(){
    const [personalDate, setPersonalDate]= useState({});
    const [boolean , setBoolean] = useState(false);
    const navigate = useNavigate()
    function submitobj(event){ 
        event.preventDefault();
        const {name, email, password, confirmPassword} = personalDate
        if( password !== confirmPassword ) return alert("As senhas são diferentes");
        setBoolean(!boolean);
        const i = postCreat({name: name, email:email, password:password});
        i.then(sucess);
        i.catch(err);
    }
    

    function err(value){
        setBoolean(boolean)
        return alert(value) ;
    }
    function sucess(){
        alert("Parabéns, cadastro concluído");
        navigate("/")
        return ;
    }

    return(
        <Container>
            <form onSubmit={submitobj}>  
                <Heade> MyWallet </Heade>
                <Input type={"text"} background={boolean} placeholder={"Nome"} onChange={e => setPersonalDate({...personalDate, name: e.target.value})}  readOnly={boolean}  required="required"/>
                <Input type={"email"} background={boolean} placeholder={"E-mail"} onChange={e => setPersonalDate({...personalDate, email: e.target.value})}   readOnly={boolean} required="required"/> 
                <Input type={"password"} background={boolean} placeholder={"Senha"} onChange={e => setPersonalDate({...personalDate, password: e.target.value})}    readOnly={boolean} required="required" />
                <Input type={"password"} background={boolean} placeholder={"Confirme a senha"} onChange={e => setPersonalDate({...personalDate, confirmPassword: e.target.value})}    readOnly={boolean}/>
                <Button  type={"submit"} width={"100%"} bolean={boolean} heigt={"58px"} > Cadastrar  </Button>
                <Linkers to={"/"}> Já tem uma conta? Entre agora!</Linkers>
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