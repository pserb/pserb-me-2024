import block from '../styles/Block.module.scss';

export default function Block({ children, title, smallButton, mediumButton, buttonList }) {
    
    function hasButton() {
        if (smallButton != null) {
            return <button className={block.buttonsm}>{smallButton}</button>
        } else if (mediumButton != null) {
            return <button className={block.buttonmd}>{mediumButton}</button>
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