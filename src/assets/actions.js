export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });
  
  export const editProduct = (product) => ({
    type: 'EDIT_PRODUCT',
    payload: product,
  });
  
  export const deleteProduct = (productId) => ({
    type: 'DELETE_PRODUCT',
    payload: productId,
  });

  
  export const updateOrderStatus = (orderId, newStatus) => ({
    type: 'UPDATE_ORDER_STATUS',
    payload: { id: orderId, status: newStatus },
  });
  
  export const deleteOrder = (orderId) => ({
    type: 'DELETE_ORDER',
    payload: orderId,
  });


  export const fetchOrderDetails = (orderId) => ({
    type: 'FETCH_ORDER_DETAILS',
    payload:  orderId ,
  });
  