import React from "react";
import appCLasses from "../../app.module.scss";
import classes from "./name.module.scss"

export const Name = () => {
    return <div>
        <div className={appCLasses.content}>
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
        </div>
    </div>
}