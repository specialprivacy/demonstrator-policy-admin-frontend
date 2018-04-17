import Service from '@ember/service';

export default Service.extend({
  dataCollections: [
    {"label":"Activity", "value":"http://www.specialprivacy.eu/vocabs/data#Activity"},
    {"label":"Anonymized", "value":"http://www.specialprivacy.eu/vocabs/data#Anonymized"},
    {"label":"AudiovisualActivity", "value":"http://www.specialprivacy.eu/vocabs/data#AudiovisualActivity"},
    {"label":"Computer", "value":"http://www.specialprivacy.eu/vocabs/data#Computer"},
    {"label":"Content", "value":"http://www.specialprivacy.eu/vocabs/data#Content"},
    {"label":"Demographic", "value":"http://www.specialprivacy.eu/vocabs/data#Demographic"},
    {"label":"Derived", "value":"http://www.specialprivacy.eu/vocabs/data#Derived"},
    {"label":"Financial", "value":"http://www.specialprivacy.eu/vocabs/data#Financial"},
    {"label":"Government", "value":"http://www.specialprivacy.eu/vocabs/data#Government"},
    {"label":"Health", "value":"http://www.specialprivacy.eu/vocabs/data#Health"},
    {"label":"Interactive", "value":"http://www.specialprivacy.eu/vocabs/data#Interactive"},
    {"label":"Judicial", "value":"http://www.specialprivacy.eu/vocabs/data#Judicial"},
    {"label":"Location", "value":"http://www.specialprivacy.eu/vocabs/data#Location"},
    {"label":"Navigation", "value":"http://www.specialprivacy.eu/vocabs/data#Navigation"},
    {"label":"Online", "value":"http://www.specialprivacy.eu/vocabs/data#Online"},
    {"label":"OnlineActivity", "value":"http://www.specialprivacy.eu/vocabs/data#OnlineActivity"},
    {"label":"Physical", "value":"http://www.specialprivacy.eu/vocabs/data#Physical"},
    {"label":"PhysicalActivity", "value":"http://www.specialprivacy.eu/vocabs/data#PhysicalActivity"},
    {"label":"Political", "value":"http://www.specialprivacy.eu/vocabs/data#Political"},
    {"label":"Preference", "value":"http://www.specialprivacy.eu/vocabs/data#Preference"},
    {"label":"Profile", "value":"http://www.specialprivacy.eu/vocabs/data#Profile"},
    {"label":"Purchase", "value":"http://www.specialprivacy.eu/vocabs/data#Purchase"},
    {"label":"Social", "value":"http://www.specialprivacy.eu/vocabs/data#Social"},
    {"label":"State", "value":"http://www.specialprivacy.eu/vocabs/data#State"},
    {"label":"Statistical", "value":"http://www.specialprivacy.eu/vocabs/data#Statistical"},
    {"label":"TelecomActivity", "value":"http://www.specialprivacy.eu/vocabs/data#TelecomActivity"},
    {"label":"UniqueId", "value":"http://www.specialprivacy.eu/vocabs/data#UniqueId"},
  ],

  locationCollections: [
    {"label": "ControllerServers", "value": "http://www.specialprivacy.eu/vocabs/data#ControllerServers"},
    {"label": "EU", "value": "http://www.specialprivacy.eu/vocabs/data#EU"},
    {"label": "EULike", "value": "http://www.specialprivacy.eu/vocabs/data#EULike"},
    {"label": "ThirdCountries", "value": "http://www.specialprivacy.eu/vocabs/data#ThirdCountries"},
    {"label": "OurServers", "value": "http://www.specialprivacy.eu/vocabs/data#OurServers"},
    {"label": "ProcessorServers", "value": "http://www.specialprivacy.eu/vocabs/data#ProcessorServers"},
    {"label": "ThirdParty", "value": "http://www.specialprivacy.eu/vocabs/data#ThirdParty"}
  ],

  processCollections: [
    {"label": "Aggregate", "value": "http://www.specialprivacy.eu/vocabs/data#Aggregate"},
    {"label": "Analyze", "value": "http://www.specialprivacy.eu/vocabs/data#Analyze"},
    {"label": "Anonymize", "value": "http://www.specialprivacy.eu/vocabs/data#Anonymize"},
    {"label": "Collect", "value": "http://www.specialprivacy.eu/vocabs/data#Collect"},
    {"label": "Copy", "value": "http://www.specialprivacy.eu/vocabs/data#Copy"},
    {"label": "Derive", "value": "http://www.specialprivacy.eu/vocabs/data#Derive"},
    {"label": "Move", "value": "http://www.specialprivacy.eu/vocabs/data#Move"},
    {"label": "Query", "value": "http://www.specialprivacy.eu/vocabs/data#Query"},
    {"label": "Transfer", "value": "http://www.specialprivacy.eu/vocabs/data#Transfer"}
  ],

  purposeCollections: [
    {"label": "Account", "value": "http://www.specialprivacy.eu/vocabs/data#Account"},
    {"label": "Admin", "value": "http://www.specialprivacy.eu/vocabs/data#Admin"},
    {"label": "AnyContact", "value": "http://www.specialprivacy.eu/vocabs/data#AnyContact"},
    {"label": "Arts", "value": "http://www.specialprivacy.eu/vocabs/data#Arts"},
    {"label": "AuxPurpose", "value": "http://www.specialprivacy.eu/vocabs/data#AuxPurpose"},
    {"label": "Browsing", "value": "http://www.specialprivacy.eu/vocabs/data#Browsing"},
    {"label": "Charity", "value": "http://www.specialprivacy.eu/vocabs/data#Charity"},
    {"label": "Communicate", "value": "http://www.specialprivacy.eu/vocabs/data#Communicate"},
    {"label": "Current", "value": "http://www.specialprivacy.eu/vocabs/data#Current"},
    {"label": "Custom", "value": "http://www.specialprivacy.eu/vocabs/data#Custom"},
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/data#Delivery"},
    {"label": "Develop", "value": "http://www.specialprivacy.eu/vocabs/data#Develop"},
    {"label": "Downloads", "value": "http://www.specialprivacy.eu/vocabs/data#Downloads"},
    {"label": "Education", "value": "http://www.specialprivacy.eu/vocabs/data#Education"},
    {"label": "Feedback", "value": "http://www.specialprivacy.eu/vocabs/data#Feedback"},
    {"label": "Finmgt", "value": "http://www.specialprivacy.eu/vocabs/data#Finmgt"},
    {"label": "Gambling", "value": "http://www.specialprivacy.eu/vocabs/data#Gambling"},
    {"label": "Gaming", "value": "http://www.specialprivacy.eu/vocabs/data#Gaming"},
    {"label": "Government", "value": "http://www.specialprivacy.eu/vocabs/data#Government"},
    {"label": "Health", "value": "http://www.specialprivacy.eu/vocabs/data#Health"},
    {"label": "Historical", "value": "http://www.specialprivacy.eu/vocabs/data#Historical"},
    {"label": "Login", "value": "http://www.specialprivacy.eu/vocabs/data#Login"},
    {"label": "Marketing", "value": "http://www.specialprivacy.eu/vocabs/data#Marketing"},
    {"label": "News", "value": "http://www.specialprivacy.eu/vocabs/data#News"},
    {"label": "OtherContact", "value": "http://www.specialprivacy.eu/vocabs/data#OtherContact"},
    {"label": "Payment", "value": "http://www.specialprivacy.eu/vocabs/data#Payment"},
    {"label": "Sales", "value": "http://www.specialprivacy.eu/vocabs/data#Sales"},
    {"label": "Search", "value": "http://www.specialprivacy.eu/vocabs/data#Search"},
    {"label": "State", "value": "http://www.specialprivacy.eu/vocabs/data#State"},
    {"label": "Tailoring", "value": "http://www.specialprivacy.eu/vocabs/data#Tailoring"},
    {"label": "Telemarketing", "value": "http://www.specialprivacy.eu/vocabs/data#Telemarketing"}
  ],

  recipientCollections: [
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/data#Delivery"},
    {"label": "OtherRecipient", "value": "http://www.specialprivacy.eu/vocabs/data#OtherRecipient"},
    {"label": "Ours", "value": "http://www.specialprivacy.eu/vocabs/data#Ours"},
    {"label": "Public", "value": "http://www.specialprivacy.eu/vocabs/data#Public"},
    {"label": "Same", "value": "http://www.specialprivacy.eu/vocabs/data#Same"},
    {"label": "Unrelated", "value": "http://www.specialprivacy.eu/vocabs/data#Unrelated"}
  ]

});
