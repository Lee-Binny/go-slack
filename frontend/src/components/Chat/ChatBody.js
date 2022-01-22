import React, { useState } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import ChatDayBar from './ChatDayBar';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const ChatBody = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <ChatContainer>
      <MessageList>
        <ChatDayBar />
        <ChatMessage />
        <ChatMessage />
      </MessageList>
      <EditorWrapper>
        <Editor
          wrapperClassName="chat-wrapper"
          editorClassName="chat-editor"
          toolbarClassName="chat-toolbar"
          toolbar={{
            options: ['inline', 'link', 'list', 'emoji', 'image'],
            inline: {
              options: ['bold', 'italic', 'strikethrough'],
            },
            link: {
              options: ['link'],
            },
            list: {
              options: ['unordered', 'ordered'],
            },
          }}
          placeholder="내용을 작성해주세요."
          localization={{
            locale: 'ko',
          }}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </EditorWrapper>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  min-height: 0;
  display: grid;
  grid-template-columns: auto;
`;

const MessageList = styled.div`
  flex: 1;
  height: auto;
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px;
  flex: 1;
  .chat-wrapper {
    border: 1px solid #e2e2e2;
    border-radius: 8px;
  }

  .chat-toolbar {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: none;
    background: #f8f8f8;
    .rdw-option-wrapper {
      background: #f8f8f8;
      border: none;
    }
  }

  .chat-editor {
    padding: 8px 12px;
    .public-DraftStyleDefault-block {
      margin: 0;
    }
    .public-DraftStyleDefault-ltr {
      line-height: 1.46668;
    }
  }
`;

export default ChatBody;
