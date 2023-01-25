import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App"
import { createAction, updateAction, deleteAction } from "./actions";
import { eventsLoader, eventLoader } from "./loaders"
import { ViewEvents } from './pages/ViewEvents'
import { Update } from './pages/Update'
import { CreateEvent } from './pages/CreateEvent'
import About from "./pages/About";
import Show from "./pages/Show";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
                <Route
                    path="" 
                    loader={eventsLoader}
                    element={<ViewEvents/>} />
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
        </Route>
    )
)

export default router