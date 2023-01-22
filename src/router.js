import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App"
import { eventsLoader } from "./loaders"
import { ViewEvents } from './pages/ViewEvents'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route path="">
                <Route path="view" loader={eventsLoader}
                element={<ViewEvents/>}/>
                <Route path=":id" />
                <Route path="create" />
                <Route path="update/:id" />
                <Route path="delete/:id" />
            </Route>
        </Route>
    )
)

export default router