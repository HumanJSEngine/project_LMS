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
    startDate: "2023-03-15T11:30",
    endDate: "2023-03-15T13:00",
    title: "C언어",
    type: "work2",
  },
];
const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "work1", text: "Private", color: "#CF000F" },
      { id: "work2", text: "Work", color: "#A60000" },
    ],
  },
];

const MySchedule = () => {
  React.useState<SchedulerDateTime>("");
  return (
    <div>
      <Table>
        <Paper>
          <Scheduler data={appointments} height={860}>
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
  width: 80%;
  height: 100%;
`;

export default MySchedule;
