import { useState } from "react";
import visibilityOn from "../assets/visibility-on.svg";
import visibilityOff from "../assets/visibility-off.svg";

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="input-wrapper">
            <input
                className="form-control password-input"
                type={visible ? "text" : "password"}
                placeholder="Zadej heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="button" className="toggle-button" onClick={() => setVisible(!visible)}>
                <img
                    src={visible ? visibilityOff : visibilityOn}
                    alt="Toggle visibility"
                    className="icon"
                />
            </button>
        </div>
    );
};



export default PasswordInput;