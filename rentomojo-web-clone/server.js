const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const {MONGOURI} = require('./config/keys');
const cors = require('cors');
const furnitureData = require('./Data/furnitureData');
const furnitureCategData = require('./Data/furnitureCateg');
const applianceCategData = require('./Data/applianceCateg');
const applianceData = require('./Data/appliance')
const electronicsCategData = require('./Data/electronicsCategData')
const electronicsData = require('./Data/electronicsData')
require('dotenv').config();
const FurnitureCategSchema = require('./schemas/furniture/furnitureCateg')
const FurnitureSchema = require('./schemas/furniture/furniture');
const ApplianceCategSchema = require('./schemas/appliance/applianceCateg')
const ApplianceSchema = require('./schemas/appliance/appliance')
const ElectronicsCategSchema = require('./schemas/electronics/electronicsCateg')
const ElectronicsSchema = require('./schemas/electronics/electronics');
const furniture = require('./schemas/furniture/furniture');
const CartSchema = require('./schemas/cart/cartSchema');
const UserSchema = require('./schemas/userSchema/user');
const app = express();
const whitelist = ['http://localhost:3000', 'http://localhost:8080']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use(express.json());

// app.post('/furnitureCateg', async(req, res) => {
//     try{
//         for(let i=0; i<furnitureCategData.length; i++) {
//             const furnitureCateg = new FurnitureCategSchema(furnitureCategData[i])
//             await furnitureCateg.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })

// app.post('/furniture', async(req, res) => {
//     try{
//         for(let i=0; i<furnitureData.length; i++) {
//             const furniture = new FurnitureSchema(furnitureData[i])
//             await furniture.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })

// app.post('/applianceCateg', async(req, res) => {
//     try{
//         for(let i=0; i<applianceCategData.length; i++) {
//             const applianceCateg = new ApplianceCategSchema(applianceCategData[i])
//             await applianceCateg.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })

// app.post('/appliance', async(req, res) => {
//     try{
//         for(let i=0; i<applianceData.length; i++) {
//             const appliance = new ApplianceSchema(applianceData[i])
//             await appliance.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })
// app.post('/electronicsCateg', async(req, res) => {
//     try{
//         for(let i=0; i<electronicsCategData.length; i++) {
//             const electronicsCateg = new ElectronicsCategSchema(electronicsCategData[i])
//             await electronicsCateg.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })
// app.post('/electronics', async(req, res) => {
//     try{
//         for(let i=0; i<electronicsData.length; i++) {
//             const electronics = new ElectronicsSchema(electronicsData[i])
//             await electronics.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })

// CART DATA Link: - 'http://localhost:8080/carts
app.post('/carts', async(req, res) => {
    try {
        const carts = new CartSchema(req.body);
        await carts.save();
        res.status(201).send("Successfully added!");
    } catch (err) {
        res.status(404).send(err.message);
    }
})
// set the user
app.post('/users', async(req, res) => {
    try {
        const users = new UserSchema(req.body);
        await users.save();
        res.status(201).send(req.body);
    } catch (err) {
        res.status(404).send(err.message);
    }
})
app.get('/users/:mob', async(req, res) => {
    try {
        const mob = req.params.mob;
        const users = await UserSchema.find();
        let user;
        for(let i=0; i<users.length; i++){
            if(users[i].mob === mob){
                user = users[i]
            }
        }
        console.log(user)
        res.status(201).send(user);
    } catch (err) {
        res.status(404).send(err.message);
    }
})
//get cart data of a user(mobile no) Link:- 'http://localhost:8080/carts/<user mob no>'
app.get('/carts/:user', async(req, res) => {
    const user = req.params.user;
    try {
        const cartData = await CartSchema.find();
        const userCartData = [];
        for(let i=0; i<cartData.length; i++){
            if(cartData[i].user === user) {
                userCartData.push(cartData[i]);
            }
        }
        res.status(201).send(userCartData);
    } catch (err) {
        res.status(404).send(err.message);
    }
})
// update the cart data Link:- http://localhost:8080/carts/<id>' id - product id.
// specially for incrementing and decrementing the quantity of a product.
app.patch('/carts/:id', async(req, res) => {
    id = req.params.id;
    try {
        const cartData = await CartSchema.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).send(cartData);
    } catch (err) {
        res.status(404).send(err.message);
    }
})  
app.delete('/carts/:id', async(req, res) => {
    id = req.params.id;
    try {
        const cartData = await CartSchema.findByIdAndDelete(id);
        res.status(201).send(cartData);
    } catch (err) {
        res.status(404).send(err.message);
    }
})  

// GET ALL THE CATEGORY OF PRODUCT

