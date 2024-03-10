import React from 'react';
import {Inject, ScheduleComponent, Day, Week,WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';

const OrdersCalendarView = () => {


    return (
        <>
            <ScheduleComponent currentView='Month' >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </>
    );
};

export default OrdersCalendarView;