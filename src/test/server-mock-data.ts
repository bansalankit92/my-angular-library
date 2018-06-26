export class MockData {
    
    public static apidata: any = {
    "content": [
        {
        "uuid": "fca7800c-12ae-4ef5-8318-dd537aa5a224",
        "title": "ECG",
        "host": "tmvitdmz01-lv.dmz.lab.shutterfly.com",
        "port": -1,
        "fileTransferMethod": "SFTP",
        "credentials": {
            "username": "auto-mc",
            "password": null
        },
        "effectiveInterval": {
            "startDate": "2017-10-17",
            "endDate": "9999-12-31"
        },
        "effectiveStatus": "Active",
        "auditHistory": {
            "createdBy": null,
            "createdDate": "2017-10-16T10:20:15.566-0500",
            "updatedBy": "testMsid",
            "updatedDate": "2017-11-14T00:32:27.154-0600"
        }
        },
        {
        "uuid": "35406a03-01b8-4b60-a135-a009905428b6",
        "title": "Test",
        "host": "test.shutterfly.com",
        "port": -1,
        "fileTransferMethod": "SFTP",
        "credentials": {
            "username": "test",
            "password": null
        },
        "effectiveInterval": {
            "startDate": "2018-01-18",
            "endDate": "9999-12-31"
        },
        "effectiveStatus": "Active",
        "auditHistory": {
            "createdBy": "testMsid",
            "createdDate": "2018-01-17T05:51:05.229-0600",
            "updatedBy": "testMsid",
            "updatedDate": "2018-01-17T05:51:05.229-0600"
        }
        }
    ],
    "last": true,
    "totalPages": 1,
    "totalElements": 2,
    "size": 20,
    "number": 0,
    "sort": [
        {
        "direction": "ASC",
        "property": "title",
        "ignoreCase": false,
        "nullHandling": "NATIVE",
        "ascending": true,
        "descending": false
        }
    ],
    "first": true,
    "numberOfElements": 2
};

public static configData : any = {"fileTransferMethods":["SFTP","NAS"]}
}