import React, {Fragment} from "react";
import "./main.scss";
import BlockAbout from "./components/Blocks/BlockAbout/blockAbout";
import {Header} from "./components/Header/header";
import Name from "./components/Name/name";
import BlockThanks from "./components/Blocks/BlockThanks/blockThanks";
import BlockFeedback from "./components/Blocks/BlockFeedback/blockFeedback";
import Footer from "./components/Footer/footer";
import {HookContext} from "./components/Context/hookContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: {
                city: "г. Москва",
                phone: "+7 (968) 628-16-81",
                email: "n.korotkova@mail.ru"
            },
            links: {
                telegram: "https://t.me/+IEQoSF2D7RRmYWNi",
                vk: "https://vk.com/id2518849",
                whatsapp: "https://wa.me/79686281681?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%92%D0%B0%D1%88%D1%83%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E!",
            }
        }
    }

    render() {
        return (
            <HookContext.Provider value={this.state}>
                <Header/>
                <Name/>
                <BlockAbout/>
                <BlockThanks/>
                <BlockFeedback/>
                <Footer/>
            </HookContext.Provider>
        )

    };
}

export default App;
