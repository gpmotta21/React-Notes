import AddNote from './addnote'
import { FaRegTrashAlt } from "react-icons/fa";


export default function NodeList({ nList, del, ar, setHeight }) {
    return (
        <div id='noteListContainer'>
            <AddNote arrayOfNotes={ar} setHeight={setHeight} />
            {nList !== '' ? nList.map((item) =>
                <div id='notes' className='note'>
                    <div className='content'>{item.text}</div>
                    <div className='noteFooter'>
                        <button type="button" onClick={() => del(item.id)}><FaRegTrashAlt /></button>
                    </div>
                </div>
            ) : ''}
        </div>
    )
}