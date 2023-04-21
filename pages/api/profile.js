import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("selftrain");
  switch (req.method) {
    case "POST":
        let bodyObject = JSON.parse(req.body);
        let myPost = await db.collection("profiles").insertOne(bodyObject);
        res.json(myPost.ops[0]);
        break;
    case "GET":
        const allProfiles = await db.collection("profiles").find({}).toArray();
        res.json({ status: 200, data: allProfiles });
        break;
  }
}
