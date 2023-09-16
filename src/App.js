import React, {Fragment} from "react";
import "./main.scss";
import BlockAbout from "./components/Blocks/BlockAbout/blockAbout";
import {Header} from "./components/Header/header";
import Name from "./components/Name/name";
import BlockThanks from "./components/Blocks/BlockThanks/blockThanks";
import BlockFeedback from "./components/Blocks/BlockFeedback/blockFeedback";
import Footer from "./components/Footer/footer";

class App extends React.Component {
    render() {
        return <Fragment>
            <Header/>
            <Name/>
            <BlockAbout/>
            <BlockThanks/>
            <BlockFeedback/>
            <Footer/>
        </Fragment>
    };
}

export default App;
