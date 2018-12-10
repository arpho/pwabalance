
import * as firebase from 'firebase';
import { ItemModelInterface } from './itemModelInterface';
export interface ItemServiceInterface {


    getItem(key: string): firebase.database.Reference;
    updateItem(item: ItemModelInterface);
    deleteItem(key: string);
}
