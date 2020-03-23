import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import  { postlist } from '../action/listaction'
import PropTypes from 'prop-types'

 class Add extends Component {
    constructor(props) {
    super(props)
    this.state = {
        skill:"",
        client:"",
        date:"",
        name:"",
        mobile:"",
        email:"",
        location:"",
        experience:"",
        current:"",
        expected:"",
        notice:"",
        status1:"",
        status2:""

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

}

handleChange(event) {
    event.preventDefault();
    this.setState({
      
        [event.target.id]: event.target.value,
    })

}

handleSubmit(e){
    e.preventDefault();
    const newJob = {
        skill:this.state.skill,
        client:this.state.client,
        date:this.state.date,
        name:this.state.name,
        mobile:this.state.mobile,
        email:this.state.email,
        location:this.state.location,
        experience:this.state.experience,
        current:this.state.current,
        expected:this.state.expected,
        notice:this.state.notice,
        status1:this.state.status1,
        status2:this.state.status2
    };
  console.log(newJob);
  this.props.postlist(newJob, this.props.history); 
  
  
  }
    render() {
        return (
            <div>
                
             <Paper>
                <Card>
                     <CardContent>
                         <Typography variant="h5" component="h2">
                             ADD JOB
                   </Typography>
                     </CardContent>

                </Card>


                <Container fixed>
                    <br></br>
                    <br></br>

                    <TextField required
                        id="skill"
                        label=" Skill"
                        value={this.state.skill}
                        onChange={this.handleChange}
                        margin="normal"
                        type="text"

                    />
                    <TextField required
                        id="client"
                        value={this.state.client}
                        onChange={this.handleChange}
                        label="Client"
                        margin="normal"
                        type="email"
                        style={{ float: " right" }}
                    />
                    <br></br>
                    <TextField required
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        label="Name"
                        margin="normal"
                        type="email"
                    />

                    <TextField required
                        id="mobile"
                        label="Mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                        type="number"
                        margin="normal"
                        style={{ float: " right" }}
                    />
                    <br></br>
                    <TextField required
                        id="email"
                        label="E-mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                        margin="normal"
                        type="text"
                    />

                    <TextField required
                        id="location"
                        label="Location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        margin="normal"
                        type="text"
                        style={{ float: " right" }}
                    />
                    <br></br>
                    <TextField required
                        id="experience"
                        label="Experience"
                        value={this.state.experience}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField required
                        id="current"
                        label=" Current"
                        value={this.state.current}
                        onChange={this.handleChange}
                        margin="normal"
                        type="text"
                        style={{ float: " right" }}
                    />
                    <br></br>
                    <TextField required
                        id="expected"
                        value={this.state.expected}
                        onChange={this.handleChange}
                        label="Expected"
                        margin="normal"
                        type="email"
                        style={{ float: " right" }}
                    />
                    <TextField required
                        id="notice"
                        value={this.state.notice}
                        onChange={this.handleChange}
                        label=" Notice"
                        margin="normal"
                        type="text"
                    />
                    <br></br>
                    <TextField required
                        id="status1"
                        label="Status1"
                        value={this.state.status1}
                        onChange={this.handleChange}
                        margin="normal"
                        type="email"

                    />
                    <TextField required
                        id="status2"
                        value={this.state.status2}
                        onChange={this.handleChange}
                        label="Status2"
                        margin="normal"
                        type="email"
                        style={{ float: " right" }}
                    />
                    <br></br>
                    <TextField
                        id="date"
                        defaultValue="03-03-1999"
                        value={this.state.date}
                        onChange={this.handleChange}
                        label="Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br></br>
                    <br></br>
                    <Button variant="contained" type="submit" onClick={this.handleSubmit}  type="submit" color="primary" style={{ float: " right" }}>
                        Submit
           </Button>
                    <Button variant="contained" onClick={() => this.props.history.push("/list")} type="submit" color="secondry" style={{ float: " right" }}>
                        Cancel
            </Button>
                    
                </Container>
                <br></br>
                <br></br>
                <br></br>

            </Paper>
            </div>
        )
    }
}
Add.propTypes = {
    postlist: PropTypes.func.isRequired,
   
  };
export default connect(null,{postlist})(withRouter(Add));