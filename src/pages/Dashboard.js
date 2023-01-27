import React from "react"
import {GlobalCtx} from "../App"

const Dashboard = (props) => {
    const { gState, setGState } = React.useContext(GlobalCtx)
    const { url } = gState

    

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    ) 
}

export default Dashboard