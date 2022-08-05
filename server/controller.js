const items = [
    {
        id: 1,
        name: 'Balenciaga Le Cagole Bag', 
        imgURL: 'https://cdn.theninesfashion.com/wp-content/uploads/2022/07/EM3-White-Le-Cagole-XS-Shoulder-Bag-Balenciaga.png',
        price: '$2000'
       
    }, 

    {
        id: 2,
        name: 'Cartier Sunglasses',
        imgURL: 'https://editorialist.com/webcompressed/2021/6/014/479/018/14479018~goldensilver_0.png',
        price: '$2000'
    },

    {
        id: 3,
        name: 'Designer Boots',
        imgURL: 'https://d2kq0urxkarztv.cloudfront.net/61aebc13a1c6b80033b4ca38/3292421/upload-1e03274a-43f0-4e04-bdc2-a3bd68e74ddf.png?w=759&e=webp&nll=true',
        price: '$700'
    },
    {
        id: 4,
        name: 'Rolex Watch',
        imgURL: 'https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126613lb-0002.png?imwidth=380',
        price: '$2000'
    },
    // {
    //     id: 5,
    //     name: 'Corvette',
    //     imgURL: 'https://www.chevroletarabia.com/content/dam/chevrolet/middle-east/master/english/index/performance/2022-corvette/colorizer/09-2022_Rapid%20Blue_Chevrolet_Corvette_RWD_COU_1LT_GMO_01.png?imwidth=960',
    //     price: '$65,000'
    // }

       

]

module.exports = {
    getItems: (req, res) => res.status(200).send(items),

}