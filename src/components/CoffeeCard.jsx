 

const CoffeeCard = ({coffee}) => {

    const {name, quantity, chef, details, teste, Category, photo} = coffee;

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
          <button className="btn w-12"> X </button>
          </div>
        </div>
      </div>
      
    );
};

export default CoffeeCard;