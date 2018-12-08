import { Value } from './value';
import { ItemServiceInterface } from './ItemServiceInterface';
import { AlertOptions } from '@ionic/core';

export interface ItemInterface {
    title: string;
    key: string;
    getValue0(): Value;
    getValue1(): Value;
    getValue2(): Value;
    getValue3(): Value;
    getValue4(): Value;
    getPopup(item: ItemInterface, service: ItemServiceInterface): any;
    getAggregate(): Value; /*ritorna l'etichetta e il valore da visualizzare del campo aggregato */
    aggregateAction(): any | void;
    showDetail(): any | void;
    serialize();
    // getFilterParams(): [{ label: string, key: string, values?: [any] }];
}
