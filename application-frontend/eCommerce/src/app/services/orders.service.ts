import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  orders: Order[] = [];

  constructor() { }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }
}
