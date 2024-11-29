import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        // console.log(newCoffee)

        // send data in server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }



    return (
        <div className="bg-[#f4f3f0] p-20">
            <h2 className="text-3xl font-semibold"> Add coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* first row name and quantity */}
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label htmlFor="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="COffee Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label htmlFor="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Second row supplier*/}
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label htmlFor="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label htmlFor="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*third CATEGORY AND DETAILS */}
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label htmlFor="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label htmlFor="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* four photo url */}
                <div className="">
                    <div className="form-control w-full">
                        <label htmlFor="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Image link"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-4 bg-black text-white" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;