import React from 'react'
import { useContext,useState } from 'react';
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import { ProjectMaganer } from '../../Context/Context'
import Card from '../Card/Card';
import './Main.css'

export default function Main() {
    const { modalOpen, setModalOpen, setChosenCard, dataFromServer } = useContext(ProjectMaganer)
    const [filterText,setFilterText] = useState('')

    const filterTunnel = (text,data) => {
        let res = data.filter(card => card.name.toLowerCase().includes(text.toLowerCase()) ? card : null
        )
        return res
    };

    return (
        <>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <Button title={'New Project'}
                    activeClass={modalOpen ? 'btn denied' : 'btn'}
                    _callback={() => {
                        setModalOpen(true)
                        setChosenCard()
                    }} />
            </div>
          
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <input
            placeholder='Filter By Name'
            onChange={(e)=>{setFilterText(e.target.value)}}
            />
            </div>
            <Modal isActive={modalOpen} />
            <div className='cards-section'>
                <Card data={filterTunnel(filterText,dataFromServer)} />
            </div>
        </>
    )
}
