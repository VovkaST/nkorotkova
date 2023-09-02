import React from "react";
import blockClasses from "./horizontalBlock.module.scss";


export const BlockHeader = ({text}) => {
    return (
        <div className={blockClasses.horizontal_block__header_block}>
            <h2 className={blockClasses.block_header}>{text}</h2>
        </div>
    )
}
