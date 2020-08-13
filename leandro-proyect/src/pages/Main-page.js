import React from "react";
import Login from "../components/login";
import Head from "../components/header"
import Error from "../components/errorMessage"


const MainPage = () => {
    return (
        <div>
            <Head />
            <Login />
            <Error />
        </div>
    )
}

export default MainPage;