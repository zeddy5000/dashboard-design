import styled from "styled-components";


export const MainContainer = styled.div`
    width: -webkit-fill-available;
    height: auto;
    display: flex;
    position: absolute;
    justify-content: space-between;
    margin: 100px 0 0 0px;
    left: 240px;
    gap: 24px;
    padding: 24px 24px 24px 24px;
    // overflow-y: scroll;
`


export const PersonalDetails = styled.div`
    width: -webkit-fill-available;
    height: 760px;
    //overflow-y: scroll;
  //padding: 44px 24px 0px 24px;

  //::-webkit-scrollbar {
  //  width: 0px;
  //  border-top-right-radius: 12px;
  //  border-bottom-right-radius: 12px;
  //}
  //::-webkit-scrollbar-track {
  //  background: unset;
  //}
  //::-webkit-scrollbar-thumb {
  //  background: unset;
  //}
  //::-webkit-scrollbar-thumb:hover {
  //  background: unset;
  //}
    
    h3 {
        width: 406px;
        height: 39px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        letter-spacing: -0.01em;
        color: #000000;
        margin: 24px 0 0 0;
    }
    p {
        width: 215px;
        height: 19px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #514F4F;
        margin: 8px 0 40px 0;
    }
`

export const TaskBox = styled.div`
  width: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 760px;
  //margin-top: 44px;
  padding: 44px 24px 36px 24px;


  ::-webkit-scrollbar {
    width: 0px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  ::-webkit-scrollbar-track {
    background: unset;
  }
  ::-webkit-scrollbar-thumb {
    background: unset;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: unset;
  }

`

export const TaskCreator = styled.div`
    width: 800px; 
    height: 760px;
    background-color: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
    padding: 24px 24px;
  //overflow-y: scroll;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  //::-webkit-scrollbar {
  //  width: 0px;
  //  border-top-right-radius: 12px;
  //  border-bottom-right-radius: 12px;
  //}
  //::-webkit-scrollbar-track {
  //  background: unset;
  //}
  //::-webkit-scrollbar-thumb {
  //  background: unset;
  //}
  //::-webkit-scrollbar-thumb:hover {
  //  background: unset;
  //}
    
    
    
    h3 {
        width: 165px;
        height: 29px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        text-transform: lowercase;
        color: #000000;
        margin: 0;
    }
    p {
        width: 200px;
        height: 19px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        // text-transform: lowercase;
        color: #000000;
        margin: 0;
        text-align: end;
    }
    span {
        color: #587EEC;
        margin: 0;
    }
    h4 {
        width: 184px;
        height: 17px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0;
    }
`


export const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    gap: 10px;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    max-height: ${props => props.openCalendar? "230px": "484px"};
    overflow-y: scroll;
    background: #F5F5F5;
    border-radius: 12px;
    margin-top: 24px;
    box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.25);
    
    ::-webkit-scrollbar {
        width: 0px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
    }
    ::-webkit-scrollbar-track {
        background: unset;
    }
    ::-webkit-scrollbar-thumb {
        background: unset;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: unset;
    }
`


export const TaskCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 15px 20px;
    gap: 36px;
    width: -webkit-fill-available;
    height: 87px;
    background: #FFFFFF;
    border-radius: 12px;
    
    
    h3 {
        width: 300px;
        height: 24px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        margin: 0;
    }
    h6 {
        margin: 0;
    }
    p {
        width: 280px;
        height: 15px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        margin: 0;
        color: #6F6F6F;
    }
    span {
        width: 75px;
        height: 15px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin: 0 0 0 15px;
    }
    h4 {
        width: 65px;
        height: 15px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #5CA356;
        margin: 0;
    }
    h5 {
        width: 50px;
        height: 24px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        text-transform: uppercase;
        color: #000000;
        margin: 0;
    }
`


