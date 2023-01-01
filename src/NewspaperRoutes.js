import { Routes, Route } from "react-router-dom"
import { Newspaper } from "./Pages/Newspaper"
import { NewspaperList } from "./Pages/NewspaperList"

export const NewspaperRoutes = () => {
    return (
        <Routes>
            <Route index element={<NewspaperList />} />
            <Route path=":id" element={<Newspaper />} />
        </Routes>
    )
}