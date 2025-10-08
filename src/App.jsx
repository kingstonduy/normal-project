// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { exercises } from "./data/exercises";
import PageLayout from "./components/PageLayout";
import { lazy, Suspense } from "react";

export default function App() {
    // dynamically import Exc1 – Exc20
    const components = Array.from({ length: 20 }, (_, i) =>
        lazy(() => import(`./pages/Exc${i + 1}.jsx`))
    );
    /*
    1. Array.from({ length: 20 }, ...)
        This creates a new array with 20 elements.
        The elements don’t have values yet — just 20 empty slots.
        The second argument (the arrow function) tells Array.from how to fill each slot.
    2. (_, i) => ...
        The first parameter _ is the current element (we don’t use it, so _ is a convention).
        i is the index (from 0 to 19).
    3. lazy(() => import(...))
        lazy() is a React function that enables lazy loading (code splitting).
        It takes a function that dynamically imports a component file only when it’s needed.
    4. The template literal `./pages/Exc${i + 1}.jsx`
        Uses string interpolation to dynamically form the filename:
        When i = 0 → ./pages/Exc1.jsx
        When i = 1 → ./pages/Exc2.jsx
        … and so on up to Exc20.jsx.    
     */

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                {exercises.map((exercise, i) => {
                    const Component = components[i]; // pick correct ExcN

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
