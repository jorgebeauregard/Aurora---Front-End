import { Injectable, ErrorHandler } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { duration } from 'moment';

@Injectable()
export class ErrorHandlerService implements ErrorHandler{

  constructor(public snackBar:MatSnackBar) { }

  handleError(error){
    let snackBarErr = this.snackBar.open(error.error.err, 'OK', {
      duration: 3500,
    });
  }

}
