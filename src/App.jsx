import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { exercises } from "./data/exercises";
import PageLayout from "./components/PageLayout";
import { lazy, Suspense } from "react";
import { BASE_URL } from "./data/Constant";

export default function App() {
    const modules = import.meta.glob("./pages/Exc*.jsx");

    // Ensure only valid lazy components are built
    const components = Object.keys(modules)
        .sort()
        .map((path) => {
            const loader = modules[path];
            return typeof loader === "function" ? lazy(loader) : null;
        });

    // fallback component for missing pages
    const EmptyComponent = () => <div />;

    return (
        <Router basename={BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />

                {exercises.map((exercise, i) => {
                    const Component =
                        components[i] && typeof components[i] === "function"
                            ? components[i]
                            : EmptyComponent;

                    return (
                        <Route
                            key={i}
                            path={`/exc${i + 1}`}
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <PageLayout
                                        description={exercise.description}
                                        url={exercise.url}
                                        title={exercise.title}
                                    >
                                        <Component />
                                    </PageLayout>
                                </Suspense>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}
