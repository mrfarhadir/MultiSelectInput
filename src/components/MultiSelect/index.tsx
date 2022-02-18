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
	const [items, setItems] = useState<Array<string>>([])

	function addNewTag(tagName: string) {
		if (items.findIndex(item => item === tagName) === -1)
			setItems([...items, tagName]);
	}

	function removeTag(tagName: string) {
		const indexToRemove = items.findIndex(item => item === tagName)
		if (indexToRemove >= 0) {
			const _items = Object.assign([], items)
			_items.splice(indexToRemove, 1)
			setItems(_items)
		}
	}

	return (

		<Wrapper>
			<Tags removeTag={(name) => removeTag(name)} items={items}/>
			<MultiSelectInput selectedItems={items} items={props.items} newTagAdded={tagName => addNewTag(tagName)}/>
		</Wrapper>
	)
}
