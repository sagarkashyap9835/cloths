// import { useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";

// const AddItem = ({ refreshItems }) => {
//   const { token } = useContext(AdminContext);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) return alert("Please login as admin");

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     if (image) formData.append("image", image);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/product/add",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (res.data.success) {
//         alert("Item added successfully ✅");
//         setName("");
//         setDescription("");
//         setPrice("");
//         setImage(null);
//         if (refreshItems) refreshItems(); // refresh product list
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Add item failed ❌");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md w-[600px] h-[600px] space-y-4"
//       >
//         <h2 className="text-xl font-bold text-center">Add New Item</h2>
//         <input
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           placeholder="Price"
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full"
//         />
//         <button
//           type="submit"
//           className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//         >
//           Add Item
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddItem;


// import { useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";

// const AddItem = ({ refreshItems }) => {
//   const { token } = useContext(AdminContext);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) return alert("Please login as admin");

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     if (image) formData.append("image", image);

//     try {
//       const res = await axios.post(
//         // "http://localhost:5000/api/product/add",
//         "https://raja-electronic.onrender.com/api/product/add",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (res.data.success) {
//         alert("Item added successfully ✅");
//         setName("");
//         setDescription("");
//         setPrice("");
//         setImage(null);
//         if (refreshItems) refreshItems();
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Add item failed ❌");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6 transition-transform transform hover:scale-105"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Add New Product
//         </h2>

//         <div className="space-y-3">
//           <label className="block text-gray-700 font-medium">Name</label>
//           <input
//             type="text"
//             placeholder="Enter product name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//         </div>

//         <div className="space-y-3">
//           <label className="block text-gray-700 font-medium">Description</label>
//           <textarea
//             placeholder="Enter product description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
//             rows={4}
//             required
//           />
//         </div>

//         <div className="space-y-3">
//           <label className="block text-gray-700 font-medium">Price</label>
//           <input
//             type="number"
//             placeholder="Enter product price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             required
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="block text-gray-700 font-medium">Image</label>
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="w-full text-gray-700"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
//         >
//           Add Item
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddItem;


import { useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";

const AddRoom = ({ refreshRooms }) => {
  const { token, backendUrl } = useContext(AdminContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [bhkType, setBhkType] = useState("Single Room");
  const [beds, setBeds] = useState(1);
  const [bathroomType, setBathroomType] = useState("Attached");
  const [availableRooms, setAvailableRooms] = useState(1);

  const [amenities, setAmenities] = useState({
    wifi: false,
    furnished: false,
    fan: false,
    cooler: false,
    ac: false,
    lightType: "Bulb",
  });

  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Admin login required");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("rent", rent);
    formData.append("bhkType", bhkType);
    formData.append("beds", beds);
    formData.append("bathroomType", bathroomType);
    formData.append("availableRooms", availableRooms);

    Object.keys(amenities).forEach((key) => {
      formData.append(key, amenities[key]);
    });

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const res = await axios.post(
        `${backendUrl}/api/room/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        alert("Room added successfully ✅");
        setTitle("");
        setDescription("");
        setRent("");
        setBeds(1);
        setImages([]);
        if (refreshRooms) refreshRooms();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add room ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Add New Room</h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Room Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />

        {/* Description */}
        <textarea
          placeholder="Room Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input h-24 resize-none"
        />

        {/* Rent */}
        <input
          type="number"
          placeholder="Monthly Rent"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="input"
          required
        />

        {/* BHK */}
        <select value={bhkType} onChange={(e) => setBhkType(e.target.value)} className="input">
          <option>Single Room</option>
          <option>1BHK</option>
          <option>2BHK</option>
          <option>3BHK</option>
        </select>

        {/* Beds */}
        <input
          type="number"
          placeholder="Number of Beds"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          className="input"
        />

        {/* Bathroom */}
        <select
          value={bathroomType}
          onChange={(e) => setBathroomType(e.target.value)}
          className="input"
        >
          <option>Attached</option>
          <option>Common</option>
        </select>

        {/* Available Rooms */}
        <input
          type="number"
          placeholder="Available Rooms"
          value={availableRooms}
          onChange={(e) => setAvailableRooms(e.target.value)}
          className="input"
        />

        {/* Amenities */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          {["wifi", "furnished", "fan", "cooler", "ac"].map((item) => (
            <label key={item} className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={amenities[item]}
                onChange={(e) =>
                  setAmenities({ ...amenities, [item]: e.target.checked })
                }
              />
              {item.toUpperCase()}
            </label>
          ))}
        </div>

        {/* Light Type */}
        <select
          value={amenities.lightType}
          onChange={(e) =>
            setAmenities({ ...amenities, lightType: e.target.value })
          }
          className="input"
        >
          <option>Bulb</option>
          <option>Mercury</option>
        </select>

        {/* Images */}
        <input
          type="file"
          multiple
          onChange={(e) => setImages(e.target.files)}
          className="w-full"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
        >
          Add Room
        </button>
      </form>

      {/* Tailwind shortcut */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #ccc;
          padding: 12px;
          border-radius: 8px;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default AddRoom;

