import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #101010;
  height: 16vh;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: sticky;
  top: 0;
  `
export const HeaderContent = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;

  > img {
    height: 24px;
  }
`
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    height: 1px;
    width: 40px;
    background-color: #505050;
    color: white;
  }
`

export const Nav = styled.nav`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  color: #808080;
  font-size: 20px;
  font-weight: bold;
  
  >div{
    display: flex;
    justify-content: flex-end;
    width: 70%;
    gap:20px;
  }
  
  span{
    cursor: pointer;
    &:hover{
      color: #BDBDBD;
      transition: color 0.3s ease-in-out;
    }
    }
  `
  export const Login = styled.div`
    display: flex;
    align-items: flex-end;
    cursor: pointer; 
    &:hover{
        filter: brightness(5);
        transition: filter 0.3s ease-in-out;
    }
    
    p{
      font-size: 18px;
      height: 28px;
    }

    img{
      height: 32px;
      padding: 6px;
    }
  `

  export const Carrinho = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    position: relative;
    
    div{
      display: ${(props) => props.show};
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      background-color: red;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      
      p{
        font-weight: bold;
        color: white;
        font-family: system-ui;
        font-size: 10px;
        position: relative;
        left: -1px;
      }
    }

    img{
      height: 19px;
      cursor: pointer; 
      &:hover{
        filter: brightness(5);
        transition: filter 0.3s ease-in-out;
      }
    }
  `
