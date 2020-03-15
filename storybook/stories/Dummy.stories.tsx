import React from 'react'
import Text from '../../src/uikits/Text'

export default { title: 'Text' }

export const defaultText = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    >
      <div style={{ width: '100%' }}>
        <Text>halo</Text>
      </div>
    </div>
  )
}
