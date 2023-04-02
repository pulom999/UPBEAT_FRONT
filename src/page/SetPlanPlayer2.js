import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom';

function SetPlanPlayer2() {
  const [plan2, setPlan2] = useState('Enter your construction plan here...');

  const handleEditorChange = (value, event) => {
    setPlan2(value);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <h2>Setup ConstructionPlan : Player2</h2>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <Editor
          height="60vh"
          width="120vh"
          language="java"
          defaultValue={plan2}
          onChange={handleEditorChange}
          options={{
            scrollBeyondLastLine: false,
            fontSize: "18px",
          }}
        />
      </div>
      <Link to="/gameplay"><button>Back</button></Link>
    </div>
  );
}

export default SetPlanPlayer2;
