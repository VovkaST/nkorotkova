import React from "react";
import appCLasses from "../app.module.scss";

export const buildContent = (Component, mainBlockClassName) => {
    return () => {
        return (
            <div className={mainBlockClassName}>
                <div className={appCLasses.content}>
                    <Component/>
                </div>
            </div>
        )
    }
}