import React ,{useEffect, useState}from 'react'
import  {  makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import { NavLink ,useParams} from "react-router-dom";
import { getCourseByTeacher ,deleteCourse,deleteFile} from "../../services/teacher.service";
import {getToken} from  '../../actions/Auth.service'
import decode from 'jwt-decode'






const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  const { row , refresh} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();


  const deleteHandler=(e)=>{
    let courseId=row._id
    console.log(courseId)
    //delete chapters files
row.chapters.map((item,index)=>{
    deleteFile({
      path:item.chapterFile.path
  
    })
  
    .then((response) => {
      console.log(response);
      })
    .catch((error) => {
        console.log(error);
      });
    });
      //-----delete course image
      deleteFile({
        path:row.image.path
    
      })
    
      .then((response) => {
        console.log(response);
        })
      .catch((error) => {
          console.log(error);
        });


      //delete course from db
    deleteCourse(courseId)
    .then((response) => {
      console.log(response)
      props.onChange(refresh+1);
      //window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
  
  }
  




  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
        {row.title}</TableCell>
        <TableCell align="center">{row.creationDate}</TableCell>
        <TableCell align="center">{row.topic}</TableCell>
        <TableCell align="center">{row.level}</TableCell>
        <TableCell align="center">{row.language}</TableCell>
        <TableCell align="center">{row.estimatedTime}</TableCell>
        <TableCell align="center">{row.chapters.length}</TableCell>
        <TableCell align="center"> 
                <div style={{display:"flex"}}>
                  <NavLink  to={{ pathname: `/teacher/viewCourse/${row._id}`}}>
                  <Button variant="contained"   style={{marginRight:"10px" }}>
                      <VisibilityIcon />     
                  </Button></NavLink>
                  
                  <NavLink  to={{ pathname: `/teacher/editCourse/${row._id}`}}>
                  <Button variant="contained"  color="primary"  style={{marginRight:"10px"}}>
                            <EditIcon />
                        
                  </Button></NavLink>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={deleteHandler}
                  >
                  <DeleteIcon />
                  </Button>
                 
                </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={0.5}>
              <Typography variant="h6" gutterBottom component="div">
                Chapters
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Time (hr)</TableCell>
                    <TableCell align="center">Points</TableCell>
                    <TableCell align="center">Quiz</TableCell>
                      </TableRow>
                </TableHead>
                <TableBody>
                  {row.chapters.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell component="th" scope="row">
                        {item.chapterTitle}
                      </TableCell>
                      <TableCell align="center">{item.chapterTime}</TableCell>
                      <TableCell align="center">{item.points}</TableCell>
                      <TableCell align="center">{item.quiz.length}</TableCell>

      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}





export default function Courses() {
  const [refreshKey, setRefreshKey] = React.useState(0);
  const [id,setId]=useState()

  // let{id}=useParams()

  useEffect(() => {
    // let userId="60c733d4dfc12d457c445cb6";
    const token =getToken();
    if (token){
    const decoded = decode(token);
    setId(decoded.id)
    getCourseByTeacher(decoded.id)
      .then((response) => {
        setData(response)
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  
    }
  
  }, [refreshKey]);
 

  const [data,setData]=useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div id="layoutSidenav_content">
    <main>
      <div className="container-fluid"><br/>
        <h1 className="mt-4">Courses List</h1>
        <Button
        variant="contained"
        color="default"
        className="float-lg-right"
        startIcon={<AddIcon />}
      >        
      <NavLink  to={`/teacher/addCourse/${id}`}>
       Add Course
       </NavLink>
      </Button>
      <br/><br/>
        <div className="card mb-4">
          <div className="card-header row">
            <i className="fas fa-table mr-1" />
            Data
          </div>
          <div className="card-body">
            <div className="table-responsive">
    <TableContainer  component={Paper}>         
      <Table aria-label="collapsible table" size="small">
        <TableHead>
          <TableRow>
            <TableCell />
                    <TableCell>Title</TableCell>
                    <TableCell align="center">creation Date</TableCell>
                    <TableCell align="center">Topic</TableCell>
                    <TableCell align="center">Level</TableCell>
                    <TableCell align="center">Language</TableCell>
                    <TableCell align="center">Time</TableCell>
                    <TableCell align="center">Chapters</TableCell>
                    <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index) => (
            <Row key={index} row={item} refresh={refreshKey}  onChange={refresh =>setRefreshKey(refresh)}/>
          ))}
        </TableBody>
      
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
          </div>
        </div>
      </div>
    </main>
    
  </div>
  );
}