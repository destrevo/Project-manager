import React, { useState } from "react";
import Button from "../../Button/Button";

function Second({ formData, setFormData, page }) {
  const [employee, setEmployee] = useState('')
  const [position, setPosition] = useState('')
  const [employeeAndPosition, setEmployeeAndPosition] = useState(formData.ppl_on_project.length > 0 ? formData.ppl_on_project : [])

  return (
    <>
      <div className="personal-info-container">
        {employeeAndPosition.map((data, k) => {
          return <div style={{ display: 'flex', justifyContent: 'center' }} key={k}>
            <span style={{ marginRight: '15px' }}>name :{data.name} </span>
            <span> position : {data.position} </span>
          </div>
        })}
        -----------------------------------
        <input
          type="text"
          placeholder="Employee Name ..."
          value={employee}
          onChange={(e) => {
            setEmployee(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Postition ..."
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />

        <Button title={'Add'} activeClass={'btn'} _callback={() => {
          setEmployeeAndPosition([...employeeAndPosition, { name: employee, position: position }]);
          setPosition('')
          setEmployee('')
        }} />
        <div style={{ display: 'flex' }}>
          <Button title={'Prev'} activeClass={'btn'} _callback={() => { page(0) }} />
          <Button title={'Next'} activeClass={'btn'} _callback={() => {

            setFormData(prev => ({
              ...prev,
              ppl_on_project: [...employeeAndPosition]
            }))
            page(2)
          }} />
        </div>
      </div>

    </>
  );
}

export default Second;
