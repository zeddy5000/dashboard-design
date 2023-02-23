import React, {useEffect, useState} from 'react';
import {PageContainer} from "../../../layouts/platform-structure/styled/GlobalPageStructure";
import PatientLeftSideBar from "../../../layouts/platform-structure/left-side-bar/PatientLeftSideBar";
import TopNavBar from "../../../layouts/platform-structure/top-nav/TopNavBar";
import PatientRightActionBar from "../../../layouts/platform-structure/right-action-bar/PatientRightActionBar";
import {CenterComponent} from "../../../layouts/platform-structure/styled/CenterComponent.styled";
import {MainContainer} from "./styled/MainContainer.styled";
import PatientDashboard from "./PatientDashboard";
import MainScreenContainer from "../MainScreenContainer";
import {getCookie} from "../../../utils/util";

const PatientDashboardFullScreen = () => {

    const [userDetails, setUserDetails] = useState({email:"", firstName:"", lastName:"", token:""})
    const [currentScreen, setCurrentScreen] = useState("dashboard")

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
                    <PatientDashboard setUserDetails={setUserDetails} userDetails={userDetails} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
                    {/*<PatientRightActionBar/>*/}
                </MainContainer>
            </CenterComponent>
        </PageContainer>
    );
};

export default PatientDashboardFullScreen;
