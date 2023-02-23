import React from 'react';
import PatientDashboard from "./dashboard/PatientDashboard";
import PatientMedicalRecord from "./medicals/PatientMedicalRecord";
import PatientAppointments from "./appointments/PatientAppointments";
import PatientProfile from "./profile/PatientProfile";
import PatientSettings from "./settings/PatientSettings";

const MainScreenContainer = ({currentScreen, setCurrentScreen, userDetails}) => {

    if (currentScreen === "dashboard"){
        return (
            <PatientDashboard userDetails={userDetails} setCurrentScreen={setCurrentScreen}/>
        );
    }
    else if (currentScreen === "medicals"){
        return (
            <PatientMedicalRecord setCurrentScreen={setCurrentScreen}/>
        )
    }
    else if (currentScreen === "appointments"){
        return (
            <PatientAppointments setCurrentScreen={setCurrentScreen}/>
        )
    }
    else if (currentScreen === "profile"){
        return (
            <PatientProfile setCurrentScreen={setCurrentScreen}/>
        )
    }
    else if (currentScreen === "settings"){
        return (
            <PatientSettings setCurrentScreen={setCurrentScreen}/>
        )
    }

};

export default MainScreenContainer;
