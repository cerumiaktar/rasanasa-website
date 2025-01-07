import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const RelatedProducts = ({ currentProductId }) => {
    const products = useLoaderData();
    console.log(products);

    const currentProduct = products.find((product) => product.id === currentProductId);

    if (!currentProduct) {
        return <p>Product not found.</p>;
    }

    const relatedProducts = products.filter((product) => {
        console.log("Product Category:", product.category); // Debugging
        return product.category === currentProduct.category && product.id !== currentProductId;
    });

    // const relatedProducts = products.filter(
    //     (product) => product.category === currentProduct.category && product.id !== currentProductId
    // );

    // Rules-2
    // const [mainProduct, setMainProduct] = useState([null]);
    // const [relatedProducts, setRelatedProducts] = useState([]);

    // useEffect(() => {
    //     const mainProduct = products.find((p) => p.id === productId);
    //     setMainProduct(mainProduct);

    //     if (mainProduct && mainProduct.related) {
    //         const related = products.filter((p) => mainProduct.related.includes(p.id));
    //         setRelatedProducts(related)
    //     }
    // }, [])

    return (
        <div>
            <h2>Related Products for "{currentProduct.name}"</h2>
            <div>
                {relatedProducts.length > 0 ? (
                    relatedProducts.map((product) => (
                        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;