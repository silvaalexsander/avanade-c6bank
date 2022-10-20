import React from 'react'
import styled from '@emotion/styled'
import { Avatar, Icon, Typography } from '@mui/material'
import Copy from '../utils/icons/Copy'
import Link from 'next/link'

const ProfileContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: #242424;
  color: #f8f8f8;
  h2{
    margin: 0;
    font-weight: 400;
  }
  h3{
    margin: 0;
    font-weight: 300;
    font-size: 1rem;
  }
  `

const Accout = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border: solid 0.5px #888;
  border-radius: 2px;
  margin-top: 5%;
  div:first-child{
    padding-left: 10px;
    width: 70%;
    & > div{
      width: 100%;
    } 
  } 
  a{
    margin-left: 35px;
  }
`

type ProfileProps = {
  name: string
  role: string
  agency: string
  accountNumber: string
}  

export default function Profile(props: ProfileProps) {
  return (
    <ProfileContainer>
       <Avatar alt={props.name} src='https://avatars.githubusercontent.com/u/54286509?s=400&u=bbff230d63097c76f61b0d7f6306965d2c9864fd&v=4' sx={{width: 80, height: 80}}/>
       <h2>{props.name}</h2>
       <h3>{props.role}</h3>
       <Accout>
          <div>
            <p>366 - Banco C6 S.A</p>
            <p>Ag:{props.agency} C/C: {props.accountNumber}</p>
          </div>
          <div>
            <Link href="">
              <a>
                <Icon>
                  <Copy/>
                </Icon>
              </a>
            </Link>
          </div>
       </Accout>
    </ProfileContainer>
  )
}
