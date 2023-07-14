export function extractNumber(text:string): number{
    return Number(text.match(/\d+(\.\d+)?/g)!.join(''))
}

export function numberFormation(number:number):number{
    return Number(number.toFixed(2))
}