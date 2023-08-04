import style from './preview.module.css';

const Preview = ({journal}) =>
{
    const viewJournal = () => {

        window.location.href = `/journals/${journal.id}`;
    }

    return (
        <div className={style.journalPreview} onClick={viewJournal}>
            <div className={style.content}>
                <span className={style.date}><b>{journal.date}</b></span>
            <div className={style.body}>
                {journal.entry}
            </div>
            </div>
        </div>
    )
}

export default Preview;