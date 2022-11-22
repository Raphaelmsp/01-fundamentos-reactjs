import { PencilLine } from'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.Sidebar}>
            
        <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        />
        
        <div className={styles.profile}>
            <Avatar hasBorder src="https://github.com/Raphaelmsp.png" />

            <strong>Raphael Pedro</strong>
            <span>Web Developer</span>
        </div>

        <footer>
        <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
        </a>
        </footer>
        </aside>
    );

}