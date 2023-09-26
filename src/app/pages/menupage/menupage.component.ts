import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from 'src/app/servie/orderdetail.service';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  getID:any;
  menuData:any;
  constructor(private service:OrderdetailService,private param:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getID=this.param.snapshot.paramMap.get('id');
    console.log(this.getID);
     if(this.getID)
     {
      this.menuData =  this.service.foodDetails.filter((value)=>{
        return value.id == this.getID;
      });
      console.log(this.menuData,'menudata>>');
     }

  }

}
