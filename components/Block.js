import block from '../styles/Block.module.scss';

export default function Block({ children, title, smallButton, mediumButton, buttonList }) {
    
    function hasButton() {
        if (smallButton != null) {
            return <button className={block.buttonsm}>{smallButton}</button>
        } else if (mediumButton != null) {
            return <button className={block.buttonmd}>{mediumButton}</button>
        } else if (buttonList != null) {
            console.log(buttonList)
            console.log(buttonList[0])
            var list = ""
            buttonList.forEach(element => {
                list += `<button className={block.buttonlist}>{element}</button>`
                console.log(list)
            });
            return list
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