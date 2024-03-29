import { getMyextracts, getToday } from "./parts/mywallet";
import { useState, useContext, useEffect } from "react";
import { Container, Text} from "./parts/Subparts";
import EveryEstracts from './parts/EveryEstracts';
import { useNavigate } from "react-router-dom";
import UserContext from './parts/UserContext';
import styled from "styled-components";
import vetor from './imags/Vector.png';
import plus from './imags/plus.png';
import less from './imags/less.png';


export default function Extract() {
    const { user, setUser } = useContext(UserContext);
    const [add, setAdd] = useState({ bolean: true });
    const navigat = useNavigate()
    let plusplus = 0;

    useEffect( () => {
        getToday({ headers: { Authorization: `Bearer ${user.token}` } }).catch(err).then(sucess1);
        getMyextracts({headers: { Authorization: `Bearer ${user.token}`}}).catch(err).then(sucess2);
        user.movements === undefined ? cont() : cont(user.movements);
    }, []);
    
    function reload(){
        getMyextracts({headers: { Authorization: `Bearer ${user.token}`}}).catch(err).then(sucess2);
    }

    function cont(list){

        if(!list) return; 

        list.map((i)=>{

            if(i.extract){
                plusplus+=Number(i.price)
            }
            else{plusplus-=Number(i.price)}
        })
        if(plusplus>=0){
            setAdd({...add, movements:list ,cont: plusplus, color:'#03AC00',exit: exit });
        }else{
            setAdd({...add, movements:list ,cont: plusplus, color: '#C70000',exit: exit });
        }
    }

    function exit(){
        const i = window.confirm("Deseja sair da sua conta?")
        if(i) return navigat('/')
    }


    function sucess1(value) {
        setUser({...user, name:value.data.name });
    }

    function sucess2(value) {
        cont(value.data);        
    }
    function err(value) {
        alert(value);
    }
    
    return (
            <AllContainer>

                <p> Olá, {user.name}{ add.cont ? `, seu saldo é de $${add.cont.toFixed(2)}`: ""} <img src={vetor} onClick={exit}/> </p>
                <Container background={'#FFFFFF'} width={'90%'} height={'50%'}>
                  <Allextracts> {add.movements === undefined || add.movements.length === 0 ? <h1>Não há registros de <br/> entrada ou saída</h1> : add.movements.map((value,index)=><EveryEstracts key={index} obj={value} reload={reload} ></EveryEstracts> ) }</Allextracts>
                    {add.movements === undefined || add.movements.length === 0 ? "" : <h3><Text weight={'700'} >SALDO</Text><Text color={add.color}>$ {add.cont.toFixed(2)}</Text></h3>}
                </Container>
                <Container onClick={()=> navigat('/Novo-recebido')} background={'#A328D6'} width={'42.5%'} height={'20%'} ><Imges src={plus}/><h2 >Nova entrada</h2></Container>
                <Container onClick={()=> navigat('/Novo-gasto')}background={'#A328D6'} width={'42.5%'} height={'20%'} ><Imges src={less}/><h2>Nova saída</h2></Container>

            </AllContainer>
    )
}



const Imges = styled.img`
    width: 9% ;
`;

const Allextracts = styled.div`
    height: 90% ;
    overflow: scroll ;
    ::-webkit-scrollbar { display: none; }
    


`;


const AllContainer = styled.div`
    display: flex ;
    flex-wrap: wrap ;
    
     h3{ 
        display:flex ;
        justify-content: space-between;
        width: 90% ;
        margin-left: 7% ;
    }

    h1{
        margin-top: 50%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        margin: 5% ;
        width:100%;
        color: #FFFFFF;
        
        
    }
    @media (max-width:900px){        
        h2{
            width: 20% ;
} }
    

    p{

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        margin-left: 4% ;
        padding: 20px;
        width: 90%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: space-between;
}



`;
