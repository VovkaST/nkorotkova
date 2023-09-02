import React, {Fragment} from "react";
import "./main.scss";
import BlockAbout from "./components/BlockAbout/blockAbout";
import {Header} from "./components/Header/header";
import Name from "./components/Name/name";

class App extends React.Component {
    render() {
        return <Fragment>
            <Header/>
            <Name/>
            <BlockAbout/>
        </Fragment>
    };
}

export default App;
