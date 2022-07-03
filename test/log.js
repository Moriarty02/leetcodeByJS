

export const log=(func,...res)=>{
  console.log("------------------------");
   console.log(func.name)
   console.log(func.apply(null, res));
}