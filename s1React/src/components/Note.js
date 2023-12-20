import React from 'react'

const Note = ({ note }) => {
  return <li>{note.name.common}</li>
}

export default Note