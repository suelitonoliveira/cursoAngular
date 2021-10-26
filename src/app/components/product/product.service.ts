import { computeMsgId } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private sackBar: MatSnackBar) { }
  
  showMessage(msg: string): void { 
    this.sackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
