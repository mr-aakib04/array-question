// function sum(num,target) {
//     for(let i=0;i<num.length;i++){
//         for(let j=i+1;j<num.length;j++){
//             if(num[i]+num[j]==target){
//             //  console.log([i,j])
//             return [i,j]
//             }
//         }
//     }
// }
// let rv=sum([2,7,11,15],17);
// console.log(rv);

// function sum1(num1,target1) {
//     for(let i=0;i<num1.length;i++){
//         for(let j=i+1;j<num1.length;j++){
//             if(num1[i]+num1[j]===target1){
//                 return [i,j];
//             }
//         }
//     }
// }
// let rv1=sum1([3,2,4],6);
// console.log(rv1);
// function sum2(num2,target2) {
//     for(let i=0;i<num2.length;i++){
//         for(let j=i+1;j<num2.length;j++){
//             if(num2[i]+num2[j]===target2){
//                 return [i,j]
//             }
//         }
//     }
// }
// let rv2=sum2([3,3],6);
// console.log(rv2);

//removeduplicate numbers-------------
// function removeduplicates(num) {
//     let k=0;
//     for(let i=0;i<num.length;i++){
//         if(num[i] !== num[k]){
//             k++;
//             num[i]=num[k];
//         }
        
//     }
//     return k+1;
// }
// let ans=removeduplicates([0,0,1,1,1,2,2,3,3,4]);
// console.log(ans);

//remove elements------------------

function removelements(nums,val) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            k++;

        }
    }
    return k;
}
let rv=removelements([0,1,1,2,2,3,3,2],2);
console.log(rv);

//2nd question---------------------------

// function removelemnts(nums,val) {
//     let k=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== nums[k]){
//             k++;
//             nums[k]=nums[i];
//         }
//     }
//     return k;
// }
// let ans=removelements([2,2,0,0,0,2,2,5,6],0);
// console.log(ans);
