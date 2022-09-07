import { useState} from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
//import { postCreat } from './parts/MyWallet';
import {Button, Input, Linkers} from './parts/Subparts';



export default function CreatCont(){
    const [personalDate, setPersonalDate]= useState({});
    const [lo , setLo] = useState(false);
    const navigate = useNavigate()
    function submitobj(event){ 
        const obj={
            email:personalDate.email,
            name:personalDate.name,
            image:personalDate.image,
            password:personalDate.password
        }
        event.preventDefault();
//            const promise = postCreat(obj);
        //     promise.catch(err);
        //     promise.then(sucess);
         }
    function err(value){
        return alert(value), setLo(!lo);
    }
    function sucess(){
        return navigate("/", alert("Parabéns, cadastro concluído") );
    }

    return(
        <Container>
            <form onSubmit={submitobj}>   
                <span> MyWallet </span>
                <Input type={"text"} background={lo} placeholder={"Nome"} onChange={e => setPersonalDate({...personalDate, name: e.target.value})} required readOnly={lo}  />
                <Input type={"email"} background={lo} placeholder={"E-mail"} onChange={e => setPersonalDate({...personalDate, email: e.target.value})}  required readOnly={lo}/> 
                <Input type={"password"} background={lo} placeholder={"Senha"} onChange={e => setPersonalDate({...personalDate, password: e.target.value})}  required  readOnly={lo}/>
                <Input type={"password"} background={lo} placeholder={"Confirme a senha"} onChange={e => setPersonalDate({...personalDate, password: e.target.value})}  required  readOnly={lo}/>
                <Button type={"submit"} width={"100%"} bolean={lo} heigt={"45px"} onClick={()=>{!lo ? setLo(!lo): setLo(lo)}} scrib={"Entrar"}> Cadastrar </Button>
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