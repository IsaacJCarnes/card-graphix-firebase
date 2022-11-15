import { useReducer } from "react";

let initialState = [
  [
    [
      "Select A Layout Below To Get Started",
      "SampleText",
      {
        left: "3%",
        top: "45%",
        fontSize: "17px",
        color: "black",
      },
    ],
  ],
  [
    [
      "",
      "Background",
      {
        height: "100%",
        width: "40%",
        left: "0%",
        top: "0%",
        backgroundColor: "black",
      },
    ],
    [
      "",
      "Logo",
      {
        height: "1in",
        width: "1in",
        left: "5.5%",
        top: "25%",
        backgroundColor: "",
      },
    ],
    [
      "Name",
      "Name",
      {
        left: "60%",
        top: "5%",
        fontSize: "20px",
        color: "black",
      },
    ],
    [
      "Title",
      "Title",
      {
        left: "66%",
        top: "16%",
        fontSize: "11px",
        color: "black",
      },
    ],
    [
      "Primary Phone",
      "Primary Phone",
      {
        right: "4%",
        top: "33%",
        fontSize: "9px",
        color: "black",
      },
    ],
    [
      "Secondary Phone",
      "Secondary Phone",
      {
        right: "4%",
        top: "38%",
        fontSize: "9px",
        color: "black",
      },
    ],
    [
      "Email",
      "Email",
      {
        right: "4%",
        top: "53%",
        fontSize: "9px",
        color: "black",
      },
    ],
    [
      "Website",
      "Website",
      {
        right: "4%",
        top: "58%",
        fontSize: "9px",
        color: "black",
      },
    ],
    [
      "Primary Address",
      "Primary Address",
      {
        right: "4%",
        top: "73%",
        fontSize: "9px",
        color: "black",
      },
    ],
    [
      "Secondary Address",
      "Secondary Address",
      {
        right: "4%",
        top: "78%",
        fontSize: "9px",
        color: "black",
      },
    ],
  ],
  [
    [
      "",
      "Background",
      {
        height: "50%",
        width: "100%",
        left: "0%",
        top: "0%",
        backgroundColor: "lightgreen",
      },
    ],
    [
      "",
      "Logo",
      {
        height: "50%",
        width: "28%",
        left: "0%",
        top: "0%",
        backgroundColor: "",
      },
    ],
    [
      "Name",
      "Name",
      {
        left: "18%",
        top: "55%",
        fontSize: "20px",
        color: "black",
      }
    ],
    [
      "Title",
      "Title",
      {
        left: "24%",
        top: "65%",
        fontSize: "11px",
        color: "black",
      }
    ],
    [
      "Phone",
      "Phone",
      {
        right: "4%",
        top: "60%",
        fontSize: "8px",
        color: "black",
      },
    ],
    [
      "Email",
      "Email",
      {
        right: "4%",
        top: "55%",
        fontSize: "8px",
        color: "black",
      },
    ],

    [
      "Primary Address",
      "Primary Address",
      {
        right: "4%",
        top: "75%",
        fontSize: "8px",
        color: "black",
      },
    ],
    [
      "Secondary Address",
      "Secondary Address",
      {
        right: "4%",
        top: "80%",
        fontSize: "8px",
        color: "black",
      },
    ],
  ],
  [
    [
      "",
      "Background",
      {
        height: "50%",
        width: "50%",
        left: "0%",
        top: "0%",
        backgroundColor: "lightblue",

      },
    ],
    [
      "",
      "Logo",
      {
        height: "50%",
        width: "50%",
        left: "50%",
        top: "0%",
        backgroundColor: "",
      },
    ],
    [
      "Name",
      "Name",
      {
        left: "13%",
        top: "15%",
        fontSize: "17px",
        color: "white",
      },
    ],
    [
      "Title",
      "Title",
      {
        left: "17%",
        top: "25%",
        fontSize: "11px",
        color: "white",
      },
    ],
    [
      "Phone",
      "Phone",
      {
        right: "46.5%",
        top: "59%",
        fontSize: "10px",
        color: "black",
      },
    ],
    [
      "Email",
      "Email",
      {
        right: "47%",
        top: "65%",
        fontSize: "10px",
        color: "black",
      },
    ],
    [
      "Primary Address",
      "Primary Address",
      {
        right: "39%",
        top: "79%",
        fontSize: "10px",
        color: "black",
      },
    ],
    [
      "Secondary Address",
      "Secondary Address",
      {
        right: "36.7%",
        top: "85%",
        fontSize: "10px",
        color: "black",
      },
    ],
  ],
  [
    [
      "",
      "Background",
      {
        height: "100%",
        width: "100%",
        left: "0%",
        top: "0%",
        backgroundColor: "darkblue",
      },
    ],
    [
      "",
      "Logo",
      {
        height: "2in",
        width: "3.5in",
        left: "0%",
        top: "0%",
        backgroundColor: "",
      },
    ],
    [
      "Name",
      "Name",
      {
        left: "44%",
        top: "35%",
        fontSize: "17px",
        color: "white",        
      },
    ],
    [
      "Title",
      "Title",
      {
        left: "48%",
        top: "45%",
        fontSize: "11px",
        color: "white",
      },
    ],  
    [
      "Phone",
      "Phone",
      {
        left: "10%",
        top: "75%",
        fontSize: "8px",
        color: "white",
      },
    ],
    [
      "Email",
      "Email",
      {
        left: "10%",
        top: "81%",
        fontSize: "8px",
        color: "white",
      },
    ],
    [
      "Primary Address",
      "Primary Address",
      {
        right: "5%",
        top: "75%",
        fontSize: "8px",
        color: "white",
      },
    ],
    [
      "Secondary Address",
      "Secondary Address",
      {
        right: "5%",
        top: "81%",
        fontSize: "8px",
        color: "white",
      },
    ],
  ],
];

/*<div className={classname} style={{style}}>Value</div>*/

export const cardReducer = (state, action) => {
  switch (action.type) {
    case "card-layout":
      return Object.assign([...state], {
        [action.selectedLayout]: Object.assign([...state[action.selectedLayout]], {
          [action.selectedComp]: action.newValue
        })
      })
    default:
      return state;
  }
};

export function useCardReducer() {
  return useReducer(cardReducer, initialState);
}
