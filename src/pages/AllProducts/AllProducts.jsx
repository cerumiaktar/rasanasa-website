import LeftSideBar from "./LeftSideBar";
import RightSide from "./RightSide";


const AllProducts = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
                <LeftSideBar></LeftSideBar>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default AllProducts;