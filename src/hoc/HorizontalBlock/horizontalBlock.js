import React from "react";
import classes from "./horizontalBlock.module.scss"


export const HorizontalBlock = (Component, blockClassName) => {
    let blockClassesNames = `${classes.horizontal_block} ${blockClassName ? blockClassName : ""}`

    return () => {
        return (
            <div className={blockClassesNames}>
                <Component/>
            </div>
        )
    }
}
