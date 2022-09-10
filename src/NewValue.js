import { Button, Input } from "./parts/Subparts";
import { useNavigate } from "react-router-dom";
import {postExtract} from "./parts/mywallet"
import styled from "styled-components";
import { useState} from "react";
import dayjs from 'dayjs'


export default function NewValue({optional}){
    const [value , setValue] = useState({boolean:false})
    const navigate = useNavigate();
    
    function newValue(event){
        event.preventDefault();
        setValue({...value, boolean:!value.boolean})
        const obj= {
            price: value.price,
            description: value.description,
            date: dayjs().format('DD/MM'),
        } 
        if(optional){
            postExtract({...obj, extract:true}).catch(err).then(sucess);
            return
        }
        postExtract({...obj, extract:false}).catch(err).then(sucess);
            return
        
    }
    function sucess(){
        return navigate('/Extrato')
    }
    function err(erro){
        return alert(erro) && setValue({...value, boolean:!value.boolean});
    }
    console.log(optional);
    return(
        <AllContainer>
            <p> Nova entrada </p>
            <form onSubmit={newValue}>
            <Input type={'number'} background={value.boolean} placeholder={"Valor"} onChange={e => setValue({...value, price: e.target.event })} required readOnly={value.boolean}/> 
            <Input background={value.boolean} placeholder={"Descrição"} onChange={e => setValue({...value, description: e.target.event })} required readOnly={value.boolean}/>
            <Button type={"submit"} width={"100%"} bolean={value.boolean} heigt={"58px"} >{ optional ? 'Salvar entrada' : 'Salvar saída'}</Button>
            </form>

        </AllContainer>
    )
}





const AllContainer = styled.div`
    
    width: 100%;
    height: 99%;

    form{
        width: 90% ;
        margin: 0px 5% ;
    }
    
    
    p{

        height: 30px;
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