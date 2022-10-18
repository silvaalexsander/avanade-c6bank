import React from 'react'
import styled from '@emotion/styled'
import Profile from '../Profile'
import Balance from '../Balance'
import Menu from '../Menu'

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`

export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile name='Alexsander' role='Desenvolvedor' agency='0001' accountNumber='35156218-3'/>
      <Balance amount={4502031}/>
      <Menu/>
    </SideBarContainer>
    
  )
}
