import React from "react";
import classes from "./horizontalBlock.module.scss"


export const HorizontalBlock = (Component) => {
    return () => {
        return (
            <div className={classes.horizontal_block}>
                <Component/>
            </div>
        )
    }
}
