import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App"
import { createAction } from "./actions";
import { eventsLoader, eventLoader } from "./loaders"
import { ViewEvents } from './pages/ViewEvents'
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
                <Route path=":id" element={<Show/>} loader={eventLoader} />
                <Route 
                    path="create"
                    action={createAction}
                    element={<CreateEvent/>} />
                <Route path="update/:id" />
                <Route path="delete/:id" />
        </Route>
    )
)

export default router