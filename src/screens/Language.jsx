import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import '../css/Language.css'
function Language() {
    //Language
    const language = [
        {
            value: 'नमस्ते',
            label: 'हिन्दी',

        },
        {
            value: 'Hello',
            label: 'English',

        }


    ]

    //Locality
    const localityOption = [{ label: 'India' }, { label: 'Australia' }, { label: "Canada" }]

    const [result, langValue] = useState(language.label);
    const langHandler = e => {
        langValue(e.value)
    }
    library.add(faCaretDown);


    const CaretDownIcon = () => {
        return <FontAwesomeIcon icon="caret-down" />;
    };

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon />
            </components.DropdownIndicator>
        );
    };
    return (
        <div className='main-container'>
            <div>
                <p className='heading'> Select Your Locale</p>
            </div>
            <div>
                <h1>{result}</h1>
            </div>
            <div className='Language'>
                <p>Language</p>
                <Select className='dropdown'
                    options={language}
                    onChange={langHandler}
                    components={{ DropdownIndicator }}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,

                        colors: {
                            ...theme.colors,
                            primary25: 'white',

                        },
                    })} />

            </div>
            <div className='Locality'>
                <p>Locality</p>
                <Select className='dropdown'
                    options={localityOption}
                    components={{ DropdownIndicator }}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,

                        colors: {
                            ...theme.colors,
                            primary25: 'white',

                        },
                    })}
                />
            </div>
            <div>
                <Link to="/login">
                    <button className='button' type="submit">
                        Next
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default Language
