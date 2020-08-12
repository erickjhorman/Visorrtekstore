import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Pregunta } from '../../../models/pregunta';
import { TokenService } from '../../../services/token.service';
import { UserData } from '../../../models/UserData';
@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css'],
})
export class QuestionAnswersComponent implements OnInit {
  formSendReplayQuestion: FormGroup;

  @Input()
  question: Pregunta;

  user: UserData;

  log = console.log;

  constructor(private fb: FormBuilder, private token: TokenService) {}

  ngOnInit() {
    this.user = this.token.getUserData();
    this.formSendReplayQuestion = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      productoId: [this.question.id],
      usuarioId: [this.user.id],
      preguntaId: [this.question.pregunta_id],
      respuesta: ['', Validators.required],
    });
  }

  saveAnswer() {
    this.log(this.formSendReplayQuestion.value);
  }
}
