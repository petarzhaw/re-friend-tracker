export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Ismets, Yves and Petars Friend Tracker",
            "formList": [
                {
                    "id": "EditFriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [

                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Activity",
                            "width": 2,
                            "required": true
                        },

                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2 
                            
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                        },
                        {
                            "id": "creationdate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok " 
                        }
                    ]
                },
                {
                    "id": "AddAvailableActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddLocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                        },
                        {

                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "creationdate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                        },
                        {

                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-users",
                            "color": "amethyst",
                            "page": "groupspage",
                        }, 
                        { 
                            "type": "button",
                            "name": "Activities",
                            "icon": "fa-hiking",
                            "color": "alizarin",
                            "page": "activitiespage",
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "EditFriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "green",
                            "search": true,
                            "url": "/friend",
                            "page": "editfriendspage",
                        },
                    ]
                },
                {
                    "id": "editfriendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },

                        {
                            "type": "newButton",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "EditFriendForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "AddAvailableActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "pink",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "purple",
                            "width": 2,
                            "form": {
                                "form": "AddLocationForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "EditLocations",
                            "icon": "fa-home",
                            "color": "purple",
                            "page": "editlocationpage",
                            
                        },

                       {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "activitylocationpage",
                        },
                    ]
                },
                {
                    "id": "activitylocationpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                         {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "AddAvailableActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "pink",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                        },
                       ]
                },

                {
                    "id": "editlocationpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                       
                                                {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-weixin",
                            "color": "green",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                    ]
                },
                {
                    "id": "activitiespage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-home",
                            "color": "purple",
                            "width": 2,
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "EditActivity",
                            "icon": "fa-home",
                            "color": "purple",
                            "page": "editactivitiespage",
                            
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "orange",
                            "search": true,
                            "url": "/activity",
                            "page" : "friendsactivitypage"
                        },
                    ]
                },

                 {
                    "id": "friendsactivitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },

                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "pink",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                        },
                       ]
                },
                {
                    "id": "editactivitiespage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "orange",
                            "search": true,
                            "url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },

            ]
        }
    };


    get guiModel() {
        return this._guiModel;
        
    }
}
