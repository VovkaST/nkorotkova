import React, {Fragment, useContext} from "react";
import classes from "./name.module.scss"
import {buildContent} from "../../hoc/content";
import {HookContext} from "../Context/hookContext";

const Name = () => {
    const state = useContext(HookContext)

    return (
        <Fragment>
            <div className={classes.left_block}>
                <div className={classes.main_photo}>
                    <img src="/photo_main.png" alt={state.name.ru}/>
                </div>
            </div>
            <div className={classes.right_block}>
                <div className={classes.text_block}>
                    <h1 className={classes.main_text}>{state.name.ru}</h1>
                    <div className={classes.subtext}>{state.name.description}</div>
                </div>
            </div>
        </Fragment>
    )
}

export default buildContent(Name)