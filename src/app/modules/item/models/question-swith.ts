import { QuestionBase } from './question-base';

export class SwitchQuestion extends QuestionBase<string> {
    controlType = 'switchBox';
    options: { key: string, valueTrue: string, valueFalse }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
