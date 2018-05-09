import Service from '@ember/service';

export default Service.extend({
  dataCollections: [
    {"label":"AnyData", "value":"https://www.specialprivacy.eu/langs/usage-policy#AnyData"},
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
    {"label":"UniqueId", "value":"http://www.specialprivacy.eu/vocabs/data#UniqueId"}
  ],

  locationCollections: [
    {"label": "AnyLocation", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyLocation"},
    {"label": "ControllerServers", "value": "http://www.specialprivacy.eu/vocabs/locations#ControllerServers"},
    {"label": "EU", "value": "http://www.specialprivacy.eu/vocabs/locations#EU"},
    {"label": "EULike", "value": "http://www.specialprivacy.eu/vocabs/locations#EULike"},
    {"label": "ThirdCountries", "value": "http://www.specialprivacy.eu/vocabs/locations#ThirdCountries"},
    {"label": "OurServers", "value": "http://www.specialprivacy.eu/vocabs/locations#OurServers"},
    {"label": "ProcessorServers", "value": "http://www.specialprivacy.eu/vocabs/locations#ProcessorServers"},
    {"label": "ThirdParty", "value": "http://www.specialprivacy.eu/vocabs/locations#ThirdParty"}
  ],

  processCollections: [
    {"label": "AnyProcessing", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyProcessing"},
    {"label": "Aggregate", "value": "http://www.specialprivacy.eu/vocabs/processing#Aggregate"},
    {"label": "Analyze", "value": "http://www.specialprivacy.eu/vocabs/processing#Analyze"},
    {"label": "Anonymize", "value": "http://www.specialprivacy.eu/vocabs/processing#Anonymize"},
    {"label": "Collect", "value": "http://www.specialprivacy.eu/vocabs/processing#Collect"},
    {"label": "Copy", "value": "http://www.specialprivacy.eu/vocabs/processing#Copy"},
    {"label": "Derive", "value": "http://www.specialprivacy.eu/vocabs/processing#Derive"},
    {"label": "Move", "value": "http://www.specialprivacy.eu/vocabs/processing#Move"},
    {"label": "Query", "value": "http://www.specialprivacy.eu/vocabs/processing#Query"},
    {"label": "Transfer", "value": "http://www.specialprivacy.eu/vocabs/processing#Transfer"}
  ],

  purposeCollections: [
    {"label": "AnyPurpose", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyPurpose"},
    {"label": "Account", "value": "http://www.specialprivacy.eu/vocabs/purposes#Account"},
    {"label": "Admin", "value": "http://www.specialprivacy.eu/vocabs/purposes#Admin"},
    {"label": "AnyContact", "value": "http://www.specialprivacy.eu/vocabs/purposes#AnyContact"},
    {"label": "Arts", "value": "http://www.specialprivacy.eu/vocabs/purposes#Arts"},
    {"label": "AuxPurpose", "value": "http://www.specialprivacy.eu/vocabs/purposes#AuxPurpose"},
    {"label": "Browsing", "value": "http://www.specialprivacy.eu/vocabs/purposes#Browsing"},
    {"label": "Charity", "value": "http://www.specialprivacy.eu/vocabs/purposes#Charity"},
    {"label": "Communicate", "value": "http://www.specialprivacy.eu/vocabs/purposes#Communicate"},
    {"label": "Current", "value": "http://www.specialprivacy.eu/vocabs/purposes#Current"},
    {"label": "Custom", "value": "http://www.specialprivacy.eu/vocabs/purposes#Custom"},
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/purposes#Delivery"},
    {"label": "Develop", "value": "http://www.specialprivacy.eu/vocabs/purposes#Develop"},
    {"label": "Downloads", "value": "http://www.specialprivacy.eu/vocabs/purposes#Downloads"},
    {"label": "Education", "value": "http://www.specialprivacy.eu/vocabs/purposes#Education"},
    {"label": "Feedback", "value": "http://www.specialprivacy.eu/vocabs/purposes#Feedback"},
    {"label": "Finmgt", "value": "http://www.specialprivacy.eu/vocabs/purposes#Finmgt"},
    {"label": "Gambling", "value": "http://www.specialprivacy.eu/vocabs/purposes#Gambling"},
    {"label": "Gaming", "value": "http://www.specialprivacy.eu/vocabs/purposes#Gaming"},
    {"label": "Government", "value": "http://www.specialprivacy.eu/vocabs/purposes#Government"},
    {"label": "Health", "value": "http://www.specialprivacy.eu/vocabs/purposes#Health"},
    {"label": "Historical", "value": "http://www.specialprivacy.eu/vocabs/purposes#Historical"},
    {"label": "Login", "value": "http://www.specialprivacy.eu/vocabs/purposes#Login"},
    {"label": "Marketing", "value": "http://www.specialprivacy.eu/vocabs/purposes#Marketing"},
    {"label": "News", "value": "http://www.specialprivacy.eu/vocabs/purposes#News"},
    {"label": "OtherContact", "value": "http://www.specialprivacy.eu/vocabs/purposes#OtherContact"},
    {"label": "Payment", "value": "http://www.specialprivacy.eu/vocabs/purposes#Payment"},
    {"label": "Sales", "value": "http://www.specialprivacy.eu/vocabs/purposes#Sales"},
    {"label": "Search", "value": "http://www.specialprivacy.eu/vocabs/purposes#Search"},
    {"label": "State", "value": "http://www.specialprivacy.eu/vocabs/purposes#State"},
    {"label": "Tailoring", "value": "http://www.specialprivacy.eu/vocabs/purposes#Tailoring"},
    {"label": "Telemarketing", "value": "http://www.specialprivacy.eu/vocabs/purposes#Telemarketing"}
  ],

  recipientCollections: [
    {"label": "AnyRecipient", "value": "http://www.specialprivacy.eu/langs/usage-policy#AnyRecipient"},
    {"label": "Delivery", "value": "http://www.specialprivacy.eu/vocabs/recipientsDelivery"},
    {"label": "OtherRecipient", "value": "http://www.specialprivacy.eu/vocabs/recipientsOtherRecipient"},
    {"label": "Ours", "value": "http://www.specialprivacy.eu/vocabs/recipientsOurs"},
    {"label": "Public", "value": "http://www.specialprivacy.eu/vocabs/recipientsPublic"},
    {"label": "Same", "value": "http://www.specialprivacy.eu/vocabs/recipientsSame"},
    {"label": "Unrelated", "value": "http://www.specialprivacy.eu/vocabs/recipientsUnrelated"}
  ]
  
});
