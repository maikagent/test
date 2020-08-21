import React, { useEffect, useState } from 'react';
import ListLibrary from "./components/ListLibrary";
import InfoLibrary from "./components/InfoLibrary";
import {Route, Switch} from "react-router";
import './App.css';
import { getData } from "./api";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(setData);
    }, []);
console.log(data);
    return <Switch>
        <Route history={history} path={"/:number"} render={({match}) => {
            return <InfoLibrary id={+match.params.number}/>
        }}/>
        <Route history={history} path={"/"} render={() => {
            return <ListLibrary data={data}/>
        }}/>
    </Switch>
}