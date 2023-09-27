import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-red-600">Oops! Page not found</h1>
                <p className="mt-4 text-gray-600">The page you are looking for might be under construction or doesn't exist.</p>
                <Link to={"/"}>
                    <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;