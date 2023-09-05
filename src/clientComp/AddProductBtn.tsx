"use client";
import { addProduct } from "@/api/firebase";

export default function addProductBtn() {
  const submitHandler = (e: any) => {
    e.preventDefault();
    const title: string = e.target.title.value;
    const description: string = e.target.description.value;

    addProduct({
      title: title,
      description: description,
      price: "100",
      category: "test",
    });
  };

  return (
    <form onSubmit={e => submitHandler(e)}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
