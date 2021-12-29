import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import useWindowSize from './myhooks/useWindowSize.jsx'

const AddNote = ({ arrayOfNotes,setHeight }) => {
  const [text, setText] = useState('');
  const size = useWindowSize()

  return (
    <div id='addNote' className='note'>
      <textarea maxLength={200} className='content' type="text" value={text} onFocus={() => setHeight(size.height)} onChange={(e) => setText(e.target.value)} />
      <div className='noteFooter'>
        <button type="button" onClick={() => arrayOfNotes(text)}><FaCheckCircle /></button>
        <div>{200 - text.length}</div>
      </div>
    </div>
  )
}
export default AddNote
