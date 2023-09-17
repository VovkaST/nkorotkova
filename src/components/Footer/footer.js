import React, {useContext} from "react";
import {buildContent} from "../../hoc/content";
import classes from "./footer.module.scss";
import {HookContext} from "../Context/hookContext";
import {clearPhone} from "../../utils";


const Footer = () => {
    const state = useContext(HookContext)

    return (
        <div className={classes.footer_block}>
            <div className={classes.footer_block__side_block}>
                <ul className={classes.footer_block__contacts_list}>
                    <li className={classes.footer_block__contacts_list__item}>{state.contacts.city}</li>
                    <li className={classes.footer_block__contacts_list__item}>
                        <a href={`tel:${clearPhone(state.contacts.phone)}`}>{state.contacts.phone}</a>
                    </li>
                    <li className={classes.footer_block__contacts_list__item}>
                        <a href={`mailto:${state.contacts.email}`}>{state.contacts.email}</a>
                    </li>
                </ul>
            </div>
            <div className={classes.footer_block__side_block}>
                <ul className={classes.footer_block__socials_list}>
                    <li className={classes.footer_block__socials_list__instagram}>
                        <a href={state.links.instagram} target="_blank" rel="noreferrer">&nbsp;</a>
                    </li>
                    <li className={classes.footer_block__socials_list__vk}>
                        <a href={state.links.vk} target="_blank" rel="noreferrer">&nbsp;</a>
                    </li>
                    <li className={classes.footer_block__socials_list__telegram}>
                        <a href={state.links.telegram} target="_blank" rel="noreferrer">&nbsp;</a>
                    </li>

                    <li className={classes.footer_block__socials_list__whatsapp}>
                        <a href={state.links.whatsapp} target="_blank" rel="noreferrer">&nbsp;</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default buildContent(Footer)