import pg from "../styles/Page.module.scss"

export default function Title({ title, subtitle }) {
    return (
        <div className={pg.titlecontainer}>
            <h1 className={pg.title}><span className={pg.subtitle}>{subtitle}</span>{title}</h1>
        </div>
    )
}