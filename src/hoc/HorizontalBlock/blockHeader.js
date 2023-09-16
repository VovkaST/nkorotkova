import React from "react";
import blockClasses from "./horizontalBlock.module.scss";


export const BlockHeader = (props) => {
    let addheaderBlockClassName = props.headerBlockClassName ? props.headerBlockClassName : "";
    let headerBlockClassName = `${blockClasses.horizontal_block__header_block} ${addheaderBlockClassName}`

    return (
        <div className={headerBlockClassName}>
            <h2 className={blockClasses.block_header}>{props.text}</h2>
        </div>
    )
}
