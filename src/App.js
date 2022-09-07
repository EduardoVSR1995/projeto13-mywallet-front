import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import styled from 'styled-components';
import ResetStyled from './reset/reset';
import CreatCont from './CreatCont';
import Enter from './Enter';
//import Spending from './Spending';
// import NewExpense from './NewExpense'
// import NewGain from './NewGain';

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
                            {/* <Route path='/gastos' element={<Spending />} />
                            <Route path='/Novo-gasto' element={<NewExpense />} />
                            <Route path='/Novo-ganho' element={<NewGain />} /> */}
                        </Routes>
                    </BrowserRouter>
                </Wrapper>
            </UserContext.Provider>
        </>
    );
}
const Wrapper = styled.div`
    background-color: #8C11BE ;
    display: flex;
    justify-content: center ;
    height: 180vw;
`;