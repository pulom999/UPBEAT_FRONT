import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function SetPlanPlayer2() {
  const [plan2, setPlan2] = useState('Enter your construction plan here...');

  const handleEditorChange = (value, event) => {
    setPlan2(value);
  };

  return (
    <div style={{display:'center',}}>
      <h2>Setup ConstructionPlan : Player2</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Editor
          height="65vh"
          width="110vh"
          language="java"
          defaultValue={plan2}
          onChange={handleEditorChange}
          options={{
            scrollBeyondLastLine: false,
            fontSize: "17px",
          }}
        />
      </div>
    </div>
  );
}

export default SetPlanPlayer2;
