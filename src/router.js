import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App"
import { eventsLoader, eventLoader } from "./loaders"
import { About, Show, Update, ViewEvents } from './pages'
import { updateAction } from "./action";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
                <Route
                  path="" 
                  loader={eventsLoader}
                  element={<ViewEvents/>} />
                <Route path="about" element={<About/>} />
                <Route path=":id" element={<Show/>} loader={eventLoader} />
                <Route path="create" />
                <Route path="update/:id" element={<Update/>} loader={eventLoader} action={updateAction} />
                <Route path="delete/:id" />
        </Route>
    )
)

export default router