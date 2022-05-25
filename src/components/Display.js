import React from 'react'
import { useSelector } from "react-redux";
import styled from 'styled-components'
import { color, flexbox, typography,border,space,background,layout } from 'styled-system'


const Box = styled.div`
  ${color};
  ${flexbox};
  ${typography};
  ${border};
  ${space};
  ${background};
  ${layout};
  `


const Display = () => {
  const theme = useSelector(state => state.themeApp.currentTheme)
  const name = useSelector(state => state.themeApp.userName)

  return (
    <Box width= '100%' minHeight='90vh' textAlign='center' fontSize='50px'>{`${name}'s current theme is ${theme}`}</Box>
  )
}

export default Display