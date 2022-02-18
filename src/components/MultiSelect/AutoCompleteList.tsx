import styled from "styled-components";

const AutoCompleteListWrapper = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  width: 100%;
  height: auto;
  background: var(--light);
  border-radius: 4px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  padding: 12px 8px;
  transition: all 200ms ease;
  cursor: pointer;
  &:hover {
    border-left: 4px solid var(--primary);
  }
  span {
    color: var(--primary);
    display: inline-block;
    margin-right: 4px;
  }
`

export const AutoCompleteList = (props: {
	items: Array<string>,
	selectedItems: Array<string>,
	search: string,
	addItem: (name: string) => void
}) => {
	const filteredItems = props.items
		.filter(item => item.toLowerCase().includes(props.search.toLowerCase()))

	function renderListItems(items: Array<string>) {
		return (
			items.map((item, i) => {
				return (
					<ListItem onClick={e => props.addItem(item)} key={i}>{item}</ListItem>
				)
			})
		)
	}

	function renderLastListItem(items: Array<string>, name: string) {
		if (items.length <= 1)
			return (
				<ListItem onClick={e => props.addItem(name)}><span>Create</span>{name}</ListItem>
			)

	}

	return (
		<AutoCompleteListWrapper>
			<List>
				{
					renderListItems(filteredItems)
				}
				{
					renderLastListItem(filteredItems, props.search)
				}
			</List>
		</AutoCompleteListWrapper>
	)
}