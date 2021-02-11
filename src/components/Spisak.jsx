import React from 'react'
import Navbar from './Navbar'
import Student from './Student'

export default function Spisak(props) {
    return (
        <>
            <Navbar />
            <div className='container'>
                {
                    props.studenti.map((element, index) => {
                        return (
                            <Student key={index} student={element} />
                        )
                    })
                }
            </div>
        </>
    )
}
