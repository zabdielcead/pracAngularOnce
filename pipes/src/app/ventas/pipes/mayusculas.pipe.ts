import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(value: string, enMayusculas:boolean = true): string{
        console.log('enMayusculas', enMayusculas);


       

        if(enMayusculas){

            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }
    }
}