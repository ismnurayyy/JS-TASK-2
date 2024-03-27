// Mukemmel ededin tapilmasi

// let n =  prompt("ededi daxil edin:");
// if ((n)) {
//     let cem = 0;
//     for (let i = 1; i <= n/ 2; i++) {
//         if (n % i === 0) {
//             cem += i;
//         }
//     }

//     if (cem === n && n !== 0) {
//         console.log(n + " mukemmeldir");
//     } else {
//         console.log(n + " mukemmel deyil");
//     }
// }
 
//-------------------------------------------------------------------------------------------------------------------------
// // 3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.

// let b = +prompt(" ededi daxil edin : ");
// let s = +prompt(" ededi daxil edin : ") ;

// for (let eded = b; eded <= s; eded++) {
//     let cem = 0;
//     for (let i = 1; i <= eded / 2; i++)
//      {
//         if (eded % i === 0) {
//             cem += i;
//         }
    
//     }
//     if (cem === eded) {
//             console.log(eded + " mukemmel ededdir.");
//         }
// }


//---------------------------------------------------------------------------------------------------------------------------
// 5. Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.

// let a = prompt("ededi daxil edin :");
// let b = prompt("ededi daxil edin :");

// console.log(a + "ile" + b + " arasındaki sonu 7 ile biten ededler:");

// for (let eded = a; eded <= b; eded++) {
//     if (eded % 10 === 7) {
//         console.log(eded);
//     }
// }


//--------------------------------------------------------------------------------------------------------------------------
// 4. Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.
// let eded1=+prompt("Baslangic qiymeti daxil edin: ");
// let eded2=+prompt("Son qiymeti daxil edin: ");
// let bolen=0;

// for (let i=eded1;i<=eded2;i++){
//     bolen=0;
//     for (let j=1;j<=i;j++){
//         if (i%j==0){
//             bolen+=1;
//         }
//     }
//     if (bolen<=2){
//         console.log(`${i}`);
//     }
// }

//--------------------------------------------------------------------------------------------------------------------------
// 1. Daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.
//let eded=+prompt("ededi daxil edin :");
// let bolen = 0;


// for(i=1; i<=eded; i++){
//     if (eded%i===0){
//         bolen+=1;
//     }
//     else{
//         continue;
//     }
// }
// if(eded===1){
//     console.log(" ne sade ne de murekkeb")
// }
// else if(bolen<1){
//     console.log(" duzgun eded deyil")
// }
// else if(bolen>2){
//     console.log("eded murekkebdir")
// }
// else {
//     console.log("eded sadedir")
// }