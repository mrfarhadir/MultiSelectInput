import { useRef } from "react";
import styled from "styled-components";
import {MultiSelectInput} from "./Input";
import { Tags } from "./Tags";

export const Wrapper = styled.div`
  background: var(--light);
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
`


export const MultiSelect = () => {
	const tagsRef = useRef<React.FC>(null)
	const items: Array<string> = ['React', 'Angular', 'Vuejs', 'Nuxtjs', 'Nextjs', 'TypeScript']
	return (
		<Wrapper>
			<div>
				<Tags items={items} />
				<MultiSelectInput />
			</div>
		</Wrapper>
	)
}
