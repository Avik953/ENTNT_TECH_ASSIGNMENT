// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { fetchOrderDetails } from '../assets/actions.js'; // Action to fetch order details (optional)
// import '../assets/calendar.css'

// const localizer = momentLocalizer(moment);

// const OrdersCalendar = () =>  {
//   const orders = useSelector(state => state.orders);
//   const dispatch = useDispatch();
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOrderDetails, setSelectedOrderDetails] = useState({}); // Store details

//   useEffect(() => {
//     // Clear selected details and order details on any state change
//     setSelectedOrderDetails({});

//     // Find matching orders for the selected date
//     const matchingOrders = orders.filter(order =>
//       moment(order.expectedDeliveryDate).isSame(selectedDate, 'day')
//     );

//     // Update selectedOrderDetails and potentially fetch details
//     if (matchingOrders.length) {
//       setSelectedOrderDetails(matchingOrders[0]); // Use the first matching order
//       dispatch(fetchOrderDetails(matchingOrders[0].id)); // Optional: Fetch details
//     }
//   }, [selectedDate, orders, dispatch]);

//   const getStatusBasedOnOrderData = (order) => {
//     // Implement logic to determine order status based on your data structure
//     // Example:
//     if (order.shippedAt) {
//       return 'completed';
//     } else if (order.placedAt && !order.shippedAt) {
//       return 'pending';
//     } else {
//       return 'unknown';
//     }
//   };

//   const events = orders.map(order => {
//     const status = getStatusBasedOnOrderData(order);
//     return {
//       id: order.id,
//       title: `Order #${order.id}`,
//       start: moment(order.expectedDeliveryDate).toDate(),
//       end: moment(order.expectedDeliveryDate).toDate(),
//       className: `rbc-event ${status}`,
//     };
//   });

//   const handleSelectEvent = (event) => {
//     setSelectedDate(event.start);
//   };

//   return (
//     <div className="orders-calendar">
//       <h2>Orders Calendar</h2>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         onSelectEvent={handleSelectEvent}
//         views={['month', 'week']} 
//         className="rbc-calendar"
//       />
//       {selectedDate && (
//         <>
//           <p>Orders due on {moment(selectedDate).format('YYYY-MM-DD')}:</p>
//           {selectedOrderDetails.id ? (
//             <>
//               <ul>
//                 <li>Order ID: {selectedOrderDetails.id}</li>
//                 <li>Customer: {selectedOrderDetails.customerName}</li>
//                 <li>Items:</li>
//                 {selectedOrderDetails.items && selectedOrderDetails.items.length ? (
//                   <ul>
//                     {/* Loop through ordered items and display details */}
//                     {selectedOrderDetails.items.map(item => (
//                       <li key={item.id}>
//                         {item.name} (Qty: {item.quantity})
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <li>No items found in this order.</li>
//                 )}
//                 <li>Total: {selectedOrderDetails.totalPrice}</li>
//                 {/* Display other relevant order details */}
//               </ul>
//             </>
//           ) : (
//             <p>No orders found for this date.</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default OrdersCalendar;



