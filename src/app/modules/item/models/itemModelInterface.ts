import { Value } from './value';
import { ItemServiceInterface } from './ItemServiceInterface';
import { AlertOptions } from '@ionic/core';
import { ItemFilterOPtions } from './ItemFIlterOptions';

export interface ItemModelInterface {
    title: string;
    key: string;
    getValue0(): Value;
    getValue1(): Value;
    getValue2(): Value;
    getValue3(): Value;
    getValue4(): Value;
    getPopup(item: ItemModelInterface, service: ItemServiceInterface): any;
    getFilterPopup(next: (any) => any);
        getAggregate(): Value; /*ritorna l'etichetta e il valore da visualizzare del campo aggregato */
    aggregateAction(): any | void;
    showDetail(): any | void;
    serialize();
    getFilterParams(): ItemFilterOPtions[];
}
