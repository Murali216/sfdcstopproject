import { LightningElement } from 'lwc';

export default class MyfirstLWCComponent extends LightningElement {

    name="user";
    updateName(event){
        this.name =  event.target.value;
    }
}