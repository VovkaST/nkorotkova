import React from "react";
import {HorizontalBlock} from "../../../hoc/HorizontalBlock/horizontalBlock";
import {buildContent} from "../../../hoc/content";
import {BlockHeader} from "../../../hoc/HorizontalBlock/blockHeader";
import blockClasses from "../blocks.module.scss"

const BlockAbout = () => {
    return (
        <div className={blockClasses.block}>
            <BlockHeader text="Я буду сопровождать Вас"/>
            <div className={blockClasses.block_info_content}>
                <ul>
                    <li className={blockClasses.block_info_content__item}>Индивидуальные консультации</li>
                    <li className={blockClasses.block_info_content__item}>Составление психологического портрета</li>
                    <li className={blockClasses.block_info_content__item}>Наладить отношения с близкими</li>
                    <li className={blockClasses.block_info_content__item}>Гармония внешнего и внутреннего мира</li>
                    <li className={blockClasses.block_info_content__item}>Еще что-то</li>
                    <li className={blockClasses.block_info_content__item}>Метод?</li>
                </ul>
                <div className={blockClasses.block_info_content__round} tag="current">
                    {/*<img src="/photo_main.png" alt="Короткова Наталья"/>*/}
                    &nbsp;
                </div>
            </div>
        </div>
    )
}


export default HorizontalBlock(buildContent(BlockAbout, "block_about"))