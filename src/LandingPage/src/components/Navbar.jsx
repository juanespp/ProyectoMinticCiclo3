import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
flex: 1;
align-content: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Center = styled.div`
flex: 1;
`;
const Right = styled.div`
flex: 1;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Language>EN</Language>   
                <SearchContainer>
                    <input input type="text"/>
                    </SearchContainer>             
                </Left>
                <Center>
                </Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
