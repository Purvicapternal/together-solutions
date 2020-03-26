import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import {connect} from 'react-redux'
import  { editlist } from '../action/listaction'


class edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.location.id,
            skill:this.props.location.skill,
            client:this.props.location.client,
            date:this.props.location.date,
            name:this.props.location.name,
            mobile:this.props.location.mobile,
            email:this.props.location.email,
            location:this.props.location.location,
            experience:this.props.location.experience,
            current:this.props.location.current,
            expected:this.props.location.expected,
            notice:this.props.location.notice,
            status1:this.props.location.status1,
            status2:this.props.location.status2

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(event) {
        event.preventDefault();
        this.setState({
          
            [event.target.id]: event.target.value,
        })

    }
   
    handleSubmit(e){
        e.preventDefault();
        const jobs={
            id:this.state.id,
            skill: this.state.skill,
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
            status2:this.state.status2,
        }
        console.log("jobs",jobs)

        this.props.editlist(jobs,this.state.id,this.props.history)

    }
    render() {

        return (

            <Paper>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            EDIT JOB
                  </Typography>
                    </CardContent>

                </Card>


                <Container fixed>
                    <br></br>
                    <Grid container spacing={26}>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <TextField required
                                    id="skill"
                                    label=" Skill"
                                    value={this.state.skill}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    type="text"


                                />
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>

                                <TextField required
                                    id="client"
                                    value={this.state.client}
                                    onChange={this.handleChange}
                                    label="Client"
                                    margin="normal"
                                    type="email"
                                // style={{ float: " right" }}
                                />
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <TextField required
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    label="Name"
                                    margin="normal"
                                    type="email"
                                />

                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>

                                <TextField required
                                    id="mobile"
                                    label="Mobile"
                                    value={this.state.mobile}
                                    onChange={this.handleChange}
                                    type="number"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <TextField required
                                    id="email"
                                    label="E-mail"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    type="text"
                                />


                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>

                                <TextField required
                                    id="location"
                                    label="Location"
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <TextField required
                                    id="experience"
                                    label="Experience"
                                    value={this.state.experience}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />

                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>

                                <TextField required
                                    id="current"
                                    label=" Current"
                                    value={this.state.current}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <TextField required
                                    id="expected"
                                    value={this.state.expected}
                                    onChange={this.handleChange}
                                    label="Expected"
                                    margin="normal"
                                    type="email"
                                />

                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>

                                <TextField required
                                    id="notice"
                                    value={this.state.notice}
                                    onChange={this.handleChange}
                                    label=" Notice"
                                    margin="normal"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <TextField required
                                    id="status1"
                                    label="Status1"
                                    value={this.state.status1}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    type="email"

                                />

                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>

                                <TextField required
                                    id="status2"
                                    value={this.state.status2}
                                    onChange={this.handleChange}
                                    label="Status2"
                                    margin="normal"
                                    type="email"
                                />
                            </Grid>
                            <br></br>
                            <br></br>

                            <Grid item xl={6} md={6} sm={12} xs={12}>

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
                            </Grid>
                        </Grid>
                    <Button variant="contained" onClick={() => this.props.history.push("/list")} type="submit" color="secondry" style={{ float: " right" }}>
                        Cancel
            </Button>
                    <Button variant="contained" onClick={this.handleSubmit}type="submit" color="primary" style={{ float: " right" }}>
                        Submit
           </Button>
                </Container>
                <br></br>
                <br></br>
                <br></br>

            </Paper>
        );
    }
}

edit.propTypes = {
   editlist: PropTypes.func.isRequired,
   
  };
  
export default connect(null,{editlist})(withRouter(edit));