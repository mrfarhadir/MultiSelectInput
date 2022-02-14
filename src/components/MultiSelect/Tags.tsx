import styled from "styled-components";

const Tag = styled.span`
  display: inline-block;
  height: 32px;
  padding: 0 12px;
  background: var(--background);
  margin: 0 4px;
  border-radius: 12px;
  line-height: 2.1;
  font-size: 14px;
  font-weight: bold;
`

const TagsWrapper = styled.div`
	display: inline-block;
`

export const Tags = () => {
	return (
		<TagsWrapper>
			<Tag>React</Tag>
			<Tag>VueJs</Tag>
		</TagsWrapper>
	)
}
