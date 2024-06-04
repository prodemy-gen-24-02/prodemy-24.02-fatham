import React from "react";
import useSWR, { mutate } from "swr";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductTable = () => {
  //const history = useHistory();
  const { data: products, error: productsError, isLoading: isLoadingProducts } = useSWR("http://localhost:3000/products", fetcher);

  if (isLoadingProducts) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#16537e" />
      </div>
    );
  }

  if (productsError) {
    return alert("Gagal Fetch Data.." + JSON.stringify(productsError));
  }

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      mutate("http://localhost:3000/products");
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product");
    }
  };

  const handleUpdate = (product) => {
    // history.push({
    //   pathname: "/admin/form",
    //   state: { productData: product },
    // });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <table className="table-auto">
        <thead className="bg-sky-900 border-y-2 border-black text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Original Price</th>
            <th className="px-4 py-2">Discounted Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Color1</th>
            <th className="px-4 py-2">Color2</th>
            <th className="px-4 py-2">Link</th>
            <th className="px-5 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="border-y-2 border-blue" key={product.id}>
              <td className="px-4 py-2">{product.id}</td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">${product.originalPrice}</td>
              <td className="px-4 py-2">${product.discountedPrice}</td>
              <td className="px-4 py-2">{product.quantity}</td>
              <td className="px-4 py-2">{product.color1}</td>
              <td className="px-4 py-2">{product.color2}</td>
              <td className="px-4 py-2">
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View</a>
              </td>
              <td className="grid grid-cols-1 px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => handleUpdate(product)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mt-1"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        <Link to="/admin/form" target="_blank">Add Product</Link>
      </button>
    </div>
  );
};

export default ProductTable;