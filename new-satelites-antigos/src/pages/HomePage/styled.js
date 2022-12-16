import styled from "styled-components";

export const BackgroundImg = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`
export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  
  .text{
    height: 55%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 8%;
    background: linear-gradient(90deg, rgba(255,255,255,0.26094187675070024) 61%, rgba(0,0,0,0) 97%);
    
    h1{
      text-transform: uppercase;
      font-weight: bolder;
      font-size: 44px;
      color: black;
    }
    
    h2{
      color: black;
      font-size: 28px;
    }
  }
  
  .image{
    width: 40%;
    height: 55%;
    display: flex;
    position: relative;
    /* background-color: rgb(0.68,0.68,0.68, 0.3); */

    div{
      overflow-y: hidden;
      border-radius: 50%;
      box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);
    }
    
    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  
  .image1{
    position: absolute;
    top: 20px;
    height: 150px;
    width: 150px;
  }

  .image2{
    position: absolute;
    bottom: 0;
    left: 60px;
    height: 120px;
    width: 120px;
  }

  .image3{
    position: absolute;
    left: 130px;
    height: 200px;
    width: 200px;
  }
`

