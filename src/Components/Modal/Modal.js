import React, { useState } from 'react'
import Button from '../Button/Button'
import './Modal.css'
import { useContext } from 'react'
import { ProjectMaganer } from '../../Context/Context'
import DataRenderInModal from '../dataRenderInModal/DataRenderInModal'
import Form from '../Form/Form'

export default function Modal({ isActive }) {
    const { setModalOpen, setChosenCard, chosenCard } = useContext(ProjectMaganer)
    const [resetForm,setResetForm] = useState(false)
    return (
        <>
            {isActive && <div className='disable_bg' />}
            <div className={isActive ? 'modal-active' : 'modal'}>
                <div className='modal-top'>
                    <Button title={'Close'}
                        activeClass={'btn'}
                        _callback={() => {
                            setModalOpen(false)
                            setChosenCard()
                            setResetForm(x=>!x)
                        }} />
                </div>
                <div className='modal-content'>
                    {!!chosenCard ?
                        <DataRenderInModal data={chosenCard} />
                        :
                        <Form resetForm={resetForm} />}
                </div>
            </div>
        </>
    )
}
