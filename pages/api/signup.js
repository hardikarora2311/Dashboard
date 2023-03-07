import data from "../../models/User";
import cntdb from "../../middleware/mongoose";

const handler=async(req,res)=>{
    if(req.method==='POST'){
        console.log(req.body);
        let u=new data(req.body);
        await u.save();

        res.status(200).json({success:"sucess"});
    } 
    else{
        res.status(400).json({error:"This method is not allowed"});
    }
}
export default cntdb(handler);