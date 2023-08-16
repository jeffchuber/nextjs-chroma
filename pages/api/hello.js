const { ChromaClient } = require('chromadb');


export default function handler(req, res) {
  const client = new ChromaClient();
  const heartbeatFn = async () => {
    return await client.heartbeat();
  }
  let heartbeat = heartbeatFn();
  res.status(200).json({ heartbeat })
}