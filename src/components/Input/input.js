import React, {useId} from "react";
import classes from "./input.module.scss";


export const Input = (props) => {
    let elemId = useId(),
        inputTag = props.tag ? props.tag : "input",
        inputProps = {
            "id": elemId,
        },
        inputBlockClassName = classes.input_block_input;
    if (inputTag === "input") {
        inputProps.type = props.type ? !props.type & inputTag === "input" : "text";
    } else if (inputTag === "textarea") {
        inputBlockClassName = classes.input_block_textarea
    }
    let input = React.createElement(inputTag, inputProps)


    return (
        <div className={props.blockClassName}>
            <div className={classes.input_label}>
                <label htmlFor={elemId}>{props.label}:</label>
            </div>
            <div className={inputBlockClassName}>
                {input}
            </div>
        </div>
    )
}
