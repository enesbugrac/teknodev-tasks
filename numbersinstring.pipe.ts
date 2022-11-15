//Task 1
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numbersInString",
})
export class NumbersInStringPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value.replace(new RegExp(/\D/g, "g"), "");
  }
}
