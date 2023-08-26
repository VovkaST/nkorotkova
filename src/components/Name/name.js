import React, {Fragment} from "react";
import classes from "./name.module.scss"
import {buildContent} from "../../hoc/content";

const Name = () => {
    return (
        <Fragment>
            <div className={classes.left_block}>
                <div className={classes.main_photo}>
                    <img src="/photo_main.png" alt="Короткова Наталья"/>
                </div>
            </div>
            <div className={classes.right_block}>
                <div className={classes.text_block}>
                    <h1 className={classes.main_text}>Короткова Наталья</h1>
                    <div className={classes.subtext}>Арканолог. Психолог.</div>
                </div>
            </div>
        </Fragment>
    )
}

export default buildContent(Name)