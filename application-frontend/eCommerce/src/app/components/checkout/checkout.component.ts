import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  shouldFormBeFixed: boolean = false;
  purchaseIsDone: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
    
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      })
    });
  }

  onSubmit() {
    if(
      this.checkoutFormGroup.get('customer').value.firstName != "" &&
      this.checkoutFormGroup.get('customer').value.lastName != "" &&
      this.checkoutFormGroup.get('customer').value.email != "" &&
      this.checkoutFormGroup.get('shippingAddress').value.street != "" &&
      this.checkoutFormGroup.get('shippingAddress').value.city != "" &&
      this.checkoutFormGroup.get('shippingAddress').value.state != "" &&
      this.checkoutFormGroup.get('shippingAddress').value.zipCode != "" 
    ) {
      this.removeAll();
      this.shouldFormBeFixed = false;
      this.purchaseIsDone = true;
      console.log(this.checkoutFormGroup.get('customer').value);
      console.log(this.checkoutFormGroup.get('shippingAddress').value);
    } else {
      this.shouldFormBeFixed = true;
    }
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.cartService.computeCartTotals();
  }

  removeAll() {
    this.cartItems.forEach(cartItem => {
      this.cartService.decrementQuantity(cartItem);
    })

    this.cartService.computeCartTotals();
  }

}
