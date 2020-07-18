// import Animal from '../animals/index';
import { Dog, createDog } from '../animals/src';

export function createZoo2(): Array<Dog> {
    return [
        createDog()
    ];
}


