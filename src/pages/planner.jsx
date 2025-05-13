import { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { MarkdownContainer, MarkdownMain, PlannerTitle, PlannerSubmitArea} from '../styles/plannerStyle';
import { Viewer } from '@toast-ui/react-editor';

const Planner = (props) => {
  
  return (
    <>
      <MarkdownContainer>
        <MarkdownMain>
          <PlannerTitle>
            <h1>planner title</h1>
            <input type="text" name="" id="" placeholder='Enter the planner title'/>
          </PlannerTitle>
          <Editor
            hideModeSwitch
            previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'}
            initialEditType="markdown"
            placeholder="write your travel planner here"
            height="90vh"
            toolbarItems={[ ['heading','bold', 'italic', 'strike'],
                            ['hr'],
                            ['image', 'link'],
                            ['ul', 'ol', 'table'],
                            // ['code', 'codeblock'], 코드 필요없음
            ]}
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
