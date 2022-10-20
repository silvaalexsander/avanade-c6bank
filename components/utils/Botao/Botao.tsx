import React from 'react'
import styled from '@emotion/styled'

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    border-radius: 5px;
    background: #242424;
    color: #f8f8f8;
    border: 0.5px solid #888;
    height: 20px;
    cursor: pointer;
`
type ButtonProps = {
    onClick: () => boolean
}

export default function Botao() {
  return (
    <ButtonContainer/>
  )
}
