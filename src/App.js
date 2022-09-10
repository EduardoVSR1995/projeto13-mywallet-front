import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import styled from 'styled-components';
import ResetStyled from './reset/reset';
import CreatCont from './CreatCont';
import Enter from './Enter';
import Extract from './Extract'
import NewValue from './NewValue'

import UserContext from './parts/UserContext';

export default function App() {
    const [user, setUser] = useState([]); 
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <ResetStyled />
                <Wrapper>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Enter />} />
                            <Route path="/cadastro" element={<CreatCont />} />
                            <Route path='/Extrato' element={<Extract/>} />
                            <Route path='/Novo-gasto' element={<NewValue optional={false} />} />
                            <Route path='/Novo-recebido' element={<NewValue optional={true} />} /> 
                        </Routes>
                    </BrowserRouter>
                </Wrapper>
            </UserContext.Provider>
        </>
    );
}
const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Saira+Stencil+One&display=swap');
    background-color: #8C11BE ;
    display: flex;
    justify-content: center ;
    height: 180vw;
`;