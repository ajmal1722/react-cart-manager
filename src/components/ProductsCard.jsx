import productList from '../products.json';

const ProductsCard = () => {

    return (
        <div className="flex flex-wrap justify-center">
            {productList.map((item, index) => {
                return (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-48 object-cover object-center" src={item.image} alt={item.title} />
                            <div className="p-4">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h2>
                                <p className="text-gray-700 text-base">{item.description}</p>
                                <div className="mt-4">
                                    <span className="text-gray-900 font-bold">Price:</span>
                                    <span className="text-gray-700 px-2">{item.price}</span>
                                </div>
                                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsCard;