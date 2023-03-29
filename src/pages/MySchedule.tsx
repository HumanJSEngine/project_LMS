import React, { useEffect, useState } from "react";
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
import axios from "axios";

const MySchedule = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://192.168.0.183:8520/api/timetable/1/1",
        );
        setData(result.data.list);
      } catch (err) {
        console.log(err);
      }
    };
    void fetchData();
  }, []);

  const appointments: AppointmentModel[] = data;
  const resources = [
    {
      fieldName: "type",
      title: "Type",
      instances: [
        { id: "BAC001-01", text: "Class0", color: "#CF000F" },
        { id: "BAC001-02", text: "Class1", color: "#c84444" },
        { id: "FRO001-01", text: "Class2", color: "#A60000" },
        { id: "UXI001-01", text: "Class3", color: "#7f1d1d" },
      ],
    },
  ];

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
