import { Link } from "react-router-dom";
import { exercises } from "../data/exercises";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
                        React Practice Exercises
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Learn React by building hands-on projects 💪
                    </p>
                </header>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {exercises.map((ex, index) => (
                        <Link
                            key={ex.id}
                            to={`/exc${index + 1}`}
                            className="group relative block bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 transition-all duration-300"
                        >
                            {/* Tag */}
                            <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-medium">
                                    {ex.date}
                                </span>
                                <span>• {ex.readTime} read</span>
                            </div>

                            {/* Indexed Title */}
                            <h2 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-3">
                                {index + 1}. {ex.title}
                            </h2>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
