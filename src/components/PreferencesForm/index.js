import React, {useEffect, useState} from 'react';

const PreferencesForm = ({compClass, compProp, compValue, compIndex, SetProp}) => {
  const [currentVal, setCurrentVal] = useState(compValue);
  let formClass = "form" + compIndex;
  let inp = <input 
  type="text"
  id={formClass}
  placeholder="none"
  defaultValue={currentVal}
  onChange={(e) => {
    e.preventDefault();
    changeValue(compClass, compProp, e.target.value);
  }}/>

  const changeValue = (className, property, value) => {
    SetProp(property, value);
    //React dom find by class name, replace property value with new value, or add value if not already in it
    let target = document.getElementsByClassName(className)[0];
    if(target && compProp === "textContent"){
      target.textContent = value;
      return true;
    } if(target && compProp === "backgroundColor"){
      target.style.backgroundColor = value;
      return true;
    } else if(target && compProp === "fontSize"){
      target.style.fontSize = value;
      return true;
    } else if (target) {
      target.style.setProperty(property, value);
      return true; //Success
    }
    return false; //False
  };

  useEffect((compClass, compProp, currentVal) => {
    changeValue(compClass, compProp, currentVal)
  }, [currentVal])

  if(currentVal !== compValue){
    //console.log(currentVal + " " + compValue)
    document.getElementById(formClass).value = compValue;
    setCurrentVal(compValue);
  }

  return(
    <form onSubmit={e => e.preventDefault()}>
      <label className='bg-secondary'>{compProp[0].toUpperCase() + compProp.substring(1).replace(/([a-z])([A-Z])/g, '$1 $2')}</label>
      {inp}
    </form>
  )
};

export default PreferencesForm;
