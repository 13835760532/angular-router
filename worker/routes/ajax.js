var express=require("express");
var router=express.Router();

router.use("/ajax",function(req,res){
    var data=[
        {name:"张1三",phone:"13312345678",en:"z"},
        {name:"张2三",phone:"13312345678",en:"z"},
        {name:"张3三",phone:"13312345678",en:"z"},
        {name:"张4三",phone:"13312345678",en:"z"},
        {name:"张5三",phone:"13312345678",en:"z"},
        {name:"李1四",phone:"13312345678",en:"l"},
        {name:"李2四",phone:"13312345678",en:"l"},
        {name:"李3四",phone:"13312345678",en:"l"},
        {name:"李4四",phone:"13312345678",en:"l"},
        {name:"王五",phone:"13312345678",en:"w"},
        {name:"赵6六",phone:"13312345678",en:"z"},
        {name:"赵7六",phone:"13312345678",en:"z"},
        {name:"赵8六",phone:"13312345678",en:"z"},
        {name:"赵9六",phone:"13312345678",en:"z"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"岳八",phone:"13312345678",en:"y"},
        {name:"岳八",phone:"13312345678",en:"y"},
        {name:"岳八",phone:"13312345678",en:"y"},
        {name:"岳八",phone:"13312345678",en:"y"}

    ]
    res.send(JSON.stringify(data));
})

module.exports=router;