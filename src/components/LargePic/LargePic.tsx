import React from 'react'
import TwoMbPic  from "./two-mb.jpeg";
type Props = {}

const LargePic = (props: Props) => {
  return (
    <img src={TwoMbPic} width="500" alt="high pic"/>
  )
}

export default LargePic