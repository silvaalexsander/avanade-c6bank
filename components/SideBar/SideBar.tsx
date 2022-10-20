import React from 'react'
import styled from '@emotion/styled'
import Profile from '../Profile'
import Balance from '../Balance'
import Menu from '../Menu'

const SideBarContainer = styled.div`
position: fixed;
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100vh;
  background: #242424;
  border-radius: 5px;
`

export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile name='Alexsander' role='Desenvolvedor' agency='0001' accountNumber='35156218-3'/>
      <Balance amount={65000}/>
      <Menu/>
    </SideBarContainer>
    
  )
}
