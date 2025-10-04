

const Category = ({ category }) => {
    const { id, img, title } = category;
    return (
        <div>
            <div className="bg-white shadow-xl border py-6 rounded-xl">
                <img className="mx-auto w-28" src={img} alt="category img" />
                <h1 className="text-center text-lg font-medium dark:text-black">{title}</h1>
            </div>
        </div>
    );
};

export default Category;