import React, {useEffect, useState} from 'react';
import {HealthCard} from "../dashboard/styled/MainContainer.styled";
import {BioData, Button, HealthDataList, MedicalDetails, Modal, ModalBody, MedInfoCard} from "../dashboard/styled/MedicalRecord.styled";
import {InputField} from "../../auth_pages/registeration_pages/styled/Form.styled";
import {getCookie} from "../../../utils/util";

const PatientMedicalRecord = ({setUserDetails, userDetails}) => {

    const [edit, setEdit] = useState(false)
    const [addRecord, setAddRecord] = useState(false)
    const [addPrescription, setAddPrescription] = useState(false)
    const [prescriptionList, setPrescriptionList] = useState([])
    const [prescription, setPrescription] = useState({drugName: "", drugDosage: "", intakeDuration: "", intakeTimes: "", intakeStartingHour: "", dateCreated: new Date(), isCompleted:false})
    const [medInfo, setMedInfo] = useState({weight:"", height:"", bloodType:"", bloodPressures: "", bloodGroup:"", bloodGenoType:"", bloodSugars:""})
    const [medInput, setMedInput] = useState({email:"", bodyWeight:"", bodyHeight:"", bloodType:"", bloodPressures: "", bloodGroup:"", bloodGenoType:"", bloodSugars:"", pulse:""})
    const [bloodPressureInput, setBloodPressureInput] = useState({bloodPressure:""})
    const [bloodType, setBloodType] = useState({bloodType:""})



    const listItems = ["allergies", "disabilities", "lifestyle", "immunization"]
    function selectList(value) {
        for (let i = 0; i < listItems.length; i++) {
            if(value === listItems[i]){
                let element = document.getElementById(value.toString())
                element.style.color = "#5ca356"
                element.style.textDecoration = "underline"
            } else {
                let element = document.getElementById(listItems[i].toString())
                element.style.color = "#000"
                element.style.textDecoration = "unset"
            }
        }
    }

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
                    setPrescriptionList([...data.payload])
                }
            })
    }, [])

    useEffect(()=>{
        let element = document.getElementById("allergies")
        element.style.color = "#5ca356"
        element.style.textDecoration = "underline"
    }, [])


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
                        bloodGroup: data.payload.bloodGroup,
                        bloodSugars: [data.payload.bloodSugars.value, data.payload.bloodSugars.dateCreated],
                        bloodType: data.payload.bloodType.split(""),
                        height: [data.payload.bodyHeight.value, data.payload.bodyHeight.dateCreated],
                        bloodPressures: [data.payload.bloodPressures.systolicPressure, data.payload.bloodPressures.diastolicPressure, data.payload.bloodPressures.pulsePressure, data.payload.bloodPressures.dateAdded],
                    })
                }
            })
    }, [])

    function addPrescriptionToDatabase() {
        setPrescription({...prescription, dateCreated: new Date()})
        let prescriptionDataOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': "Bearer " + userDetails.token,
            },
            body: JSON.stringify({ownerEmail: userDetails.email, prescriptions: [prescription]})
        }

        let prescriptionResponse = fetch(`http://localhost:9191/api/v1/prescription/add`, prescriptionDataOptions)
        prescriptionResponse.then((response)=> response.json())
            .then((data)=>{
                if(data.successful){
                    setPrescriptionList([...data.payload.prescriptions])
                }
            })

        setAddPrescription(false)
        setPrescription({drugName: "", drugDosage: "", intakeDuration: "", intakeTimes: "", intakeStartingHour: "", dateCreated: new Date(), isCompleted:false})

    }

    function handleInput(e) {
        setPrescription({...prescription, [e.target.name]: e.target.value})
    }

    function addRecordToDatabase() {

    }

    function handleMedicalInfoInput(e) {
        setMedInput({...medInput, [e.target.name]:e.target.value !== "" && e.target.value !== null && !isNaN(e.target.value)? e.target.value : e.target.defaultValue})
    }

    function handleBPInfoInput(e) {
        setBloodPressureInput({bloodPressure: e.target.value !== "" && e.target.value !== null? e.target.value : e.target.defaultValue})
    }

    function handleBloodTypeInfo(e) {
        setBloodType({bloodType: e.target.value !== "" && e.target.value !== null? e.target.value : e.target.defaultValue})
    }

    function updateMedicalInfo() {

        let data = {
            email: userDetails.email,
            bloodType: bloodType.bloodType !== "" ? bloodType.bloodType : `${medInfo.bloodType[0]}${medInfo.bloodType[1]}`,
            bodyWeight: medInput.bodyWeight !== "" && medInput.bodyWeight !== null && !isNaN(medInput.bodyWeight)? [{value:Number.parseFloat(medInput.bodyWeight), dateCreated:new Date()}] : [{value: medInfo.weight[0], dateCreated: medInfo.weight[1]}],
            bodyHeight: medInput.bodyHeight !== "" && medInput.bodyHeight !== null && !isNaN(medInput.bodyHeight)? [{value:Number.parseFloat(medInput.bodyHeight), dateCreated:new Date()}] : [{value: medInfo.height[0], dateCreated: medInfo.height[1]}],
            bloodSugars: medInput.bloodSugars !== "" && medInput.bloodSugars !== null && !isNaN(medInput.bloodSugars)? [{value:Number.parseFloat(medInput.bloodSugars), dateCreated:new Date()}] : [{value: medInfo.bloodSugars[0], dateCreated: medInfo.bloodSugars[1]}],
            bloodPressures: (bloodPressureInput.bloodPressure.toString() !== `${medInfo.bloodPressures[0]}/${medInfo.bloodPressures[1]}` && bloodPressureInput.bloodPressure.toString() !== null && bloodPressureInput.bloodPressure.toString() !== "") ? [{systolicPressure:bloodPressureInput.bloodPressure.split("/")[0], diastolicPressure:bloodPressureInput.bloodPressure.split("/")[1], pulsePressure:medInput.pulse !== ""? medInput.pulse : medInfo.bloodPressures[2], dateAdded: new Date()}] : [{systolicPressure: medInfo.bloodPressures[0], diastolicPressure: medInfo.bloodPressures[1], pulsePressure: medInfo.bloodPressures[2], dateAdded: medInfo.bloodPressures[3]}]

        }

        let medUpdateDataOptions = {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': "Bearer " + userDetails.token,
            },
            body: JSON.stringify(data)
        }

        setMedInput({email:"", bodyWeight:"", bodyHeight:"", bloodType:"", bloodPressures: "", bloodGroup:"", bloodGenoType:"", bloodSugars:"", pulse:""})
        setBloodPressureInput({bloodPressure: ""})

        let medDataResponse = fetch(`http://localhost:9191/api/v1/bioData/${userDetails.email}/edit`, medUpdateDataOptions)
        medDataResponse.then((response)=> response.json())
            .then((data)=>{
                if(data.successful){
                    setMedInfo({ ...medInfo,
                        weight: [data.payload.bodyWeight.value, data.payload.bodyWeight.dateCreated],
                        bloodGroup: data.payload.bloodGroup,
                        bloodSugars: [data.payload.bloodSugars.value, data.payload.bloodSugars.dateCreated],
                        bloodType: data.payload.bloodType.split(""),
                        height: [data.payload.bodyHeight.value, data.payload.bodyHeight.dateCreated],
                        bloodPressures: [data.payload.bloodPressures.systolicPressure, data.payload.bloodPressures.diastolicPressure, data.payload.bloodPressures.pulsePressure],
                    })
                    setEdit(!edit)
                }
            })

    }

    return (
        <>
            {/*<div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", gap:"24px"}}>*/}
            <MedicalDetails>
                <BioData>
                    <div style={{display:"flex", alignItems:"center", gap:"16px", marginBottom:"24px"}}>
                        <h2>Bio-data</h2>
                        <img onClick={()=>setEdit(!edit)} src={edit? "https://res.cloudinary.com/dcwpvbijn/image/upload/v1667990659/fluent_edit-24-regular_1_xdlyus.svg" : "https://res.cloudinary.com/dcwpvbijn/image/upload/v1667990659/fluent_edit-24-regular_2_at2xdk.svg"} alt=""/>
                        {edit && <Button onClick={updateMedicalInfo}>Save Changes</Button>}
                    </div>
                    <div className="bio-data-list-container">
                    <div className="bio-data-list">
                        <div style={{display:"flex", height:"75px", marginBottom:"24px"}}>
                        <MedInfoCard style={{backgroundColor:"unset"}}>
                            <h3>weight</h3>
                            <div style={{display:"flex", alignItems:"baseline", gap:"4px", justifyContent:"center"}}>
                                {edit? <input contentEditable={true} defaultValue={medInfo.weight[0]} name="bodyWeight" onChange={handleMedicalInfoInput} placeholder=""/> : <h6>{medInfo.weight === ""? "??": medInfo.weight[0]}</h6>}
                                <p>kg</p>
                            </div>
                        </MedInfoCard>
                        <MedInfoCard style={{backgroundColor:"unset"}}>
                            <h3>height</h3>
                            <div style={{display:"flex", alignItems:"baseline", gap:"4px", justifyContent:"center"}}>
                                {edit? <input defaultValue={medInfo.height[0]} name="bodyHeight" onChange={handleMedicalInfoInput} placeholder=""/> : <h6>{medInfo.height === ""? "??": medInfo.height[0]}</h6>}
                                <p>cm</p>
                            </div>
                        </MedInfoCard>
                        <MedInfoCard style={{backgroundColor:"unset"}}>
                            <h3>blood type</h3>
                            <div style={{display:"flex", alignItems:"start", gap:"4px", justifyContent:"center"}}>
                                {edit? <input defaultValue={medInfo.bloodType[0]} name="bloodType" onChange={handleBloodTypeInfo} placeholder=""/> : <h6>{medInfo.bloodType === ""? "??": medInfo.bloodType[0]}</h6>}
                                <p>{medInfo.bloodType[1]}</p>
                            </div>
                        </MedInfoCard>
                        </div>
                        <div style={{display:"flex", height:"75px", marginBottom:"24px"}}>
                        <MedInfoCard style={{backgroundColor:"unset"}}>
                            <h3>blood sugar</h3>
                            <div style={{display:"flex", alignItems:"baseline", gap:"4px", justifyContent:"center"}}>
                                {edit? <input defaultValue={medInfo.bloodSugars[0]} name="bloodSugars" onChange={handleMedicalInfoInput} placeholder=""/> : <h6>{medInfo.bloodSugars === ""|| medInfo.bloodSugars === null? "??": medInfo.bloodSugars[0]}</h6>}
                                <p>mg/dL</p>
                            </div>
                        </MedInfoCard>
                        <MedInfoCard style={{backgroundColor:"unset"}}>
                            <h3>bp</h3>
                            <div style={{display:"flex", alignItems:"baseline", gap:"4px", justifyContent:"center"}}>
                                {edit? <input defaultValue={`${medInfo.bloodPressures[0]}/${medInfo.bloodPressures[1]}`} name="bloodPressures" onChange={handleBPInfoInput} placeholder=""/> : <h6>{medInfo.bloodPressures === ""? "??": medInfo.bloodPressures[0]}/{medInfo.bloodPressures === ""? "??": medInfo.bloodPressures[1]}</h6>}
                                <p>mmhg</p>
                            </div>
                        </MedInfoCard>
                        <MedInfoCard style={{backgroundColor:"unset"}}>
                            <h3>pulse</h3>
                            <div style={{display:"flex", alignItems:"baseline", gap:"4px", justifyContent:"center"}}>
                                {edit? <input defaultValue={medInfo.bloodPressures[2]} name="pulse" onChange={handleMedicalInfoInput} placeholder=""/> : <h6>{medInfo.bloodPressures === ""? "??": medInfo.bloodPressures[2]}</h6>}
                                <p>/min</p>
                            </div>
                        </MedInfoCard>
                        </div>
                    </div>
                    </div>
                </BioData>
                <HealthCard style={{padding:"24px"}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"-webkit-fill-available"}}>
                    <h3 style={{width:"360px", marginBottom:"20px"}}>your medication/prescription history</h3>
                    {/*<h6>current medication</h6>*/}
                    <div className="current">
                        {
                            prescriptionList.map((value, index)=>{
                                return (
                                    <div key={index} style={{display:"flex", height:"50px", backgroundColor:"#fff", width:"-webkit-fill-available", borderBottom:"1px solid #c8c8c8", padding:"8px"}}>
                                        <h3 style={{width:"-webkit-fill-available"}}>{value["drugName"]}</h3>
                                        <h6>{value["intakeStartingHour"]}</h6>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"16px"}}>
                        <h5 style={{cursor:"pointer"}}>view full history</h5>
                        <Button onClick={()=>setAddPrescription(true)}>ADD PRESCRIPTION</Button>
                    </div>
                    </div>
                    {addPrescription &&
                        <Modal>
                            <ModalBody>
                                <datalist id="drugs">
                                    <option value="Aspirin">Aspirin</option>
                                </datalist>
                                <div className="modal-body-content">
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300", width:"-webkit-fill-available"}}>Name of drug/medication/prescription</label>
                                        <input onChange={handleInput} name="drugName" type="search" list="drugs" style={{width:"-webkit-fill-available", height:"28px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300", width:"-webkit-fill-available"}}>Dosage</label>
                                        <input onChange={handleInput} name="drugDosage" type="number" style={{width:"-webkit-fill-available", height:"28px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300", width:"-webkit-fill-available"}}>Number of intakes per day</label>
                                        <input onChange={handleInput} name="intakeTimes" type="number" style={{width:"-webkit-fill-available", height:"28px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300", width:"-webkit-fill-available"}}>Starting hour</label>
                                        <input onChange={handleInput} name="intakeStartingHour" type="time" style={{width:"-webkit-fill-available", height:"28px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <InputField>
                                        <label style={{fontSize:"12px", fontWeight:"300", width:"-webkit-fill-available"}}>Duration</label>
                                        <input onChange={handleInput} name="intakeDuration" type="week" style={{width:"-webkit-fill-available", height:"28px", borderRadius:"4px"}}/>
                                    </InputField>
                                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"20px 0 36px 0"}}>
                                        <h6>Remind me</h6>
                                        <input type="checkbox" defaultChecked={true}/>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <button onClick={()=> setAddPrescription(false)} style={{backgroundColor:"unset",border: "1px solid #EA4435"}}>CANCEL</button>
                                    <button onClick={addPrescriptionToDatabase} style={{backgroundColor:"#5ca356"}}>ADD</button>
                                </div>
                            </ModalBody>
                        </Modal>
                    }
                </HealthCard>
                {/*<HealthDataList>*/}
                {/*    <div style={{display:"flex", justifyContent:"space-between"}}>*/}
                {/*        <h3>allergies</h3>*/}
                {/*        <img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1666971002/fluent_arrow-right-24-regular_v3tgwd.svg" alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="data-list">*/}
                {/*        <h6>No allergies listed</h6>*/}
                {/*    </div>*/}
                {/*</HealthDataList>*/}
                {/*<HealthDataList>*/}
                {/*    <div style={{display:"flex", justifyContent:"space-between"}}>*/}
                {/*        <h3>immunization history</h3>*/}
                {/*        <img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1666971002/fluent_arrow-right-24-regular_v3tgwd.svg" alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="data-list">*/}
                {/*        <h6>No immunization history listed</h6>*/}
                {/*    </div>*/}
                {/*</HealthDataList>*/}
                {/*<HealthDataList>*/}
                {/*    <div style={{display:"flex", justifyContent:"space-between"}}>*/}
                {/*        <h3>disabilities</h3>*/}
                {/*        <img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1666971002/fluent_arrow-right-24-regular_v3tgwd.svg" alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="data-list">*/}
                {/*        <h6>No disabilities listed</h6>*/}
                {/*    </div>*/}
                {/*</HealthDataList>*/}
                {/*<HealthDataList>*/}
                {/*    <div style={{display:"flex", justifyContent:"space-between"}}>*/}
                {/*        <h3>lifestyle</h3>*/}
                {/*        <img src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1666971002/fluent_arrow-right-24-regular_v3tgwd.svg" alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="data-list">*/}
                {/*        <h6>No lifestyle data listed</h6>*/}
                {/*    </div>*/}
                {/*</HealthDataList>*/}
            </MedicalDetails>
            <div>
                <HealthCard style={{padding:"24px", marginBottom:"0", display:"flex", gap:"24px"}}>
                    <div style={{width:"-webkit-fill-available"}}>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"-webkit-fill-available"}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"20px"}}>
                        <h3 style={{width:"-webkit-fill-available"}}>your medical history</h3>
                        <div style={{display:"flex", gap:"24px", alignItems:"center",}}>
                            <h5 style={{cursor:"pointer", width:"220px"}}>view full history</h5>
                            <Button style={{backgroundColor:"rgba(92, 163, 86, 0.3)", color:"black", width:"-webkit-fill-available", fontSize:"14px"}}>Allow Access</Button>
                        </div>
                    </div>
                    {/*<h6>current medical file</h6>*/}
                    <div className="current">

                    </div>
                    {/*<div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"16px"}}>*/}
                    {/*    <h5>view full history</h5>*/}
                    {/*    <Button onClick={()=> setAddRecord(true)}>ADD NEW FILE</Button>*/}
                    {/*</div>*/}
                        </div>
                    {addRecord &&
                    <Modal style={{top:"415px", left:"24px", }}>
                        <ModalBody>

                            <div className="modal-body-content">
                                <InputField>
                                    <label style={{fontSize:"12px", fontWeight:"300"}}>Name of doctor</label>
                                    <input onChange={handleInput} name="duration" type="search" list="tasks" style={{width:"260px", height:"20px", borderRadius:"4px"}}/>
                                </InputField>
                                <InputField>
                                    <label style={{fontSize:"12px", fontWeight:"300"}}>Name of drug</label>
                                    <input onChange={handleInput} name="duration" type="search" list="tasks" style={{width:"260px", height:"20px", borderRadius:"4px"}}/>
                                </InputField>
                                <InputField>
                                    <label style={{fontSize:"12px", fontWeight:"300"}}>Name of drug</label>
                                    <input onChange={handleInput} name="duration" type="search" list="tasks" style={{width:"260px", height:"20px", borderRadius:"4px"}}/>
                                </InputField>
                                <InputField>
                                    <label style={{fontSize:"12px", fontWeight:"300"}}>Name of drug</label>
                                    <input onChange={handleInput} name="duration" type="search" list="tasks" style={{width:"260px", height:"20px", borderRadius:"4px"}}/>
                                </InputField>
                                <InputField>
                                    <label style={{fontSize:"12px", fontWeight:"300"}}>Name of drug</label>
                                    <input onChange={handleInput} name="duration" type="search" list="tasks" style={{width:"260px", height:"20px", borderRadius:"4px"}}/>
                                </InputField>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"20px 0 36px 0"}}>
                                    <h6>Remind me</h6>
                                    <img width="24px" height="24px" src="https://res.cloudinary.com/dcwpvbijn/image/upload/v1667144708/Vector_4_tm6epv.svg" alt=""/>
                                </div>
                            </div>

                            <div className="buttons">
                                <button onClick={()=> setAddRecord(false)} style={{backgroundColor:"unset",border: "1px solid #EA4435"}}>CANCEL</button>
                                <button onClick={addRecordToDatabase} style={{backgroundColor:"#5ca356"}}>ADD</button>
                            </div>
                        </ModalBody>
                    </Modal>
                    }
                    </div>
                    <div id="allergies-list" style={{width:"600px", borderRadius:"12px", border:"1px solid #c8c8c8", height:"-webkit-fill-available", display:"flex", justifyContent:"space-between", flexDirection:"column", padding:"24px", gap:"16px"}}>
                        <div style={{display:"flex", flexDirection:"column", gap:"8px", justifyContent:"space-between", width:"-webkit-fill-available"}}>
                            <div style={{display:"flex", justifyContent:"space-between", gap:"20px", width:"-webkit-fill-available"}}>
                            <h4 onClick={()=> selectList("allergies")} id="allergies" style={{fontWeight:"400", fontSize:"14px", cursor:"pointer"}}>Allergies</h4>
                            <h4 onClick={()=> selectList("disabilities")} id="disabilities" style={{fontWeight:"400", fontSize:"14px", cursor:"pointer"}}>Disabilities</h4>
                            <h4 onClick={()=> selectList("lifestyle")} id="lifestyle" style={{width:"-webkit-fill-available", fontWeight:"400", fontSize:"14px", cursor:"pointer"}}>Lifestyle Habits</h4>
                            </div>
                            <h4 onClick={()=> selectList("immunization")} id="immunization" style={{fontWeight:"400", fontSize:"14px", cursor:"pointer"}}>Immunization History</h4>
                        </div>
                        <div style={{width:"-webkit-fill-available", borderRadius:"12px", border:"1px solid #c8c8c8", height:"-webkit-fill-available", display:"flex", justifyContent:"space-between"}}>

                        </div>
                    </div>
                </HealthCard>
            </div>
            {/*</div>*/}
        </>
    );
};

export default PatientMedicalRecord;
