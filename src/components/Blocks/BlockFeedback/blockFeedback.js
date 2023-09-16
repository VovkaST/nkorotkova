import React from "react";
import classes from "./blockFeedback.module.scss";
import {HorizontalBlock} from "../../../hoc/HorizontalBlock/horizontalBlock";
import {buildContent} from "../../../hoc/content";
import {Input} from "../../Input/input";
import {BlockHeader} from "../../../hoc/HorizontalBlock/blockHeader";
import {Button} from "../../Button/button";


const blockFeedback = () => {
    return (
        <div className={classes.feedback_block}>
            <BlockHeader text="Написать мне"/>
            <div className={classes.feedback_form_block}>
                <div className={classes.feedback_form_block_left_block}>
                    <Input label="Имя, фамилия" blockClassName={classes.input_block}/>
                    <Input label="Электронная почта" blockClassName={classes.input_block}/>
                    <Input label="Телефон" blockClassName={classes.input_block}/>
                </div>
                <div className={classes.feedback_form_block_right_block}>
                    <Input label="Вопрос" tag="textarea" blockClassName={classes.input_block}/>
                    <div className={classes.button_block}>
                        <Button text="Отправить"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalBlock(buildContent(blockFeedback, "block_feedback", "feedback_content"))