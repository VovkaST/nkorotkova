import React from "react";
import appCLasses from "../app.module.scss"
import classes from "./header.module.scss";

export const Header = () => {
    return <div className={classes.block}>
        <div className={appCLasses.content}>
            <a href="%PUBLIC_URL%/">
                <div className={classes.block__name}>Korotkova Nataliya</div>
            </a>
            <nav className={classes.block__nav}>
                <ul className={classes.block__nav__menu}>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="%PUBLIC_URL%/#">Услуги</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="%PUBLIC_URL%/#">Отзывы</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="%PUBLIC_URL%/#">Обо мне</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="%PUBLIC_URL%/#">Контакты</a>
                    </li>
                    <li className={classes.block__nav__menu__item}>
                        <a className={classes.block__nav__menu__item__link}
                           href="https://t.me/+IEQoSF2D7RRmYWNi"
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