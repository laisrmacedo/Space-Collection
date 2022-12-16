import {priceFormatter} from '../../utils/priceFormatter'
import { GlobalContext } from "../../context/GlobalContext"
import { useState, useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {goToStorePage, goToLoginPage} from '../../router/coordinator'
import { Container } from './styled';


export const InfoCart = () => {
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const {listCart, setListCart} = context

  const [totalCart, setTotalCart] = useState(0);
  const infoForm = JSON.parse(localStorage.getItem("form")|| "{}")
  
  useEffect(()=>{
    let soma = 0
    for(let item of listCart){
      soma += item.quantity * item.price
    }
    setTotalCart(soma)
  },[listCart])

  const finishCart = () => {
    setListCart([])
  }

  return (
    <Container>
      {listCart.length === 0? 
        <></>  
      :
      <>
      <div className='box'>
        {JSON.stringify(infoForm) === "{}" ?
          <>
            <p>Para finalizar, acesse sua conta</p>
            <button onClick={() => goToLoginPage(navigate)}>LOGIN</button>
          </>
        :
          <p>Estamos quase finalizando!</p>
        }
      </div>
      <div className='box'>
        <p>RESUMO</p>
        <div>
          <p>Subtotal:</p>
          <p>{priceFormatter.format(totalCart)}</p>
        </div>
        <div>
          <p>Entrega:</p>
          <p>{priceFormatter.format(150)}</p>
        </div>
        <div className='total'>
          <p>Total:</p>
          <p>{priceFormatter.format(totalCart + 150)}</p>
        </div>
      </div>
      <button onClick={() => goToStorePage(navigate)}>CONTINUAR COMPRANDO</button>
      {JSON.stringify(infoForm) === "{}" ? 
      <div></div>
      :
      <button onClick={() => finishCart()}>FINALIZAR</button>
      }
      </>
      }
    </Container>
  )
}