import React from 'react'

function Panel(props) {
    if(!props.shouldRender) return null;
  return props.children;


}

export default Panel