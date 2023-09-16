import React, {useContext} from "react";
import appCLasses from "../../app.module.scss"
import classes from "./header.module.scss";
import {HookContext} from "../Context/hookContext";

export const Header = () => {
    const state = useContext(HookContext)

    return <div className={classes.block}>
        <div className={appCLasses.content}>
            <a href="/">
                <div className={classes.block__name}>{state.name.eng}</div>
            </a>
            <nav className={classes.block__nav}>
                <ul className={classes.block__nav__menu}>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="/#">Услуги</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="/#">Отзывы</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="/#">Обо мне</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="/#">Контакты</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href={state.links.telegram}
                           target="_blank"
                           rel="noreferrer">Telegram-канал</a>
                    </li>
                </ul>
            </nav>
            <div className={classes.block__logo}>
                <img src="/tree_100x100.png" alt="tree"/>
            </div>
        </div>
    </div>
}