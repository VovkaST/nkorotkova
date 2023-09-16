import React from "react";
import blockClasses from "../blocks.module.scss"
import classes from "./blockThanks.module.scss";
import {BlockHeader} from "../../../hoc/HorizontalBlock/blockHeader";
import {HorizontalBlock} from "../../../hoc/HorizontalBlock/horizontalBlock";
import {buildContent} from "../../../hoc/content";
import {Button} from "../../Button/button";


const BlockThanks = () => {
    return (
        <div className={blockClasses.block}>
            <div className={blockClasses.thanks_block_info_content}>
                <div className={blockClasses.block_info_content__round}>
                    {/*<img src="/photo_main.png" alt="Короткова Наталья"/>*/}
                    &nbsp;
                </div>
                <div className={classes.blockRight}>
                    <BlockHeader text="Благодарность" headerBlockClassName={classes.headerThanks}/>
                    <div className={classes.buttonHead}>
                        <p className={classes.topBlock}>Сказать Наталье</p>
                        <h3 className={classes.bottomBlock}>спасибо</h3>
                    </div>
                    <p className={classes.subText}>Сумма, которую Вы считаете достаточной</p>
                    <div className={classes.buttonBlock}>
                        <Button text="Спасибо"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalBlock(buildContent(BlockThanks, "block_thanks", "thanks_content"))