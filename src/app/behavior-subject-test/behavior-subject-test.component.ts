import { Component, NgZone, OnInit } from '@angular/core';
import { BehaviorService } from './behavior-service.service';

@Component({
  selector: 'app-behavior-subject-test',
  templateUrl: './behavior-subject-test.component.html',
  styleUrls: ['./behavior-subject-test.component.scss']
})
export class BehaviorSubjectTestComponent implements OnInit {

  data: any;
  constructor(private service : BehaviorService,
    private zone: NgZone){}

  ngOnInit(){
    this.getObs();
      setTimeout(() => {
        this.service.getData().subscribe()
      }, 3000)

  }

  getObs(){
    this.service.getTestName().subscribe((response) => {
      this.data = response;
      console.log('response:',response)
    })
  }

  ngDoCheck(): void {
    console.log('do checked')
  }

}
