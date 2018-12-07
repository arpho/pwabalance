

import { FirebaseObject } from './firebaseObject';
import { ItemInterface } from '../modules/item/models/itemInterface';
import { Value } from '../modules/item/models/value';
export class CategoryModel implements FirebaseObject, ItemInterface {
    key: string;
    title: string;
    service: any;
    constructor() {
    }
    load(key, service) {
        service.getCategory(key).on('value', cat => {
            this.title = cat.val().title;
            this.key = key;
        });
    }

    getValue0() {
        const value = new Value();
        value.label = 'categoria';
        value.value = this.title;
        return value;
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
    return this.id;
}

}
