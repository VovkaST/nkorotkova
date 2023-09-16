import React from "react";
import appCLasses from "../app.module.scss";

export const buildContent = (Component, mainBlockClassName, contentBlockClassName) => {
    return () => {
        let contentClass = `${appCLasses.content} ${contentBlockClassName ? contentBlockClassName : ""}`
        return (
            <div className={mainBlockClassName}>
                <div className={contentClass}>
                    <Component/>
                </div>
            </div>
        )
    }
}