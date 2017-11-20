import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
	render() {
		const { extraText } = this.props;

		return (
			<div>
				<h2>我是about页 {extraText}</h2>
				<Link to='/'>
				    点我回home页
				</Link> 
			</div>
		);
	}
}
