import { useOutletContext, useParams } from "react-router-dom"

export const Book = () => {

    const param = useParams()
    const passedContext = useOutletContext()

    console.log(param);

    return (
        <>
            <h1 className="bookTitle">{param.id}</h1>
            <div>{passedContext.text}</div>
        </>
    )
}