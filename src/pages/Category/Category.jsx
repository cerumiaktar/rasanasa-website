

const Category = ({ category }) => {
    const { id, img, title } = category;
    return (
        <div>
            <div className="bg-white shadow-xl border py-6 rounded-xl">
                <img className="mx-auto w-28" src={img} alt="" />
                <h1 className="text-center text-lg font-medium">{title}</h1>
            </div>
        </div>
    );
};

export default Category;