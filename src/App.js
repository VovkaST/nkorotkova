import React, {Fragment} from "react";
import "./main.scss";
import {Header} from "./components/Header/header";
import {Name} from "./components/Name/name";

class App extends React.Component {
    render() {
        return <Fragment>
            <Header/>
            <Name/>
        </Fragment>
    };
}

export default App;
