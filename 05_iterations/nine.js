// ++++++++++++++++++++++++++++++++++++++++ Reduce ++++++++++++++++++++++++++++++++++++++++

const myNums = [1, 2, 3]

const newNums = myNums.reduce( (acc, curr) => (acc+curr), 0 )

// console.log(newNums); // 6

const shoppingCart = [ 
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "android course",
        price : 3999
    },
    {
        itemName : "data Scientist course",
        price : 12999
    }
]

const total = shoppingCart.reduce( (acc, item) => (acc + item.price),0 )
// console.log(total); // 20996