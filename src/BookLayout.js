import { Link, Outlet } from "react-router-dom"


export const BookLayout = () => {
    return (
        <>
            <div className="sharedList">
                <Link to="/books/harrypotter">Harry Potter</Link>
                <br />
                <Link to="/books/talktoanyone">How to Talk to Anyone</Link>
                <br />
                {/* We have a hardcoded route for this url, so React will render <NewBook> component instead of <Book> */}
                <Link to="/books/new">New Secret Book</Link>
                {/* Outlet component represents every child element under '/books' route  */}
                {/* Context can be accessed from every child element under '/books' route  */}
            </div>
            <Outlet context={{ text: "Text from OutletContext" }} />
        </>
    )
}