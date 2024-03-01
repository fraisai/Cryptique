import React from 'react'

const InputCheckbox = ({ nameVal = 'remember', checkedVal, handleCheckChange, formData }) => {
    console.log("InputCheckbox", formData)
  return (
    <input name={nameVal} checked={checkedVal} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" onChange={(e) => handleCheckChange({...formData, [nameVal]: e.target.checked })} />
  )
}

export default InputCheckbox