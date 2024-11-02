import { data } from "autoprefixer";
import Swal from "sweetalert2";

 

const CoffeeCard = ({coffee}) => {

    const { _id, name, quantity, chef, details, teste, Category, photo} = coffee;

    const handleDelete = _id =>{
        console.log(_id);
      
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
           
            fetch:(`http://localhost:5000/coffee/${_id}`, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
             console.log(data);
             if(data.deletedCount > 0){
               Swal.fire({
                 title: "Deleted!",
                 text: "Your file has been deleted.",
                 icon: "success"
               });
             }
            })
            
          
          }
        


        });
    } 

    return (
        <div className=" card card-side shadow-xl bg-[#F5F4F1]">
        <figure>
          <img
            src={photo}
            alt="Movie" />
        </figure>
        <div className="card-body justify-between">
          <h2 className="text-black">Name: {name}</h2>
          <p className="text-black">quantity: {quantity}</p>
          <p className="text-black">chef: {chef}</p>
          <p className="text-black">details: {details}</p>
          <p className="text-black">teste: {teste}</p>
          <p className="text-black">Category: {Category}</p>
          <div className=" justify-end btn-group-vertical">
          <button className="btn w-12 mb-1 bg-indigo-600">View</button><br />
          <button className="btn w-12 mb-1">Edit</button><br />
          <button onClick={() => handleDelete(_id)} className="btn w-12 bg-red-400 text-white"> X </button>
          </div>
        </div>
      </div>
      
    );
};

export default CoffeeCard;