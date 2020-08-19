import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import Pusher from 'pusher-js';

// declare const Pusher: any;

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  private static _instance: Pusher;
  pusher: any;
  channel: any;

  constructor() {
    this.connectToPusher();
  }

  public static get instance() {
    return (
      this._instance ||
      (this._instance = new Pusher(environment.PUSHER_API_KEY, {
        cluster: environment.PUSHER_CLUSTER,
      }))
    );
  }

  connectToPusher() {
    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;

    return new Pusher(environment.PUSHER_API_KEY, {
      cluster: environment.PUSHER_CLUSTER,
    });
  }
}
