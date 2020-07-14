import React, { Fragment, useState } from 'react';
// import TextareaAutosize from 'react-textarea-autosize';
import { MentionsInput, Mention } from 'react-mentions'
import styled from 'styled-components';
import global from './global';

// const StyledContent = styled(TextareaAutosize)`
// 	outline: none;
// 	border: none;
// 	max-height: 400px;
// 	height: auto;
// 	width: 100%;
// 	margin: 10px auto;
// 	font-size: 1.8em;
// 	color: #14171a;
// 	resize: none;
// 	font-family: 'Segoe UI', Arial, sans-serif;
// 	padding: 0;
// 	overflow: hidden;
// `;

const StyledMentionsContent = styled(MentionsInput)`
	max-height: 400px;
	height: auto;
	width: 100%;
	margin: 10px auto;
	font-size: 1.8em;
	color: #14171a;
	resize: none;
	font-family: 'Segoe UI', Arial, sans-serif;
	overflow: hidden;

	& textarea {
		border: none;
		outline: none;
		padding: 0;
	}
`;

const Date = styled.span`
	color: #657786;
	font-size: 0.95em;
`;

const Content = () => {
	const [content, setContent] = useState('O que é golden shower?');

	return (
		<Fragment>

			<StyledMentionsContent
				autoFocus
				maxLength={280}
				value={content}
				placeholder="Digite aqui..."
				onChange={({ target }) => setContent(target.value)}
				spellCheck={false}
			>
				<Mention
					trigger="@"
				/>
			</StyledMentionsContent>


			{/* <StyledContent
				autoFocus
				maxLength={280}
				value={content}
				placeholder="Digite aqui..."
				onChange={({ target }) => setContent(target.value)}
				spellCheck={false}
			/> */}
			<Date>{global.datetime}</Date>
		</Fragment>
	);
};

export default Content;
