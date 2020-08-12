import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Pusher from 'pusher-js';
// declare const Pusher: any;

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  pusher: any;
  channel: any;
  constructor() {}

  connectToPusher() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
    console.log('from server');

    return new Pusher(environment.PUSHER_API_KEY, {
      cluster: environment.PUSHER_CLUSTER,
    });

    // const channel = pusher.subscribe('questions');
    // channel.bind('QuestionSent', function (data) {
    //   alert(JSON.stringify(data));
    // });
  }
}
