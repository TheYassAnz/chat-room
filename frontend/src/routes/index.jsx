import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    Navigate,
} from "react-router-dom";

import Room from "../pages/Room"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
        >
            <Route index element={<Navigate to='rooms' />} />
            <Route path='rooms' element={<Room />} />
        </Route>
    )
);

export default router;