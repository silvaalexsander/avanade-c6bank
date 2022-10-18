import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Icon } from '@mui/material'

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background: #242424;
  color: #f8f8f8;
  padding-left: 10px;
  ul{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li{
      font-weight: 400;
      font-size: 1.1rem;
      list-style: none;
      line-height: 30px;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover{
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
      }
    }
  }
`

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Link href={'/'}>
            {/* <Icon type={'home'}/> */}
            <a>
              Inicio
            </a>
          </Link>
          </li>
          
        <li>
          <Link href={'/'}>
            {/* <Icon type={'dollar'}/> */}
            <a>
              Extrato
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            {/* <Icon type={'dollar'}/> */}
            <a>
              Transferências
            </a>
          </Link>
        </li>
        <li>Pagamentos</li>
        <li>Cartões</li>
        <li>Crédito</li>
      </ul>
    </MenuContainer>
  )
}
