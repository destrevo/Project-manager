import React, { createContext, useState } from "react";

export const ProjectMaganer = createContext()
export default function ProjectManagerProvider(props) {
    const [dataFromServer,setDataFromServer] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [chosenCard, setChosenCard] = useState()

    return (

        <ProjectMaganer.Provider value={{
            modalOpen,
            setModalOpen,
            chosenCard,
            setChosenCard,
            dataFromServer,
            setDataFromServer
        }}>
            {props.children}
        </ProjectMaganer.Provider>
    )
}