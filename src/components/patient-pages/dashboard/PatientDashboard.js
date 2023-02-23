import React, {useEffect, useState} from 'react';
import Calendar from "react-calendar";
import "./styled/Calendar.less"
import {
    AddTaskContainer, AddTaskModal,
    BPCard, Button,
    DoctorDetails,
    HealthCard,
    MedInfoCard,
    PersonalDetails, TaskBox, TaskCard,
    TaskCreator, TaskList
} from "./styled/MainContainer.styled";
import {InputField} from "../../auth_pages/registeration_pages/styled/Form.styled";
import {dayOfWeek, getCookie, toLocalDate, toLocalTime} from "../../../utils/util";
import {CalendarContainer} from "./styled/Calendar.styled";
import {month} from '../../../utils/util'
import LineChart from "./LineChart";

const PatientDashboard = ({setCurrentScreen, userDetails, setUserDetails}) => {

    const [date, setDate] = useState(new Date())
    const [taskDetails, setTaskDetails] = useState({taskName: "", drugName: "", drugDosage: "", intakeDuration: "", intakeTimes: "", intakeStartingHour: "", dateCreated: date, isCompleted:false})
    const [addTask, setAddTask] = useState(false)
    const [tasks, setTasks] = useState([])
    const doctor = false

    const [openCalendar, setOpenCalendar]=useState(false)
    const [timeframe, setTimeframe] = useState(false)
    const [timeframeValue, setTimeframeValue] = useState("today")

    const [medInfo, setMedInfo] = useState({weight:"", height:"", bloodType:"", bloodPressures: ""})


    useEffect(()=>{
        let user = getCookie("userDetails")
        user = JSON.parse(user)
        setUserDetails({...userDetails, ...user})

        let bioDataOptions = {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': "Bearer " + user.token,
            },
        }

        let bioDataViewResponse = fetch(`http://localhost:9191/api/v1/bioData/`+user.email+`/view`, bioDataOptions)
        bioDataViewResponse.then((response)=> response.json())
            .then((data)=>{
                if(data.successful){
                    setMedInfo({ ...medInfo,
                        weight: [data.payload.bodyWeight.value, data.payload.bodyWeight.dateCreated],
                        bloodType: data.payload.bloodType.split(""),
                        height: [data.payload.bodyHeight.value, data.payload.bodyHeight.dateCreated],
                        bloodPressures: [data.payload.bloodPressures.systolicPressure, data.payload.bloodPressures.diastolicPressure, data.payload.bloodPressures.pulsePressure, data.payload.bloodPressures.dateAdded],
                    })
                }
            })



        // let prescriptionDataOptions = {
        //     method: 'GET',
        //     credentials: 'same-origin',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //         'Authorization': "Bearer " + user.token,
        //     },
        // }
        //
        // let prescriptionDataViewResponse = fetch(`http://localhost:9191/api/v1/prescription/`+user.email, prescriptionDataOptions)
        // prescriptionDataViewResponse.then((response)=> response.json())
        //     .then((data)=>{
        //         if(data.successful){
        //             setTasks([...data.payload])
        //         }
        //     })


    }, [])


    useEffect(()=>{
        let user = getCookie("userDetails")
        user = JSON.parse(user)

        let prescriptionDataOptions = {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': "Bearer " + user.token,
            },
        }

        let prescriptionDataViewResponse = fetch(`http://localhost:9191/api/v1/prescription/`+user.email, prescriptionDataOptions)
        prescriptionDataViewResponse.then((response)=> response.json())
            .then((data)=>{
                if(data.successful){
                    setTasks([...data.payload])
                }
            })
    }, [])

    const setNewDate = () => {

    }

    function addTaskToList() {
        setTaskDetails({...taskDetails, dateCreated: date})
        let prescriptionDataOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': "Bearer " + userDetails.token,
            },
            body: JSON.stringify({ownerEmail: userDetails.email, prescriptions: [taskDetails]})
        }

        let prescriptionDataViewResponse = fetch(`http://localhost:9191/api/v1/prescription/add`, prescriptionDataOptions)
        prescriptionDataViewResponse.then((response)=> response.json())
            .then((data)=>{
                if(data.successful){
                    setTasks([...data.payload.prescriptions])
                }
            })

        // setTasks([...tasks, taskDetails])
        setAddTask(false)
        setTaskDetails({taskName: "", drugName: "", drugDosage: "", intakeDuration: "", intakeTimes: "", intakeStartingHour: "", dateCreated: date, isCompleted:false})
    }

    function handleInput(e) {
        setTaskDetails({...taskDetails, [e.target.name]: e.target.value})
    }

    const greeting = () => {
        if(new Date().getHours() > -1 && new Date().getHours() < 12){
            return "Good morning, "
        }
        else if(new Date().getHours() > 11 && new Date().getHours() < 17){
            return "Good afternoon, "
        }
        else if(new Date().getHours() > 16 && new Date().getHours() < 24){
            return "Good evening, "
        }
    }

    // useEffect(()=>{
    //
    // }, [tasks])

    useEffect(()=>{
        setTaskDetails({...taskDetails, dateCreated: date})
    }, [date])


    return (
        <>
            <PersonalDetails>

                <h3>{greeting()}{userDetails.firstName}</h3>
                <p>How are you feeling today?</p>

                <div style={{height:"274px", marginBottom:"24px", display:"flex", flexDirection:"column", gap:"24px", width:"-webkit-fill-available"}}>

                    {/*<div style={{display: "flex", width:"-webkit-fill-available"}}>*/}

                    {/*    <div style={{display:"flex", flexDirection:"column",borderRight:"1px solid #909090", width:"403px", height:"283px"}}>*/}

                    {/*        <div style={{display:"flex", flexDirection:"column",borderBottom:"1px solid #909090", width:"403px", height:"154px", padding:"40px 35px"}}>*/}

                    {/*            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>*/}
                    {/*                <div style={{display:"flex", flexDirection:"row"}}>*/}
                    {/*                    <h3>your medical info</h3>*/}
                    {/*                    /!*<img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1666971002/fluent_edit-24-regular_r6l7ll.svg" alt="edit-medical-info"/>*!/*/}
                    {/*                </div>*/}
                    {/*                <img style={{cursor:"pointer"}} onClick={()=> {setCurrentScreen("medicals"); window.location.href = "http://localhost:3000/patient/medicals"}} src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1666971002/fluent_arrow-right-24-regular_v3tgwd.svg" alt="navigate-to-medical-info-page"/>*/}
                    {/*            </div>*/}
                                <div style={{display:"flex", height:"125", width:"-webkit-fill-available", gap:"24px", justifyContent:"space-between"}}>
                                    <MedInfoCard style={{backgroundColor:"#a8c7e7"}}>
                                        <h3 style={{width:"40px"}}>weight</h3>
                                        <div style={{display:"flex", alignItems:"baseline", gap:"4px", justifyContent:"space-between"}}>
                                            <h6>{medInfo.weight === ""? "??": medInfo.weight[0]}</h6>
                                            <p>kg</p>
                                        </div>
                                    </MedInfoCard>
                                    <MedInfoCard style={{backgroundColor:"beige"}}>
                                        <h3 style={{width:"40px"}}>height</h3>
                                        <div style={{display:"flex", alignItems:"baseline", gap:"4px", justifyContent:"space-between"}}>
                                            <h6>{medInfo.height === ""? "??": medInfo.height[0]}</h6>
                                            <p>cm</p>
                                        </div>
                                    </MedInfoCard>
                                    <MedInfoCard style={{backgroundColor:"#a8c7e7"}}>
                                        <h3 style={{width:"80px"}}>blood type</h3>
                                        <div style={{display:"flex", alignItems:"start", gap:"4px", justifyContent:"space-between"}}>
                                            <h6>{medInfo.bloodType === ""? "??": medInfo.bloodType[0]}</h6>
                                            <p>{medInfo.bloodType === ""? "-": medInfo.bloodType[1]}</p>
                                        </div>
                                    </MedInfoCard>
                                    {/*<MedInfoCard style={{backgroundColor:"#a8c7e7"}}>*/}
                                    {/*    <h3>blood sugar</h3>*/}
                                    {/*    <div style={{display:"flex", alignItems:"center", gap:"4px"}}>*/}
                                    {/*        <h6>{}</h6>*/}
                                    {/*        <p>mg/dL</p>*/}
                                    {/*    </div>*/}
                                    {/*</MedInfoCard>*/}
                                </div>
                    {/*<div style={{width:"-webkit-fill-available", backgroundColor:"#ffffff",padding:"24px", height:"125px", borderRadius:"12px", boxShadow: "0px 2px 4px rgb(0 0 0 / 25%)", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>*/}
                    {/*    /!*<img width="500px" height="40px" src="https://img.freepik.com/premium-vector/heart-cardiogram-isolated-white_97886-1185.jpg?w=2000" alt=""/>*!/*/}
                    {/*    <h3 style={{margin:"0", textAlign:"center", fontSize:"20px", fontWeight:"400"}}>blood pressure</h3>*/}
                    {/*    <div style={{display:"flex", justifyContent:"space-between", width:"-webkit-fill-available", alignItems:"center"}}>*/}
                    {/*        <h4 style={{margin:"0"}}>SYS: 120mmHg</h4>*/}
                    {/*        <h4 style={{margin:"0"}}>DIA: 75mmHg</h4>*/}
                    {/*        <h4 style={{margin:"0"}}>PULSE: 80/min</h4>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <MedInfoCard style={{backgroundColor:"beige", padding:"24px", justifyContent:"center", gap:"16px"}}>
                        <h3 style={{margin:"0", textAlign:"center", fontSize:"20px", fontWeight:"400", width:"-webkit-fit-content"}}>blood pressure</h3>
                        <div style={{display:"flex", justifyContent:"center", width:"-webkit-fill-available", alignItems:"center", gap:"40px"}}>
                            <div style={{display:"flex", justifyContent:"center", width:"-webkit-fit-content", alignItems:"center", gap:"8px"}}>
                                <h3 style={{margin:"0", width:"-webkit-fit-content"}}>SYS:</h3> <h2>{medInfo.bloodPressures === ""? "??": medInfo.bloodPressures[0]}<span>mmHg</span></h2>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", width:"-webkit-fit-content", alignItems:"center", gap:"8px"}}>
                                <h3 style={{margin:"0", width:"-webkit-fit-content"}}>DIA:</h3> <h2>{medInfo.bloodPressures === ""? "??": medInfo.bloodPressures[1]}<span>mmHg</span></h2>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", width:"-webkit-fit-content", alignItems:"center", gap:"8px"}}>
                                <h3 style={{margin:"0", width:"-webkit-fit-content"}}>PULSE:</h3> <h2>{medInfo.bloodPressures === ""? "??": medInfo.bloodPressures[2]}<span>/min</span></h2>
                            </div>
                        </div>
                    </MedInfoCard>

                    {/*        </div>*/}

                    {/*        <DoctorDetails>*/}

                    {/*            <h3>your doctor</h3>*/}

                    {/*            <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px", alignItems:"center"}}>*/}
                    {/*                {doctor?<><div style={{display:"flex", alignItems:"flex-end", gap:"8px"}}>*/}
                    {/*                    <div style={{width:"38px", height:"38px", backgroundColor:"#c8c8c8"}}>*/}
                    {/*                        <img src="" alt=""/>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <h6>Dr. John Dorian</h6>*/}
                    {/*                        <p>Cardio-vascular surgeon</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div style={{display:"flex", alignItems: "center", gap:"8px"}}>*/}
                    {/*                    <img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1667118683/Frame_105_bop3zi.svg" alt="chat with your doctor"/>*/}
                    {/*                    <img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1667118683/Frame_106_ktpdug.svg" alt="call your doctor"/>*/}
                    {/*                </div></>:<h1 style={{textAlign:"center", fontSize:"12px", fontWeight:"400", color:"#C8C8C8"}}>you have no doctor listed</h1>}*/}
                    {/*            </div>*/}

                    {/*        </DoctorDetails>*/}

                    {/*    </div>*/}
                    {/*    <div style={{display:"flex", flexDirection:"column", padding:"40px 16px", justifyContent: "space-between"}}>*/}

                    {/*        <BPCard>*/}
                    {/*            <h3>SYS</h3>*/}
                    {/*            <p>{}</p>*/}
                    {/*            <h6>mmHg</h6>*/}
                    {/*        </BPCard>*/}

                    {/*        <BPCard>*/}
                    {/*            <h3>DIA</h3>*/}
                    {/*            <p>{}</p>*/}
                    {/*            <h6>mmHg</h6>*/}
                    {/*        </BPCard>*/}

                    {/*        <BPCard>*/}
                    {/*            <h3>PULSE</h3>*/}
                    {/*            <p>{}</p>*/}
                    {/*            <h6>/min</h6>*/}
                    {/*        </BPCard>*/}

                    {/*    </div>*/}

                    {/*</div>*/}

                </div>

                <HealthCard style={{padding:"16px", height:"333px"}}>

                    <div style={{display: "flex", justifyContent:"space-between", height:"20px", alignItems:"center"}}>
                        <h3 style={{width:"200px"}}>blood pressure graph</h3>
                        <p style={{margin:"0", textAlign:"right"}}>showing: <span style={{cursor:"pointer"}} onClick={()=> setTimeframe(!timeframe)}>{timeframeValue}</span></p>
                    </div>

                    {timeframe && <div style={{backgroundColor:"white", border:"1px solid #c8c8c8", position:"absolute", left:"52.5%", top:"500px", width:"120px", height:"fit-content", display:"flex", flexDirection:"column", gap:"8px"}}>
                        <h4 onClick={()=> {setTimeframeValue("today"); setTimeframe(!timeframe)}} style={{cursor:"pointer", fontSize:"14px", padding:"8px", borderBottom:"1px solid #c8c8c8"}}>today</h4>
                        <h4 onClick={()=> {setTimeframeValue("this week"); setTimeframe(!timeframe)}} style={{cursor:"pointer", fontSize:"14px", padding:"8px", borderBottom:"1px solid #c8c8c8"}}>this week</h4>
                        <h4 onClick={()=>{setTimeframeValue("this month"); setTimeframe(!timeframe)}} style={{cursor:"pointer", fontSize:"14px", padding:"8px", borderBottom:"1px solid #c8c8c8"}}>this month</h4>
                        <h4 onClick={()=>{setTimeframeValue("this year"); setTimeframe(!timeframe)}} style={{cursor:"pointer", fontSize:"14px", padding:"8px", borderBottom:"1px solid #c8c8c8"}}>this year</h4>
                    </div>}

                    <div id="graph" style={{width:"-webkit-fill-available", height:"-webkit-fill-available", backgroundColor:"#fff", marginBottom:"24px", display:"flex", justifyContent:"center"}}>
                        <LineChart timeframeValue={timeframeValue} />
                        {/*<h6 style={{fontSize:"14px", fontWeight:"400px", textAlign:"center", color:"#909090", margin:"0", verticalAlign:"middle"}}>Nothing to show yet</h6>*/}
                    </div>

                </HealthCard>

            </PersonalDetails>

            {/*<TaskBox>*/}
            <TaskCreator>

                <button onClick={()=>setOpenCalendar(!openCalendar)} style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"10px 30px", margin: "0",
                    width: "-webkit-fill-available",
                    borderRadius: "8px",
                    border: "unset",
                    fontSize:"16px",
                    backgroundColor: `${openCalendar? "#EA4435":"#5CA356"}`,
                    color: "#fff"}}>{openCalendar?"Close calendar":"Open calendar"}</button>
                {openCalendar && <CalendarContainer>
                    <Calendar onClickDay={()=>{setAddTask(true)}} onChange={setDate} value={date}/>
                </CalendarContainer>}

                <div style={{height:"-webkit-fill-available", display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
                <div style={{ display: "flex", justifyContent:"space-between", alignItems:"center", height:"45px"}}>
                    <h3>reminders</h3>
                    <p>showing: <span>{
                            date.getDate() === new Date().getDate()? "today":
                            date.getDate() === new Date().getDate()+1? "tomorrow":
                            date.getDate() === new Date().getDate()-1? "yesterday":
                            `${month(date.getMonth()+1)} ${date.getDate().toString()}`}
                    </span></p>
                </div>

                <div style={{ display: "flex", justifyContent:"space-between", alignItems:"center", height:"40px"}}>
                    <div>
                        <h4>0 out of {tasks.length} completed</h4>
                        <div style={{width: "299px", height:"8px", backgroundColor:`${tasks.length>0?"#F9E10F" :"#C8C8C8"}`, marginTop:"5px", borderRadius:"12px"}}>
                            <div style={{width: `${tasks.length > 0 ? (1/tasks.length)*299: 0}px`, height:"8px", backgroundColor:"#5CA356", marginTop:"5px", borderRadius:"12px"}}>

                            </div>
                        </div>
                    </div>
                    <img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1667124506/fluent_shield-error-24-regular_tbwak3.svg" alt=""/>
                </div>
                    {!openCalendar &&
                        <div style={{width:"-webkit-fill-available", height:"160px", marginTop:"24px", backgroundColor:"#fff", padding:"24px", borderRadius:"8px", border:"1px solid #c8c8c8"}}>
                            <h6>Your most current task to perform</h6>
                        </div>
                    }

                <TaskList openCalendar={openCalendar}>

                    {tasks.length>0?tasks.reverse().map((value, index) => {if (value['dateCreated'][2] === date.getDate()){
                        console.log(value['dateCreated'])
                        return (
                            <TaskCard key={index}>
                                <div style={{display:"flex", flexDirection:"column", gap:"4px"}}>
                                    <h3 style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>Prescription ({value["drugName"]})</h3>
                                    <p>Created on: {dayOfWeek(`${value['dateCreated'][0]}-${value['dateCreated'][1]}-${value['dateCreated'][2]}`).substring(0, 3)}, {toLocalDate(`${value['dateCreated'][0]}-${value['dateCreated'][1]}-${value['dateCreated'][2]}`)}  <span>{toLocalTime(new Date(value['dateCreated'][0], value['dateCreated'][1], value['dateCreated'][2], value['dateCreated'][3], value['dateCreated'][4]))}</span></p>
                                </div>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", height:"50px"}}>
                                    <h4 style={{cursor:"pointer"}}>Learn more</h4>
                                    <h5>Alert inbound</h5>
                                </div>
                            </TaskCard>
                        )}
                    }): <h1 style={{marginTop:"150px", fontSize:"24px", color:"#C8C8C8"}}>No tasks</h1>}

                    {
                        addTask &&
                        <AddTaskContainer openCalendar={openCalendar}>
                            <datalist id="tasks">
                                <option value="Prescription">Prescription</option>
                            </datalist>
                            <datalist id="drugs">
                                <option value="Aspirin">Aspirin</option>
                            </datalist>
                            <AddTaskModal>
                                <InputField>
                                    <label style={{fontSize:"12px", fontWeight:"300"}}>Select task</label>
                                    <input onChange={handleInput} name="taskName" type="search" list="tasks" style={{width:"-webkit-fill-available", height:"26px", borderRadius:"4px"}}/>
                                </InputField>

                                <div>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300"}}>Name of drug</label>
                                        <input onChange={handleInput} name="drugName" type="search" list="drugs" style={{width:"-webkit-fill-available", height:"26px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300"}}>Dosage</label>
                                        <input onChange={handleInput} name="drugDosage" type="number" style={{width:"-webkit-fill-available", height:"26px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300"}}>How many times a day</label>
                                        <input onChange={handleInput} name="intakeTimes" type="number" style={{width:"-webkit-fill-available", height:"26px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300"}}>Starting hour</label>
                                        <input onChange={handleInput} name="intakeStartingHour" type="time" style={{width:"-webkit-fill-available", height:"26px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300"}}>Duration</label>
                                        <input onChange={handleInput} name="intakeDuration" type="week" style={{width:"-webkit-fill-available", height:"26px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"30px 0 70px 0"}}>
                                        <h6>Remind me</h6>
                                        <input type="checkbox" defaultChecked={true}/>
                                        {/*<img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1667144708/Vector_4_tm6epv.svg" alt=""/>*/}
                                    </div>
                                </div>

                            </AddTaskModal>
                            <div className="buttons">
                                <button onClick={()=> setAddTask(false)} style={{backgroundColor:"unset",border: "1px solid #EA4435"}}>CANCEL</button>
                                <button onClick={addTaskToList} style={{backgroundColor:"#5ca356"}}>ADD</button>
                            </div>
                        </AddTaskContainer>
                    }
                </TaskList>

                <Button onClick={()=>setAddTask(true)}>ADD TASK</Button>
                </div>
            </TaskCreator>
            {/*</TaskBox>*/}
        </>
    );
};

export default PatientDashboard;
