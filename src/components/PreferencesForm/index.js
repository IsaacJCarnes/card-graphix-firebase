import React, { useEffect, useState } from "react";

const PreferencesForm = ({
  compClass,
  compProp,
  compValue,
  compIndex,
  SetProp,
}) => {
  const [currentVal, setCurrentVal] = useState(compValue);
  const [valSuffix, setValSuffix] = useState("");

  
  let formClass = "form" + compIndex;
  const goodInp = () => {
    if (
      compProp !== "textContent" &&
      compProp !== "backgroundColor" &&
      compProp !== "color"
    ) {
      return (
        <div className="InputWrapper">
        <input
          type="number"
          id={formClass}
          placeholder="none"
          defaultValue={currentVal}
          onChange={(e) => {
            e.preventDefault();
            console.log(e.target.value);
            changeValue(compClass, compProp, e.target.value);
          }}
        />
        <p className="suffix">{valSuffix}</p>
        </div>
      );
    } else {
      return(
        <div className="InputWrapper">
          <input
        type="text"
        id={formClass}
        placeholder="none"
        defaultValue={currentVal}
        onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          changeValue(compClass, compProp, e.target.value);
        }}
      />
    </div>
      )
    }
  };
  let inp = (
    <input
      type="text"
      id={formClass}
      placeholder="none"
      defaultValue={currentVal}
      onChange={(e) => {
        e.preventDefault();
        console.log(e.target.value);
        changeValue(compClass, compProp, e.target.value);
      }}
    />
  );

  const changeValue = (className, property, value) => {
    let withSuffix = value + valSuffix;
    SetProp(property, withSuffix);
    //React dom find by class name, replace property value with new value, or add value if not already in it
    let target = document.getElementsByClassName(className)[0];
    if (target && compProp === "textContent") {
      target.textContent = value;
      return true;
    }
    if (target && compProp === "backgroundColor") {
      target.style.backgroundColor = value;
      return true;
    } else if (target && compProp === "fontSize") {
      target.style.fontSize = withSuffix;
      return true;
    } else if (target) {
      target.style.setProperty(property, withSuffix);
      return true; //Success
    }
    return false; //False
  };

  /*if (currentVal !== compValue) {
    //console.log(currentVal + " " + compValue)
    console.log("change value");
    let suffixLength = 0;
    if(compValue.substring(compValue.length-1) === "%"){
      suffixLength = 1;
    } else if (compValue.substring(compValue.length-2) === "px" || compValue.substring(compValue.length-2) === "in"){
      suffixLength = 2;
    }
    document.getElementById(formClass).value = compValue.substring(0, compValue.length-suffixLength);
    setCurrentVal(compValue.substring(0, compValue.length-suffixLength));
  }*/

  useEffect(() => {
    let suffixLength = 0;
    if(compValue.substring(compValue.length-1) === "%"){
      suffixLength = 1;
      setValSuffix(compValue.substring(compValue.length-1));
    } else if (compValue.substring(compValue.length-2) === "px" || compValue.substring(compValue.length-2) === "in"){
      suffixLength = 2;
      setValSuffix(compValue.substring(compValue.length-2));
    } else {
      setValSuffix("");
    }
    document.getElementById(formClass).value = compValue.substring(0, compValue.length-suffixLength);
    setCurrentVal(compValue.substring(0, compValue.length-suffixLength));
  }, [compClass]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className="bg-secondary">
        {compProp[0].toUpperCase() +
          compProp.substring(1).replace(/([a-z])([A-Z])/g, "$1 $2")}
      </label>
      {goodInp()}
    </form>
  );
};

export default PreferencesForm;
