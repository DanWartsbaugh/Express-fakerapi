const express = require("express");
const app = express();
const {faker} = require('@faker-js/faker')

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const createUser = () => {
  const newUser= {
    password:faker.internet.password(),
    email:faker.internet.email(),
    phoneNumber:faker.phone.number('###-###-####'),
    lastName:faker.name.lastName(),
    firstName:faker.name.firstName(),
    _id:faker.datatype.uuid()
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id:faker.datatype.uuid(),
    name:faker.company.name(),
    address:{
      street:faker.address.streetAddress(),
      city:faker.address.city(),
      state:faker.address.stateAbbr(),
      zipCode:faker.address.zipCode(),
      country:faker.address.country()
    }
  };
  return newCompany;
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req,res) => {
  res.json(createUser());
})

app.get("/api/companies/new", (req,res) => {
  res.json(createCompany());
})

app.get("/api/user/company", (req,res) => {
  res.json([createUser(),createCompany()]);
  
})



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
