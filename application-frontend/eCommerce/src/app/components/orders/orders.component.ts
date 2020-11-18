import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/common/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.showUserOrders();
  }

  showUserOrders() {
    this.orders = this.orderService.getOrders();
  }

}
