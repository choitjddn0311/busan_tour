import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { MarkdownContainer, MarkdownInner } from '../styles/plannerStyle';

const Planner = (props) => {
  const [value, setValue] = useState("**Write Planner with Mark down**");
  
  return (
    <>
    <markdownContainer>
      <markdownInner>
        <MDEditor
          value={value}
          onChange={setValue}
          height={1000}
          preview='live'
          className='customEditor'
        /> 
      </markdownInner>
    </markdownContainer>
    </>
  )
};

export default Planner;
