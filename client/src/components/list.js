import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Search from '../custom/search';
//import jlist from './jlist.json';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Logout from './logout'
import axios from "axios"
import { withRouter } from "react-router-dom";

var parent = null;

 class list extends Component {
    
    constructor(props) {
        super(props)
        parent = this;
        //  var jlist = props.list
        //  var lists=jlist.response.map((value, index) => {
        //     return value;
        // });

        this.state = {

            list:[],
            filters:[]
        }

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handledelete = this.handledelete.bind(this);

    }
    
    componentDidMount(){
  
    axios.get('http://localhost:5000/',{})
    .then((res)=>{
        this.setState({
            list:res.data,
            filters:res.data,
            });
            console.log("abc", this.state.list)


   }) 
    }
  
    handleSearchTextChange(filters) {
        
        this.setState({
            filters: filters
        });
    }

    handledelete(id){
          
        axios.delete('http://localhost:5000/delete/'+id)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))

         this.setState({
             list: this.state.list.filter(el=>el._id!==id),
             filters: this.state.filters.filter(el=>el._id!==id),
         })
    }

    handleSubmit(path,id,skill,client,date,name,mobile,email,location,experience,current,expected,notice,status1,status2){
     
        let { history } = parent.props;
    history.push({
      pathname: path,
      id:id,
      skill: skill,
      client:client,
      date:date,
      name:name,
      mobile:mobile,
      email:email,
      location:location,
      experience:experience,
      current:current,
      expected:expected,
      notice:notice,
      status1:status1,
      status2:status2
    });
}
  
    render() {
      
        return (
        
            <Card variant="outlined">
                <Paper>
                    <Logout></Logout>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Job description
                  </Typography>
                    </CardContent>
                   
                    <Card>
                        
                        <Search placeholder="Search Client By Skills " onSearchClick={this.handleSearchTextChange} searchBy='skill' inputArray={this.state.list}></Search>
                        <br></br>
                    </Card>
                    <Paper >
                    <Button variant="contained" color="primary"  onClick={()=>this.props.history.push('/add') } style={{ float: " right" }}>ADD NEW </Button>
                     <br></br>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Skill</TableCell>
                                    <TableCell>Client </TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>E-mail</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell>Experience</TableCell>
                                    <TableCell>Current</TableCell>
                                    <TableCell>Expected</TableCell>
                                    <TableCell>Notice</TableCell>
                                    <TableCell>Status1</TableCell>
                                    <TableCell>Status2</TableCell>
                                    <TableCell> Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                

                                {
                                   this.state.filters.map((row, index) => {

                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell className="tc" component="th" scope="row"> {row.skill} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.client} </TableCell>
                                                <TableCell className="tc" component="th" scope="row"> {row.date} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.name} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.mobile} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.email} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.location} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.experience} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.current} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.expected} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.notice} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.status1} </TableCell>
                                                <TableCell className="tc" component="td" scope="row"> {row.status2} </TableCell>
                                            
                                                <TableCell component="th" scope="row" align="center">
                                                    <div className="row">
                                                        <Fab color="secondary" size="small" aria-label="edit" >
                                                            <Edit 
                                                          //  onClick={()=>this.handleSubmit("/edit",row.skill,row.client,row.date,row.name,row.mobile,row.email,row.location,row.experience,row.current,row.expected,row.notice,row.status1,row.status2)}
                                                          onClick={()=>this.handleSubmit("/edit",row._id,row.skill,row.client,row.date,row.name,row.mobile,row.email,row.location,row.experience,row.current,row.expected,row.notice,row.status1,row.status2)}

                                                          />
                                                        </Fab>
                                   
                                                        <Fab aria-label="delete"  size="small" >
                                                    
                                                            <DeleteIcon onClick={()=>this.handledelete(row._id)}  />
                                                        </Fab>
                                                    </div>
                                                </TableCell> 
                                            </TableRow>
                                        )
                                    }
                                    )
                                }
                            </TableBody>
                        </Table>

                    </Paper>


                </Paper>

            </Card>

        )
    }
}

export default (withRouter(list));
