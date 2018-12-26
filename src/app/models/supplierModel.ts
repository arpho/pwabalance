import { FormControl } from '@angular/forms';
import { ItemModelInterface, Genere } from '../modules/item/models/itemModelInterface';
import { ItemFilterOPtions } from '../modules/item/models/ItemFIlterOptions';
import { ItemServiceInterface } from '../modules/item/models/ItemServiceInterface';
import { Value } from '../modules/item/models/value';
export class SupplierModel implements ItemModelInterface {
    nome: string;
    note: string;
    indirizzo: string;
    latitudine: string;
    longitudine: string;
    altitude: string;
    title: string;
    fidelity_card: string;
    key: string;
    onLine: boolean;
    constructor(fornitore?: {
        nome: string,
        note: string,
        title?: string,
        fidelity_card: string,
        indirizzo: string,
        latitudine: string,
        altitude: string,
        longitudine: string,
        key: string,
        onLine: boolean,

    }) {
        this.key = fornitore && fornitore.key || '';
        this.nome = fornitore && fornitore.nome || '';
        this.note = fornitore && fornitore.note || '';
        this.altitude = fornitore && fornitore.altitude || '';
        this.indirizzo = fornitore && fornitore.indirizzo || '';
        this.latitudine = fornitore && fornitore.latitudine || '';
        this.longitudine = fornitore && fornitore.longitudine || '';
        this.fidelity_card = fornitore && fornitore.fidelity_card || '';
        this.title = fornitore && fornitore.title || this.nome;
        this.onLine = fornitore && fornitore.onLine || false;
    }


    load(key, service) {
        service.getItem(key).on('value', sup => {
            /* this.title = sup.val().title;
             this.note = sup.val().note;
             this.altitude = sup.val().altitude;
             this.latitudine = sup.val().latitudine;
             this.longitudine = sup.val().longitudine;
             this.indirizzo = sup.val().indirizzo
             this.key = key;*/
            console.log(sup.val(), Object.entries(sup.val()));
            Object.entries(sup.val()).forEach(e => this[e[0]] = e[1]);
            console.log(this);
        });
    }

    getFilterParams() {
        const out: ItemFilterOPtions = new ItemFilterOPtions('fornitore', 'text');
        return [out];
    }

    getElement() {
        const genere: Genere = 'o';
        return { element: 'fornitore', genere: genere };
    }
    getValue0() {
        const value = new Value();
        value.label = 'fornitrore';
        value.value = this.title;
        return value;
    }

    build(item) {
        this.key = item.key || '';
        this.nome = item.nome || '';
        this.note = item.note || '';
        this.latitudine = item.latitudine || '';
        this.longitudine = item.longitudine || '';
        this.onLine = this.onLine;
    }
    buildFromActiveForm(fornitore: {
        nome: FormControl,
        note: FormControl,
        key: FormControl,
        indirizzo: FormControl,
        longitudine: FormControl,
        altitude: FormControl,
        latitudine: FormControl,
        onLine: FormControl
    }) {
        this.key = fornitore && fornitore.key.value || '';
        this.nome = fornitore && fornitore.nome.value || '';
        this.note = fornitore && fornitore.note.value || '';
        this.altitude = fornitore && fornitore.altitude && fornitore.altitude.value || '';
        this.indirizzo = fornitore && fornitore.indirizzo.value || '';
        this.latitudine = fornitore && fornitore.latitudine.value || '';
        this.longitudine = fornitore && fornitore.longitudine.value || '';
        this.onLine = fornitore && fornitore.onLine.value || false;
        return this;
    }


    getValue1() {
        const value = new Value();
        value.label = 'note';
        value.value = this.note;
        return value;
    }

    aggregateAction() { }

    getValue2() {
        const value = new Value();
        value.label = 'fidelity card';
        value.value = this.fidelity_card;
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
        value.value = ' to be implented';
        return value;
    }


    serialize() {
        return { key: this.key, title: this.title };
    }

    getEditPopup(item: ItemModelInterface, service: ItemServiceInterface) {

        return 'app-page-supplier-update';
    }

    getCreatePopup(service: ItemServiceInterface) {
        const item = new SupplierModel();

        return 'app-page-supplier-create';
    }

    getFilterPopup(next) {

    }

}