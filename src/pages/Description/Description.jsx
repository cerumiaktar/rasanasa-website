import { useLoaderData, useParams } from "react-router-dom";



const Description = () => {
    const descriptions = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const description = descriptions.find(description => description.id === idInt)
    console.log(description);
    return (
        <div>
            <div className="p-8 space-y-2">
                <h1 className="text-lg font-medium dark:text-black">{description.title}</h1>
                <p className="dark:text-[#333333]"> <span className="text-lg font-medium dark:text-black">Category: </span>{description.category} </p>
                <p className="dark:text-[#333333]"> <span className="text-lg font-medium dark:text-black">Brand: </span>{description.brand} </p>
                <p className="text-lg font-medium dark:text-black">Product Description:</p>
                <div className="w-10/12 dark:text-[#333333]">
                    <p>{description.product_description}</p>
                    {/* <p><span>Model: </span>22-G</p>
                <p><span>Weight: </span>1 kg</p>
                <p><span>Colour: </span>White</p>
                <p><span>Type: </span>Water Filter</p> <br />
                <p>
                    7 stage Purification Features of Water Purifier <br />
                    Easy to use and clean <br />
                    Easy to use and clean <br />
                    Super purifying function <br />
                    Reduce impurities from tap water <br />
                    Reduce hardness from water <br />
                    Taste as mineral water after purification <br />
                    Direct faucet for easy water fetching <br />
                    Best purification up to 5000 Litters (+-)
                </p> */}
                </div>
                <br />
                <p className="w-10/12 dark:text-[#333333]">Rasanasa is a brand that symbolizes the rich heritage and diverse flavors of traditional cuisine, blending time-honored recipes with modern culinary techniques. Known for its dedication to quality and authenticity, Rasanasa offers a wide range of products and services aimed at bringing the essence of cultural gastronomy to every table. Whether it is delectable spices, curated meal kits, or immersive cooking experiences, Rasanasa promises to deliver a taste journey that delights the senses and warms the heart. Perfect for those who cherish the art of cooking and the joy of sharing delicious moments.</p>

            </div>
        </div>
    );
};

export default Description;