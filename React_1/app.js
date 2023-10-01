import React from "react";
import  ReactDOM  from "react-dom/client";
const root = document.getElementById('root')
        
//createElement method, takes in three arguments mainly
//the name of the tag, Object, children
        const heading = React.createElement("h1",
        {
            id:"heading1"
        },"Hello World from React!")
        
        const rootrender = ReactDOM.createRoot(root)
        
        // rootrender.render(heading)

// const rootTwo = ReactDOM.createRoot('nested')

//There can't be two root elements in react.
//if there is already some html in root element
//then it is replaced by ReactDOM

// const nest = React.createElement("div",{id:'child'},
//                 React.createElement(
//                     "h1",{id:'heading tag'},"This is nested" 
//             )   )   
//if you want to create a sibling rather than a child
//you need to pass in an array in the third argument

const nest = React.createElement("div",{id:'child'},
    [
        React.createElement("h1",{id:'heading tag',key:'sibling-one'},"This is nested"),
        React.createElement("h2",{id:"h2",key:'sibling-two'},"This is a sibling")  
    ] )   

rootrender.render(nest)
