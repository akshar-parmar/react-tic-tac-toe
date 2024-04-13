export const useCustom = ()=>{
    let count = 0;
    const updatecount = (newcount)=>{
        count = newcount;
    }
    return [count,updatecount];
}