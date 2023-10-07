import React from 'react';
import style from "./Button.module.css"


function Button(props) {
  return (
    <button href={props.link} className={style.button}>
        {props.value}
    </button>
  )
}

export default Button