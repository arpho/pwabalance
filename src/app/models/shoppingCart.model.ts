
// import { Timestamp } from 'rxjs/Rx';
import { DiscountModel } from './discount.model';
import { FormGroup } from '@angular/forms/src/model';
import * as _ from 'lodash';
import { CategoriesService } from '../services/categories/categories.service';
import {ItemModel} from './ItemModel';




export class ShoppingCartModel {
    fornitoreId: string;
    totale: number;
    pagamentoId: string;
    moneta: string;
    tassoConversione; number;
    dataAcquisto: string;
    online: boolean;
    sconto: { percentuale: boolean, sconto: number };
    dataAddebito: string;
    items: Array<ItemModel>;
    key: string;
    note: string;
    constructor(shoppingCart?: any) {
        if (shoppingCart) {
            this.sconto = shoppingCart.sconto ? new DiscountModel(shoppingCart.sconto.percentuale,
                shoppingCart.sconto.sconto, shoppingCart.sconto.nota) : new DiscountModel();
            this.fornitoreId = shoppingCart.fornitoreId || '';
            this.pagamentoId = shoppingCart.pagamentoId || '';
            this.dataAcquisto = shoppingCart.dataAcquisto || new Date().toISOString();
            this.dataAddebito = shoppingCart.dataAddebito || new Date().toISOString();
            this.totale = shoppingCart.totale || 0;
            this.moneta = shoppingCart.moneta || '€';
            this.online = shoppingCart.online || false;
            this.items = shoppingCart.items || [];
            this.key = shoppingCart.key || '';
            this.note = shoppingCart.note || '';
        } else {
            this.fornitoreId = '';
            this.pagamentoId = '';
            this.sconto = new DiscountModel();
            this.dataAcquisto = new Date().toISOString();
            this.dataAddebito = new Date().toISOString();
            this.totale = 0;
            this.moneta = '€';
            this.online = false;
            this.items = [];
            this.key = '';

        }
    }

    buildFrom(item: any) {
        this.fornitoreId = item.fornitoreId;
        this.pagamentoId = item.pagamentoId;
        this.dataAcquisto = item.dataAcquisto;
        this.sconto = item.sconto;
        this.note = item.note;
        this.dataAddebito = item.dataAddebito;
        this.items = item.items;
        this.key = item.key;
        this.moneta = item.moneta;
        this.online = item.online;
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
        fornitoreId: string,
        pagamentoId: string,
        dataAcquisto: string,
        dataAddebito: string,
        online: boolean
        totale: number,
        key: string,
        items: [ItemModel],
        note?: string
    }) {
        this.fornitoreId = shoppingCart.fornitoreId || '';
        this.pagamentoId = shoppingCart.pagamentoId || '';
        this.dataAcquisto = shoppingCart.dataAcquisto || new Date().toISOString();
        this.dataAddebito = shoppingCart.dataAddebito || new Date().toISOString();
        this.totale = shoppingCart.totale || 0;
        this.online = shoppingCart.online || false;
        this.items = shoppingCart.items || [];
        this.key = shoppingCart.key || '';
        this.note = shoppingCart.note || 'note';
        return this;
    }
}
