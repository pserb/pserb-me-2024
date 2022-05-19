import block from '../styles/Block.module.scss';
import Link from 'next/link'

export default function Block({ children, title, smallButton, smallButtonLink, mediumButton, mediumButtonLink, buttonList }) {
    
    function hasButton() {
        if (smallButton != null) {
            return <Link href={smallButtonLink}><button className={block.buttonsm}>{smallButton}</button></Link>
        } else if (mediumButton != null) {
            return <Link href={mediumButtonLink}><button className={block.buttonmd}>{mediumButton}</button></Link>
        } else if (buttonList != null) {
            return <> { buttonList.map((x, i) => <button className={block.buttonlist} key={i}>{x}</button> )} </>
        }
    };

    return (
        <div className={block.content}>
            <div className={block.section}>
                <h2 className={block.sectiontitle}>{title}</h2>
                <p className={block.sectioncontent}>
                    {children}
                </p>
                {hasButton()}
            </div>
        </div>
    )
}