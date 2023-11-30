

const CoffeeCard = ({coffee}) => {

    const {name,quantity,supplier,taste,category,details,photo} =coffee
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo}alt="Movie"/></figure>
  <div className="  flex justify-between w-full pr-4">
   <div>
   <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
   </div>
  <div className="gap-y-3">
  <div className="card-actions justify-end">
   <div className="btn-group btn-group-vertical">
      <button className="btn">View</button>
      
    </div>
   </div>
   <div className="card-actions justify-end">
   <div className="btn-group btn-group-vertical">
      <button className="btn">Edit</button>
      
    </div>
   </div>
   <div className="card-actions justify-end">
   <div className="btn-group btn-group-vertical">
      <button className="btn">Delete</button>
      
    </div>
   </div>
  </div>
  </div>
</div>
    );
};

export default CoffeeCard;