import React from "react";
import classes from "./button.module.scss"


export const Button = (props) => {
    return (
        <button className={classes.button}>{props.text}</button>
    )
}
