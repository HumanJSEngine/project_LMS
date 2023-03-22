import React from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import GlobalStyle from "../styles/GlobalStyle";
import {
  type AppointmentModel,
  ViewState,
  type SchedulerDateTime,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  Resources,
  TodayButton,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";

const appointments: AppointmentModel[] = [
  {
    startDate: "2023-04-05T13:00",
    endDate: "2023-04-05T15:15",
    title: "자바 프로그래밍",
    type: "work1",
  },
  {
    startDate: "2023-04-06T11:30",
    endDate: "2023-04-06T13:00",
    title: "C언어",
    type: "work2",
  },
  {
    startDate: "2023-04-06T14:30",
    endDate: "2023-04-06T16:00",
    title: "영어회화",
    type: "work3",
  },
  {
    startDate: "2023-03-15T11:30:00",
    endDate: "2023-03-15T13:00:00",
    title: "C언어",
    type: "work2",
  },
];
const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "work1", text: "Word0", color: "#CF000F" },
      { id: "work2", text: "Work1", color: "#A60000" },
      { id: "work3", text: "Work2", color: "#7f1d1d" },
    ],
  },
];

const MySchedule = () => {
  React.useState<SchedulerDateTime>("");
  return (
    <div>
      <Table>
        <Paper>
          <Scheduler data={appointments} height={860} firstDayOfWeek={1}>
            <ViewState
              defaultCurrentDate="2023-04-03"
              defaultCurrentViewName="Week"
            />
            <DayView startDayHour={9} endDayHour={19} />
            <WeekView startDayHour={9} endDayHour={19} cellDuration={30} />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
            <Appointments />
            <Resources data={resources} />
          </Scheduler>
        </Paper>
      </Table>
      <GlobalStyle />
    </div>
  );
};

const Table = styled.table`
  display: flex;
  width: 100%;
  height: 100%;
  .css-1udt7rb-MuiButtonBase-root-MuiButton-root {
    font-size: 15px;
    color: #991b1b;
    font-weight: 700;
  }
  .css-18reufz-MuiTableCell-root .Cell-highlightedText {
    color: #000;
  }
  .css-vr6fpo .HorizontalAppointment-title {
    font-weight: bold;
  }
  .css-1w0n0hm-MuiButtonBase-root-MuiButton-root.TodayButton-button:first-of-type {
    font-weight: bold;
  }
  .css-gyiown .VerticalAppointment-title {
    font-size: 15px;
  }
  .VerticalAppointment-time {
    line-height: 18px;
  }
`;

export default MySchedule;
