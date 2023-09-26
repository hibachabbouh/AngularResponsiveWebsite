import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from 'src/app/servie/orderdetail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodDisplay:any=[]; //DispalyData
  constructor(private service:OrderdetailService) { }

  ngOnInit(): void {
    this.foodDisplay=this.service.foodDetails;
  }

}
