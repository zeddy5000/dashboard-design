import styled from "styled-components";


export const MainContainer = styled.div`
    width: -webkit-fill-available;
    height: auto;
    display: flex;
    position: absolute;
    justify-content: space-between;
  flex-direction: column;
    margin: 100px 0 0 0px;
    left: 240px;
    gap: 24px;
    padding: 24px 24px 24px 24px;
    // overflow-y: scroll;
`

export const MedicalDetails = styled.div`
    width: -webkit-fill-available;
    height: 365px;
    display: flex;
  justify-content: space-between;
  gap: 24px;
`

export const BioData = styled.div`
    margin-bottom: 82px;
    width: -webkit-fill-available;
  //overflow-y: scroll;
  //height: -webkit-fill-available;
    
    
    h2 {
        width: 97px;
        height: 29px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        text-transform: lowercase;
        color: #000000;
        margin: 0;
    }
    .bio-data-list-container{
      overflow-y: scroll;
      border: 1px solid #c8c8c8;
      padding: 16px 24px;
      background-color: beige;
      //height: -webkit-fill-available;
      //max-height: 310px;
      height: 310px;
      //display: grid;
      //grid-template-columns: auto auto auto;
      //grid-gap: 24px;

      ::-webkit-scrollbar {
        width: 0;
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
    .bio-data-list {
      //  display: grid;
      //  grid-template-columns: auto auto auto;
      //grid-gap: 24px;
      //  height: 300px;
      
        //overflow-y: scroll;
      width: -webkit-fill-available;

        //&:hover {
        //    border-bottom: 1px solid #909090;
        //    border-top: 1px solid #909090;            
        //}
    }
`


export const MedInfoCard = styled.div`
    width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 65px;
  align-items: center;

  input {
    width: 80px;
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
    text-align: right;
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
    font-size: 20px;
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


export const HealthDataList = styled.div`
    width: 518px;
    height: 120px;
    
    h3 {
        width: 200px;
        height: 19px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        text-transform: lowercase;
        color: #000000;
        margin: 0;
    }
    h6 {
         font-size: 12px;
         font-weight: 400;
         color: #c8c8c8;
         text-align: center;
        }
    data-list {
        display: flex; 
        flexDirection: column; 
        height: 80px;
        
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


export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: -webkit-fit-content;
    height: 36px;
    background: #5CA356;
    border-radius: 4px;
    cursor: pointer;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    border: unset;
    
    &:active {
        transform: scale(0.95);
    }
`


export const Modal = styled.div`
    position: absolute;
    width: -webkit-fill-available;
    height: 360px;
    top: 25px;
    left: 49.9%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
    padding: 56px;
    display: flex;
    justify-content: center;
  margin: 0 24px 0 0px;

`


export const ModalBody = styled.div`
    box-sizing: border-box;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    overflow-y: scroll;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 12px;
    
    
    .buttons {
        position: absolute;
        width: -webkit-fill-available;
        height: 70px;
        top: 234px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 0px 0px 12px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin: 0 56px 0 0;
    }
    button {
        width: 112px; 
        height: 24px;
        border-radius: 4px;
        color: #FFFFFF;
        padding: 10px 8px;
        box-sizing: border-box;
        margin: 0;
        border: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
         
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #FFFFFF;
        
        &:active {
            transform: scale(0.95);
        }
    }
    .modal-body-content {
        box-sizing: border-box;
        padding: 36px 32px 40px 32px;
        background: #FFFFFF;
        border-radius: 12px;
    }
    h6 {
        font-size: 12px;
        
    }
    
    
    ::-webkit-scrollbar {
        width: 0px;
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
`