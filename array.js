findDuplicates = (a) => {
    let storeDuplicate;
    for (let i=0;i<a.length;i++){
        for(let j=1;j<a.length;j++)
        {
            if(a[i]===a[j]); 
        }
        storeDuplicate=a[i];
    }
    return storeDuplicate;
};
const a = [1, 2, 3, 2, 4, 1, 5, 6, 5];
console.log(findDuplicates(a));