import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pregunta } from '../../../models/pregunta';
import { TokenService } from '../../../services/token.service';
import { UserData } from '../../../models/UserData';

import { Subject } from 'rxjs';
import { CatalogoServes } from '../../../services/Catalogos/catalogos.service';
import { takeUntil } from 'rxjs/operators';
import { PusherService } from '../../../services/shared/pusher.service';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css'],
})
export class QuestionAnswersComponent implements OnInit, OnDestroy {
  formSendReplayQuestion: FormGroup;

  @Input()
  question: Pregunta;

  @Output()
  answersEvent = new EventEmitter<object>();

  user: UserData;

  log = console.log;

  private $unsubscribe = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private token: TokenService,
    private catalogoServes: CatalogoServes,
    private pusherService: PusherService
  ) {}

  ngOnInit() {
    this.user = this.token.getUserData();
    this.formSendReplayQuestion = this.createForm();
    // this.connectoToAnswerChannel();
  }

  createForm(): FormGroup {
    return this.fb.group({
      productoId: [this.question.id],
      usuario_id: [this.user.id],
      preguntaId: [this.question.pregunta_id],
      respuesta: ['', Validators.required],
    });
  }

  saveAnswer() {
    const form = this.formSendReplayQuestion.value;

    if (this.formSendReplayQuestion.valid) {
      this.catalogoServes
        .saveQuestionAnswer(form)
        .pipe(takeUntil(this.$unsubscribe))
        .subscribe(
          (data) => {
            console.log(data);
            this.setValuerAfterFormPost();
          },
          (err) => console.log(err)
        );
    } else {
      console.log('An error occured');
    }
  }

  setValuerAfterFormPost() {
    this.formSendReplayQuestion.patchValue({
      respuesta: '',
    });
  }

  connectoToAnswerChannel() {
    const channel = this.pusherService
      .connectToPusher()
      .subscribe('questionAnswers');

    channel.bind('QuestionAnswerSent', (data) => {
      this.answersEvent.emit();
    });
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
