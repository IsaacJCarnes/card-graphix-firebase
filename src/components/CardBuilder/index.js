import React, { useEffect, useState } from "react";
import { useCardReducer } from '../../utils/cardReducer';
import Frag from '../../utils/componentUtil/frag';
import Pdf from "./pdf";
import PreferencesForm from "../PreferencesForm";
import Cloudinary from '../Cloudinary';
import LocalImage from './localImage.js';


/*import { useMutation, useQuery } from '@apollo/client';
import { CREATE_CARD } from '../../utils/mutations';
import { QUERY_CARDS, GET_ME } from '../../utils/queries';

import Auth from '../../utils/auth';*/

import './card.css';

import {transparent, layout0, layout1, layout2, layout3, layout4} from "../../assets/index.js";

const CardBuilder = () => {
  const [state, dispatch] = useCardReducer();
  const [selectedLayout, setSelectedLayout] = useState(0);
  const [currentLayout, setCurrentLayout] = useState(state[selectedLayout]);
  const [selectedComp, setSelectedComp] = useState(0);
  const [currentComp, setCurrentComp] = useState(state[selectedLayout][selectedComp]);
  const [compValue, setCompValue] = useState(state[selectedLayout][selectedComp][0]);
  const [compClass, setCompClass] = useState(state[selectedLayout][selectedComp][1]);
  const [compProps, setCompProps] = useState(state[selectedLayout][selectedComp][2]);

  const [currentLogo, setCurrentLogo] = useState(transparent);

  const SetProp = (prop, value) => { //Called from preferences form when field is changed
    if(prop === 'textContent' && compValue !== value){
      setCompValue(value);
    } else if(prop !== 'textContent' && compProps[prop] !== value){
      let tempProps = {...compProps};
      tempProps[prop] = value;
      setCompProps(tempProps);
    }
  }

  /* LAYOUT SELECTOR */
  const layoutImages = [layout0, layout1, layout2, layout3, layout4];

  const SelectDefault = (event) => {
    event.preventDefault();
    setSelectedComp(0);
    setSelectedLayout(0);
  }

  const SelectLayout = (event, index) => {
    event.preventDefault();
    setSelectedLayout(index);
  }

  const CreateLayoutSelector = (item, i) => {
    if(selectedLayout !== 0 && i === 0){
      let tempKey = "select" + i;
      return <button className="BackBtn btn btn-primary" key={tempKey} onClick={(e) => SelectDefault(e)}>« Select Layout</button>;
    } else if(selectedLayout !== 0 || i===0){ //Used if a layout is selected or if item==layout0
      let tempKey = "frag" + i;
      return <Frag key={tempKey} />;
    } else {
      let tempKey = "layout" + i;
      return <button className="LayoutBtn" key={tempKey} onClick={(e) => SelectLayout(e, i)}><img src={item} alt="layout"></img></button>;
    }
  }

  const layoutSelector = layoutImages.map((item, i) => CreateLayoutSelector(item, i));

  //dispatch({type: "card-layout", selectedLayout: 0, selectedComp: 0, newValue: ["Micky", "Name", {left: "10%", top: "5%"}]});
  //console.log(dispatch({type: 'card-layout', selectedLayout: 0, layout: ["new comp", "heyyy", {top: "4%", left: "10%"}]}));

  const CreateCardComp = (item, i) => {
    let tempKey = "comp" + i;
    if(item[1] === "Logo"){
      return <img alt="logo" className={item[1]} style={item[2]} key={tempKey} src={currentLogo}></img>
    } else {
      return <div className={item[1]} style={item[2]} key={tempKey}>{item[0]}</div>
    }
  };

  const cardComps = currentLayout.map((item, i) => ( //Fill card with component from compArray[layout]
    CreateCardComp(item, i)
  ));
  
  /* PREFERENCES EDITOR */
  const BuildPreferences = (item, value, index) => {
    let tempKey = "pref" + index;
    if(selectedLayout === 0){
      return <Frag key={tempKey}/>
    }
    if(item === "textContent" && (compClass === 'Logo' || compClass === 'Background')){
      return <Frag key={tempKey} />
    }
    let tempObj = { compClass: compClass, compProp: item, compValue: value, compIndex: index, SetProp: SetProp};
    return <PreferencesForm key={tempKey} {...tempObj} />
  } 

  const textEdit = BuildPreferences("textContent", compValue, 0);

  const preferences = Object.keys(compProps).map((item, i) => (
    BuildPreferences(item, compProps[item], (i + 1))
  ));

  const Preferences = () => {
    if(selectedLayout === 0){
      return <></>;
    }
    else{
      return( 
      <div className="PreferencesForm FormHolder">
        <div>{compClass}</div>
        {textEdit}
        {preferences}
      </div>);
    }  
  }
  
  /* COMPONENT BUTTONS */
  const BuildCompButton = (item, i) => {
    let tempKey = "btn" + i;
    if(selectedLayout === 0){
      return <Frag key={tempKey} />;
    }
     return (<button key={tempKey} onClick={(e) => {
      e.preventDefault();
      //Use Reducer to change state
      dispatch({type: "card-layout", selectedLayout: selectedLayout, selectedComp: selectedComp, newValue: [compValue, compClass, {...compProps}]});
      setSelectedComp(i);
    }}>{item[1]}</button>)
  }
  
  const componentButtons = currentLayout.map((item, i) => (
    BuildCompButton(item, i)
  ));

  const CompButtons = () => {
    if(selectedLayout === 0){
      return <></>;
    }
    else{
      return( 
        <div className="ComponentButtons FormHolder">
          <div>Components</div>
        {componentButtons}
      </div>);
    }  
  }

  const SetLogo = (path) => {
    setCurrentLogo(path);
  };

  const ExportButton = () => {
    if(selectedLayout === 0){
      return <></>
    } else {
      return <Pdf key={"exportBtn"}/>
    }
  }

  const UploadImageBtn = () => {
    if(selectedLayout === 0){
      return <></>
    } else {
      return <LocalImage setLocalImage={SetLogo}/>
      //return <Cloudinary key={"uploadBtn"} SetLogo={SetLogo}/>
    }
  }

  /* Save Card Button */
  /*const [createCard, { error, data }] = useMutation(CREATE_CARD);
  const { loading, newdata } = useQuery(QUERY_CARDS);
  */
  const SaveCard = async (event) => {
    event.preventDefault();
    let currentCard = currentLayout;
    for(let i = 0; i < currentCard.length; i++){
      console.log(currentCard[i]);
    }
  }

  const SaveButton = () => {
    /*if(selectedLayout !== 0 && Auth.loggedIn()){
      return <button className="btn btn-primary" onClick={(e) => SaveCard(e)}>Save Card</button>;
    } else {
      return <></>
    }*/

    if(selectedLayout !== 0 && false){
      return <button className="btn btn-primary" onClick={(e) => SaveCard(e)}>Save Card</button>;
    } else {
      return <></>
    }
  }

  /* useEffect Pipeline */
  useEffect(() => {
    setCurrentLayout(state[selectedLayout]);
  }, [state]);

  useEffect(() => {
    setCurrentLayout(state[selectedLayout]);
    if(selectedComp !== 0){
      setSelectedComp(0);
    } else {
      setCurrentComp(state[selectedLayout][0]); //0 can be assumed
    }
  }, [selectedLayout])

  useEffect(() => {
    setCurrentComp(state[selectedLayout][selectedComp]);
  }, [selectedComp])

  useEffect(() => {
    setCompValue(currentComp[0]);
    setCompClass(currentComp[1]);
    setCompProps(currentComp[2]);
  }, [currentComp]);

  return (
    <div className="app">
      <div className="CardPage">
        <div className="CardView">
          {cardComps}
        </div>
        <div className="UtilityTools">
          {layoutSelector}
          {UploadImageBtn()}
        </div>
        <div className="BuildTools">
          {CompButtons()}
          {Preferences()}
        </div>
        <div className="SaveTools">
        {SaveButton()}
        {ExportButton()}
        </div>
      </div>
    </div>
  );
};

export default CardBuilder;