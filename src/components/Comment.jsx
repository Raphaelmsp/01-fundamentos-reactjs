import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}){
    return(
    <div className={styles.comment}>
        <img hasBorder src="https://github.com/Raphaelmsp.png" alt="" />
    
    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Raphael Pedro</strong>
                    <time title="01 Novembro ás 19:40h" dateTime="Projeto feito desde 2022-11-01">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar Comentário">
                <p><Trash size={24} /></p>
                </button>
            </header>

            <p>{content}</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
    </div>
    </div>
    )
}