const express = require('express');
const router = express.Router();
const Book = require('../fold/model/books.js')
const mongoose = require('mongoose')

/*router.get('/',(req,res,next)=>{
 
    res.status(200).json({
   msg:'this is a student get request'

    })
}) */

 router.get('/',(req,res,next)=>{
 Book.find()
 .then(result=>{
    res.status(200).json({
 Bookdata:result
 })
})
.catch(err=>{
    console.log(err)
    res.status(500).json({
        error:err
    })
})
})   

router.get('/:Name',(req,res,next)=>{
    console.log(req.params.Name);
    Book.findOne(req.params.Name)
    .then(result=>{
       res.status(200).json({
    Book:result
    })
   })
   .catch(err=>{
       console.log(err)
       res.status(500).json({
           error:err
       })
   })
   })

/*   router.delete('/:id',(req,res,next)=>{
    Student.remove({_id:req.params.id})
    .then(result=>{
       res.status(200).json({
        message:'deleted',
    student:result
    })
   })
   .catch(err=>{
       console.log(err)
       res.status(500).json({
           error:err
       })
   })
   })    */


router.post('/',(req,res,next)=>{
  const book = new Book({
    id: req.body.id,
    title:req.body.title,
    title_ar:req.body.title_ar,
    publication_year:req.body.publication_year,
    publication_year_ar:req.body.publication_year_ar,
    exhibitor_booth: req.body.exhibitor_booth,
    exhibitor_booth_ar:req.body.exhibitor_booth_ar,
    authors: [req.body.authors]


  })
  book.save()
  .then(result=>{
    console.log(result);
    res.status(200).json({
        newBook:result
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
  })

   
})

/* router.put('/:id',(req,res,next)=>{
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            gender:req.body.gender
        }
    })
    .then(result=>{
       res.status(200).json({
        message:'updated',
        student:result    //shows old data how do i show new data in this 
   
    })
   })
   .catch(err=>{
       console.log(err)
       res.status(500).json({
           error:err
       })
   })
   }) */

module.exports = router;