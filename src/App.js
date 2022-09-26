import React from "react";

const products = [
  { id: 1, image: "Headphone" },
  { id: 2, image: "Iphone" },
];

function App() {
  // const uploadImageOnS3 = async () => {
  //   const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   return result;
  // };

  // const handleSendToServer = () => {
  //   const products = uploadImageOnS3();

  //   products
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // handleSendToServer();

  // Promise and async/await

  // const getAllProducts = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 2000);
  //   });
  // };

  // const getAllProducts2 = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("I m 2 getAllProducts");
  //     }, 3000);
  //   });
  // };

  // const getData = async () => {
  //   const promise1 = getAllProducts();
  //   const promise2 = getAllProducts2();

  //   Promise.all([promise1, promise2]).then((response) => {
  //     console.log("Hurrah => ", response);
  //   });

  // => async/await

  // try {
  //   const result = await getAllProducts();
  //   console.log(result);
  // } catch (error) {
  //   console.log("CATCH ERROR => ", error);
  // }

  // => then/catch

  // const result = getAllProducts();
  // result
  //   .then((res) => {
  //     console.log("Hurrah i get my result 1... ", res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <input
        // ref={inputRef}
        type={"text"}
        placeholder="Please enter Your Age..."
      />

      <button style={{ padding: 12, width: "200px" }} onClick={() => {}}>
        Save Update
      </button>
      <button style={{ padding: 12, width: "200px" }} onClick={() => {}}>
        Save Update
      </button>
    </div>
  );
}

export default App;
