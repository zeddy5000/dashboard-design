import styled from "styled-components";


export const CalendarContainer = styled.div`
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
      &:hover {
        span{
          color: #FFFFFF;
        }
      }
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  button {
    margin: 3px;
    background-color: #FFFFFF;
    border: unset;
    border-radius: 3px;
    color: #000000;
    padding: 5px 0;

    &:hover {
      background-color: #5CA356;
      color: #FFFFFF;
    }

    &:active {
      transform: scale(90%);
    }
  }
  
  .react-calendar__month-view__weekdays__weekday {
      
  }
  
  .react-calendar__tile .react-calendar__month-view__days__day{
      
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    color: #5392D5;
    text-decoration: unset;
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      opacity: 0.4;
    }
    .react-calendar__month-view__days__day--weekend {
      color: red;
      &:hover {
        color: #FFFFFF;
      }
    }

    .react-calendar__tile--range {
        background-color: #5CA356;
        color: #FFFFFF;
    }

    .react-calendar__year-view__months,
    .react-calendar__decade-view__years,
    .react-calendar__century-view__decades {
      display: grid !important;
      grid-template-columns: 20% 20% 20% 20% 20%;

      //&.react-calendar__year-view__months {
      //  grid-template-columns: 33.3% 33.3% 33.3%;
      //}

      .react-calendar__tile {
        max-width: initial !important;
      }
    }
  }
`