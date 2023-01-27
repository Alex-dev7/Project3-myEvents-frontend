import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import React, {useContext} from "react";
import { GlobalCtx } from "./App";
import App from "./App"
import { createAction, updateAction, deleteAction } from "./actions";
import { eventsLoader, eventLoader } from "./loaders"
import { ViewEvents } from './pages/ViewEvents'
import { Update } from './pages/Update'
import { CreateEvent } from './pages/CreateEvent'
import About from "./pages/About";
import Show from "./pages/Show";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} render={() => {
           const {gState} = useContext(GlobalCtx)
           return  (
            <>
            {gState.token ? <Dashboard/> : <Home/>}
            {gState.token && <ViewEvents />}
            </>)
        }
        }>
                <Route
                    path="" 
                    loader={eventsLoader}
                    element={<ViewEvents/>} 
                    />
                <Route path="about" element={<About/>} />
                <Route 
                    path=":id"
                    element={<Show/>}
                    loader={eventLoader} />
                <Route 
                    path="create"
                    element={<CreateEvent/>}
                    action={createAction} />
                <Route 
                    path="update/:id"
                    element={<Update/>}
                    loader={eventLoader}
                    action={updateAction}/>
                <Route path="delete/:id" action={deleteAction} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>} />
        </Route>
    )
)

export default router