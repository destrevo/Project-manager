import React, { useContext } from 'react'
import './Card.css'
import { ProjectMaganer } from '../../Context/Context'

export default function Card({ data }) {

    const {setChosenCard, setModalOpen} = useContext(ProjectMaganer)

    return (
        data.length > 0 && data.map((card ,k) => {
            return (
                <div key={k} className='card'
                 onClick={()=>{
                    setChosenCard(card)
                    setModalOpen(true)
                    }}>
                    <span>Project : {card.name}</span>
                    <span>Description : {card.desc}</span>
                </div>
            )
        })
    )
}
