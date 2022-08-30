import block from '../styles/Block.module.scss'
import Link from 'next/link'

export default function Block({ children, title }) {
    return (
        <div className={block.content}>
            <div className={block.section}>
                <h2 className={block.sectiontitle}>{title}</h2>
                <p className={block.sectioncontent}>
                    {children}
                </p>
            </div>
        </div>
    )
}