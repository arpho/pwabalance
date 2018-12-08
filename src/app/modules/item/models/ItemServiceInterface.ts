
import * as firebase from 'firebase';
import { ItemInterface } from './itemInterface';
export interface ItemServiceInterface {


    getItem(key: string): firebase.database.Reference;
    updateItem(item: ItemInterface);
    deleteItem(key: string);
}
