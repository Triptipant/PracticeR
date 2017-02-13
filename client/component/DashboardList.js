import React from 'react';

export default class DashboardList extends React.Component {
  constructor(props) {
     super(props);
    this.handleChangee = this.handleChangee.bind(this);
        this.handleChangep = this.handleChangep.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password:''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    email: {this.state.value};
    password: {this.state.value}
    this.props.onSubmit({email:this.state.value,password:this.state.value})
}
  

  handleChangee(evt) {
    this.setState({
      email: evt.target.value,
    });
    
  }
    handleChangep(evt) {
    this.setState({
      password: evt.target.value,
    });
    }

  render() {
    return (
      <form className="form form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Dashboard  </label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(evt)=>this.handleChangee(evt)}
          />
            <input
            type="text"
            className="form-control"
            value={this.state.password}
            onChange={(evt)=>this.handleChangep(evt)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}

DashboardList.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};