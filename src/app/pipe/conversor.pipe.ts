import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform{
    transform(value,por){
        let value_one:number = parseInt(value);
        let value_two:number = parseInt(por);

        let result = " la multiplicacion :  " + value_one + " x " + value_two + " = " + (value_one * value_two);
        return result;
    }
}