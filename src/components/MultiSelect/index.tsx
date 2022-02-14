import styled from "styled-components";
import {MultiSelectInput} from "./Input";
import { Tags } from "./Tags";

export const Wrapper = styled.div`
  background: var(--light);
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`


export const MultiSelect = () => {
	return (
		<Wrapper>
			<Tags />
			<MultiSelectInput />
		</Wrapper>
	)
}
