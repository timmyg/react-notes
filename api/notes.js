const Airtable = require("airtable");

export default async (req, res) => {
  const {
    airtable_base: airtableBase,
    airtable_api_key: airtableApiKey,
  } = process.env;
  console.log(airtableBase, airtableApiKey);
  const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBase);
  const notesTable = base("notes");
  if (req.method === "GET") {
    res.statusCode = 200;
    const allNotes = await notesTable.select().all();
    res.send(allNotes);
  } else if (req.method === "POST") {
    const { text, color } = JSON.parse(req.body);
    const data = await notesTable.create({
      text,
      color,
    });
    res.statusCode = 201;
    res.send({ test: req.method });
  } else if (req.method === "PUT") {
    console.log(req.body);
    res.statusCode = 200;
    res.send({ test: req.method });
  } else if (req.method === "DELETE") {
    console.log(req.body);
    res.statusCode = 200;
    res.send({ test: req.method });
  } else {
    res.statusCode = 404;
    res.send();
  }
};
