import { QuestionDto } from "./question-dto.model";


export interface QcmDto {
  id: number;
  titre: string;
  questions: QuestionDto[];
}
