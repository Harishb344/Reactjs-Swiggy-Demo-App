import React from 'react';
import ReactDOM from 'react-dom/client'

const parent=React.createElement("div",{  id:"parent"},[
        React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"I am in h1 tag"),
        React.createElemetn("h2",{},"I am in h2 tag"),
        ]),
      React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"I am in  h1 chile tag"),
        React.createElement("h2",{},"I am in h2 child tag")
    ]),
    
]);

// jsx
console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
