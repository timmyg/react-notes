const Airtable = require("airtable");

export default async (req, res) => {
  const {
    airtable_base: airtableBase,
    airtable_api_key: airtableApiKey,
  } = process.env;
  const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBase);
  const notesTable = base("notes");
  if (req.method === "GET") {
    res.statusCode = 200;
    const allNotes = await notesTable
      .select({ sort: [{ field: "createdAt", direction: "asc" }] })
      .all();
    const notes = allNotes.map((n) => {
      return n.fields;
    });
    res.send(notes);
  } else if (req.method === "POST") {
    const { text, color } = JSON.parse(req.body);
    const newNote = await notesTable.create({
      text,
      color,
    });
    res.statusCode = 201;
    return res.send({ id: newNote.id, ...newNote.fields });
  } else if (req.method === "PUT") {
    res.statusCode = 200;
    res.send({ test: req.method });
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.send({ test: req.method });
  } else {
    res.statusCode = 404;
    res.send();
  }
};
