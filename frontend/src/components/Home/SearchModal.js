import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { BsChatLeftText } from 'react-icons/bs';

const SearchModal = () => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <SearchWrapper>
          <div className="input-box">
            <SearchIcon />
            <SearchInput placeholder="무엇을 검색하시겠습니까?" />
            <CloseButton>
              <FaTimes />
            </CloseButton>
          </div>
        </SearchWrapper>
        <CompleteWrapper>
          <SuggestList>
            <li>
              <ChatIcon />
              <span>다이렉트 메세지에서 찾기</span>
            </li>
          </SuggestList>
          <footer>
            <span>예상한 결과가 아니었나요? </span>
            <button>자세히 알아보기</button>
          </footer>
        </CompleteWrapper>
      </ModalWrapper>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 4px;
  width: 924px;
  height: auto;
  right: auto;
  left: 50%;
  transform: translateX(-50%);
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  overflow: hidden;
  font-size: 16px;
  line-height: 16px;
`;

const SearchWrapper = styled.div`
  flex: none;
  flex-direction: row;
  justify-content: stretch;
  width: 100%;
  border-bottom: 1px solid #ddd;
  .input-box {
    padding-right: 16px;
    height: 44px;
    position: relative;
    display: flex;
    align-items: center;
  }
`;

const SearchIcon = styled(BiSearch)`
  align-self: center;
  position: relative;
  margin-left: 28px;
  margin-right: 12px;
  color: #616061;
`;

const CloseButton = styled.button`
  position: relative;
  margin-right: 28px;
  color: #616061;
  background: none;
  border: 0;
  font: inherit;
  margin: 0;
  line-height: inherit;
  overflow: initial;
  padding: 0;
  text-align: initial;
  vertical-align: initial;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border: none;
  font-size: 15px;
  height: 38px;
  max-height: 38px;
  min-height: 38px;
  align-self: stretch;
  display: flex;
  flex: 1;
  min-width: 0;
`;

const CompleteWrapper = styled.div`
  margin-top: 12px;
  footer {
    background: #f8f8f8;
    font-size: 13px;
    padding: 12px 28px 12px 28px;
    line-height: inherit;
    color: #666;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    white-space: pre-wrap;
    span {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
    button {
      color: #1966a5;
      background: none;
      border: 0;
      padding: 0;
      line-height: inherit;
      font: inherit;
    }
  }
`;

const SuggestList = styled.ol`
  margin: 0;
  padding: 0;
  li {
    display: flex;
    flex-grow: 1;
    margin: 0;
    padding: 4px 28px 4px 8px;
    line-height: 30px;
    height: 40px;
    cursor: pointer;
    outline: none;
    span {
      margin-left: 12px;
      font-weight: 700;
    }
  }
`;

const ChatIcon = styled(BsChatLeftText)`
  margin-left: 20px;
  width: 20px;
  height: 30px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default SearchModal;
