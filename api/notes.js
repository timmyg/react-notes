const Airtable = require("airtable");

export default async (req, res) => {
  console.log(process.env);
  const {
    airtable_base: airtableBase,
    airtable_api_key: airtableApiKey,
  } = process.env;
  console.log(process.env.airtable_base);
  console.log(process.env.airtable_api_key);
  console.log(object);
  console.log({ airtableBase, airtableApiKey });
  const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBase);
  const notesTable = base("notes");
  switch (req.method) {
    case "GET": {
      res.statusCode = 200;
      const allNotes = await notesTable
        .select({ sort: [{ field: "createdAt", direction: "asc" }] })
        .all();
      const notes = allNotes.map((n) => {
        return { ...n.fields, id: n.id };
      });
      return res.send(notes);
    }
    case "POST": {
      const { text, color, key } = JSON.parse(req.body);
      const newNote = await notesTable.create({
        text,
        color,
        key,
      });
      res.statusCode = 201;
      return res.send({ id: newNote.id, ...newNote.fields });
    }
    case "PUT": {
      const { text, color, key, id } = JSON.parse(req.body);
      const fields = {
        text,
        color,
      };
      await notesTable.update([
        {
          id,
          fields,
        },
      ]);
      res.statusCode = 200;
      return res.send();
    }
    case "DELETE": {
      const { id } = JSON.parse(req.body);
      await notesTable.destroy([id]);
      res.statusCode = 200;
      return res.send();
    }
    default:
      res.statusCode = 404;
      return res.send();
  }
};
