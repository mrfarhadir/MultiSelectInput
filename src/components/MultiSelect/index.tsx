import styled from "styled-components";
import {MultiSelectInput} from "./Input";

export const Wrapper = styled.div`
  background: var(--light);
  height: 48px;
  border-radius: 12px;
`


export const MultiSelect = () => {
	return (
		<Wrapper>
			<MultiSelectInput />
		</Wrapper>
	)
}
