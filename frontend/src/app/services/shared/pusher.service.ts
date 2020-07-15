import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  channel: any;
  constructor() { }

  connectPusherQuestionsChannel() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher(
      environment.PUSHER_API_KEY, {
      cluster: environment.PUSHER_CLUSTER
    });

    const channel = pusher.subscribe('questions');
    channel.bind('QuestionSent', function (data) {
      alert(JSON.stringify(data));
    });
  }


}
