// api/hello.js
export default function handler(req, res) {
  // This console.log will run on the server
  console.log("Thiaryans is running on the server side in Vercel!");

  // You can do any server-side processing here

  // Send a response
  res.status(200).json({ message: "Hello faryanrom the server!" });
}
