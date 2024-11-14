import AuthController from ".../PTAS-6-Semestre/controllers/AuthController";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await AuthController.login(req, res);
  }
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}


// ISSO PORQUE ENQUANTO É INÚTIL