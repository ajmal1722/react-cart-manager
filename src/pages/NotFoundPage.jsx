import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className=" justify-center">
            <h1 className='text-3xl font-semibold text-center mt-8'>Page Not Found!</h1>
            <div className="flex justify-center">
                <img src="/public/images/404.png" className="justify-center w-1/2  my-10" alt="404" />
            </div>
        </div>
    )
}

export default NotFoundPage
