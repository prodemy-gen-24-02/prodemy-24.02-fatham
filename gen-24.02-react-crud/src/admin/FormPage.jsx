import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import NavbarAdmin from "./NavbarAdmin";

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
  originalPrice: Yup.number("Must be a number")
    .positive("Must be a positive value")
    .min(1, "Minimum is 1")
    .required("Original Price is required"),
  discountedPrice: Yup.number().required("Discounted Price is required"),
  quantity: Yup.number().required("Quantity is required"),
  color1: Yup.string().required("Color1 is required"),
  color2: Yup.string().required("Color2 is required"),
  link: Yup.string().url("Invalid URL").required("Link is required"),
  additionalImages: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Field name is required"),
      value: Yup.string().url("Invalid URL").required("Image URL is required"),
    })
  ),
});

const FormPage = () => {
  const [lastId, setLastId] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalImages",
  });

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        const ids = data.map((product) => product.id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        setLastId(maxId);
      })
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

  const onSubmit = (data) => {
    if (lastId === null) {
      console.error("Last ID is not initialized");
      return;
    }

    const newId = lastId + 1;

    const productData = {
      id: newId,
      ...data,
      additionalImages: data.additionalImages.reduce((acc, img) => {
        acc[img.name] = img.value;
        return acc;
      }, {}),
    };

    console.log(productData);

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add product");
        }
        return response.json();
      })
      .then(() => {
        setLastId(newId);
        alert("Product added successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to add product");
      });
  };

  return (
    <div className="">
      <NavbarAdmin />
      <h2 className="ml-64 text-xl font-bold mb-4 bg-sky-200 py-2 rounded">Add New Product</h2>
      <form className="ml-64" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Image URL"
              {...register("image")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.image && (
              <div className="text-red-500">{errors.image.message}</div>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Original Price"
              {...register("originalPrice")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.originalPrice && (
              <div className="text-red-500 text-sm">{errors.originalPrice.message}</div>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Discounted Price"
              {...register("discountedPrice")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.discountedPrice && (
              <div className="text-red-500 text-sm">{errors.discountedPrice.message}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Quantity"
              {...register("quantity")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.quantity && (
              <div className="text-red-500">{errors.quantity.message}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Color1"
              {...register("color1")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.color1 && (
              <div className="text-red-500">{errors.color1.message}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Color2"
              {...register("color2")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.color2 && (
              <div className="text-red-500">{errors.color2.message}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Link"
              {...register("link")}
              className="border px-4 py-2 w-9/12 text-center rounded"
            />
            {errors.link && (
              <div className="text-red-500">{errors.link.message}</div>
            )}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-s mb-2 bg-sky-100 py-2 rounded mx-28">Additional Images for Product</h3>
          {fields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 mb-2 place-content-center">
              <div>
                <input
                  type="text"
                  placeholder="Field Name (e.g., image2, thumbnail1)"
                  {...register(`additionalImages.${index}.name`)}
                  className="border px-4 py-2"
                />
                {errors.additionalImages?.[index]?.name && (
                  <div className="text-red-500">{errors.additionalImages[index].name.message}</div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Image URL"
                  {...register(`additionalImages.${index}.value`)}
                  className="border px-4 py-2"
                />
                {errors.additionalImages?.[index]?.value && (
                  <div className="text-red-500">{errors.additionalImages[index].value.message}</div>
                )}
              </div>
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ name: "", value: "" })}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Image Field
          </button>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default FormPage;