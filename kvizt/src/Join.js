import React, { useEffect, useState } from "react";
import Svar from "./Svar";

const Join = () => {

    const [svar, setSvar] = useState("");
    const [visSvar, setVisSvar] = useState(false);
    
    const [alleSvar, setAlleSvar] = useState(["Stetind", "Oksefjellet", "Galdhøgpiggen", "Sukkertoppen"]);

    const fasit = "Galdhøgpiggen";

    useEffect(() => {
        console.log('Jeg har blitt kjørt')
    }, [])

    const handleClick = () => {
        if (svar) {
            setAlleSvar([...alleSvar, svar])
        }
        
        setVisSvar(!visSvar)
    }

    return (
        <div>
            <h1>Spørsmål: Hva heter norges høyeste fjell?</h1>
            <hr />
            <div>
                <h2>Alternativer: Galdhøgpiggen, Stetind, Oksefjellet</h2>
            </div>


            {
                alleSvar.map((svar) => (
                    <Svar tekst={svar} erRiktig={fasit == svar} />
                ))
            }

            <br />
            
            <label>
                Svar:
                <input type="text" onChange={(e) => setSvar(e.target.value)} />
            </label>
            <button onClick={handleClick}>
                Avgi svar
            </button>
        </div>
    )

}


export default Join;