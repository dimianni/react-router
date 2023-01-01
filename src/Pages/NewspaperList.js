import { Link } from "react-router-dom"


export const NewspaperList = () => {
    return (
        <>
            <h1>NewsPaperList</h1>
            <div className="sharedList">
                <Link to="/newspapers/times">TIMES</Link>
                <Link to="/newspapers/dailymail">Daily Mail</Link>
            </div>
        </>

    )
}