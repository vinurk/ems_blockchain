
    let WALLET_CONNECTED = 0;

    let contractAddress = "0x10c847cfeaA84c1Fd228743FEFA1b7A6e177E295"; 
    let contractAbi = [
        {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_caseid",
            "type": "uint256"
            },
            {
            "internalType": "string",
            "name": "_name",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "_description",
            "type": "string"
            },
            {
            "internalType": "enum EvidenceManager.CaseType",
            "name": "_caseType",
            "type": "uint8"
            },
            {
            "internalType": "string",
            "name": "_location",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "_caseDescription",
            "type": "string"
            },
            {
            "internalType": "enum EvidenceManager.EvidenceType",
            "name": "_evidenceType",
            "type": "uint8"
            }
        ],
        "name": "addEvidence",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_evidenceId",
            "type": "uint256"
            }
        ],
        "name": "approveEvidence",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "getAllEvidence",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "caseid",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceStatus",
                "name": "status",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.Evidence[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_evidenceId",
            "type": "uint256"
            }
        ],
        "name": "getCaseUpdates",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "evidenceId",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.EvidenceUpdate[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_evidenceId",
            "type": "uint256"
            }
        ],
        "name": "getEvidence",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "caseid",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceStatus",
                "name": "status",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.Evidence",
            "name": "",
            "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "enum EvidenceManager.CaseType",
            "name": "_caseType",
            "type": "uint8"
            }
        ],
        "name": "getEvidenceByCaseType",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "caseid",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceStatus",
                "name": "status",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.Evidence[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_date",
            "type": "uint256"
            }
        ],
        "name": "getEvidenceByDate",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "caseid",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceStatus",
                "name": "status",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.Evidence[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "string",
            "name": "_location",
            "type": "string"
            }
        ],
        "name": "getEvidenceByLocation",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "caseid",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceStatus",
                "name": "status",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.Evidence[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "enum EvidenceManager.EvidenceStatus",
            "name": "_status",
            "type": "uint8"
            }
        ],
        "name": "getEvidenceByStatus",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "caseid",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceStatus",
                "name": "status",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.Evidence[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "enum EvidenceManager.EvidenceType",
            "name": "_evidenceType",
            "type": "uint8"
            }
        ],
        "name": "getEvidenceByType",
        "outputs": [
            {
            "components": [
                {
                "internalType": "uint256",
                "name": "caseid",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "description",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.CaseType",
                "name": "caseType",
                "type": "uint8"
                },
                {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
                },
                {
                "internalType": "string",
                "name": "location",
                "type": "string"
                },
                {
                "internalType": "string",
                "name": "caseDescription",
                "type": "string"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceType",
                "name": "evidenceType",
                "type": "uint8"
                },
                {
                "internalType": "enum EvidenceManager.EvidenceStatus",
                "name": "status",
                "type": "uint8"
                }
            ],
            "internalType": "struct EvidenceManager.Evidence[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "getEvidenceCount",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_evidenceId",
            "type": "uint256"
            }
        ],
        "name": "rejectEvidence",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_evidenceId",
            "type": "uint256"
            },
            {
            "internalType": "string",
            "name": "_name",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "_description",
            "type": "string"
            },
            {
            "internalType": "enum EvidenceManager.CaseType",
            "name": "_caseType",
            "type": "uint8"
            },
            {
            "internalType": "string",
            "name": "_location",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "_caseDescription",
            "type": "string"
            },
            {
            "internalType": "enum EvidenceManager.EvidenceType",
            "name": "_evidenceType",
            "type": "uint8"
            }
        ],
        "name": "updateEvidence",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ];

    const connectMetaMask = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum); 
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        WALLET_CONNECTED = await signer.getAddress();
        var element = document.getElementById("metamask_notification"); 
        element.innerHTML = "Metamask is connected " + WALLET_CONNECTED;
            
    }
    

    const getAllEvidences = async() => {
        if(WALLET_CONNECTED != 0) {
            console.log(WALLET_CONNECTED)
            // var p3 = document.getElementById("p3");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
            // p3.innerHTML = "Please wait, getting all the tasks from the smart contract";
            var tasks = await contractInstance.getAllEvidence();
            // console.log("tasks",tasks);
            
            // var table = document.getElementById("myTable");

            // for (let i = 0; i < tasks.length; i++) {
            //     var row = table.insertRow();
            //     var idCell = row.insertCell();
            //     var descCell = row.insertCell();
            //     var statusCell = row.insertCell();

            //     const status = tasks[i].status == 0 ? "Pending" : "Finished";

            //     idCell.innerHTML = i;
            //     descCell.innerHTML = tasks[i].desc;
            //     statusCell.innerHTML = status;
            // }

            // p3.innerHTML = "The tasks are updated"
        }
        else {
            var p3 = document.getElementById("p3");
            // p3.innerHTML = "Please connect metamask first";
        }
    }