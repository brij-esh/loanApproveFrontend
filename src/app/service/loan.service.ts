import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {


  customerList!:any;
  public baseUrl = environment.apiUrl;
  constructor(public http:HttpClient) { 
    this.getLoanList().subscribe(
      (data)=>{
        this.customerList = data;
        console.log(data, "loan service");
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  public getLoanList(){
    return this.http.get(`${this.baseUrl}/loan/get-list`);
  }

  public updateLoan(loanData:any){
    console.log("update loan method in service", loanData);
    return this.http.put(`${this.baseUrl}/loan/update-loan`,loanData).subscribe(
      (data)=>{
        console.log(data,"data");
      }
    )
  }


}
