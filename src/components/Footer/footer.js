import React from "react";
import {buildContent} from "../../hoc/content";
import classes from "./footer.module.scss";


const Footer = () => {
    return (
        <div className={classes.footer_block}>
            <div className={classes.footer_block__side_block}>
                <ul className={classes.footer_block__contacts_list}>
                    <li className={classes.footer_block__contacts_list__item}>г. Москва</li>
                    <li className={classes.footer_block__contacts_list__item}>+7 (968) 628-16-81</li>
                    <li className={classes.footer_block__contacts_list__item}>n.korotkova@mail.ru</li>
                </ul>
            </div>
            <div className={classes.footer_block__side_block}>
                <ul className={classes.footer_block__socials_list}>
                    <li className={classes.footer_block__socials_list__telegram}>
                        <a href="#">&nbsp;</a>
                    </li>
                    <li className={classes.footer_block__socials_list__vk}>
                        <a href="#">&nbsp;</a>
                    </li>
                    <li className={classes.footer_block__socials_list__whatsapp}>
                        <a href="#">&nbsp;</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default buildContent(Footer)