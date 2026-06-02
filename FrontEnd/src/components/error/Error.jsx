import  {useRouteError} from 'react-router-dom'


const Error = () => {
    const error = useRouteError();
    console.error(error);

    return <>
    
    <p> this is an error page</p>
<br/>
    <p>
        {error.status + " "}
     : 
    {error.statusText || error.message}</p>


    </>
}

export default Error;