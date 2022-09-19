import { Pipe, PipeTransform } from "@angular/core";
@Pipe ({
        name :'replaceComma' 
})
export class ReplaceComma implements PipeTransform {
    transform(valeur : string | null): string  {
       if (!!valeur)  {
            return valeur.replace(/,/g,'.');    
       }
        else {
            return '';
        }
    }
}