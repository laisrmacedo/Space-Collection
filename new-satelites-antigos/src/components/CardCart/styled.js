import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 110px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .image-card{
    overflow-y: hidden;
    position: absolute;
    height: 110px;
    width: 150px;
    left: 50px;
    box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);

    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .info-card{
    width: 90%;
    height: 100px;
    padding-left: 170px;
    background-color: #404040;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

`
export const Info = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  h1{
    color: #D2D0D0;
    font-size: 16px;
  }
  p{
    color: #D2D0D0;
    font-size: 14px;
  }
  span{
    font-size: 14px;
    color: #E1B629;
    font-weight: bold;
  }
`
export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
      color: white;
    font-size: 12px;

    }
  }
  button{
    width: 25px;
    height: 22px;
    color: black;
    cursor: pointer;
    border: none;
    &hover{
      opacity: 0.8;
    }
    &:active{
      color: gray;
    }
  }
  h4{
    color: white;
  }
`

export const Delete = styled.button`
  height: 22px;
  width: 70px;
  justify-self: end;
  cursor: pointer;
  border: none;
  &:hover{
    opacity: 0.8;
  }
  &:active{
    opacity: 0.8;
    background-color: #a41e1e;
  }
`
