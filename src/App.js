import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './parts/UserContext';
import ResetStyled from './reset/reset';
import ModifiValue from './ModifiValue';
import styled from 'styled-components';
import CreatCont from './CreatCont';
import { useState } from "react";
import NewValue from './NewValue'
import Extract from './Extract'
import Enter from './Enter';


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
                            <Route path='/Editar-entrada' element={<ModifiValue optional={true} />} /> 
                            <Route path='/Editar-saida' element={<ModifiValue optional={false} />} /> 
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
    height: 200vw;
`;