import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from 'src/app/servie/orderdetail.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foodDisplay:any=[]; //DispalyData
  constructor(private service:OrderdetailService) { }

  ngOnInit(): void {
    this.foodDisplay=this.service.foodDetails;
  }

}
