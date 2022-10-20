import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Icon } from '@mui/material'
import Home from '../utils/icons/Home/Home'
import Extract from '../utils/icons/Extrato'
import Transferencia from '../utils/icons/Transferencia'
import Pagamento from '../utils/icons/Pagamento'
import Cartoes from '../utils/icons/Cartoes'
import Credito from '../utils/icons/Credito'

const MenuContainer = styled.nav`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #242424;
  padding-top: 20px;
  color: #f8f8f8;
  padding-left: 10px;
  padding-bottom: 10px;
  ul{
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 230px;
    overflow-Y: auto;
    padding-top: 35px;
    &::-webkit-scrollbar{
      width: 6px;
    }
    &::-webkit-scrollbar-thumb{
      background: #f8f8f8;
      border-radius: 2px;
    }
    li{
      font-weight: 400;
      font-size: 1.1rem;
      list-style: none;
      line-height: 30px;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      transition: .4s;
      display: flex;
      padding-left: 20px;
      padding-top: 10px;
      &:hover{
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
        border-radius: 7px;
        font-size: 1.3rem;
        transition: .4s;
      }
      & > a{
        margin-left: 10px;
      }
    }
  }
`

export default function Menu() {
  return (
      <MenuContainer>
        <ul>
          <li>
              <Icon>
                <Home/>
              </Icon>
            <Link href={'/'}>
              <a>
                Inicio
              </a>
            </Link>
          </li>

          <li>
              <Icon>
                <Extract/>
              </Icon>
            <Link href={'/'}>
              <a>
                Extrato
              </a>
            </Link>
          </li>

          <li>
              <Icon>
                <Transferencia/>
              </Icon>
            <Link href={'/'}>
              <a>
                Transferências
              </a>
            </Link>
          </li>

          <li>
              <Icon>
                <Pagamento/>
              </Icon>
            <Link href={'/'}>
              <a>
                Pagamentos
              </a>
            </Link>
          </li>

          <li>
              <Icon>
                <Cartoes/>
              </Icon>
            <Link href={'/'}>
              <a>
                Cartões
              </a>
            </Link>
          </li>

          <li>
              <Icon>
                <Credito/>
              </Icon>
            <Link href={'/'}>
              <a>
                Crédito
              </a>
            </Link>
          </li>
            
         
        </ul>
      </MenuContainer>
  );
}
