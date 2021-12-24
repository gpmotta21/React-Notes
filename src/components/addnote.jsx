import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";


const AddNote = ({ arrayOfNotes }) => {
  const [text, setText] = useState('');

  return (
    <div id='addNote' className='note'>
      <textarea maxLength={200} className='content' type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <div className='noteFooter'>
        <button type="button" onClick={() => arrayOfNotes(text)}><FaCheckCircle /></button>
        <div>{200 - text.length}</div>
      </div>
    </div>
  )
}
export default AddNote
