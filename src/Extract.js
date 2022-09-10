import { useState, useContext, useEffect } from "react";
import EveryEstracts from './parts/EveryEstracts';
import { useNavigate } from "react-router-dom";
import UserContext from './parts/UserContext';
import { getToday } from "./parts/mywallet";
import { Container} from "./parts/Subparts";
import styled from "styled-components";
import plus from './imags/plus.png'
import less from './imags/less.png'


export default function Extract() {
    const { user, setUser } = useContext(UserContext);
    const [add, setAdd] = useState({ bolean: true });
    const navigat = useNavigate()

    useEffect( () => {
        getToday({ headers: { Authorization: `Bearer ${user}` } }).catch(err1).then(sucess1);
    }, []);
    


    function sucess1(value) {
        setAdd({...value.data, token:user });
    }

    function err1(value) {
        alert(value);
    }

console.log(add)
    return (
            <AllContainer>

                <p> Olá, {user.name} </p>
                
                <Container background={'#FFFFFF'} width={'90%'} height={'70%'}>
                    {add.movements === undefined || add.movements.length === 0 ? <h1>Não há registros de <br/> entrada ou saída</h1> : add.movements.map((value,index)=><EveryEstracts key={index} ></EveryEstracts> ) }
                </Container>
                <Container onClick={()=> navigat('/Novo-recebido')} background={'#A328D6'} width={'42.5%'} height={'20%'} ><Imges src={plus}/><h2>Nova <br/> entrada</h2></Container>
                <Container onClick={()=> navigat('/Novo-gasto')}background={'#A328D6'} width={'42.5%'} height={'20%'} ><Imges src={less}/><h2>Nova <br/> saída</h2></Container>

            </AllContainer>
    )
}

const Imges = styled.img`
    width: 10% ;
    margin: 3%;
`;


const AllContainer = styled.div`
    display: flex ;
    flex-wrap: wrap ;
    width: 100%;
    height: 99%;
    background-color:#8C11BE ;
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
        margin-top:40% ;
        padding: 20px;
        width: 100%;
        color: #FFFFFF;  
    
    }

    p{

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        margin:25px ;
        padding: 20px;
        width: 100%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: space-between;
}


  
`;
