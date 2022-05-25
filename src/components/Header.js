import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/themeAppReducer';
import styled from 'styled-components'
import { color, flexbox, typography, border, space, background, layout } from 'styled-system'


const Box = styled.div`
  ${color};
  ${flexbox};
  ${typography};
  ${border};
  ${space};
  ${background};
  ${layout};
  `
const Select = styled.select`
${color};
${flexbox};
${typography};
${border};
${space};
${background};
${layout};
`


const Header = () => {
  const dispatch = useDispatch()
  const [color, setColor] = useState('DEFAULT');
  const userData = useSelector(state => state.themeApp.userData)
  console.log(color)

  function changeColor(e) {
    setColor(e.target.value);
    dispatch(changeTheme(e.target.value))
    fetch(` https://sapiens-pro.herokuapp.com/api/themeData/update/${userData?._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        ...userData,
        colorTheme: e.target.value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <Box minHeight='10vh' >
      <Select  defaultValue={color} onChange={changeColor} placeholder='Change Theme' p='10px' m='10px'>
        <option value="DEFAULT" hidden>Change Theme</option>
        <option value='teal'>Teal</option>
        <option value='aliceblue'>Alice Blue </option>
        <option value='bisque'>Bisque </option>
        <option value='coral'>Coral </option>
      </Select>
    </Box>
  )
}

export default Header