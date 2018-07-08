import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeLoggerService {

  constructor() { }
  writeMessage(message: string) {
    console.log('Le logger HEURE: ' + new Date().toISOString() +
                ' Message: ' + message);
  }
}
