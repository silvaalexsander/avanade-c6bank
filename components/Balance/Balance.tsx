import React from 'react'
import styled from '@emotion/styled'
import { type } from 'os'
import Link from 'next/link'

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #f8f8f8;
  background: #242424;
  padding-left: 20px;
  height: 120px;
  & > div > strong{
    font-size: 1.8rem;
    margin-right: 10%;
  }
`
type BalanceProps = {
  amount: number
}

export default function Balance(props: BalanceProps) {
  return (
      <BalanceContainer>
        <p>Saldo</p>
        <div>
          <strong>{new Intl.NumberFormat('pt-br',{style:'currency', currency:'BRL'} ).format(props.amount)}</strong>
          <Link href={'#'}>
            <a>
              Mostrar
            </a>
          </Link>
        </div>
      </BalanceContainer>
  );
}
