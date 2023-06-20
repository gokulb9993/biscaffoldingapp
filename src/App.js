// import logo from './logo.svg';
// import './App.css';
// require('react-dom');
// window.React3 = require('react');

// function App() {
//   return (
//     <div className="App">
//       <AnalyticsWidget report={mockData}/>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";
import AnalyticsWidget from "@freshdesk/analyticsbi-widget";
import ReactPrismEditor from "react-prism-editor";


function App() {
    const[report, setReport] = useState();
    const[render, setRender] = useState(false);

    return (
        <div className="component-app">
          <ReactPrismEditor
              language={"json"}
              code={JSON.stringify(report, null, 2)}
              lineNumber={true}
              readOnly={false}
              theme={'default'}
              clipboard={true}
              changeCode={code => {
                  console.log(code);
                  try {
                      const finalCode = JSON.parse(code);
                      setRender(true)
                      setReport(finalCode);
                  } catch(err) {
                      setRender(false)
                      console.log(err)
                  }
              }}
          />
          <div className="side-app">
            {render ? 
              <AnalyticsWidget report={report} size={{width: 800, height: 500}}/>
              :
              <div style={{width: "800px", fontSize: "19px", textAlign: "center"}}>Paste the correct report object on your left to see the result</div>
            }
          </div>
        </div>
    )
}

export default App