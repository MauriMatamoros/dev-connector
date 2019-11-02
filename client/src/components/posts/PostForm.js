import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addPost } from '../../actions/post'

const PostForm = ({ addPost }) => {
	const [text, setText] = useState('')
	return (
		<div class='post-form'>
			<div class='post-form-header bg-primary'>
				<h3>Say Something...</h3>
			</div>
			<form
				class='form my-1'
				onSubmit={(e) => {
					e.preventDefault()
					addPost({ text })
					setText('')
				}}
			>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					cols='30'
					rows='5'
					placeholder='Create a post'
				></textarea>
				<input type='submit' value='Submit' class='btn btn-dark my-1' />
			</form>
		</div>
	)
}

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired
}

export default connect(
	null,
	{ addPost }
)(PostForm)