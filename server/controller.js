const items = [
    {
        id: 1,
        name: 'Balenciaga Bag', 
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
    {
        id: 5,
        name: 'Porsche',
        imgURL: 'https://storage.googleapis.com/rp-production-public-content/iass0mwqenjxl594zm2mxl4u0xqw',
        price: '$100,000'
    },
    {
        id: 6,
        name: 'Spartan Dunks',
        imgURL: 'https://image.goat.com/1000/attachments/product_template_pictures/images/055/225/237/original/765830_00.png.png',
        price: '$372',
    },
    {
        id: 7,
        name: 'Perfume',
        imgURL:'https://www.parfumsraffy.com/sites/default/files/styles/uc_product_page/public/PDM-delina.png?itok=zlz78Klo',
        price: '$200'
    },
    {
        id: 8,
        name: 'Diamond Necklace',
        imgURL: 'https://cdn.shopify.com/s/files/1/0252/8372/3345/products/RadiantHeartSet_1_800x.png?v=1609032042',
        price: '$15,000'
    },
    {
        id: 9,
        name: 'Jet Ski',
        imgURL: 'https://www.sea-doo.com/content/sea-doo/en_us/models/recreation/gti-se/_jcr_content/root/modelteaser.coreimg.png/1657892907782/sea-my23-gti-se-170-ice-metal-00030pc00-studio-34fr-na.png',
        price: '$20,000'
    },
    {
        id: 10,
        name: 'Canada Goose Jacket',
        imgURL: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1631646972/product-image/3802LA_439_o.png',
        price: '$3,000'

    },
    {
        id: 11,
        name: 'Canada Goose Jacket',
        imgURL: 'https://cdn.shopify.com/s/files/1/1037/5246/products/Scout-atomic-6.png?v=1603223389&width=1445',
        price: '$3,000'

    },
    {
        id: 12,
        name: 'Cologne',
        imgURL: 'https://media.ulta.com/i/ulta/2534072?w=659&h=659',
        price: '$80'
    },
    {
        id: 13,
        name: 'Lamborghini Aventador',
        imgURL: 'https://dealerdotcom.webdamdb.com/embeddables/display.php?size=550&webid=sUPhZFnFgPC0',
        price: '$200,000'
    },
    {
        id: 14,
        name: 'RIMOWA Suitcase',
        imgURL: 'https://images.prestigeonline.com/wp-content/uploads/sites/8/2021/03/30184555/Original_Cabin_Mars_1-1024x1024.png',
        price: '$10,000'
    },
    {
        id: 15,
        name: 'Travis Scott Dunk Low',
        imgURL: 'https://image.goat.com/1000/attachments/product_template_pictures/images/032/437/341/original/585882_00.png.png',
        price:'$2,100'
    },
    {
        id: 16,
        name: 'Motorcycle',
        imgURL: 'https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2022/31d160e6-5c10-4138-91d4-75efe56058bb.png',
        price: '$60,000'
    },
    {   
        id: 17,
        name: 'Patagonia Vest',
        imgURL: 'http://cdn.shopify.com/s/files/1/0751/7203/products/22821_BRBN_grande.png?v=1631575229',
        price: '$200'
    },
    {
        id: 18,
        name: 'iPhone 13 Pro Max',
        imgURL: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13-Pro-Max/Sierra-Blue/Apple-iPhone-13-Pro-Max-Sierra-Blue-frontimage.png',
        price: '$1,200'
    },
    {
        id: 19,
        name: 'MacBook',
        imgURL: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-in-M2-2022.png',
        price: '$3,000'
    },
    {
        id: 20,
        name: 'Headphones',
        imgURL: 'https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2F_default_upload_bucket%2FWH1000XM4S_0000_001_c837e2d6c39f74d4dd2338ada3dac203.png_1.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZfZGVmYXVsdF91cGxvYWRfYnVja2V0JTJGV0gxMDAwWE00U18wMDAwXzAwMV9jODM3ZTJkNmMzOWY3NGQ0ZGQyMzM4YWRhM2RhYzIwMy5wbmdfMS5wbmcucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ1NzYyMDAwfX19XX0_&Signature=I2mIGJwq9f4RGGO0V67ujV5IQoBZrY5qD5Wl3jcIsnEilflP82MACO0072lS90Ge4dF2AhCmGaf~gjYzOEphCNFnxwLRpyTWQJBgrVqLbXJQtKHxs1MPnoyTP6lhT~qtYv4-yug6TBKfQh~ihnsLYkOzBXOijaQHEFflplekieJbvkIZro~DECEme-RzmCFOMPqt~NobZYYbNarZFIqmv~FVM-Wq2OyC9dCUseFOfFq3t0NYIBGdx7LXMmDioL56DzXNPEsR665MKcQNEdvnaeoQ-h9kOoP4B6TIvCoJO4rXmvW~ml2yov4wwfJ73JwFfyF6nPJoQIcpWf8RC4vFsw__&Key-Pair-Id=K37BLT9C6HMMJ0',
        price: '$244'
    },
    // {
    //     id: 21,
    //     name: 'Diamond Necklace',
    //     imgURL: 'https://cdn.shoplightspeed.com/shops/636706/files/25492185/image.jpg',
    //     price: '$5000'
    // },
    {
        id: 22,
        name: 'Ring',
        imgURL: 'https://www.gcollinsandsons.com/images/products/643-1.png',
        price: '$18,000'
    },
    {
        id: 23,
        name: 'Apple Watch',
        imgURL: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP860/series7-480.png',
        price: '$300'
    },
    {
        id: 24,
        name: 'Coffee Maker',
        imgURL: 'https://images.keurig.com/is/image/keurig/K-Duo-Single-Serve-Carafe-Coffee-Maker_5000204977?fmt=png-alpha',
        price: '$140'
    },
    {
        id: 25,
        name: 'Ray-Ban Sunglasses',
        imgURL: 'https://images.ray-ban.com/is/image/RayBan/8053672000481__002.png?impolicy=RB_RB_FBShare',
        price: '$200'
    },
    {
        id: 26,
        name: 'Dior Bag',
        imgURL: 'https://api.platforme.com/api/compose?brand=dior&model=book_tote&version=269&p=base:embroidery:m1286zriwm928&size=718&initials=&logic=1',
        price: '$3,000'
    },
    {
        id: 27,
        name: 'Dress',
        imgURL: 'https://cdn.theninesfashion.com/wp-content/uploads/2022/06/B1-Pink-Ophelia-Georgette-Cutout-Midi-Dress-House-of-CB.png',
        price: '$250'
    },
    {
        id: 28,
        name: 'Canon Camera',
        imgURL: 'https://www.camera.ie/custom/public/images/.gallery4x3/canon-g7x.png',
        price: '$620'
    },
    {
        id: 29,
        name: 'Carharrt Hat',
        imgURL: 'https://eliteinkprinting.com/wp-content/uploads/2020/11/CT100289.png',
        price: '$80'
    },
    {
        id: 30,
        name: 'ATV',
        imgURL: 'https://www.brp-world.com/content/brp-world/en_int/brands/can-am-off-road/experience/all-terrain-vehicles/_jcr_content/root/helperblock_14728411.coreimg.png/1628896171183/orv-atv-my22-can-am-outlander-xt-570-oxford-blue-sku0002una00-34fr-na.png?imwidth=2048',
        price: '$1,300'
    },
    {
        id: 31,
        name: 'Bracelet',
        imgURL: 'https://www.harpersbazaararabia.com/public/styles/square/public/images/2018/12/19/1793308.png.adapt.535.535.png?DI5roSCR',
        price: '$500'
    },
    {
        id: 32, 
        name:'Baby Clothes',
        imgURL: 'https://static.nike.com/a/images/t_default/d94e427f-8acf-446b-a111-8dbb8a992668/summer-daze-3-piece-box-set-3-piece-set-FK1mTq.png',
        price: '$70'
    },
    {
        id: 33,
        name: 'Baby Crib',
        imgURL: 'http://cdn.shopify.com/s/files/1/0556/3993/3118/products/w6jhqezuhitwnfmqdsyt_4c08a419-8a2a-4bb3-8cbb-f0a193e3f1a7.png?v=1655235400',
        price: '$200'
    },
    {
        id: 34,
        name: 'Golf Club Set',
        imgURL: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614712606-juniors-2018-xt-10-piece-set_2___2.png',
        price: '$150'
    },
    {
        id: 35,
        name: 'Dinner-ware Set',
        imgURL: 'https://www.decorist.com/static/cache-thumbnail/b2/2b/b22bd3ecc48d7da3cd029e283299563e.png',
        price: '$190'
    },
    {
        id: 36,
        name: 'Bedding Set',
        imgURL: 'https://d2b8wt72ktn9a2.cloudfront.net/mediocre/image/upload/c_pad,f_auto,dpr_2.0,h_368,q_auto,w_368/mjpbems5vqyu7pho2izl.png',
        price: '$200'
    }
]

const wantedList = []
const dates = []

module.exports = {
    getItems: (req, res) => res.status(200).send(items),
    getList: (req, res) => res.status(200).send(wantedList),
    addToWantedList:(req, res) => {
        const {id} = req.body;
        if(wantedList.some((product) => product.id === id)){
                    return res.status(500).send("Item already in list!")
                } 
                // console.log(id);
                const product = items.find((item) => item.id === id)
                // console.log(product)
                wantedList.push(product);
                return res.status(200).send(product)
    } ,

    removeFromWantedList: (req, res) => {
        const {id} = req.params;
        const index = items.findIndex((item) => item.id === id)
        if(index !== -1){
            res.status(400).send("item not found")
        } else {
            wantedList.splice(index,1)
            res.status(200).send(items)
        }
      },

      postDate: (req, res) => {
        const { occassion, date } = req.body;
        const newDate = {
          id: globalId,
          occassion,
          date,
        }
        dates.push(newDate)
        res.status(200).send(dates)
        globalId++
        
      }
}
