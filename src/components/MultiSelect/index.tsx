import { useRef } from "react";
import styled from "styled-components";
import {MultiSelectInput} from "./Input";
import { Tags } from "./Tags";
import {useState} from "react";

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

	const [items, setItems] = useState<Array<string>>([])

	function addNewTag(tagName: string) {
		setItems([...items, tagName]);
	}

	return (
		<Wrapper>
			<div>
				<Tags items={items} />
				<MultiSelectInput newTagAdded={tagName => addNewTag(tagName)} />
			</div>
		</Wrapper>
	)
}
