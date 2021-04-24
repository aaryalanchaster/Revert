import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Products } from '../classes/product';
import { Posts } from '../classes/post';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _apiservice :ApiService) { }
  lstProduct!: Products[];
  objPosts!: Posts;


  ngOnInit(): void {
    this._apiservice.getproduct().subscribe(
      data => {
        this.lstProduct = data;
      }
    );

    // this._apiservice.getbyParameter().subscribe(
    //   data => {
    //     this.lstPost = data;
    //   }
    // );

    var opost = new Posts();
    opost.body = 'testbody';
    opost.title = 'testtile';
    opost.userId = 5;

    this._apiservice.post(opost).subscribe(
      data => {
        this.objPosts = data;
      }
    )
  }

}
