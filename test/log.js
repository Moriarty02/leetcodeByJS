

export const log=(inputs,func)=>{
  let ret = inputs.map((input) => func(input[0], input[1]));
  console.log(ret);
}