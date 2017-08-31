import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

    transform(value:any) {
        if (value) {
            var newValue = (value).replace(/[^\w\s]/gi, '');
            return newValue.replace(/\w\S*/g, function(txt: string){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        return value;
    }

}