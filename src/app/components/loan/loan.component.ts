import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  displayedColumns: string[] =['loanId','loanName','loanEmail','loanAccountNo','loanPhoneNo','loanAadharNo','loanPanNo','loanType','loanAmount','loanAnnualIncome','address','status'];
  dataSource!:any;

  status!:boolean;
  constructor(private loanService:LoanService) { }

  ngOnInit(): void {
    this.loanService.getLoanList().subscribe(
      data=>{
        this.dataSource = data;
        console.log(data , "loan component");
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

  approve(loanData:any){
    this.status = true;
    loanData.status = this.status;
    this.loanService.updateLoan(loanData)
    console.log(loanData);
    
  }
  reject(loanData:any){
    this.status = false;
    loanData.status = this.status;
    this.loanService.updateLoan(loanData)
    console.log(loanData);
  }

}
