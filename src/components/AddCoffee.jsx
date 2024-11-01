
const AddCoffee = () => {
        
    const handleAddCoffee = event =>{
       event.preventDefault();
       const form = event.target;
       const coffee = form.coffee.value;
       const quantity = form.quantity.value;
       const chef = form.chef.value;
       const details = form.details.value;
       const teste = form.teste.value;
       const Category = form.Category.value;
       const photo = form.photo.value;
       const newCoffee = {coffee, quantity, chef, details, teste, Category, photo};
       console.log(newCoffee);

    }


    return (
        <div className="bg-[#F4F3F0] p-24">
         <h1 className="mb-5 text-black text-3xl font-extrabold">add a coffee</h1>
         <form onSubmit={handleAddCoffee}>
            {/* form name and Quantity row  */}
         <div className="md:flex w-[100%] justify-center mb-3 gap-3">
         <div className="input input-bordered flex items-center gap-2 md:w-1/2">
         <input type="text" className="grow" name="coffee" placeholder="Coffee Name" />
         </div>
         <div className="input input-bordered flex items-center gap-2 md:w-1/2">
         <input type="text" className="grow" name="quantity" placeholder="Available Quantity" />
         </div >
         </div>
            {/* form supplier row  */}
         <div className="md:flex w-[100%] justify-center mb-3 gap-3">
         <div className="input input-bordered flex items-center gap-2 md:w-1/2">
         <input type="text" className="grow" name="chef" placeholder="Chef" />
         </div>
         <div className="input input-bordered flex items-center gap-2 md:w-1/2">
         <input type="text" className="grow" name="details" placeholder="Details" />
         </div >
         </div>
            {/* form teste row  */}
         <div className="md:flex w-[100%] justify-center mb-3 gap-3">
         <div className="input input-bordered flex items-center gap-2 md:w-1/2">
         <input type="text" className="grow" name="teste" placeholder="teste Name" />
         </div>
         <div className="input input-bordered flex items-center gap-2 md:w-1/2">
         <input type="text" className="grow" name="Category" placeholder="Category" />
         </div >
         </div>
         <div className="input input-bordered flex items-center gap-2 md:w-full">
         <input type="text" className="grow text-center" name="photo"  placeholder="Photo Url" />
         </div >


            <button className="btn mt-5 w-full">Add Coffee</button>
         </form>
        </div>
    );
};

export default AddCoffee;