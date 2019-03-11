import { observable, action } from 'mobx';

class DataStore {
    @observable number = 0;

    @action decrease = () => {
        this.number += 1;
    }

    @action increase = () => {
        this.number -= 1;
    }
}

export { DataStore };
