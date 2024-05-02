import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "../pages/Home"
import Room from "../pages/Room"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
        >
            <Route index element={<Navigate to='rooms' />} />
            <Route path='rooms' element={<Home />} />
            <Route path='room/:code' element={<Room />} />
        </Route>
    )
);

export default router;