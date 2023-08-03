import style from './preview.module.css';

const Preview = ({journal}) =>
{
    return (
        <div className={style.journalPreview}>
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