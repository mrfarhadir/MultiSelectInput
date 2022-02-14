import styled from "styled-components";
import {CloseIcon} from "../icons/Close";

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  padding: 0 12px;
  background: var(--background);
  margin: 0 4px;
  border-radius: 12px;
  line-height: 2.1;
  font-size: 14px;
  font-weight: bold;
  & > *:last-child {
    margin-left: 12px;
  }
`

const TagButton = (props: { children: string }) => {
	return (
		<Tag>
			{props.children}
			<CloseIcon/>
		</Tag>
	)
}

const TagsWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`

function renderTags(items: Array<string>) {
	return items.map((item, i) => <TagButton key={i}>{item}</TagButton>)
}

export const Tags = (props: {
	items: Array<string>
}) => {
	return (
		<TagsWrapper>
			{renderTags(props.items)}
		</TagsWrapper>
	)
}
