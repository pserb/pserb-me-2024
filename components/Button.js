import button from '../styles/Button.module.scss'

export default function Button({ children, label, link, small, medium, large }) {
    if (small != null) {
        return <a href={link} target="_blank" rel="noopener noreferrer"><button className={button.buttonsm}>{label}</button></a>
    } else if (medium != null) {
        return <a href={link} target="_blank" rel="noopener noreferrer"><button className={button.buttonmd}>{label}</button></a>
    } else if (large != null) {
        return <a href={link} target="_blank" rel="noopener noreferrer"><button className={button.buttonlg}>{label}</button></a>
    }
}