app.get('/furnitureCateg', async(req, res) => {
    try{
        const furnitureCateg = await FurnitureCategSchema.find();
        res.send(furnitureCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})
app.get('/applianceCateg', async(req, res) => {
    try{
        const applianceCateg = await ApplianceCategSchema.find();
        res.send(applianceCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})
app.get('/electronicsCateg', async(req, res) => {
    try{
        const electronicsCateg = await ElectronicsCategSchema.find();
        res.send(electronicsCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})

// GET CATEGORY BY ID
app.get('/furnitureCateg/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleFurnitureCateg = await FurnitureCategSchema.findById(id);
        res.send(singleFurnitureCateg)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
app.get('/applianceCateg/:id', async(req, res) => {
    try {
        id = req.params.id;
        const applianceCateg = await ApplianceCategSchema.findById(id);
        res.send(applianceCateg)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
app.get('/electronicsCateg/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleelectronicsCateg = await ElectronicsCategSchema.findById(id);
        res.send(singleelectronicsCateg)
    } catch(err) {
        res.status(404).send(err.message)
    }
})


// GET THE DATA FOR EACH FIELD
app.get('/furniture', async(req, res) => {
    try{
        const furniture = await FurnitureSchema.find();
        res.send(furniture)
    } catch(err) {
        res.status(404).send({message: err})
    }
})
app.get('/appliance', async(req, res) => {
    try{
        const appliance = await ApplianceSchema.find();
        res.send(appliance)
    } catch(err) {
        res.status(404).send({message: err})
    }
})
app.get('/electronics', async(req, res) => {
    try{
        const electronics = await ElectronicsSchema.find();
        res.send(electronics)
    } catch(err) {
        res.status(404).send({message: err})
    }
})


// GET DATA BY ID
app.get('/furniture/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleFurniture = await FurnitureSchema.findById(id);
        res.send(singleFurniture)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
app.get('/appliance/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleAppliance = await ApplianceSchema.findById(id);
        // console.log(singleAppliance);
        res.send(singleAppliance)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
app.get('/electronics/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleelectronics = await ElectronicsSchema.findById(id);
        res.send(singleelectronics)
    } catch(err) {
        res.status(404).send(err.message)
    }
})


//GET DATA BY CATEG ID
app.get('/furniture/categ/:categId', async(req, res) => {
    try {
        categId = req.params.categId;
        // console.log(categId);
        const singleFurniture = await FurnitureSchema.find();
        // console.log(singleFurniture);
        const furnitures = singleFurniture.filter(item => item.categId === categId);
        res.send(furnitures)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
app.get('/appliance/categ/:categId', async(req, res) => {
    try {
        categId = req.params.categId;
        // console.log(categId);
        const singleAppliance = await ApplianceSchema.find();
        // console.log(singleAppliance);
        const appliances = singleAppliance.filter(item => item.categId === categId);
        res.send(appliances)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
app.get('/electronics/categ/:categId', async(req, res) => {
    try {
        categId = req.params.categId;
        // console.log(categId);
        const singleElectronics = await ElectronicsSchema.find();
        // console.log(singleElectronics);
        const electronicss = singleElectronics.filter(item => item.categId === categId);
        res.send(electronicss)
    } catch(err) {
        res.status(404).send(err.message)
    }
})

// GET SEARCH QUERY DATA

app.get('/products', async (req, res) => {
    try {
        let name = req.query.search;
        name = name[0].toUpperCase() + name.slice(1);
        console.log(typeof name);
        const furniture = await FurnitureSchema.find();
        const appliance = await ApplianceSchema.find();
        const electronics = await ElectronicsSchema.find();
        const allData = [];
        furniture.forEach(item => {
            allData.push(item)
        })
        appliance.forEach(item => {
            allData.push(item)
        })
        electronics.forEach(item => {
            allData.push(item)
        })
        let data = []
        for(let i=0; i<allData.length; i++){
            let prdName = allData[i].name;
            if(prdName.startsWith(name) || prdName.includes(name)) {
                data.push(allData[i])
            }
        }
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }

})
// GET ALL PRODUCT DATA
app.get('/allProducts', async(req, res) => {
    try {
        const furniture = await FurnitureSchema.find();
        const appliance = await ApplianceSchema.find();
        const electronics = await ElectronicsSchema.find();
        const allData = [];
        furniture.forEach(item => {
            allData.push(item)
        })
        appliance.forEach(item => {
            allData.push(item)
        })
        electronics.forEach(item => {
            allData.push(item)
        })
        
        res.send(allData);
    } catch (err) {
        res.status(404).send(err.message)
    }
})
//GET THE DATA OF PRODUCT OF ID
app.get('/product/:id', async(req, res) => {
    try {
        id = req.params.id;
        let data = {};
        const singleAppliance = await ApplianceSchema.findById(id);
        const singleFurniture = await FurnitureSchema.findById(id);
        const singleelectronics = await ElectronicsSchema.findById(id);
        if(singleAppliance !== null) {
            data = singleAppliance;
        } else if(singleFurniture !== null) {
            data = singleFurniture;
        } else if(singleelectronics !== null) {
            data = singleelectronics;
        }
        res.status(201).send(data);
        
    } catch(err) {
        res.status(404).send(err.message)
    }
})
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
const PORT = process.env.PORT || 8080
const start = () => {
    mongoose.connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (req, res) => {
        console.log("connected to the datatbase!")
    })
    app.listen(PORT, ()=> {
        console.log("Listening to the port 8080...");
    })
}
start()


