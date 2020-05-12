import React from 'react'
import styles from './index.css'

const ColorfulButton = props => {

  return (
    <div
      className={styles.btnBody}
      style={{
        color: props.fontColor || '#ffffff',
        borderRadius: props.borderRadius || 5,
        width: props.width || 100,
        height: props.height || 100,
      }}
    >
      <span>
        {props.text || 'Colorful Button'}
      </span>
    </div>
  )
}

export default ColorfulButton