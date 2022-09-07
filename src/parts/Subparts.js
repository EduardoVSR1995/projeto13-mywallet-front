import styled from "styled-components";
import { Link } from "react-router-dom";

function Container(props){
    return(
        <Contai size={props.size} font={props.font} > {props.children}</Contai>
    )   
}
const Contai = styled.div`
    padding: 15px;
    margin: 0px 0px 30px 5%;
    width: 90%;
    background: #FFFFFF;
    border-radius: 5px;
    ${(props)=> {if(props.size==="mediun"){ return `height:180px;`;} if(props.size==="auto"){ return `height:auto;`;}if(props.size==="min"){ return `height:91px;`;} } }

`;


function Button({...props}){
    return(
        <Butto{...props}>{props.children}</Butto>
    )

}
const Butto = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer; 
        border-style: none;
        width: ${props=> props.width};
        height: ${props=> props.heigt};
        background: #A328D6;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 26px;
        color: #FFFFFF;
        opacity: ${(props) => !props.bolean ? 1 : 0.5 };
        transition: background 50ms linear ;
        :active{
        background-color: ${props => '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')} ;
        transform: translatey(4px);
        }
  
`;

function Linkers({...props}){
    return(
      <Linke> <Link {...props}>{props.children} </Link> </Linke>
    )    
}

const Linke = styled.div`
    margin-top: 25px;
    a{
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: #FFFFFF;
    }
`;

function Text(props){
    return(
        <Tex font={props.font} >{props.children}</Tex>
    )
}
const Tex = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: ${props=> props.font !== undefined ? "13px" : "18px" };
    line-height: 25px;
    color: #666666;
`;


function Input({...others}){
    return(
        <Inp {...others}/> 
    )
}
const Inp = styled.input`
        cursor: pointer;
        -webkit-box-shadow: ${(props) => !props.background ? "0 0 0 50px white inset" : "0 0 0 50px #F2F2F2 inset" }  ;
        padding: 10px;
        width: 100%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 58px;
        margin-bottom: 5px;
        color:${(props) => !props.background ? "#000000" : "#D4D4D4" };
        opacity: ${(props) => !props.background ? 1 : 0.6 } ;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;

        ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;
        color: #000000 ;
        }
        :focus, select:focus {
        border: 1 none;
        outline: 0;
        }    

`;


function Topo({logo, image}){
return(
    <Top><img src={logo} /> <Foto src={image}/> </Top>
)
}
const Top = styled.div`
    z-index: 1;
    position: fixed;
    left: 0px;
    top:0px;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    img{
        margin: 0px 20px;    
    }
`;
const Foto = styled.img`
    margin: 0px 20px;
    border-radius: 50%;
    width: 51px;
    height: 51px;
    
    `;


const Base=styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a{
        text-decoration: none;
        color:#52B6FF ;
    }

`;
const Circule = styled.div`
width: 91px;
height: 91px;
margin-bottom: 50px;

`;


export { Container, Button ,Text , Input, Topo, Linkers }
