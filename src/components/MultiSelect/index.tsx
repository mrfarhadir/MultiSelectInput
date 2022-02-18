import {useRef} from "react";
import styled from "styled-components";
import {MultiSelectInput} from "./Input";
import {Tags} from "./Tags";
import {useState} from "react";
import {AutoCompleteList} from "./AutoCompleteList";

export const Wrapper = styled.div`
  background: var(--light);
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  width: 80vw;
`


export const MultiSelect = (props: {
	items: Array<string>
}) => {
	const wrapper = useRef<HTMLDivElement>(null)
	const [items, setItems] = useState<Array<string>>([])

	function scrollWrapperToEnd() {
		if (wrapper.current) {
			wrapper.current.scrollLeft = wrapper.current.scrollWidth
		}
	}

	function addNewTag(tagName: string) {
		setItems([...items, tagName]);
		scrollWrapperToEnd()
	}

	return (

		<Wrapper ref={wrapper}>
			<Tags items={items}/>
			<MultiSelectInput items={props.items} newTagAdded={tagName => addNewTag(tagName)}/>
		</Wrapper>
	)
}
