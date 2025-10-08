import { Link } from "react-router-dom";

export default function PageLayout({ title, description, url, children }) {
    return (
        <div className="min-h-screen w-full bg-gray-50 py-12 px-8">
            {/* Home Button */}
            <Nav />
            <Header title={title} description={description} url={url} />
            <Body>{children}</Body>
        </div>
    );
}

function Nav() {
    return (
        <div className="w-full bg-gray-50 text-black rounded-2xl  mb-8">
            <a
                href="/"
                className="bg-blue-600  !text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                HOME
            </a>
        </div>
    );
}

function Header({ title, description, url }) {
    return (
        <div className="w-full bg-white shadow-md rounded-2xl p-8 border border-gray-200 mb-8 relative">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">{title}</h1>

            <p className="text-gray-600 mb-4">{description}</p>

            {url && (
                <Link
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-medium hover:underline"
                >
                    → Open Exercise Resource
                </Link>
            )}
        </div>
    );
}

function Body({ children }) {
    return (
        <div className="w-full bg-white shadow-md rounded-2xl p-8 border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Exercise Implementation
            </h1>

            <div className="border-t-2 border-gray-200 my-6"></div>

            {children}
        </div>
    );
}
