import React from 'react'

export default function Atribut(props) {
    return (
        <h3>
            <b>{props.naziv}</b>: {props.vrednost}
        </h3>
    )
}
