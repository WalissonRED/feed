
import style from './Sidebar.module.css';


export function Sidebar() {
    return(
        <>
        <aside className={style.sidebar}>
        <img className={style.cover} src="https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=20&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className={style.profile}>
            <img className={style.avatar} src="https://images.unsplash.com/photo-1613005798967-632017e477c8?q=30&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <strong>Carla castro</strong>
            <span>web developer</span>
        </div>
        <footer>
            <a href="#">Editar seu perfil</a>
        </footer>
        </aside>
        </>
    );
}