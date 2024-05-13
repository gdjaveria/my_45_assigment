
import { features } from "process";

function storecarInfo(manufacturer: string, carModel: string,...extraoption:{[key :string] :any} [] ){

    const carInfo = {
        manufacturer,
        carModel,
        
        ...Object.assign({}, ...extraoption)
    }
      return carInfo;
};
 let answer = storecarInfo('Honda', 'Civic',{color:'White'}, {features: ['power window', 'navigation']})
 console.log(answer);
