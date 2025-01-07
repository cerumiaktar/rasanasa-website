
const TopSellingProduct = ({ topsellingproduct }) => {
    const {img, title,review, price } = topsellingproduct;
    return (
        <div>
            <div className="card card-side border mb-6">
                <figure>
                    <img className="w-40"
                        src={img}
                        alt="Movie" />
                </figure>
                <div className="pt-4 ml-4">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#FF8539]">{review}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default TopSellingProduct;