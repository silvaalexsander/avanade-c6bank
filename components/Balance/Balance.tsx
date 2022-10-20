import React, { useState } from 'react'
import styled from '@emotion/styled'
import Botao from '../utils/Botao'
import VisibilityIcon from '@mui/icons-material/Visibility'

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: #f8f8f8;
  background: #242424;
  padding-left: 20px;
  height: 120px;
  width: 80%;
  margin-left: 15px;
  & > div > strong{
    font-size: 1.6rem;
    margin-right: 10%;
  }
`
type BalanceProps = {
  amount: number
}

export default function Balance(props: BalanceProps) {
  const [show, setShow] = useState<boolean>(false)
  return (
      <BalanceContainer>
        <p>Saldo</p>
        <div>
          
          {show ? 
            <strong>{new Intl.NumberFormat('pt-br',{style:'currency', currency:'BRL'} ).format(props.amount)}</strong>:
            <strong>R${`**********,**`}</strong>}
       
          
        </div>
        <button onClick={()=> setShow(!show)}>
            {show ? 'hideSVG' : 'showSVG'}
          </button>
        {/* <Botao onClick={()=> setShow(!show)}/> */}
      </BalanceContainer>
  );
}
