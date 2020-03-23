import React,{ Component } from "react";
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { Paper, Button, IconButton, InputBase, Divider } from '@material-ui/core';

const styles = {
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	      },	
	input: {
	  marginLeft: 8,
	  flex: 1,
	},
	iconButton: {
	  padding: 10,
	},
	divider: {
	  width: 1,
	  height: 28,
	  margin: 4,
	},
};
var parent = null;

class Search extends Component {

	constructor(props) {
		super(props);
		parent = this;
		this.state = {
			filters: [],
			filter: ''
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		this.setState({
			filter: event.target.value
		});
	}

	handleCancel(event) {
		parent.setState({
			filter: ''
		});
		if(parent.props.inputArray === undefined) {
			//('NULLLL')
			parent.props.onSearchClick([]);
		} else {
			parent.props.onSearchClick(parent.props.inputArray);
		}
	}

	getFilters() {
		// console.log('COMPOENT SEARCH FUNC ' + parent.state.filter);
		var filters = [];
		if(parent.state.filter.length > 0) {
			if((parent.props.inputArray != null) && (parent.props.inputArray.length > 0)) {
				parent.props.inputArray.forEach(element => {
					//console.log('FILTER : ' + parent.state.filter);
					//console.log('ELEMENT : ' + JSON.stringify(element[parent.props.searchBy]));
					if(element[parent.props.searchBy].toString().toUpperCase().includes(parent.state.filter.toString().toUpperCase())) {
						filters.push(element);
					}
				});
			}
			parent.props.onSearchClick(filters);
		} else {
			parent.props.onSearchClick(null);
		}
	}

	render() {
		return (
			<Paper className="mt20" style={styles.root} elevation={1}>
				<IconButton style={styles.iconButton} aria-label="Search" color="primary">
					<SearchIcon />
				</IconButton>
				<InputBase style={styles.input} placeholder={this.props.placeholder} value={this.state.filter} onChange={this.handleSearch} />
				<IconButton style={styles.iconButton} aria-label="Search" color="primary" onClick={this.handleCancel}>
					<CancelIcon />
				</IconButton>
				<Divider style={styles.divider} />
				<Button className="m10" variant="outlined" color="primary" size="small" disabled={this.state.filter.length<=0} onClick={this.getFilters}>Search</Button>
			</Paper>
		);
	}
}

Search.proptype = {
	onSearchClick: PropTypes.func,
	searchBy: PropTypes.string,
	inputArray: PropTypes.array,
	placeholder:PropTypes.string,
	showClearText: PropTypes.bool
};

export default Search;
