(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["braze"],{"./src/udemy/js/braze/bootstrap.js":function(e,n,t){"use strict";t.r(n);t.d(n,"bootstrap",(function(){return f}));t.d(n,"bootstrapSubcategoryPage",(function(){return b}));t.d(n,"bootstrapCourseLandingPage",(function(){return l}));var s=t("./node_modules/@braze/web-sdk/appboy.min.js");var r=t.n(s);var a=t("./src/udemy/js/gql-codegen/api-platform-graphql.ts");var i=t("./src/udemy/js/utils/get-config-data.js");var o=t("./src/udemy/js/utils/get-request-data.js");var u=t("./src/udemy/js/utils/server-or-client.ts");var c=t("./src/udemy/js/utils/ud-me.js");var d=t("./src/udemy/js/utils/ud-performance.js");var p=t("./src/udemy/js/utils/ud-user-agnostic-tracking-params.js");function f(){window.appboy=r.a;const e=Object(i["a"])();const n=Object(o["a"])();const t=e.env==="PROD"?"5cefca91-d218-4b04-8bdd-c8876ec1908d":"4aa844ae-1f20-4f99-aeb9-3307f28c861d";const s=r.a.initialize(t,{baseUrl:"sdk.iad-03.braze.com",safariWebsitePushId:e.env==="PROD"?"web.com.udemy.prod":"web.com.udemy"});if(s){d["a"].mark("BrazeWebPush.sdk-initialized")}r.a.openSession();if(c["a"].is_authenticated){r.a.changeUser(c["a"].id);d["a"].mark("BrazeWebPush.user-changed")}else{const t=r.a.getUser();t.setCountry(e.marketplace_country.id);t.setLanguage(n.language)}if(p["a"].page_key==="discovery_subcategory"&&r.a.isPushSupported()&&!r.a.isPushBlocked()&&r.a.isPushPermissionGranted()){b(r.a)}if(u["a"].global.location.href.match(/http(s)?:\/\/.*\/course\/.*/gm)){l(r.a)}return r.a}function b(e){const n=document.querySelector(".ud-component--category--category");const t=n?JSON.parse(n.getAttribute("data-component-props")):{};if(t.pageObject){const n=t.pageObject.id;e.logCustomEvent("Viewed subcategory page",{subcategory_id:n})}}async function l(e){const n=document.body.getAttribute("data-clp-course-id");if(n){let t={};try{const e=await a["b"].fetcher({featureCodes:["web_push_optin_display"]})();const n=e.featureVariantAssignmentsByCodeAndAttributes;n.forEach((e=>{if(e.featureCode==="web_push_optin_display"){t=e.configuration}}))}catch(e){}e.logCustomEvent("Viewed CLP",{course_id:n,experiment:t.showModal});e.subscribeToInAppMessage((t=>{let s=true;if(t instanceof e.InAppMessage){const r=t.extras["msg-id"];if(r==="push-primer"){if(!e.isPushSupported()||e.isPushBlocked()){s=false}d["a"].mark("BrazeWebPush.soft-push-rendered");if(t.buttons[1]){t.buttons[1].subscribeToClickedEvent((()=>{e.openSession();e.registerAppboyPushMessages();const t=e.getUser();t.setCustomUserAttribute("last_visited_course_id",n);t.setPushNotificationSubscriptionType(e.User.NotificationSubscriptionTypes.OPTED_IN)}))}}}if(s){e.display.showInAppMessage(t)}}))}}},"./src/udemy/js/gql-codegen/api-platform-graphql.ts":function(e,n,t){"use strict";var s=t("./node_modules/react-query/es/index.js");var r=undefined&&undefined.__awaiter||function(e,n,t,s){function r(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{u(s.next(e))}catch(e){a(e)}}function o(e){try{u(s["throw"](e))}catch(e){a(e)}}function u(e){e.done?t(e.value):r(e.value).then(i,o)}u((s=s.apply(e,n||[])).next())}))};const a=(e,n,t)=>()=>r(void 0,void 0,void 0,(function*(){const s=yield fetch("/api/2022-03/graphql/",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},t!==null&&t!==void 0?t:{}),body:JSON.stringify({query:e,variables:n})});const r=yield s.json();if(r.errors){const{message:e}=r.errors[0]||"Error..";throw new Error(e)}return r.data}));t.d(n,"a",(function(){return u}));t.d(n,"b",(function(){return f}));t.d(n,"c",(function(){return l}));t.d(n,"d",(function(){return g}));var i;(function(e){e["Cplusplus"]="CPLUSPLUS";e["CsvProcessingWithPython"]="CSV_PROCESSING_WITH_PYTHON";e["CSharp"]="C_SHARP";e["Html"]="HTML";e["JavascriptEs6"]="JAVASCRIPT_ES6";e["Java_9"]="JAVA_9";e["Java_11"]="JAVA_11";e["Php_5"]="PHP_5";e["Php_7"]="PHP_7";e["Python_3_5"]="PYTHON_3_5";e["Python_3_8"]="PYTHON_3_8";e["Python_3_10"]="PYTHON_3_10";e["React_16"]="REACT_16";e["Ruby"]="RUBY";e["R_3_6"]="R_3_6";e["Scipy_1_4NumpyPandasSympyAndScikitLearn_0_23"]="SCIPY_1_4_NUMPY_PANDAS_SYMPY_AND_SCIKIT_LEARN_0_23";e["Sql"]="SQL";e["Swift_3"]="SWIFT_3";e["Swift_5"]="SWIFT_5"})(i||(i={}));var o;(function(e){e["Aud"]="AUD";e["Brl"]="BRL";e["Cad"]="CAD";e["Dkk"]="DKK";e["Eur"]="EUR";e["Gbp"]="GBP";e["Idr"]="IDR";e["Ils"]="ILS";e["Inr"]="INR";e["Jpy"]="JPY";e["Krw"]="KRW";e["Mxn"]="MXN";e["Nok"]="NOK";e["Pln"]="PLN";e["Rub"]="RUB";e["Sgd"]="SGD";e["Thb"]="THB";e["Try"]="TRY";e["Twd"]="TWD";e["Usd"]="USD";e["Zar"]="ZAR"})(o||(o={}));var u;(function(e){e["Day"]="DAY";e["Month"]="MONTH";e["Week"]="WEEK";e["Year"]="YEAR"})(u||(u={}));var c;(function(e){e["Consumersubscription"]="CONSUMERSUBSCRIPTION";e["Enterprise"]="ENTERPRISE";e["Team"]="TEAM";e["Udemypro"]="UDEMYPRO"})(c||(c={}));var d;(function(e){e["Popular"]="POPULAR";e["Trending"]="TRENDING"})(d||(d={}));const p="\n    query FeatureVariantAssignments($featureCodes: [String!]!, $realtimeAttributes: [FeatureRequestAttributeInput!]) {\n  featureVariantAssignmentsByCodeAndAttributes(\n    featureCodes: $featureCodes\n    realtimeAttributes: $realtimeAttributes\n  ) {\n    featureCode\n    configuration\n    isInExperiment\n  }\n}\n    ";const f=(e,n)=>Object(s["useQuery"])(["FeatureVariantAssignments",e],a(p,e),n);f.getKey=e=>["FeatureVariantAssignments",e];f.fetcher=(e,n)=>a(p,e,n);const b="\n    query LabSearchResponse($query: String!, $filters: [SearchAggregationInputOption!]) {\n  searchLabs(query: $query, filters: $filters) {\n    count\n    trackingId\n    labs {\n      id\n      title\n      description\n      learningOutcomes\n      activities\n      prerequisites\n      minEstimatedTime\n      maxEstimatedTime\n      instructors {\n        name\n      }\n      topics {\n        id\n      }\n      instructors {\n        name\n      }\n      metadata {\n        trackingId\n      }\n    }\n  }\n}\n    ";const l=(e,n)=>Object(s["useQuery"])(["LabSearchResponse",e],a(b,e),n);l.getKey=e=>["LabSearchResponse",e];l.fetcher=(e,n)=>a(b,e,n);const y="\n    query SubscriptionPlans {\n  subscriptionPlans {\n    id\n    listPrice {\n      amount\n      currency\n    }\n    renewalInterval {\n      type\n      count\n    }\n    trial {\n      dateInterval {\n        type\n        count\n      }\n    }\n    productType\n  }\n}\n    ";const g=(e,n)=>Object(s["useQuery"])(e===undefined?["SubscriptionPlans"]:["SubscriptionPlans",e],a(y,e),n);g.getKey=e=>e===undefined?["SubscriptionPlans"]:["SubscriptionPlans",e];g.fetcher=(e,n)=>a(y,e,n)}}]);
//# sourceMappingURL=braze.5c3e4d9b7b072d3e41c0.js.map