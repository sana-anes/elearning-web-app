import React ,{useEffect ,useState} from 'react'
import { getClass} from "../../services/teacher.service";
import { Pie } from 'react-chartjs-2';


export default function Class() {
  const data = {
    labels: ['course is completed', 'course is droped', 'course suspended for reasons', 'other'],
    datasets: [
      {
        label: '# of Votes',
        data: [3,2,1,8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
         
        ],
        borderWidth: 1,
      },
    ],
  };
const [predicData , setPredicData]=useState([])

    let info={data:[[2.7, 0.7 , 40],[1.3,1,0],[2.5, 0.6 , 30],[0.98,1,0]]}
            useEffect(() => {      
  
              getClass(info)
              .then((response) => {
                console.log(response.data);
                setPredicData(response.data)
                //{...profile ,firstname:e.target.value}
              })
              .catch((error) => {
                console.log(error);
              });
    
            
  
  
  
              },[]);
  
              return (
                <div id="layoutSidenav_content">
                <main >
              
                  <br/><br/>
                  <div className="pieChart" style={{width:'50%',height:'50%' ,margin:'auto'}}>
                  <Pie data={data} 

                  />:
              
              </div>
                </main>
                </div>
              );




}  







