import React, {useEffect, useState} from 'react';
import {PageContainer} from "../../../layouts/platform-structure/styled/GlobalPageStructure";
import PatientLeftSideBar from "../../../layouts/platform-structure/left-side-bar/PatientLeftSideBar";
import {CenterComponent} from "../../../layouts/platform-structure/styled/CenterComponent.styled";
import TopNavBar from "../../../layouts/platform-structure/top-nav/TopNavBar";
// import {MainContainer} from "./styled/MainContainer.styled";
import MainScreenContainer from "../MainScreenContainer";
import PatientRightActionBar from "../../../layouts/platform-structure/right-action-bar/PatientRightActionBar";
import PatientMedicalRecord from "./PatientMedicalRecord";
import {getCookie} from "../../../utils/util";
import {MainContainer} from "../dashboard/styled/MedicalRecord.styled";

const PatientMedicalsFullScreen = () => {

    const [currentScreen, setCurrentScreen] = useState("medicals")
    const [userDetails, setUserDetails] = useState({email:"", firstName:"", lastName:"", token:""})

    useEffect(() => {
        let user = getCookie("userDetails")
        user = JSON.parse(user)
        setUserDetails({...userDetails, ...user})
    }, []);

    return (
        <PageContainer>
            <PatientLeftSideBar userDetails={userDetails} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen}/>
            <CenterComponent>
                <TopNavBar/>
                <MainContainer>
                    <PatientMedicalRecord setUserDetails={setUserDetails} userDetails={userDetails} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
                    {/*<PatientRightActionBar/>*/}
                </MainContainer>
            </CenterComponent>
        </PageContainer>
    );
};

export default PatientMedicalsFullScreen;
