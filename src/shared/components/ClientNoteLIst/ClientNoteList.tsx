import { Note } from "../../types";
import { Target } from "../Target";
import './ClientNoteList.css';

export const ClientNoteList: React.FC<{notes: Note[]}> = ({notes}) => {    
    return (
        <>
            { notes.map((note: Note, index: number) =>  (
                <>
                    {index !== 0 && <hr key={index}/>}
                    <div key={index}>
                        <div className="note-title">{note.title}</div>
                        <div className="note-content">{note.content}</div>
                        <a className="note-read-more text-light" href={note.readMoreLink}>
                            <div className="d-inline"> 
                                <Target></Target>
                            </div>
                            <div className="d-inline read-more">
                                Read More
                            </div> 
                        </a>
                    </div>
                </>
            )
        )}
        </>

    )
} 