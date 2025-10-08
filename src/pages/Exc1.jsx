// src/pages/Exc1.jsx
import { createContext, useContext, useId } from "react";
import { Link } from "react-router-dom";

const GlobalContext = createContext();

export default function Exc1() {
    const id = useId();

    return (
        <GlobalContext.Provider value={id}>
            <TextField>
                <Label>First name</Label>
                <Input />
            </TextField>
        </GlobalContext.Provider>
    );
}

function Label({ children }) {
    const id = useContext(GlobalContext);
    return (
        <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
            {children}
        </label>
    );
}

function Input() {
    const id = useContext(GlobalContext);
    return (
        <input
            id={id}
            type="text"
            placeholder="Input something..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition"
        />
    );
}

function TextField({ children }) {
    return <div className="space-y-2">{children}</div>;
}
