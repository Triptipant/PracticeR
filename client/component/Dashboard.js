    import React from 'react';
    import { Link } from 'react-router';
    import DashboardList from './DashboardList'
    import Dashparams from './Dashparams';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(email,password) {
    this.props.addComment(email,password);
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Tripti</h1>
        </div>
        <div className="well">
          <DashboardList onSubmit={this.handleSubmit}{...this.props} />
        </div>
        <div className="panel panel-primary">
          <div className="panel-heading">List</div>
          <div className="panel-body">
            <Dashparams list={this.props.dashboard}/>
          </div>
        </div> 
      </div>
    );
  }
}

Dashboard.propTypes = {
  list: React.PropTypes.array,
  addComment: React.PropTypes.func,
};
    /*class Dashboard extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                email: "'",
                password: ""
            };
        }

     

       handleSubmit(e) {
    e.preventDefault();
    // const { postId } = this.props.params;
      this.props.addComment({email:this.state.value}, {password:this.state.value});
    this.refs.commentForm.reset();
     console.log("chya");
           // const t = this.props.dashboard;
           // console.log(t);
    }
    handleonchangeemail(e) {
        this.setstate({
            value : e.target.value,
        }),
        e.preventDefault();
    }
       handleonchangepassword(e) {
        this.setstate({
            value :e.target.value,
        }),
        e.preventDefault();
    }
    render() {
            return (
                 <div className ="wrapper ">
                     
                  
                      <Link to ="/Logout">
                    <button>
                        Logout
                    </button>
                    </Link>
                <div>
                     Welcome to the Dashboard
                 </div>
            <div className="comments">
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" 
                value = {this.state.value}
                placeholder="email"
                onChange = {this.handleonchangeemail}
                /><br/>
                <input type="text" 
                value = {this.state.value}
                placeholder="password"
                onChange = {this.handleonchangepassword}

                /><br/>
                <input type="submit"  />
                </form>
            </div> 
            </div>
            );
        }
    }*/

// module.exports =Dashboard;