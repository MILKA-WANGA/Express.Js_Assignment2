const express=require('express');
const app=express();

app.use('/users',(req,res,next)=>
{
console.log('/users My first middleware');
res.send('This my middleware /users ');

});
app.use('/',(req,res,next)=>
{
console.log('/ My middleware');
res.send('This my middleware / ');

});
app.listen(4000);