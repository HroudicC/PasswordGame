import {useEffect, useState} from "react";

interface CountryFlagValidatorProps {
    password: string;
}

const countries = [ "AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB",
    "BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF",
    "CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE",
    "EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP",
    "GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT",
    "JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT",
    "LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW",
    "MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL",
    "PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK",
    "SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR",
    "TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"];


    const CountryFlagValidator: React.FC<CountryFlagValidatorProps> = ({ password }) => {

    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const random = countries[Math.floor(Math.random() * countries.length)];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedCountry(random);
    }, []);

    const flagUrl = `https://flagsapi.com/${selectedCountry}/flat/64.png`;

    const containsCountry = password.toUpperCase().includes(selectedCountry);

        return (
            <div style={{ marginTop: "20px", textAlign: "left" }}>

                <p
                    style={{
                        color: containsCountry ? "var(--success-color)" : "var(--error-color)",
                        marginBottom: "10px"
                    }}
                >
                    {containsCountry
                        ? `Heslo obsahuje správnou zkratku: ${selectedCountry}`
                        : "Heslo neobsahuje zkratku vlajky"}
                </p>

                {selectedCountry && (
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={flagUrl}
                            alt="flag"
                            style={{
                                width: "70px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                padding: "4px",
                                backgroundColor: "#afabab"
                            }}
                        />
                    </div>
                )}

            </div>
        );
};

export default CountryFlagValidator;