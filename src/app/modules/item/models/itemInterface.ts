import {Value} from './value';

export interface ItemInterface {
    title: string;
    getValue0(): Value;
    getValue1(): Value;
    getValue2(): Value;
    getValue3(): Value;
    getValue4(): Value;
    getAggregate(): Value; /*ritorna l'etichetta e il valore da visualizzare del campo aggregato */
    aggregateAction(): any | void;
    showDetail(): any | void;
    // getFilterParams(): [{ label: string, key: string, values?: [any] }];
}
