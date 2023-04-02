import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function SetPlanPlayer1() {
  const [plan1, setPlan1] = useState('Enter your construction plan here...');

  const handleEditorChange = (value, event) => {
    setPlan1(value);
  };

  return (
    <div>
      <h2>Setup ConstructionPlan : Player1</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Editor
          height="65vh"
          width="110vh"
          language="java"
          defaultValue={plan1}
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

export default SetPlanPlayer1;
