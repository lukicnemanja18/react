import React, { useState } from 'react'
import Navbar from './Navbar';

export default function Forma(props) {
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [indexGodina, setIndexGodina] = useState(2020);
    const [indexBroj, setIndexBroj] = useState(1);
    const [jmbg, setJmbg] = useState('');
    const isValid = () => {
        return ime.length > 0 && prezime.length > 0 && jmbg.length === 13
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row mt-2'>
                    <h2>Kreiraj studenta</h2>
                </div>
                <div className='row mt-2'>
                    <div className='col-8'>
                        <form onSubmit={e => e.preventDefault()} >
                            <label >Ime</label>
                            <input type="text" value={ime} className='form-control' onChange={e => {
                                const value = e.target.value;
                                setIme(value);
                            }} />
                            <label >Prezime</label>
                            <input type="text" value={prezime} className='form-control' onChange={e => {
                                const value = e.target.value;
                                setPrezime(value);
                            }} />
                            <label >Godina upisa</label>
                            <input type="number" value={indexGodina} className='form-control' onChange={e => {
                                const value = e.target.value;
                                setIndexGodina(value);
                            }} />
                            <label >Broj indeksa</label>
                            <input type="number" value={indexBroj} className='form-control' onChange={e => {

                                let value = e.target.value;
                                const length = value.length;
                                if (length > 4) {
                                    return;
                                }
                                for (let i = 0; i < (4 - length); i++) {
                                    value = '0' + value;
                                }
                                setIndexBroj(value);
                            }} />
                            <label >JMBG</label>
                            <input type="text" value={jmbg} className='form-control' onChange={e => {
                                const value = e.target.value;
                                if (value.length > 13) {
                                    return;
                                }
                                if (isNaN(parseInt(value)) || isNaN(parseInt(value[value.length - 1]))) {
                                    return;
                                }
                                setJmbg(value);
                            }} />
                            {
                                ime.length > 0 && prezime.length > 0 && (
                                    <>
                                        <label >Email</label>
                                        <input type="text" className='form-control' readOnly value={`${ime[0] + prezime[0] + indexGodina + indexBroj}@student.fon.bg.ac.rs`} />
                                    </>
                                )
                            }
                            {
                                ime.length > 0 && prezime.length > 0 && jmbg.length === 13 && (
                                    <>
                                        <label >Sifra</label>
                                        <input type="text" className='form-control' readOnly value={`${ime[0] + prezime[0] + jmbg}.!!`} />
                                    </>
                                )
                            }
                            <button className='form-control btn-primary mt-2' disabled={!isValid()} onClick={e => {
                                e.preventDefault();
                                props.kreiraj({
                                    ime: ime,
                                    prezime: prezime,
                                    indeks: indexBroj + '/' + indexGodina,
                                    jmbg: jmbg,
                                    email: `${ime[0] + prezime[0] + indexGodina + indexBroj}@student.fon.bg.ac.rs`,
                                    sifra: `${ime[0] + prezime[0] + jmbg}.!!`
                                })
                            }}>Kreiraj</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
