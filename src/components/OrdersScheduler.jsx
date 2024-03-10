// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { fetchOrderDetails } from '../assets/actions'; 
// import '../assets/calendar.css'

// const localizer = momentLocalizer(moment);

// const OrdersScheduler = () => {
//   const orders = useSelector(state => state.orders); 
//   const dispatch = useDispatch();
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOrders, setSelectedOrders] = useState([]); 

//   useEffect(() => {

//     setSelectedOrders([]);

    
//     const matchingOrders = orders.filter(order =>
//       moment(order.expectedDeliveryDate).isSame(selectedDate, 'day')
//     );

    
//     setSelectedOrders(matchingOrders);
//     if (matchingOrders.length) {
//       matchingOrders.forEach(order => dispatch(fetchOrderDetails(order.id))); 
//     }
//   }, [selectedDate, orders, dispatch]);

//   const getStatusBasedOnOrderData = (order) => {

//     if (order.shippedAt) {
//       return 'completed';
//     } else if (order.placedAt && !order.shippedAt) {
//       return 'pending';
//     } else {
//       return 'unknown';
//     }
//   };

//   const hasOrdersOnDate = (date, orders) => {
//     return moment(date).isSame(
//       orders.some(order => moment(order.expectedDeliveryDate).isSame(date, 'day')),
//       'day'
//     );
//   };

//   const getOrderCountOnDate = (date, orders) => {
//     return orders.filter(order => moment(order.expectedDeliveryDate).isSame(date, 'day')).length;
//   };


//   const events = orders.map(order => ({
//     id: order.id,
//     title: `Order #${order.id}`,
//     start: moment(order.expectedDeliveryDate).toDate(),
//     end: moment(order.expectedDeliveryDate).toDate(),
//     className: `rbc-event ${getStatusBasedOnOrderData(order)}`, 
//   }));

  

//   const handleSelectEvent = (event) => {
//     setSelectedDate(event.start);
//   };

//   const renderOrderDetails = () => {
//     if (!selectedOrders.length) {
//       return <p>No orders due on {moment(selectedDate).format('YYYY-MM-DD')}</p>;
//     }

//     return (
//       <ul>
//         {selectedOrders.map(order => (
//           <li key={order.id}>
//             Order #{order.id} - {order.customerName} (Details...) 
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="orders-scheduler">
//       <h2>Orders Scheduler</h2>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         onSelectEvent={handleSelectEvent}
//         views={['month', 'week']} 
//         className="rbc-calendar"
//       />
//       dayContent={({ date, className }) => (
//     <div className={className}>
//       {date.getDate()} 
//       {hasOrdersOnDate(date, orders) && ( 
//         <span className="order-count">{getOrderCountOnDate(date, orders)}</span>
//       )}
//     </div>
//   )}

//       {selectedDate && (
//         <div className="selected-orders">
//           <h3>Orders due on {moment(selectedDate).format('YYYY-MM-DD')}:</h3>
//           {renderOrderDetails()}
//         </div>
//       )}
//     </div>
//   );
// }

export default OrdersScheduler;