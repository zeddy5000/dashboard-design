import React, {useEffect, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line } from 'react-chartjs-2'
import {getCookie} from "../../../utils/util";


const LineChart = ({timeframeValue}) => {

    const [bloodPressure, setBloodPressure] = useState([])
    const [systole, setSystole] = useState([])
    const [diastole, setDiastole] = useState([])
    const [pulse, setPulse] = useState([])


    useEffect(()=>{
        let user = getCookie("userDetails")
        user = JSON.parse(user)

        let bloodPressureOptions = {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': "Bearer " + user.token,
            },
        }

        let bloodPressureResponse = fetch("http://localhost:9191/api/v1/bioData/" + user.email + "/bloodPressures", bloodPressureOptions)
        bloodPressureResponse.then((res)=> res.json())
            .then((response)=>{
                if(response.successful){
                    setBloodPressure(response.payload)
                    setSystole((prevState)=>{
                        let array = []
                        array = [...response.payload.map((data)=> {return data.systolicPressure})]
                        setSystole(array)
                    })

                    setDiastole(()=>{
                        let array = []
                        array = [...response.payload.map((data)=> {return data.diastolicPressure})]
                        setDiastole(array)
                    })

                    setPulse(()=>{
                        let array = []
                        array = [...response.payload.map((data)=> {return data.pulsePressure})]
                        setPulse(array)
                    })
                }
            })
    }, [])

    const todayLabels = []
    const weekLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const monthLabels = []
    const yearLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const data = {
        labels: yearLabels,
        datasets: [
            {
                label:"Systole",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "black",
                borderWidth:"1",
                data: systole ,
            },
            {
                label:"Diastole",
                backgroundColor: "rgb(200, 200, 90)",
                borderColor: "black",
                borderWidth:"1",
                data: diastole,
            },
            {
                label:"Pulse",
                backgroundColor: "rgb(100, 30, 85)",
                borderColor: "black",
                borderWidth:"1",
                data: pulse,
            }
        ],
    }


    return (
        <div style={{width:"600px", height:"280px"}}>
           <Line style={{maxHeight:"280px", maxWidth:"600px"}} data={data} options={
               {
                   responsive: true,
                   maintainAspectRatio: false,
                   tension: .5,
                   font: {
                       size: 200,
                       style: "italic",
                       family: "'Inter', sans-serif",
                   },
                   plugins: {
                       legend: {
                           position: 'top',
                           labels: {
                               font: {
                                   size: 12,
                                   style: "italic"
                               }
                           },
                       },
                       },
                   scales: {
                       yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                }
                            }
                            ]
                   }
               }
           }/>
        </div>
    );
};

export default LineChart;