export const AddTaskContainer = styled.div`
    position: absolute;
    width: -webkit-fill-available;
    float: right;
    height: ${props => props.openCalendar? "445px": "475px"};
    //height: 445px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
    //left: 63.2%;
    top: ${props => props.openCalendar? "340px": "310px"};
    //top: ${props => props.openCalendar? "300px": "330px"}
    padding: 44px 44px;
    margin: 0 24px 0 24px;
    
    .buttons {
        position: absolute;
        width: -webkit-fill-available;
        height: 62px;
        top: 357px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 0px 0px 12px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin-right: 44px;
    }
    button {
        width: 122px; 
        height: 30px;
        border-radius: 4px;
        color: #FFFFFF;
        padding: 10px 8px;
        box-sizing: border-box;
        margin: 0;
        border: unset;
        display: flex;
        justify-content: center;
        align-items: center;
         
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        
        &:active {
            transform: scale(0.95);
        }
    }

`


export const AddTaskModal = styled.div`
    box-sizing: border-box;
    width: -webkit-fill-available;
    height: 375px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 12px;
    overflow-y: scroll;
    padding: 18px 20px;
    
    ::-webkit-scrollbar {
        width: 5px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        
    }
    ::-webkit-scrollbar-track {
        background: unset;
    }
    ::-webkit-scrollbar-thumb {
        background: unset;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: unset;
    }
    
    
    h6 {
        width: 64px;
        height: 15px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin: 0;
    }
    img {
        width: 30px;
        height: 16px;
    }
`


export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 80px;
    gap: 10px;
    width: -webkit-fill-available;
    height: 51px;
    background: rgba(92, 163, 86, 0.75);
    border-radius: 12px;
    border: unset;
    margin-top: 16px;

    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    //margin-bottom: 48px;
    
    &:active {
        transform: scale(0.95);
    }
    // margin: 0;
`


export const HealthCard = styled.div`
    width: -webkit-fill-available;
    height: 360px;
    background: #FFFFFF;
    border-radius: 12px;
    margin-bottom: 36px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    
    
    h3 {
        width: 165px;
        height: 24px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-transform: lowercase;
        color: #000000;
        margin: 0;
    }
    h6 {
        width: 161px;
        height: 22px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin: 0 0 8px 0;
        color: #5392D5;
    }
    h5 {
        width: 104px;
        height: 17px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #5CA356;
        margin: 0;
      
        &:hover{
            text-decoration: underline;
        }
        &:active{
            transform: scale(0.98);
        }
    }
    .current {
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        gap: 8px;
        overflow-y: scroll;
        //background: #F2F2F3;
        border: 1px solid #C8C8C8;
        border-radius: 12px;
        
        ::-webkit-scrollbar {
            width: 5px;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
        }
        ::-webkit-scrollbar-track {
            background: #ffffff;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
`


export const MedInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    gap: 8px;
    width: -webkit-fill-available;
    height: 125px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
    border-radius: 12px;
    
    input {
        width: 54px;
        height: 24px;
        border: unset;
        outline: unset;
        background: transparent;
        border-bottom: 2px solid #5CA356;
        
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-transform: capitalize;
        color: #000000;
        margin: 0;
        
        ::placeholder {
            height: 24px;
            width: 24px;
            font-family: 'Inter',sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.02em;
            text-transform: capitalize;
            color: #000000;            
            margin: 0;
        }
    }
    h3 {
        width: 90px;
        height: 17px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        text-transform: lowercase;
        color: #5F6368;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0;
    }
    h6 {
        height: 24px;
        width: fit-content;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-transform: capitalize;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0;
    }
    span, p {
        width: fit-content;
        height: 15px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.02em;
        text-transform: lowercase;
        color: #5CA356;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0;
    }
`


export const DoctorDetails = styled.div`
    display: flex; 
    flex-direction: column;
    width: 403px; 
    padding: 12px 35px 40px 35px;
    
    
    h3 {
        width: 88px;
        height: 19px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-transform: lowercase;
        color: #000000; 
    }
    h6 {
        width: 120px;
        height: 19px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.02em;
        color: #000000;
        margin: 0;
    }
    p {
        width: 130px;
        height: 12px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.01em;
        color: #919191;
        margin: 4px 0 0 0;
    }
`


export const BPCard = styled.div`
    width: 83px;
    height: 62px;
    text-align: center;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    
    
    h3 {
        width: 40px;
        height: 15px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0;
    }
    p {
        width: 40px;
        height: 22px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0;
    }
    h6 {
        width: 40px;
        height: 15px;
        font-family: 'Inter',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.02em;
        text-transform: lowercase;
        color: #5CA356;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0;
    }
`