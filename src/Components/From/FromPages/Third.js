import React, { useState } from "react";
import Button from "../../Button/Button";
import { useContext } from "react";
import { ProjectMaganer } from "../../../Context/Context";

function Third({ formData, page }) {
  const { setDataFromServer, setModalOpen } = useContext(ProjectMaganer)
  const [linkName, setLinkName] = useState('')
  const [linkSrc, setLinkSrc] = useState('')
  const [linkNameAndSrc, setLinkNameAndSrc] = useState(formData.links.length > 0 ? formData.links : [])

  return (
    <>
      <div className="personal-info-container">
        {linkNameAndSrc.map((data, k) => {
          return <div style={{ display: 'flex', justifyContent: 'center' }} key={k}>
            <span style={{ marginRight: '15px' }}>name :{data.name} </span>
            <span> src : {data.src} </span>
          </div>
        })}
        -----------------------------------
        <input
          type="text"
          placeholder="Link name ..."
          value={linkName}
          onChange={(e) => {
            setLinkName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Link src ..."
          value={linkSrc}
          onChange={(e) => {
            setLinkSrc(e.target.value);
          }}
        />
        <Button title={'Add'} activeClass={'btn'} _callback={() => {
          setLinkNameAndSrc([...linkNameAndSrc, { name: linkName, src: linkSrc }]);
          setLinkName('')
          setLinkSrc('')
        }} />
        <div style={{ display: 'flex' }}>
          <Button title={'Prev'} activeClass={'btn'} _callback={() => { page(1) }} />
          <Button title={'Done'} activeClass={'btn'} _callback={() => {
            setDataFromServer(prev => ([
              ...prev,
              { ...formData, links: [...linkNameAndSrc] }
            ]))
            setModalOpen(false)
          }} />
        </div>
      </div>

    </>
  );
}

export default Third;
