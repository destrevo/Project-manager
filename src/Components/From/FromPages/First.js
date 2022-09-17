import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";


export default function First({ formData, setFormData, page }) {
  const [name, setName] = useState(formData.name > 0 ? formData.name : [])
  const [desc, setDesc] = useState(formData.desc > 0 ? formData.desc : [])
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    if (name.length > 0 && desc.length === 0) {
      setValidate(true)
    } else {
      if (desc.length >= 50 && desc.length <= 500) {
        setValidate(true)
      } else {
        setValidate(false)
      }
    }

  }, [name, desc])

  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Name ...."
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />
      min 1 - max 255 - current {name.length}
      <textarea style={{ width: '350px', height: '250px' }}
        type="text"
        placeholder="Description ...."
        value={desc}
        onChange={(e) =>
          setDesc(e.target.value)
        }
      />
      {desc.length > 0 && 'min 50'} max 500 - current {desc.length}
      <Button title={'Next'} activeClass={validate ? 'btn' : 'btn denied'} _callback={() => {
        page(1)
        setFormData(prev => ({
          ...prev,
          name: name,
          desc: desc,

        }))
      }} />
    </div>

  );
}


