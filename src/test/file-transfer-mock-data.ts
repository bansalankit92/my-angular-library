export class MockData {

public static apidata: any =  [{
        "fileTransferDetailsId": "ReDelivery_outbound",
        "requestType": "ReDelivery",
        "requestCategory": "TransactionalExternalPrintReady",
        "direction": "OUTBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "Hub",
        "targetParticipantId": "RRD",
        "sourceFilePath": "./s3Files",
        "destinationFilePath": "MissionControl/RRD/",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-07-16"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": null,
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "ReDelivery_inbound",
        "requestType": "ReDelivery",
        "requestCategory": "TransactionalExternalPrintReady",
        "direction": "INBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "ACET",
        "targetParticipantId": "Hub",
        "sourceFilePath": "MissionControl/ACET/",
        "destinationFilePath": "./s3Files",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-07-16"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": null,
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "post_inbound",
        "requestType": "PostStatus",
        "requestCategory": "BulkDataOnly",
        "direction": "INBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "RRD",
        "targetParticipantId": "MC",
        "sourceFilePath": "/MissionControl/RRD/",
        "destinationFilePath": "MissionControl/s3Files",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-07-16"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "BRMS- Oxford_Hub_process_Inbound",
        "requestType": "Process",
        "requestCategory": "BulkDataOnly",
        "direction": "INBOUND",
        "requestorParticipantId": "BRMS",
        "sourceParticipantId": "BRMS",
        "targetParticipantId": "Hub",
        "sourceFilePath": "MissionControl/bulkFiles/BRMS/",
        "destinationFilePath": "MissionControl/bulkFiles/BRMS/",
        "effectiveInterval": {
            "startDate": "2017-09-08",
            "endDate": "2020-02-18"
        },
        "serverUuid": "91569704-637b-4b30-8a60-a196ac0387cd",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": "21396c13-1b83-49a5-8a80-71ef5f0dbe2f",
        "auditHistory": {
            "createdBy": "testMsid",
            "createdDate": "2017-09-08T05:23:16.540-0500",
            "updatedBy": "testMsid",
            "updatedDate": "2017-09-08T05:23:16.540-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "11300"
    },
    {
        "fileTransferDetailsId": "post_outbound",
        "requestType": "PostStatus",
        "requestCategory": "BulkDataOnly",
        "direction": "OUTBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "MC",
        "targetParticipantId": "ACET",
        "sourceFilePath": "./MissionControl/s3Files",
        "destinationFilePath": "/MissionControl/Acet",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-09-16"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Active",
        "transferViaHub": false,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "process_batch_outbound",
        "requestType": "Process",
        "requestCategory": "BulkDataOnly",
        "direction": "OUTBOUND",
        "requestorParticipantId": "MC",
        "sourceParticipantId": "MC",
        "targetParticipantId": "RRD",
        "sourceFilePath": "MissionControl/s3Files",
        "destinationFilePath": "MissionControl/RRD",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-09-16"
        },
        "serverUuid": "91569704-637b-4b30-8a60-a196ac0387cd",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "process_outbound",
        "requestType": "Process",
        "requestCategory": "BulkDataOnly",
        "direction": "OUTBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "MC",
        "targetParticipantId": "RRD",
        "sourceFilePath": "./s3Files/",
        "destinationFilePath": "MissionControl/RRD",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-07-10"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Active",
        "transferViaHub": false,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-07-10T02:58:24.515-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "archive_outbound",
        "requestType": "Archive",
        "requestCategory": "BulkDataOnly",
        "direction": "OUTBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "MC",
        "targetParticipantId": "EDMS",
        "sourceFilePath": "./s3Files/",
        "destinationFilePath": "MissionControl/EDMS",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2017-07-16"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Retired",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": null,
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "Process_Archive_Inbound_SBS_Hub_EDMS",
        "requestType": "Archive",
        "requestCategory": "BulkDataOnly",
        "direction": "INBOUND",
        "requestorParticipantId": "BRMS",
        "sourceParticipantId": "SBS",
        "targetParticipantId": "Hub",
        "sourceFilePath": "MissionControl/Archive/SBS/",
        "destinationFilePath": "MissionControl/ProcessArchive/",
        "effectiveInterval": {
            "startDate": "2017-09-28",
            "endDate": "2019-12-04"
        },
        "serverUuid": "91569704-637b-4b30-8a60-a196ac0387cd",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": "a09a06fc-9895-472c-8d05-b7143787041d",
        "auditHistory": {
            "createdBy": "testMsid",
            "createdDate": "2017-09-28T02:35:23.224-0500",
            "updatedBy": "testMsid",
            "updatedDate": "2017-09-28T02:35:23.224-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "11300"
    },
    {
        "fileTransferDetailsId": "Process_Archive_Outbound_SBS_Hub_EDMS",
        "requestType": "Archive",
        "requestCategory": "BulkDataOnly",
        "direction": "OUTBOUND",
        "requestorParticipantId": "BRMS",
        "sourceParticipantId": "Hub",
        "targetParticipantId": "EDMS",
        "sourceFilePath": "MissionControl/ProcessArchive/",
        "destinationFilePath": "MissionControl/ProcessArchive/EDMS/",
        "effectiveInterval": {
            "startDate": "2017-09-28",
            "endDate": "2019-10-03"
        },
        "serverUuid": "91569704-637b-4b30-8a60-a196ac0387cd",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": "b885858b-9777-4cc6-a98a-d823ed288fc2",
        "auditHistory": {
            "createdBy": "testMsid",
            "createdDate": "2017-09-28T02:38:38.806-0500",
            "updatedBy": "testMsid",
            "updatedDate": "2017-09-28T02:38:38.806-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "11300"
    },
    {
        "fileTransferDetailsId": "archive_inbound",
        "requestType": "Archive",
        "requestCategory": "TransactionalExternalPrintReady",
        "direction": "INBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "RRD",
        "targetParticipantId": "MC",
        "sourceFilePath": "MissionControl/ACET/",
        "destinationFilePath": "./s3Files",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-07-16"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Active",
        "transferViaHub": false,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "process_inbound",
        "requestType": "Process",
        "requestCategory": "BulkDataOnly",
        "direction": "INBOUND",
        "requestorParticipantId": "ACET",
        "sourceParticipantId": "ACET",
        "targetParticipantId": "MC",
        "sourceFilePath": "MissionControl/Acet/",
        "destinationFilePath": "./s3Files",
        "effectiveInterval": {
            "startDate": "2017-06-15",
            "endDate": "2018-07-15"
        },
        "serverUuid": "bfbb53e0-a028-4781-8d07-72a305ce3772",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": null,
        "auditHistory": {
            "createdBy": "fulfillmenthub_user",
            "createdDate": "2017-06-17T02:21:02.193-0500",
            "updatedBy": "fulfillmenthub_user",
            "updatedDate": "2017-06-17T02:58:24.515-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "10500"
    },
    {
        "fileTransferDetailsId": "BRMS- Oxford_SBS_process_Outbound",
        "requestType": "Process",
        "requestCategory": "BulkDataOnly",
        "direction": "OUTBOUND",
        "requestorParticipantId": "BRMS",
        "sourceParticipantId": "Hub",
        "targetParticipantId": "SBS",
        "sourceFilePath": "MissionControl/bulkFiles/BRMS/",
        "destinationFilePath": "MissionControl/bulkFiles/SBS/",
        "effectiveInterval": {
            "startDate": "2017-09-08",
            "endDate": "2018-11-27"
        },
        "serverUuid": "91569704-637b-4b30-8a60-a196ac0387cd",
        "status": "Active",
        "transferViaHub": true,
        "fileNamingPattern": "bulk",
        "uuid": "2f971237-1a4e-45f6-86ae-fe6e732f69a7",
        "auditHistory": {
            "createdBy": "testMsid",
            "createdDate": "2017-09-08T05:25:04.834-0500",
            "updatedBy": "testMsid",
            "updatedDate": "2017-09-08T05:25:04.834-0500"
        },
        "transferMethod": "SFTP",
        "materialType": "11300"
        }
    ]
}