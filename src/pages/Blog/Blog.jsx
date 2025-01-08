

const Blog = ({ blog }) => {
    const { id, img, category, title, description } = blog;
    return (
        <div className="flex grow">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className="text-[#0474BC] font-medium">{category}</p>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions ">
                        <button className="btn bg-[#0474BC] text-base text-white w-full">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;