import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "../pages/Home"
import Room from "../pages/Room"
import Header from "../components/Header";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Header />}
        >
            <Route index element={<Navigate to='rooms' />} />
            <Route path='rooms' element={<Home />} />
            <Route path='room/:code' element={<Room />} />
        </Route>
    )
);

export default router;