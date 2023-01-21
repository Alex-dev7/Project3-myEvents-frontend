import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route path="" >
                <Route path=":id" />
                <Route path="create" />
                <Route path="update/:id" />
                <Route path="delete/:id" />
            </Route>
        </Route>
    )
)

export default router