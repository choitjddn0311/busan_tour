
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { MarkdownContainer, MarkdownMain, PlannerTitle, PlannerSubmitArea} from '../styles/plannerStyle';

const Planner = (props) => {
  const [value, setValue] = useState('');

  return (
    <>
      <MarkdownContainer>
        <MarkdownMain>
          <PlannerTitle>
            <h1>planner title</h1>
            <input type="text" name="" id="" placeholder='Enter the planner title'/>
          </PlannerTitle>
          <MDEditor
            value={value}
            onChange={setValue}
            height="90vh"
            preview="live"
          />
          <PlannerSubmitArea>
            <input type="submit" value="save plan"/>
          </PlannerSubmitArea>
        </MarkdownMain>
      </MarkdownContainer>
    </>
  )
};

export default Planner;
