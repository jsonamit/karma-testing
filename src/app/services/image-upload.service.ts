import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  response: Array<object> = [  // Add employee object
    {
      status: 'success',
      message: 'image uploaded successfully',
    },
  ];

  constructor() { 
   
  }

  upload(): Observable<Array<object>> {
    return of(this.response);
  }

}
