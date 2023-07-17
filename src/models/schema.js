export const schema = {
    "models": {
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
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
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
    "version": "8aae1f670333ac99d3d9b7473cfb1d54"
};