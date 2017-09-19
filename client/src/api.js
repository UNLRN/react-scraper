import React, {Component} from 'react'
import ReactJson from 'react-json-view'

class Api extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {},
		}
		this.getData = this.getData.bind(this)
	}

	getData() {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => { this.setState({ data })})
            .catch(err => {console.log(err)})
    }

	componentDidMount() {
		this.getData();
	}

	render() {
		return <ReactJson
					src={this.state.data}
					iconStyle='square'
					displayObjectSize='false'
					displayDataTypes='false'

				/>
	}
}

export default Api