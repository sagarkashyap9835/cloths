// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";
// import { toast } from "react-toastify";

// const OrderList = () => {
//   const { token } = useContext(AdminContext); // ✅ Admin token
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:5000/api/order/admin/all",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (data.success) {
//           setOrders(data.orders);
//         } else {
//           toast.error(data.message);
//         }
//       } catch (error) {
//         console.error("Fetch Orders Error:", error);
//         toast.error("Error fetching orders!");
//       }
//     };

//     if (token) fetchOrders();
//   }, [token]);

//   if (!token) {
//     return <p className="text-center mt-10 text-red-500">Please login as Admin!</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">All Orders</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Product Name</th>
//               <th className="py-2 px-4 border">Quantity</th>
//               <th className="py-2 px-4 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) =>
//               order.items.map((item, idx) => (
//                 <tr key={`${order._id}-${idx}`} className="text-center">
//                   <td className="py-2 px-4 border">{order.userId.name}</td>
//                   <td className="py-2 px-4 border">{item.name}</td>
//                   <td className="py-2 px-4 border">{item.quantity}</td>
//                   <td className="py-2 px-4 border">{order.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderList;



// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";
// import { toast } from "react-toastify";

// const OrderList = () => {
//   const { token } = useContext(AdminContext);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:5000/api/order/admin/all",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (data.success) {
//           setOrders(data.orders);
//         } else {
//           toast.error(data.message);
//         }
//       } catch (error) {
//         console.error("Fetch Orders Error:", error);
//         toast.error("Error fetching orders!");
//       }
//     };

//     if (token) fetchOrders();
//   }, [token]);

//   if (!token) {
//     return (
//       <p className="text-center mt-10 text-red-500">
//         Please login as Admin!
//       </p>
//     );
//   }

//   return (
//     <div className="p-4 sm:p-6">
//       <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center">
//         All Orders
//       </h1>

//       {/* ✅ Mobile & Small Screen: Card Layout */}
//       <div className="space-y-4 md:hidden">
//         {orders.map((order) =>
//           order.items.map((item, idx) => (
//             <div
//               key={`${order._id}-${idx}`}
//               className="border rounded-lg p-4 shadow-sm bg-white text-xs sm:text-sm"
//             >
//               <p>
//                 <span className="font-semibold">User:</span>{" "}
//                 {order.userId.name}
//               </p>
//               <p>
//                 <span className="font-semibold">Product:</span> {item.name}
//               </p>
//               <p>
//                 <span className="font-semibold">Quantity:</span>{" "}
//                 {item.quantity}
//               </p>
//               <p>
//                 <span className="font-semibold">Status:</span> {order.status}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ✅ Tablet & Desktop: Table Layout */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="min-w-full bg-white border text-xs sm:text-sm md:text-base lg:text-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Product Name</th>
//               <th className="py-2 px-4 border">Quantity</th>
//               <th className="py-2 px-4 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) =>
//               order.items.map((item, idx) => (
//                 <tr
//                   key={`${order._id}-${idx}`}
//                   className="text-center hover:bg-gray-50"
//                 >
//                   <td className="py-2 px-4 border">{order.userId.name}</td>
//                   <td className="py-2 px-4 border">{item.name}</td>
//                   <td className="py-2 px-4 border">{item.quantity}</td>
//                   <td className="py-2 px-4 border">{order.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         // 🔑 Token localStorage se lo (jab admin login hota hai to save karna hota hai)
//         const token = localStorage.getItem("token");

//         const { data } = await axios.get(
//           "http://localhost:5000/api/order/admin/all",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`, // ✅ admin auth ke liye
//             },
//           }
//         );

//         setOrders(data);
//       } catch (error) {
//         console.error("Error fetching orders:", error.response?.data || error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Orders</h2>

//       {/* ✅ Mobile Layout (Cards) */}
//       <div className="grid grid-cols-1 gap-4 md:hidden">
//         {orders.map((order) =>
//           order.items.map((item, idx) => (
//             <div
//               key={`${order._id}-${idx}`}
//               className="border rounded-lg p-4 shadow-sm bg-white"
//             >
//               <p>
//                 <span className="font-semibold">User:</span>{" "}
//                 {order.userId?.name}
//               </p>
//               <p>
//                 <span className="font-semibold">Phone:</span>{" "}
//                 {order.userId?.phone}
//               </p>
//               <p>
//                 <span className="font-semibold">Address:</span>{" "}
//                 {order.userId?.address?.line1}, {order.userId?.address?.line2}
//               </p>
//               <p>
//                 <span className="font-semibold">Product:</span> {item.name}
//               </p>
//               <p>
//                 <span className="font-semibold">Quantity:</span> {item.quantity}
//               </p>
//               <p>
//                 <span className="font-semibold">Status:</span> {order.status}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ✅ Desktop Layout (Table) */}
//       <div className="hidden md:block">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Phone</th>
//               <th className="py-2 px-4 border">Address</th>
//               <th className="py-2 px-4 border">Product Name</th>
//               <th className="py-2 px-4 border">Quantity</th>
//               <th className="py-2 px-4 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) =>
//               order.items.map((item, idx) => (
//                 <tr
//                   key={`${order._id}-${idx}`}
//                   className="text-center hover:bg-gray-50"
//                 >
//                   <td className="py-2 px-4 border">{order.userId?.name}</td>
//                   <td className="py-2 px-4 border">{order.userId?.phone}</td>
//                   <td className="py-2 px-4 border">
//                     {order.userId?.address?.line1},{" "}
//                     {order.userId?.address?.line2}
//                   </td>
//                   <td className="py-2 px-4 border">{item.name}</td>
//                   <td className="py-2 px-4 border">{item.quantity}</td>
//                   <td className="py-2 px-4 border">{order.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderList;

// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";

// const OrderList = () => {
//   const { token } = useContext(AdminContext); // admin token
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!token) return;

//       try {
//         const { data } = await axios.get(
//           "http://localhost:5000/api/order/admin/all",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         // ✅ backend returns array directly
//         setOrders(data || []);
//       } catch (error) {
//         console.error("Error fetching orders:", error.response?.data || error);
//         setOrders([]); // fallback to empty array
//       }
//     };

//     fetchOrders();
//   }, [token]);

//   if (!token) {
//     return (
//       <p className="text-center mt-10 text-red-500">
//         Please login as Admin to view orders!
//       </p>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Orders</h2>

//       {/* ✅ Mobile Layout (Cards) */}
//       <div className="grid grid-cols-1 gap-4 md:hidden">
//         {(orders || []).map((order) =>
//           (order.items || []).map((item, idx) => (
//             <div
//               key={`${order._id}-${idx}`}
//               className="border rounded-lg p-4 shadow-sm bg-white"
//             >
//               <p>
//                 <span className="font-semibold">User:</span> {order.userId?.name}
//               </p>
//               <p>
//                 <span className="font-semibold">Phone:</span> {order.userId?.phone}
//               </p>
//               <p>
//                 <span className="font-semibold">Address:</span>{" "}
//                 {order.userId?.address?.line1}, {order.userId?.address?.line2}
//               </p>
//               <p>
//                 <span className="font-semibold">Product:</span> {item.name}
//               </p>
//               <p>
//                 <span className="font-semibold">Quantity:</span> {item.quantity}
//               </p>
//               <p>
//                 <span className="font-semibold">Status:</span> {order.status}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ✅ Desktop Layout (Table) */}
//       <div className="hidden md:block">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Phone</th>
//               <th className="py-2 px-4 border">Address</th>
//               <th className="py-2 px-4 border">Product Name</th>
//               <th className="py-2 px-4 border">Quantity</th>
//               <th className="py-2 px-4 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(orders || []).map((order) =>
//               (order.items || []).map((item, idx) => (
//                 <tr
//                   key={`${order._id}-${idx}`}
//                   className="text-center hover:bg-gray-50"
//                 >
//                   <td className="py-2 px-4 border">{order.userId?.name}</td>
//                   <td className="py-2 px-4 border">{order.userId?.phone}</td>
//                   <td className="py-2 px-4 border">
//                     {order.userId?.address?.line1},{" "}
//                     {order.userId?.address?.line2}
//                   </td>
//                   <td className="py-2 px-4 border">{item.name}</td>
//                   <td className="py-2 px-4 border">{item.quantity}</td>
//                   <td className="py-2 px-4 border">{order.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderList;

// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AdminContext } from "../context/AdminContext";

// const OrderList = () => {
//   const { token } = useContext(AdminContext); 
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!token) return;

//       try {
//         const { data } = await axios.get(
//           "http://localhost:5000/api/order/admin/all",
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setOrders(data || []);
//       } catch (error) {
//         console.error("Error fetching orders:", error.response?.data || error);
//         setOrders([]);
//       }
//     };
//     fetchOrders();
//   }, [token]);

//   if (!token) {
//     return (
//       <p className="text-center mt-10 text-red-500 font-bold text-lg">
//         Please login as Admin to view orders!
//       </p>
//     );
//   }

//   return (
//     <div className="p-6 space-y-8">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-text mb-8">
//         All Orders
//       </h2>

