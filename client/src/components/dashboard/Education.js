import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import { deleteEducation } from '../../actions/profile'

const Education = ({ education, deleteEducation }) => {
	const educations = education.map(({ _id, school, degree, from, to }) => (
		<tr key={_id}>
			<td>{school}</td>
			<td className='hide-sm'>{degree}</td>
			<td>
				<Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
				{to === null ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
			</td>
			<td>
				<button className='btn btn-danger' onClick={() => deleteEducation(_id)}>
					Delete
				</button>
			</td>
		</tr>
	))
	return (
		<>
			<h2 className='my-2'>Education Credentials</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>School</th>
						<th className='hide-sm'>Degree</th>
						<th className='hide-sm'>Years</th>
						<th />
					</tr>
				</thead>
				<tbody>{educations}</tbody>
			</table>
		</>
	)
}

Education.propTypes = {
	education: PropTypes.array.isRequired,
	deleteEducation: PropTypes.func.isRequired
}

export default connect(
	null,
	{ deleteEducation }
)(Education)
