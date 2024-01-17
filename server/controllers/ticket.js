const Ticket = require("../models/ticket")


const createTicket = async (req, res) => {
    try {
      const ticket = await Ticket.create(req.body);
      res.status(201).json(ticket);
    } catch (error) {
      console.error('Error creating ticket:', error);
      res.status(500).send({ msg: 'Internal Server Error' });
    }
  };
  

const getAllTickets =async (req,res) => {
    
    try {

        const {sort,select} = req.query
        const queryObject ={}

        let result = Ticket.find(queryObject)
        if(sort){
            const sortList= sort.split(',').join(' ')
            result = result.sort(sortList)
         }else {
            result = result.sort('createdAt')
         }

         if (select) {
            const selectedList = select.split(',').join(' ');
            result = result.select(selectedList);
          }
          const page = Number(req.query.page) || 1;
          const limit = Number(req.query.limit) || 10;
          const skip = (page - 1) * limit;
        
          result = result.skip(skip).limit(limit);

        const ticket = await result
        res.status(201).json(ticket);
      } catch (error) {
        res.status(500).send({ msg: error });
      }

}

const getTicket = async (req,res)=>{
    try {
        const { id: ticketId } = req.params
        const ticket = await Ticket.findOne({ _id: ticketId });
        if (!ticket) {
          return res
            .status(404)
            .json({ msg: `There are no jobs with given ID ${ticketId}` });
        }
        res.status(201).json(ticket);
      } catch (error) {
        res.status(500).send({ msg: error });
      }

}

//const updateTicket = async (req,res) =>{}

module.exports ={
    createTicket,
    getAllTickets,
    getTicket,
   
}