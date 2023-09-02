import React from "react";
import {HorizontalBlock} from "../../hoc/HorizontalBlock/horizontalBlock";
import {buildContent} from "../../hoc/content";
import {BlockHeader} from "../../hoc/HorizontalBlock/blockHeader";
import classes from "./blockAbout.module.scss"

const BlockAbout = () => {
    return (
        <div className={classes.block}>
            <BlockHeader text="Я буду сопровождать Вас"/>
            <div className={classes.block_info_content}>
                <ul>
                    <li className={classes.block_info_content__item}>Индивидуальные консультации</li>
                    <li className={classes.block_info_content__item}>Составление психологического портрета</li>
                    <li className={classes.block_info_content__item}>Наладить отношения с близкими</li>
                    <li className={classes.block_info_content__item}>Гармония внешнего и внутреннего мира</li>
                    <li className={classes.block_info_content__item}>Еще что-то</li>
                    <li className={classes.block_info_content__item}>Метод?</li>
                </ul>
                <div className={classes.block_info_content__round}>
                    {/*<img src="/photo_main.png" alt="Короткова Наталья"/>*/}
                    &nbsp;
                </div>
            </div>
        </div>
    )
}


export default HorizontalBlock(buildContent(BlockAbout, "block_about"))