//       {/* 🔹 Mobile Cards */}
//       <div className="grid grid-cols-1 md:hidden gap-6">
//         {(orders || []).map((order) =>
//           (order.items || []).map((item, idx) => (
//             <div
//               key={`${order._id}-${idx}`}
//               className="p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-gray-200"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold text-lg">{item.name}</h3>
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-bold ${
//                     order.status === "Paid"
//                       ? "bg-green-100 text-green-800"
//                       : order.status === "Pending"
//                       ? "bg-yellow-100 text-yellow-800"
//                       : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {order.status}
//                 </span>
//               </div>
//               <p>
//                 <span className="font-medium">User:</span> {order.userId?.name}
//               </p>
//               <p>
//                 <span className="font-medium">Phone:</span> {order.userId?.phone}
//               </p>
//               <p>
//                 <span className="font-medium">Address:</span>{" "}
//                 {order.userId?.address?.line1}, {order.userId?.address?.line2}
//               </p>
//               <p>
//                 <span className="font-medium">Quantity:</span> {item.quantity}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* 🔹 Desktop Table */}
//       <div className="hidden md:block overflow-x-auto rounded-2xl shadow-2xl border border-gray-200">
//         <table className="w-full table-auto text-sm md:text-base lg:text-lg">
//           <thead className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white">
//             <tr>
//               <th className="py-3 px-4">User Name</th>
//               <th className="py-3 px-4">Phone</th>
//               <th className="py-3 px-4">Address</th>
//               <th className="py-3 px-4">Product</th>
//               <th className="py-3 px-4">Quantity</th>
//               <th className="py-3 px-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(orders || []).map((order) =>
//               (order.items || []).map((item, idx) => (
//                 <tr
//                   key={`${order._id}-${idx}`}
//                   className="text-center border-b border-gray-200 hover:bg-gradient-to-r hover:from-purple-50 hover:via-pink-50 hover:to-indigo-50 transition-all"
//                 >
//                   <td className="py-2 px-4">{order.userId?.name}</td>
//                   <td className="py-2 px-4">{order.userId?.phone}</td>
//                   <td className="py-2 px-4">
//                     {order.userId?.address?.line1}, {order.userId?.address?.line2}
//                   </td>
//                   <td className="py-2 px-4">{item.name}</td>
//                   <td className="py-2 px-4">{item.quantity}</td>
//                   <td className="py-2 px-4">
//                     <span
//                       className={`px-3 py-1 rounded-full font-semibold text-sm ${
//                         order.status === "Paid"
//                           ? "bg-green-200 text-green-800"
//                           : order.status === "Pending"
//                           ? "bg-yellow-200 text-yellow-800"
//                           : "bg-red-200 text-red-800"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderList;







import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("adminToken"); // 🔑 admin token

  // 🟢 Orders fetch karne ka function
  const fetchOrders = async () => {
    try {
      // const res = await axios.get("http://localhost:5000/api/order/admin/all", {
      const res = await axios.get("https://raja-electronic.onrender.com/api/order/admin/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // 🟢 Delivery status update karne ka function
  const updateDeliveryStatus = async (orderId, newStatus) => {
    try {
      await axios.put(
        // `http://localhost:5000/api/order/admin/${orderId}/status`,
        `https://raja-electronic.onrender.com/api/order/admin/${orderId}/status`,
        { deliveryStatus: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // frontend me turant update
      setOrders((prev) =>
        prev.map((o) =>
          o._id === orderId ? { ...o, deliveryStatus: newStatus } : o
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Contact</th>
              <th className="py-2 px-4 text-left">Address</th>
              <th className="py-2 px-4 text-left">Items</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Payment</th>
              <th className="py-2 px-4 text-left">Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t">
                <td className="py-2 px-4">{order.userId?.name}</td>
                <td className="py-2 px-4">{order.userId?.phone}</td>

                {/* ✅ FIXED Address */}
                <td className="py-2 px-4">
                  {order.userId?.address?.line1}, {order.userId?.address?.line2}
                </td>

                <td className="py-2 px-4">
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      {item.name} (x{item.quantity})
                    </div>
                  ))}
                </td>
                <td className="py-2 px-4">₹{order.amount}</td>
                <td className="py-2 px-4">{order.status}</td>
                <td className="py-2 px-4">
                  <select
                    value={order.deliveryStatus || "Pending"}
                    onChange={(e) =>
                      updateDeliveryStatus(order._id, e.target.value)
                    }
                    className="border rounded p-1 text-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="border rounded-lg p-4 shadow">
            <p className="font-bold">User: {order.userId?.name}</p>
            <p>Phone: {order.userId?.phone}</p>

            {/* ✅ FIXED Address */}
            <p>
              Address: {order.userId?.address?.line1},{" "}
              {order.userId?.address?.line2}
            </p>

            <p>
              Items:{" "}
              {order.items.map((item, idx) => (
                <span key={idx}>
                  {item.name} (x{item.quantity}){" "}
                </span>
              ))}
            </p>
            <p>Amount: ₹{order.amount}</p>
            <p>Payment: {order.status}</p>

            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">
                Delivery Status
              </label>
              <select
                value={order.deliveryStatus || "Pending"}
                onChange={(e) =>
                  updateDeliveryStatus(order._id, e.target.value)
                }
                className="border rounded p-1 text-sm w-full"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
