'use client'
export async function addOrderList(orderData:object){

  localStorage.setItem('orderList', JSON.stringify(orderData));
}

export async function removeOrderList() {
  localStorage.removeItem('orderList');
}