const Agent = require("../models/agent")

const createAgent = async (req,res) => {

    try {
    
        const agent = await Agent.create({...req.body})

        if(!agent){
            return res.status(404).send("No new agent created");
        }
        res.status(201).json({agent});
    } catch (error) {
        res.status(500).json({error})
    }

}

module.exports ={
    createAgent
}