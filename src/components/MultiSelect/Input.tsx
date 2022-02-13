import styled from "styled-components";

const Input = styled.input`
  height: 48px;
  border-radius: 12px;
  border: none;
  width: 320px;
  padding: 0 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--primary);
    font-weight: bold;
    padding-left: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='32px' id='Layer_1' style='enable-background:new 0 0 32 32%3B' version='1.1' viewBox='0 0 32 32' width='32px' xml:space='preserve'%3E%3Cpath d='M28 14H18V4c0-1.104-0.896-2-2-2s-2 0.896-2 2v10H4c-1.104 0-2 0.896-2 2s0.896 2 2 2h10v10c0 1.104 0.896 2 2 2 s2-0.896 2-2V18h10c1.104 0 2-0.896 2-2S29.104 14 28 14z' style='%26%2310%3B fill: %23BCBEC4%3B%26%2310%3B'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 4px;
  }
`

export const MultiSelectInput = () => {
	return (<Input type={'text'} placeholder={'Add Tag'}/>)
}
