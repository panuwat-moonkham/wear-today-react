import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function Editor () {
  const [text, setText] = useState('')

  const handleOnChange = (e, editor) => {
    const data = editor.getData()
    setText(data)
  }

  return (
    <>
      <h1>Article</h1>
      <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
      {text}
    </>
  )
}

export default Editor
