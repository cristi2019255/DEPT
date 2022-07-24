import { useTranslation } from "react-i18next";
import { Note } from "../../types";
import { Target } from "../Target";
import './ClientNoteList.css';

export const ClientNoteList: React.FC<{notes: Note[]}> = ({notes}) => {    
    const {t} = useTranslation('common');
    
    return (
        <>
            { notes.map((note: Note, index: number) =>  (
                <div key={index}>
                    {index !== 0 && <hr/>}
                    <div>
                        <div className="note-title">{note.title}</div>
                        <div className="note-content">{note.content}</div>
                        <a className="note-read-more text-light" href={note.readMoreLink}>
                            <div className="d-inline"> 
                                <Target></Target>
                            </div>
                            <div className="d-inline read-more">
                                {t('label.readMore')}
                            </div> 
                        </a>
                    </div>
                </div>
            )
        )}
        </>

    )
} 