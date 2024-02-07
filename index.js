require('dotenv').config();

const express = require('express'); 
const app = express();

const fileUpload = require('express-fileupload');
app.use(
    fileUpload({
        extended:true
    })
)
app.use(express.static(__dirname));
app.use(express.json());
const path = require('path');
const ethers  = require('ethers');

var port = 4000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
}
);  

app.get('/hello', function(req, res) {
  console.log("helo world");
  // res.sendFile(path.join(__dirname + '/index.html'));
}
);  

app.get("/index.html", function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
}
);

const API_URL = process.env.API_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const provider = new ethers.providers.JsonRpcProvider(API_URL);

const {abi} = require('/home/vinurk/ems_blockchain/artifacts/contracts/EvidenceManger.sol/EvidenceManager.json');
const signer    = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
console.log("contract",abi);
app.post('/addEvidence', async (req, res) => {
  case_id = 1
  var evidence = req.body;
  // console.log("task",task);
  // console.log("req.body",req.body);
  // console.log("req.body.evidence",res);
  
  console.log(req.body);
  async function storeDatainBlockchain(evidence) {
    // const { evidence } = req.body;
    // console.log("jhdsfhj",evidence);
    const tx = await contract.addEvidence(case_id,evidence.caseName,evidence.evidenceDescription,0,evidence.location,evidence.caseDescription,0);
    await tx.wait();
    res.json({ status: "ok" });

  }
  await storeDatainBlockchain(evidence);
  res.send("The task has been added to the blockchain");

}
);

app.post("/changeEvidenceStatus", async (req, res) => {
  var task = req.body.task;
  async function changeStatus() {
    const { evidence } = req.body;
    const tx = await contract.changeEvidenceStatus(evidence);
    await tx.wait();
    res.json({ status: "ok" });
  }
  await changeStatus(task);
  res.send("The status of the evidence has been changed");

}
);

app.listen(port, function () {
  console.log("App is listening on port 3000")
});
 