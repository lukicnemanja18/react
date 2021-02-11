import React from 'react'
import Atribut from './Atribut'

export default function Student(props) {
    return (
        <div className='row mt-2 border border-rounded'>
            <div className='col-8'>
                <Atribut naziv='Ime' vrednost={props.student.ime} />
                <Atribut naziv='Prezime' vrednost={props.student.prezime} />
                <Atribut naziv='JMBG' vrednost={props.student.jmbg} />
                <Atribut naziv='Indeks' vrednost={props.student.indeks} />
                <Atribut naziv='Email' vrednost={props.student.email} />
                <Atribut naziv='Sifra' vrednost={props.student.sifra} />
            </div>
        </div>
    )
}
