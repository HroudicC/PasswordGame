import { useState, useEffect } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordStrength from "./components/PasswordStrength";
import CountryFlagValidator from "./components/CountryFlagValidator";
import "./App.css";

function App() {
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");

    const evaluatePassword = (password: string) => {
        const minLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        const score = [minLength, hasUppercase, hasNumber, hasSpecialChar]
            .filter(Boolean).length;

        if (score === 0) return "Velmi slabé";
        if (score === 1) return "Slabé";
        if (score === 2) return "Střední";
        if (score === 3) return "Silné";
        return "Velmi silné";
    };

    useEffect(() => {
        const strength = evaluatePassword(password);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPasswordStrength(strength);
    }, [password]);

    useEffect(() => {
        document.title = `Síla hesla: ${passwordStrength}`;
    }, [passwordStrength]);

    useEffect(() => {
        const sabotageInterval = setInterval(() => {

            console.log("škodič běží");

            setPassword(prevPassword => {
                const action = Math.random() < 0.5 ? "add" : "remove";

                if (action === "add") {
                    return prevPassword + "😜";
                }

                if (prevPassword.length === 0) return prevPassword;

                //random index k smazani
                const index = Math.floor(Math.random() * prevPassword.length);
                return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
            });

        }, 10000);

        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4 app-card">

                <h1 className="text-center mb-4">Password Game</h1>

                <PasswordInput password={password} setPassword={setPassword} />

                <PasswordStrength
                    password={password}
                    strength={passwordStrength}
                />

                <CountryFlagValidator password={password} />
            </div>
        </div>
    );
}

export default App;