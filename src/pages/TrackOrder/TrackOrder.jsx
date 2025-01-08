
const TrackOrder = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-white shadow-lg mx-auto w-6/12 border">
                <h2 className="border-b py-4 text-lg font-medium text-center">Check Your Order Status</h2>
                <div className="px-6 my-6">
                    <input className="border w-full p-2 rounded" type="text" placeholder="Order Code" />
                </div>
                <div className="text-center mb-6">
                    <button className="btn bg-[#FCB840] text-white">Track Order</button>
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;