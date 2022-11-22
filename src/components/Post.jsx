import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {
    
    const [comments, setComments]= useState([
        'Post muito bacana este !'
    ])

const [newCommentText, setNewCommentText] = useState('')

    const publishedDataFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDataRelativeToNow =  formatDistanceToNow (publishedAt,{
        locale: ptBR,
        addSuffix:true,
    })

function handleCreatNewComment () {
    event.preventDefault()

    const newCommnetText= event.target.comment.value
    
    setComments([...comments,   comments.length + 1]);

    event.target.comment.value='';

}

function handleCreatNewCommentChange () {

}

return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDataFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDataRelativeToNow}    
            </time>
        </header>

        <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p><a href="#">{line.content}</a></p>;
                }
            })}
        </div>
        
<form onSubmit={handleCreatNewComment} className={styles.commentForm}>
            <strong>Deixe seu feeedback</strong> 
            <p></p>


            <textarea 
                name="commnet"
                placeholder="Deixe um comentário" 
                onChange={handleCreatNewCommentChange}
            />
            <p></p><br></br>
            <footer>
            <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
        {comments.map(comment =>{
            return <Comment content = {comment} />
        })}

        </div>
    </article>
)  
}