export const schema = {
    "models": {
        "Review": {
            "name": "Review",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user_id": {
                    "name": "user_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "vendor_id": {
                    "name": "vendor_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "reviewerName": {
                    "name": "reviewerName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "comment": {
                    "name": "comment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "s3_photo_bucket_url": {
                    "name": "s3_photo_bucket_url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Reviews",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "VendorInfo": {
            "name": "VendorInfo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userid": {
                    "name": "userid",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "specialties": {
                    "name": "specialties",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "hours": {
                    "name": "hours",
                    "isArray": false,
                    "type": {
                        "nonModel": "HoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": {
                        "nonModel": "AddressJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "VendorInfos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "BusinessHoursJSON": {
            "name": "BusinessHoursJSON",
            "fields": {
                "close": {
                    "name": "close",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "open": {
                    "name": "open",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "HoursJSON": {
            "name": "HoursJSON",
            "fields": {
                "monday": {
                    "name": "monday",
                    "isArray": false,
                    "type": {
                        "nonModel": "BusinessHoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tuesday": {
                    "name": "tuesday",
                    "isArray": false,
                    "type": {
                        "nonModel": "BusinessHoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "wednesday": {
                    "name": "wednesday",
                    "isArray": false,
                    "type": {
                        "nonModel": "BusinessHoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "thursday": {
                    "name": "thursday",
                    "isArray": false,
                    "type": {
                        "nonModel": "BusinessHoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "friday": {
                    "name": "friday",
                    "isArray": false,
                    "type": {
                        "nonModel": "BusinessHoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "saturday": {
                    "name": "saturday",
                    "isArray": false,
                    "type": {
                        "nonModel": "BusinessHoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sunday": {
                    "name": "sunday",
                    "isArray": false,
                    "type": {
                        "nonModel": "BusinessHoursJSON"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AddressJSON": {
            "name": "AddressJSON",
            "fields": {
                "zipcode": {
                    "name": "zipcode",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "streetAddress": {
                    "name": "streetAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "c4ca4d8812b7edac311afa1ed78bd855"
};