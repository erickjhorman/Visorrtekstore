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
import { takeUntil } from 'rxjs/operators';
import { CatalogoServes } from '../../../services/Catalogos/catalogos.service';

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

  c = console.log;

  private $unsubscribe = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private token: TokenService,
    private catalogoServes: CatalogoServes
  ) {}

  ngOnInit() {
    this.user = this.token.getUserData();
    this.formSendReplayQuestion = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
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
          () => {
            this.answersEvent.emit();
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

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
