
// import { Timestamp } from 'rxjs/Rx';
import { DiscountModel } from './discount.model';
import { FormGroup } from '@angular/forms/src/model';
import * as _ from 'lodash';
import { CategoriesService } from '../services/categories/categories.service';
import { ItemModel } from './ItemModel';
import { FirebaseObject } from './firebaseObject'
import { PaymentsModel } from './paymentModel';
import { ItemServiceInterface } from '../modules/item/models/ItemServiceInterface';
import { ItemModelInterface, Genere } from '../modules/item/models/itemModelInterface';
import { Value } from '../modules/item/models/value';




export class ShoppingKartModel implements FirebaseObject, ItemModelInterface {
    supplyerId: string;
    totale: number;
    title: string;
    paymentId: string;
    pagamento: PaymentsModel;
    note: string;
    moneta: string;
    tassoConversione; number;
    dataAcquisto: string;
    ecommerce: boolean;
    sconto: { percentuale: boolean, sconto: number };
    dataAddebito: string;
    items: Array<ItemModel>;
    key: string;
    constructor(shoppingCart?: any) {
        if (shoppingCart) {
            this.sconto = shoppingCart.sconto ? new DiscountModel(shoppingCart.sconto.percentuale,
                shoppingCart.sconto.sconto, shoppingCart.sconto.nota) : new DiscountModel();
            this.supplyerId = shoppingCart.supplyerId || '';
            this.dataAcquisto = shoppingCart.dataAcquisto || new Date().toISOString();
            this.dataAddebito = shoppingCart.dataAddebito || new Date().toISOString();
            this.totale = shoppingCart.totale || 0;
            this.moneta = shoppingCart.moneta || '€';
            this.ecommerce = shoppingCart.ecommerce || false;
            this.items = shoppingCart.items || [];
            this.key = shoppingCart.key || '';
            this.note = shoppingCart.note || '';
        } else {
            this.supplyerId = '';
            this.paymentId = '';
            this.sconto = new DiscountModel();
            this.dataAcquisto = new Date().toISOString();
            this.dataAddebito = new Date().toISOString();
            this.totale = 0;
            this.moneta = '€';
            this.ecommerce = false;
            this.items = [];
            this.key = '';

        }
    }

    getTitle() {
        const title = new Value();
        title.label = 'titolo';
        title.value = this.title;
        return title;
    }

    getElement() {
        const genere: Genere = 'o';
        return { element: 'carrello della spesa', genere: genere };
    }

    getAggregate() {
        const value = new Value();
        value.label = 'spesa complessiva';
        value.value = ' to be implented';
        return value;
    }

    aggregateAction() { }

    getNote() {
        const value = new Value();
        value.label = 'note';
        value.value = this.note;
        return value;
    }

    getValue2() {
        const title = new Value();
        title.label = 'value2';
        title.value = 'to be implemented';
        return title;
    }

    getValue3() {
        const title = new Value();
        title.label = 'value3';
        title.value = 'to be implemented';
        return title;
    }

    getValue4() {
        const title = new Value();
        title.label = 'value4';
        title.value = 'to be implemented';
        return title;
    }


    load(chiave: string, service: ItemServiceInterface) {
        service.getItem(chiave).on('value', (kart => {
            const loader = ([key, value]) => { this[key] = value; };
            kart.val().entries().forEach(element => {
                loader(element);
            });
        }));
        console.log('loaded', this);
    }

    getFilterPopup() { }

    serialize() {
        return {
            'title': this.title,
            'note': this.note,
            'paymentId': this.paymentId,
            'dataAcquisto': this.dataAcquisto,
            'dataAddebito': this.dataAddebito
        };
    }

    getCreatePopup() {
        return 'shoppingKartCreate';
    }

    getEditPopup() {
        return 'shoppingKartCreate';
    }

    buildFrom(item: any) {
        this.supplyerId = item.supplyerId;
        this.dataAcquisto = item.dataAcquisto;
        this.sconto = item.sconto;
        this.note = item.note;
        this.dataAddebito = item.dataAddebito;
        this.items = item.items;
        this.key = item.key;
        this.moneta = item.moneta;
        this.ecommerce = item.ecommerce;
        return this;
    }

    generateItemId() {
        /*
        genera un ItemId univoco
        @return itemId:string
        */
        return String(new Date().getTime());
    }
    pushItem(item: ItemModel) {
        // item.id = String(new Date().getTime())// setto lo id dello item
        // this.items =
        this.items.push(item);
        this.items = _.cloneDeep(this.items); // fa scattare il changedetection

    }

    updateItem(item) {
        this.items = _.map(this.items, article => {
            return article.id === item.id ? item : article;

        });
    }

    removeItem(item: ItemModel) {
        this.items = this.items.filter(article => article.id !== item.id);
    }

    build(shoppingCart: {
        supplyerId: string,
        pagamentoId: string,
        dataAcquisto: string,
        dataAddebito: string,
        ecommerce: boolean
        totale: number,
        key: string,
        items: [ItemModel],
        note?: string
    }) {
        this.supplyerId = shoppingCart.supplyerId || '';
        this.dataAcquisto = shoppingCart.dataAcquisto || new Date().toISOString();
        this.dataAddebito = shoppingCart.dataAddebito || new Date().toISOString();
        this.totale = shoppingCart.totale || 0;
        this.ecommerce = shoppingCart.ecommerce || false;
        this.items = shoppingCart.items || [];
        this.key = shoppingCart.key || '';
        this.note = shoppingCart.note || 'note';
        return this;
    }
}
