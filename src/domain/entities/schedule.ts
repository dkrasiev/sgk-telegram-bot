import { Lesson } from './lesson'

export class Schedule {
  constructor(
    readonly date: Date,
    readonly lessons: Lesson[],
  ) { }
}
