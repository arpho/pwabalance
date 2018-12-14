

import { FirebaseObject } from './firebaseObject';
import { ItemModelInterface } from '../modules/item/models/itemModelInterface';
import { Value } from '../modules/item/models/value';
import { ItemServiceInterface } from '../modules/item/models/ItemServiceInterface';
import { ItemFilterOPtions } from '../modules/item/models/ItemFIlterOptions';
import { Item } from '@ionic/angular';
export class CategoryModel implements FirebaseObject, ItemModelInterface {
    key: string;
    title: string;
    service: any;
    constructor() {
    }
    load(key, service) {
        service.getItem(key).on('value', cat => {
            this.title = cat.val().title;
            this.key = key;
        });
    }

    getFilterParams() {
        const out: ItemFilterOPtions = new ItemFilterOPtions('categoria', 'text');
        
        return [out];
    }

    getValue0() {
        const value = new Value();
        value.label = 'categoria';
        value.value = this.title;
        return value;
    }

    getPopup(item: ItemModelInterface, service: ItemServiceInterface) {

        return {
            subHeader: 'modifica categoria',
            inputs: [
                {
                    type: 'text',
                    name: 'title',
                    placeholder: 'categoria',
                    value: item.title,
                },
            ],
            buttons: [
                { text: 'Annulla' },
                {
                    text: 'Salva',
                    handler: data => {
                        item.title = data.title;
                        service.updateItem(item);
                    },
                },
            ],
        };
    }

    getFilterPopup(next) {

        return {
            subHeader: 'modifica categoria',
            inputs: [
                {
                    type: 'text',
                    name: 'title',
                    placeholder: 'cerca categoria',
                    value: 'test filter',
                },
            ],
            buttons: [
                { text: 'Annulla' },
                {
                    text: 'Salva',
                    handler: data => {
                        console.log('popup');
                        const filterFunction = (item: ItemModelInterface) => {
                            return this.title.toLowerCase().indexOf(data[0]) > -1;
                        };
                        next(filterFunction);
                    },
                },
            ],
        };
    }


    getValue1() {
        const value = new Value();
        value.label = 'occorrenze';
        value.value = 'to be implemnted';
        return value;
    }

    aggregateAction() { }

    getValue2() {
        const value = new Value();
        return value;
    }

    getValue3() {
        const value = new Value();
        return value;
    }

    showDetail() {

    }

    getValue4() {
        const value = new Value();
        return value;
    }

    getAggregate() {
        const value = new Value();
        value.label = 'spesa complessiva';
        value.value = 'to be implented';
        return value;
    }


    serialize() {
        return { key: this.key, title: this.title };
    }

}
