// it is used cz foreach doesnt return anything sometimes we just need to do some operations on array
const nums = [1,2,3,4,5,6,7,8,9,10]
// const newnum = num.filter((num)=>num>5)
// console.log(newnum);
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
  // const historybooks = books.filter((book)=>book.genre=="History")
  // console.log(historybooks)
// const historybooks = []
// books.forEach((book)=>{
//     if(book.genre=="History"){
//        historybooks.push(book.title)
//     }
// })
// console.log(historybooks)
// const rnum = nums.reduce(function(acc, num){
//     console.log(acc, num);
//     return acc+num

// },0)
const nnum = nums.reduce((acc, num) => acc+num,0)
console.log(nnum);