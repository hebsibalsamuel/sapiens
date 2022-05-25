import React, { useEffect } from 'react'
import Display from '../components/Display'
import Header from '../components/Header'
import styled from 'styled-components'
import { color, flexbox, typography,border,space,background,layout } from 'styled-system'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, setUserData } from '../redux/themeAppReducer'


const Box = styled.div`
  ${color};
  ${flexbox};
  ${typography};
  ${border};
  ${space};
  ${background};
  ${layout};
  `
const FlexBox = styled(Box)`
display:flex;
`


const User = () => {
  const username = useSelector(state => state.themeApp.userName)
  const theme = useSelector(state => state.themeApp.currentTheme)

  const dispatch = useDispatch();


  useEffect(()=>{
    fetch(` https://sapiens-pro.herokuapp.com/api/themeData/${username}`)
      .then(results => results.json())
      .then(data => {
        dispatch(changeTheme(data?.colorTheme))
        dispatch(setUserData(data))

      });   
  },[username,dispatch])
  return (
    <FlexBox minHeight='100vh' width='100%' alignItems='center' justifyContent='center' flexDirection='column' background={theme}>
      <Header></Header>
      <Display></Display>
    </FlexBox>
  )
}

export default User