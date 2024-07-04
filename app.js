const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contractAddress = '';

const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_studentName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "_grade",
                "type": "uint8"
            }
        ],
        "name": "addGrade",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_studentName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "_newGrade",
                "type": "uint8"
            }
        ],
        "name": "updateGrade",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_studentName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            }
        ],
        "name": "getGrade",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            }
        ],
        "name": "averageGrade",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contract = new ethers.Contract(contractAddress, abi, signer);

async function addGrade() {
    const studentName = document.getElementById('addStudentName').value;
    const subject = document.getElementById('addSubject').value;
    const grade = document.getElementById('addGrade').value;
    await contract.addGrade(studentName, subject, grade);
}

async function updateGrade() {
    const studentName = document.getElementById('updateStudentName').value;
    const subject = document.getElementById('updateSubject').value;
    const grade = document.getElementById('updateGrade').value;
    await contract.updateGrade(studentName, subject, grade);
}

async function getGrade() {
    const studentName = document.getElementById('getStudentName').value;
    const subject = document.getElementById('getSubject').value;
    const grade = await contract.getGrade(studentName, subject);
    document.getElementById('displayGrade').innerText = `Grade: ${grade}`;
}

async function averageGrade() {
    const subject = document.getElementById('avgSubject').value;
    const avgGrade = await contract.averageGrade(subject);
    document.getElementById('displayAvgGrade').innerText = `Average Grade: ${avgGrade}`;
}

async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
}

requestAccount();
