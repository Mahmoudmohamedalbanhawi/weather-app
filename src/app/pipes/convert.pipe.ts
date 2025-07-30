import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(
    value: string | number ,
    inputVal: 'cel' | 'feh',
    outputVal?:'cel' | 'feh'
  
  ): unknown {
    let val ;
    if(typeof value == 'string')
    {
      val = parseFloat(value);
    }
    else 
    {
      val = value;
    }
    let convertNum;
    if(inputVal == 'cel' && outputVal =='feh')
    {
       convertNum = (val * 9.0 / 5.0) + 32;

    }
    else if(inputVal == 'feh' && outputVal == 'cel')
    {
      convertNum =  (val - 32) * (5 / 9);;
    }
   
    else 
    {
      convertNum = val
    }
    let symbol:'C' |'F'  =  inputVal === 'cel' ? 'C' : 'F';
    if(!outputVal)
    {
      symbol = inputVal === 'cel' ? 'C' : 'F';
    }
    else {
      symbol = outputVal === 'feh' ? 'F' : 'C'; 
    }
    return `${convertNum} ${symbol}`;
  }

}
