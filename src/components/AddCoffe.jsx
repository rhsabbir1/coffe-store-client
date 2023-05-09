import React from 'react';
import Swal from 'sweetalert2'

const AddCoffe = () => {

    const handleAddCoffe = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffe = {name , quantity , supplier , taste , category , details , photo}

        fetch('http://localhost:5000/coffe',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffe)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffe Added successfull',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
    }



    return (
        <div className='bg-[#F4F2F0] p-8 md:p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffe</h2>
            <form onSubmit={handleAddCoffe}>
                {/* form row  */}
                <div className='md:flex gap-2'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name='name' placeholder="coffe Name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>



                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name='supplier' placeholder="Supplier" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>



                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name='category' placeholder="Category" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>


                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name='photo' placeholder="Photo Url" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                
                <input className="btn btn-activ w-full my-1" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};


export default AddCoffe; 