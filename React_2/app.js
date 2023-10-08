import React from "react";
import  ReactDOM  from "react-dom/client";


const root = document.getElementById('root')

const heading = (<h1>
    Hope this works😅
</h1>)
// const rootrender = ReactDOM.createRoot(root)
// rootrender.render(heading)



//babel transpiles JSX to browser understandable javascript (like react.createElement)


ReactDOM.createRoot(root).render(heading)

