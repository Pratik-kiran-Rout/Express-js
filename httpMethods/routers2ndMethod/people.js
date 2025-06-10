const express = require('express');
const router = express.Router();

const { getPeople,
     createPeople,
     createPeoplePostman,
     updatePeople,
     deletePeople} = require('../routers2ndMethod/controller/peopleCon')

//? The main route is " /api/people " mainly used to send the data

                              //! Method no 1 
// ! without chaining

//? GET method
//router.get('/', getPeople)  

//? POST method
//router.post('/', createPeople)

//? POST method for postman 
//router.post ('/postman', createPeoplePostman)
 
//? PUT method IMP
//router.put('/:id', updatePeople)


//? DELETE method
//router.delete('/:id', deletePeople)
// dele
                                       //! Method no 2

//!  now chain the routers 
router.route('/').get(getPeople).post(createPeople);

router.route('/postman').post(createPeoplePostman);

router.route('/:id').put(updatePeople).delete(deletePeople);


//? export the router
module.exports = router
