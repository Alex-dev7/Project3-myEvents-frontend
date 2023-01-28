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

// HomeOrViewEvents component is used to show the ViewEvents component if the token is present in the global state
// otherwise it shows the Home component
const HomeOrViewEvents = () => {
    const {gState} = useContext(GlobalCtx)
    return gState.token ?  <ViewEvents/> : <Home/>;
}

// createBrowserRouter is used to create a React Router browser router
// createRoutesFromElements is used to create routes using JSX elements
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
                <Route
                    path="" 
                    loader={eventsLoader}
                    element={<HomeOrViewEvents/>}
                  />
                {/* Route for the about page */}
                <Route path="about" element={<About/>} />
                {/* Route for the show page, it also uses eventLoader to load event data */}
                <Route 
                    path=":id"
                    element={<Show/>}
                    loader={eventLoader} />
                {/* Route for the create page, it also uses createAction to create an event */}
                <Route 
                    path="create"
                    element={<CreateEvent/>}
                    action={createAction} />
                {/* Route for the update page, it also uses eventLoader to load event data and updateAction to update an event */}
                <Route 
                    path="update/:id"
                    element={<Update/>}
                    loader={eventLoader}
                    action={updateAction}/>
                {/* Route for the delete page, it also uses deleteAction to delete an event */}
                <Route path="delete/:id" action={deleteAction} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>} />
        </Route>
    )
)

export default router
