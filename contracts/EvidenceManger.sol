// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EvidenceManager {
    enum EvidenceStatus {Pending, Approved, Rejected}
    enum CaseType {Civil, Criminal}
    enum EvidenceType {Document, Video, Audio, Image, Other}

    uint256 cid = 0;
    address owner;

    struct EvidenceUpdate {
        uint256 evidenceId;
        string name;
        string description;
        CaseType caseType;
        string location;
        string caseDescription;
        EvidenceType evidenceType;
    }

    struct Evidence {
        uint256 caseid;
        string name;
        string description;
        CaseType caseType;
        uint256 date;
        string location;
        string caseDescription;
        EvidenceType evidenceType;
        EvidenceStatus status;
    }

    Evidence[] evidences;
    EvidenceUpdate[] updates;

    constructor() {
        owner = msg.sender;
    }  
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
        
    }
    function addEvidence(uint256 _caseid, string memory _name, string memory _description, CaseType _caseType, string memory _location, string memory _caseDescription, EvidenceType _evidenceType) public onlyOwner {
        evidences.push(Evidence(_caseid, _name, _description, _caseType, block.timestamp, _location, _caseDescription, _evidenceType, EvidenceStatus.Pending));
    }

    function approveEvidence(uint256 _evidenceId) public onlyOwner {
        evidences[_evidenceId].status = EvidenceStatus.Approved;
    }

    function rejectEvidence(uint256 _evidenceId) public onlyOwner {
        evidences[_evidenceId].status = EvidenceStatus.Rejected;
    }

    function getEvidence(uint256 _evidenceId) public view returns (Evidence memory) {
        return evidences[_evidenceId];
    }

    function getAllEvidence() public view returns (Evidence[] memory) {
        return evidences;
    }
    
    function getEvidenceCount() public view returns (uint256) {
        return evidences.length;
    }


    function getEvidenceByStatus(EvidenceStatus _status) public view returns (Evidence[] memory) {
        Evidence[] memory result = new Evidence[](evidences.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < evidences.length; i++) {
            if (evidences[i].status == _status) {
                result[counter] = evidences[i];
                counter++;
            }
        }
        return result;
    }

    function getEvidenceByType(EvidenceType _evidenceType) public view returns (Evidence[] memory) {
        Evidence[] memory result = new Evidence[](evidences.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < evidences.length; i++) {
            if (evidences[i].evidenceType == _evidenceType) {
                result[counter] = evidences[i];
                counter++;
            }
        }
        return result;
    }

    function getEvidenceByCaseType(CaseType _caseType) public view returns (Evidence[] memory) {
        Evidence[] memory result = new Evidence[](evidences.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < evidences.length; i++) {
            if (evidences[i].caseType == _caseType) {
                result[counter] = evidences[i];
                counter++;
            }
        }
        return result;
    }

    function getEvidenceByDate(uint256 _date) public view returns (Evidence[] memory) {
        Evidence[] memory result = new Evidence[](evidences.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < evidences.length; i++) {
            if (evidences[i].date == _date) {
                result[counter] = evidences[i];
                counter++;
            }
        }
        return result;
    }

    function getEvidenceByLocation(string memory _location) public view returns (Evidence[] memory) {
        Evidence[] memory result = new Evidence[](evidences.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < evidences.length; i++) {
            if (keccak256(abi.encodePacked(evidences[i].location)) == keccak256(abi.encodePacked(_location))) {
                result[counter] = evidences[i];
                counter++;
            }
        }
        return result;
    }

    function updateEvidence(uint256 _evidenceId, string memory _name, string memory _description, CaseType _caseType, string memory _location, string memory _caseDescription, EvidenceType _evidenceType) public onlyOwner {
        updates.push(EvidenceUpdate(_evidenceId, _name, _description, _caseType, _location, _caseDescription, _evidenceType));
    }

    function getCaseUpdates(uint256 _evidenceId) public view returns (EvidenceUpdate[] memory) {
        EvidenceUpdate[] memory result = new EvidenceUpdate[](updates.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < updates.length; i++) {
            if (updates[i].evidenceId == _evidenceId) {
                result[counter] = updates[i];
                counter++;
            }
        }
        return result;
    }
    

}