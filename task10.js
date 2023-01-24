//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const arrayOfNums = [1,2,3,4,5,6,7];

const removeElement = (array, item) => {
   array.splice(item-1,1);
};

removeElement(arrayOfNums,4);

console.log(arrayOfNums);
