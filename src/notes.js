import React, { Component } from 'react';
import axios from 'axios';

class Notes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: '',
      getNote: []
    }
  }

saveNotes = () => {
  console.log(this.state.notes);

  const response = axios.post(
  'http://localhost:3001/savenotes',
  { notes: this.state.notes },
  { headers: { 'Content-Type': 'application/json' } }
)
this.getNotes();
console.log(response.data);
}

 handleChange = (event) => {
    this.setState({notes: event.target.value});
  }
  
getNotes = () => {
  const response = axios.get("http://localhost:3001/getnotes")
  .then(res => {
    const getNote = res.data;
    this.setState({ getNote });
  });
}
    render() {
        return (
          <div className="form-group">
            <label>Enter your notes here to save it.... </label>
            <textarea
              className="form-control"
              id="notestxt"
              rows="3"
              value={this.state.notes}
              onChange={this.handleChange}
            />
            <input
              type="button"
              className="btn btn-primary"
              value="Save"
              onClick={this.saveNotes}
            />
            <input
              type="button"
              className="btn btn-link"
              value="Back"
              onClick={() => this.props.history.goBack()}
            />
            <br /> <br />
            <h3> List of Saved Notes: </h3>
            <ul>{
            this.state.getNote.map( note => <li> {note.notes} </li>)
            }</ul>
          </div>
        );
    }
}

export {Notes};