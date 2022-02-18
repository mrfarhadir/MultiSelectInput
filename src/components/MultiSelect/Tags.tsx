import styled from "styled-components";
import {CloseIcon} from "../icons/Close";
import {useEffect, useRef} from "react";
import {usePrevious} from "../../hooks/previous";

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
  cursor: pointer;
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
  display: inline-flex;
  align-items: center;
  height: 47px;
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
  border-radius: 12px;
`

function renderTags(items: Array<string>) {
	return items.map((item, i) => <TagButton key={i}>{item}</TagButton>)
}

export const Tags = (props: {
	items: Array<string>
}) => {
	const previousItems = usePrevious(props.items)
	const tagsRef = useRef<HTMLDivElement>(null)

	function scrollTagsToEnd() {
		if (tagsRef.current) {
			tagsRef.current.scrollLeft = tagsRef.current.scrollWidth
		}
	}

	useEffect(() => {
		if (previousItems && previousItems.length < props.items.length) {
			scrollTagsToEnd()
		}
	}, [props.items])


	return (
		<TagsWrapper ref={tagsRef}>
			{renderTags(props.items)}
		</TagsWrapper>
	)
}
