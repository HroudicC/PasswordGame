interface PasswordStrengthProps {
    password: string;
    strength: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password, strength }) => {

    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    const score = [minLength, hasUppercase, hasNumber, hasSpecialChar]
        .filter(Boolean).length;

    const color =
        score <= 1 ? "red" :
            score <= 3 ? "orange" :
                "green";

    return (
        <div style={{ marginTop: "20px" }}>

            <div
                style={{
                    height: "10px",
                    width: `${score * 25}%`,
                    backgroundColor: color,
                    borderRadius: "5px",
                    transition: "0.3s"
                }}
            />

            <p>
                Síla hesla: <strong>{strength}</strong>
            </p>

            <ul className="criteria">
                <li style={{ color: minLength ? "var(--success-color)" : "var(--error-color)" }}>
                    Minimálně 8 znaků
                </li>
                <li style={{ color: hasUppercase ? "var(--success-color)" : "var(--error-color)" }}>
                    Alespoň jedno velké písmeno
                </li>
                <li style={{ color: hasNumber ? "var(--success-color)" : "var(--error-color)" }}>
                    Alespoň jedno číslo
                </li>
                <li style={{ color: hasSpecialChar ? "var(--success-color)" : "var(--error-color)" }}>
                    Alespoň jeden speciální znak (!@#$%^&*)
                </li>
            </ul>
        </div>
    );
};

export default PasswordStrength;