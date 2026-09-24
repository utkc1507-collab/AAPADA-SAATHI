const LANGS = {
  en: {
    navHazards:"Hazards", navHow:"How it works", openDemo:"Open demo",
    eyebrow:"MULTI-HAZARD · DEMO SYSTEM",
    heroLine1:"When the unexpected", heroLine2:"happens.", heroLine3:"Make the next step clear.",
    heroText:"A calm emergency interface for understanding hazards, reporting a situation and finding the next useful action.",
    startDemo:"Start emergency demo", exploreHazards:"Explore hazards",
    locationReady:"Location-aware concept", voiceReady:"Voice-ready interface", offlineReady:"Offline-first concept",
    demoMonitoring:"Demo monitoring active", goodMorning:"GOOD MORNING", helloSaathi:"Hello, Saathi",
    allClear:"All clear nearby", demoLocation:"Demo location", needHelp:"I need help",
    shareSituation:"Share your situation", flood:"Flood", landslide:"Landslide",
    heatwave:"Heatwave", lightning:"Lightning", systemSignal:"SYSTEM SIGNAL",
    readyForDemo:"Ready for demo", location:"LOCATION", simulated:"Simulated",
    quickActionsLabel:"QUICK ACTIONS", chooseAction:"Choose what you need.",
    actionHelp:"I need help", actionHelpSub:"Report a situation",
    actionHazard:"Hazard nearby", actionHazardSub:"Understand the risk",
    actionSafe:"Find a safe place", actionSafeSub:"Explore the concept",
    actionVoice:"Speak a report", actionVoiceSub:"Voice-ready interface",
    storyEyebrow:"DESIGNED AROUND THE PERSON",
    storyTitle:"Serious technology.<br><em>Human interface.</em>",
    storyText:"The interface is deliberately simple: understand what is happening, communicate the situation and keep useful information visible.",
    signalTitle:"RESPONSE SIGNAL", simulatedLive:"SIMULATED",
    signalInput:"Citizen input", signalProcess:"Triage", signalOutput:"Response view",
    storyOneTitle:"Understand the situation", storyOneText:"A structured request turns plain-language input into a clear demo priority.",
    storyTwoTitle:"Keep the interface calm", storyTwoText:"Large actions, strong hierarchy and simple language reduce cognitive load.",
    storyThreeTitle:"Connect the next step", storyThreeText:"The demo architecture is designed to grow toward maps, hazard data and responder workflows.",
    hazardsEyebrow:"ONE SYSTEM · MANY RISKS",
    hazardsTitle:"Prepared for more than one kind of emergency.",
    hazardsText:"Six hazard categories form the current concept. Data shown here is simulated for portfolio demonstration.",
    monitor:"MONITOR", preparedness:"PREPAREDNESS",
    floodSub:"Water levels · evacuation", landslideSub:"Rainfall · terrain",
    cyclone:"Cyclone", cycloneSub:"Storm · wind", earthquake:"Earthquake",
    earthquakeSub:"Preparedness · guidance", heatwaveSub:"Heat · health guidance",
    lightningSub:"Weather · safety", demoEyebrow:"INTERACTIVE PORTFOLIO DEMO",
    demoTitle:"Show us what is happening.",
    demoText:"Describe a situation in plain language. The demo backend applies deterministic triage rules and returns a simulated priority.",
    featureTriage:"Deterministic triage", featureApi:"Flask API", featureDemo:"Simulated records",
    describeLabel:"Describe the situation",
    messagePlaceholder:"For example: We are stranded and need help.",
    speak:"Speak", analyze:"Analyze request", ready:"Demo system ready.",
    footerTagline:"Emergency assistance concept · Portfolio demonstration",
    simulatedData:"Simulated data", listening:"Listening… speak now.",
    voiceStopped:"Voice input stopped.", voiceUnsupported:"Voice input is not supported by this browser.",
    emptyMessage:"Please describe the situation first.", analyzing:"Analyzing demo request…",
    requestError:"The demo request could not be processed.", systemChecking:"Checking demo system…",
    systemOnline:"Demo backend is online.", systemOffline:"Demo backend is unavailable.",
    priority:"Priority", critical:"CRITICAL", urgent:"URGENT", routine:"ROUTINE"
  },

  hi: {
    navHazards:"खतरे", navHow:"यह कैसे काम करता है", openDemo:"डेमो खोलें",
    eyebrow:"बहु-आपदा · डेमो सिस्टम",
    heroLine1:"जब कुछ अनपेक्षित", heroLine2:"हो जाए।", heroLine3:"अगला कदम स्पष्ट रखें।",
    heroText:"खतरों को समझने, स्थिति बताने और अगला उपयोगी कदम खोजने के लिए एक सरल आपातकालीन इंटरफ़ेस।",
    startDemo:"आपातकालीन डेमो शुरू करें", exploreHazards:"खतरों को देखें",
    locationReady:"स्थान-आधारित अवधारणा", voiceReady:"आवाज़ के लिए तैयार", offlineReady:"ऑफ़लाइन-प्रथम अवधारणा",
    demoMonitoring:"डेमो निगरानी सक्रिय", goodMorning:"सुप्रभात", helloSaathi:"नमस्ते, साथी",
    allClear:"आस-पास स्थिति सामान्य", demoLocation:"डेमो स्थान", needHelp:"मुझे सहायता चाहिए",
    shareSituation:"अपनी स्थिति बताएं", flood:"बाढ़", landslide:"भूस्खलन",
    heatwave:"लू", lightning:"आकाशीय बिजली", systemSignal:"सिस्टम संकेत",
    readyForDemo:"डेमो के लिए तैयार", location:"स्थान", simulated:"सिम्युलेटेड",
    quickActionsLabel:"त्वरित विकल्प", chooseAction:"आपको क्या चाहिए चुनें।",
    actionHelp:"मुझे सहायता चाहिए", actionHelpSub:"स्थिति बताएं",
    actionHazard:"पास में खतरा", actionHazardSub:"जोखिम समझें",
    actionSafe:"सुरक्षित स्थान खोजें", actionSafeSub:"अवधारणा देखें",
    actionVoice:"आवाज़ में बताएं", actionVoiceSub:"आवाज़-आधारित इंटरफ़ेस",
    storyEyebrow:"व्यक्ति को ध्यान में रखकर बनाया गया",
    storyTitle:"गंभीर तकनीक।<br><em>मानवीय इंटरफ़ेस।</em>",
    storyText:"इंटरफ़ेस जानबूझकर सरल है: क्या हो रहा है समझें, स्थिति बताएं और उपयोगी जानकारी सामने रखें।",
    signalTitle:"प्रतिक्रिया संकेत", simulatedLive:"सिम्युलेटेड",
    signalInput:"नागरिक की जानकारी", signalProcess:"प्राथमिकता निर्धारण", signalOutput:"प्रतिक्रिया दृश्य",
    storyOneTitle:"स्थिति को समझें", storyOneText:"सामान्य भाषा में दी गई जानकारी को स्पष्ट डेमो प्राथमिकता में बदला जाता है।",
    storyTwoTitle:"इंटरफ़ेस को शांत रखें", storyTwoText:"बड़े विकल्प, स्पष्ट क्रम और सरल भाषा मानसिक दबाव को कम करते हैं।",
    storyThreeTitle:"अगले कदम से जोड़ें", storyThreeText:"डेमो आर्किटेक्चर को मानचित्र, खतरे के डेटा और प्रतिक्रिया कार्यप्रवाह तक बढ़ाया जा सकता है।",
    hazardsEyebrow:"एक सिस्टम · कई जोखिम", hazardsTitle:"एक से अधिक प्रकार की आपदाओं के लिए तैयार।",
    hazardsText:"वर्तमान अवधारणा में छह खतरे शामिल हैं। यहां दिखाया गया डेटा पोर्टफोलियो डेमो के लिए सिम्युलेटेड है।",
    monitor:"निगरानी", preparedness:"तैयारी", floodSub:"जल स्तर · निकासी", landslideSub:"बारिश · भूभाग",
    cyclone:"चक्रवात", cycloneSub:"तूफान · हवा", earthquake:"भूकंप",
    earthquakeSub:"तैयारी · मार्गदर्शन", heatwaveSub:"गर्मी · स्वास्थ्य मार्गदर्शन",
    lightningSub:"मौसम · सुरक्षा", demoEyebrow:"इंटरैक्टिव पोर्टफोलियो डेमो",
    demoTitle:"बताएं कि क्या हो रहा है।",
    demoText:"सामान्य भाषा में स्थिति बताएं। डेमो सिस्टम निर्धारित नियमों के आधार पर प्राथमिकता देता है।",
    featureTriage:"निर्धारित ट्रायेज", featureApi:"Flask API", featureDemo:"सिम्युलेटेड रिकॉर्ड",
    describeLabel:"स्थिति बताएं", messagePlaceholder:"उदाहरण: हम फंस गए हैं और हमें सहायता चाहिए।",
    speak:"बोलें", analyze:"अनुरोध का विश्लेषण करें", ready:"डेमो सिस्टम तैयार है।",
    footerTagline:"आपातकालीन सहायता अवधारणा · पोर्टफोलियो डेमो", simulatedData:"सिम्युलेटेड डेटा",
    listening:"सुन रहा है… अभी बोलें।", voiceStopped:"आवाज़ इनपुट बंद हो गया।",
    voiceUnsupported:"इस ब्राउज़र में आवाज़ इनपुट उपलब्ध नहीं है।",
    emptyMessage:"पहले स्थिति बताएं।", analyzing:"डेमो अनुरोध का विश्लेषण हो रहा है…",
    requestError:"डेमो अनुरोध संसाधित नहीं हो सका।", systemChecking:"डेमो सिस्टम जांचा जा रहा है…",
    systemOnline:"डेमो बैकएंड ऑनलाइन है।", systemOffline:"डेमो बैकएंड उपलब्ध नहीं है।",
    priority:"प्राथमिकता", critical:"गंभीर", urgent:"तत्काल", routine:"सामान्य"
  }
};

/* Additional Indian-language interface packs.
   Core interaction labels are localized so switching languages changes
   the application interface rather than only changing the selector. */

const compact = {
  bn:["বিপদ","কীভাবে কাজ করে","ডেমো খুলুন","বন্যা","ভূমিধস","ঘূর্ণিঝড়","ভূমিকম্প","তাপপ্রবাহ","বজ্রপাত","আমার সাহায্য দরকার","নিরাপদ স্থান খুঁজুন","পরিস্থিতি জানান","কী ঘটছে বলুন","অনুরোধ বিশ্লেষণ করুন","শুনছি… এখন বলুন।"],
  mr:["धोके","हे कसे कार्य करते","डेमो उघडा","पूर","भूस्खलन","चक्रीवादळ","भूकंप","उष्णतेची लाट","विजांचा कडकडाट","मला मदत हवी आहे","सुरक्षित ठिकाण शोधा","परिस्थिती सांगा","काय घडत आहे ते सांगा","विनंतीचे विश्लेषण करा","ऐकत आहे… आता बोला."],
  te:["ప్రమాదాలు","ఇది ఎలా పనిచేస్తుంది","డెమో తెరవండి","వరద","కొండచరియలు","తుఫాను","భూకంపం","వేడి తరంగం","పిడుగు","నాకు సహాయం కావాలి","సురక్షిత ప్రదేశం కనుగొనండి","పరిస్థితిని చెప్పండి","ఏం జరుగుతుందో చెప్పండి","అభ్యర్థనను విశ్లేషించండి","వింటున్నాను… ఇప్పుడు మాట్లాడండి."],
  ta:["அபாயங்கள்","இது எப்படி செயல்படுகிறது","டெமோவைத் திறக்கவும்","வெள்ளம்","நிலச்சரிவு","புயல்","நிலநடுக்கம்","வெப்ப அலை","மின்னல்","எனக்கு உதவி தேவை","பாதுகாப்பான இடத்தைக் கண்டறியவும்","நிலைமையை தெரிவிக்கவும்","என்ன நடக்கிறது என்று சொல்லுங்கள்","கோரிக்கையை பகுப்பாய்வு செய்யவும்","கேட்கிறேன்… இப்போது பேசுங்கள்."],
  gu:["જોખમો","આ કેવી રીતે કામ કરે છે","ડેમો ખોલો","પૂર","ભૂસ્ખલન","વાવાઝોડું","ભૂકંપ","ગરમીની લહેર","વીજળી","મને મદદ જોઈએ છે","સુરક્ષિત સ્થળ શોધો","પરિસ્થિતિ જણાવો","શું થઈ રહ્યું છે તે જણાવો","વિનંતીનું વિશ્લેષણ કરો","સાંભળી રહ્યા છીએ… હવે બોલો."],
  kn:["ಅಪಾಯಗಳು","ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ","ಡೆಮೊ ತೆರೆಯಿರಿ","ಪ್ರವಾಹ","ಭೂಕುಸಿತ","ಚಂಡಮಾರುತ","ಭೂಕಂಪ","ಉಷ್ಣ ಅಲೆ","ಮಿಂಚು","ನನಗೆ ಸಹಾಯ ಬೇಕು","ಸುರಕ್ಷಿತ ಸ್ಥಳ ಹುಡುಕಿ","ಪರಿಸ್ಥಿತಿಯನ್ನು ತಿಳಿಸಿ","ಏನಾಗುತ್ತಿದೆ ಎಂದು ತಿಳಿಸಿ","ವಿನಂತಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ","ಕೇಳುತ್ತಿದ್ದೇನೆ… ಈಗ ಮಾತನಾಡಿ."],
  ml:["അപകടങ്ങൾ","ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു","ഡെമോ തുറക്കുക","വെള്ളപ്പൊക്കം","മണ്ണിടിച്ചിൽ","ചുഴലിക്കാറ്റ്","ഭൂകമ്പം","ഉഷ്ണതരംഗം","മിന്നൽ","എനിക്ക് സഹായം വേണം","സുരക്ഷിത സ്ഥലം കണ്ടെത്തുക","സ്ഥിതി അറിയിക്കുക","എന്താണ് സംഭവിക്കുന്നതെന്ന് പറയുക","അഭ്യർത്ഥന വിശകലനം ചെയ്യുക","കേൾക്കുന്നു… ഇപ്പോൾ സംസാരിക്കുക."],
  pa:["ਖਤਰੇ","ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ","ਡੈਮੋ ਖੋਲ੍ਹੋ","ਹੜ੍ਹ","ਜ਼ਮੀਨ ਖਿਸਕਣਾ","ਤੂਫ਼ਾਨ","ਭੂਚਾਲ","ਗਰਮੀ ਦੀ ਲਹਿਰ","ਬਿਜਲੀ","ਮੈਨੂੰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ","ਸੁਰੱਖਿਅਤ ਥਾਂ ਲੱਭੋ","ਸਥਿਤੀ ਦੱਸੋ","ਕੀ ਹੋ ਰਿਹਾ ਹੈ ਦੱਸੋ","ਬੇਨਤੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ","ਸੁਣ ਰਹੇ ਹਾਂ… ਹੁਣ ਬੋਲੋ।"],
  ur:["خطرات","یہ کیسے کام کرتا ہے","ڈیمو کھولیں","سیلاب","لینڈ سلائیڈ","طوفان","زلزلہ","گرمی کی لہر","بجلی","مجھے مدد چاہیے","محفوظ جگہ تلاش کریں","صورتحال بتائیں","کیا ہو رہا ہے بتائیں","درخواست کا تجزیہ کریں","سن رہے ہیں… اب بولیں۔"]
};

const keys = [
  "navHazards","navHow","openDemo","flood","landslide","cyclone","earthquake",
  "heatwave","lightning","needHelp","actionSafe","shareSituation","demoTitle",
  "analyze","speak"
];

["bn","mr","te","ta","gu","kn","ml","pa","ur"].forEach((lang) => {
  LANGS[lang] = {};
  compact[lang].forEach((value, i) => LANGS[lang][keys[i]] = value);

  LANGS[lang].heroLine1 = valueOr(lang, [
    "যখন অপ্রত্যাশিত","जेव्हा अनपेक्षित","అనుకోని విషయం","எதிர்பாராதது","જ્યારે અનપેક્ષિત","ಅನಿರೀಕ್ಷಿತವಾಗಿ","അപ്രതീക്ഷിതമായി","ਜਦੋਂ ਅਚਾਨਕ","جب غیر متوقع"
  ]);
  LANGS[lang].heroLine2 = valueOr(lang, ["ঘটে।","घडते.","జరుగుతుంది.","நடக்கிறது.","થાય.","ನಡೆಯುತ್ತದೆ.","സംഭവിക്കുമ്പോൾ.","ਹੋਵੇ।","ہو۔"]);
  LANGS[lang].heroLine3 = valueOr(lang, ["পরবর্তী পদক্ষেপ পরিষ্কার রাখুন।","पुढील पाऊल स्पष्ट ठेवा.","తదుపరి అడుగును స్పష్టంగా ఉంచండి.","அடுத்த படியை தெளிவாக வைத்திருங்கள்.","આગલું પગલું સ્પષ્ટ રાખો.","ಮುಂದಿನ ಹೆಜ್ಜೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿರಿಸಿ.","അടുത്ത ഘട്ടം വ്യക്തമായി മനസ്സിലാക്കുക.","ਅਗਲਾ ਕਦਮ ਸਪੱਸ਼ਟ ਰੱਖੋ।","اگلا قدم واضح رکھیں۔"]);
});

function valueOr(lang, arr) {
  return arr[["bn","mr","te","ta","gu","kn","ml","pa","ur"].indexOf(lang)] || "";
}

LANGS.bn.heroText="বিপদ বোঝা, পরিস্থিতি জানানো এবং পরবর্তী প্রয়োজনীয় পদক্ষেপ খুঁজে পাওয়ার জন্য একটি সহজ জরুরি ইন্টারফেস।";
LANGS.mr.heroText="धोके समजून घेण्यासाठी, परिस्थिती कळवण्यासाठी आणि पुढील उपयोगी पाऊल शोधण्यासाठी एक सोपा आपत्कालीन इंटरफेस.";
LANGS.te.heroText="ప్రమాదాలను అర్థం చేసుకోవడానికి, పరిస్థితిని నివేదించడానికి మరియు తదుపరి ఉపయోగకరమైన చర్యను కనుగొనడానికి సరళమైన అత్యవసర ఇంటర్‌ఫేస్.";
LANGS.ta.heroText="அபாயங்களைப் புரிந்துகொண்டு, நிலைமையைத் தெரிவித்து, அடுத்த பயனுள்ள நடவடிக்கையைக் கண்டறிய எளிய அவசர இடைமுகம்.";
LANGS.gu.heroText="જોખમ સમજવા, પરિસ્થિતિ જણાવવા અને આગળનું ઉપયોગી પગલું શોધવા માટે સરળ ઇમરજન્સી ઇન્ટરફેસ.";
LANGS.kn.heroText="ಅಪಾಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ಪರಿಸ್ಥಿತಿಯನ್ನು ತಿಳಿಸಲು ಮತ್ತು ಮುಂದಿನ ಉಪಯುಕ್ತ ಕ್ರಮವನ್ನು ಕಂಡುಕೊಳ್ಳಲು ಸರಳ ತುರ್ತು ಇಂಟರ್ಫೇಸ್.";
LANGS.ml.heroText="അപകടങ്ങൾ മനസ്സിലാക്കാനും സാഹചര്യം അറിയിക്കാനും അടുത്ത ഉപകാരപ്രദമായ നടപടി കണ്ടെത്താനും ലളിതമായ അടിയന്തര ഇന്റർഫേസ്.";
LANGS.pa.heroText="ਖਤਰੇ ਨੂੰ ਸਮਝਣ, ਸਥਿਤੀ ਦੱਸਣ ਅਤੇ ਅਗਲਾ ਲਾਭਦਾਇਕ ਕਦਮ ਲੱਭਣ ਲਈ ਸਧਾਰਨ ਐਮਰਜੈਂਸੀ ਇੰਟਰਫੇਸ।";
LANGS.ur.heroText="خطرے کو سمجھنے، صورتحال بتانے اور اگلا مفید قدم تلاش کرنے کے لیے آسان ہنگامی انٹرفیس۔";

const languageCodes = {
  en:"en-IN", hi:"hi-IN", bn:"bn-IN", mr:"mr-IN", te:"te-IN",
  ta:"ta-IN", gu:"gu-IN", kn:"kn-IN", ml:"ml-IN", pa:"pa-IN", ur:"ur-IN"
};

let lang = localStorage.getItem("aapdaLanguage") || "en";
const select = document.querySelector("#languageSelect");
const form = document.querySelector("#emergencyForm");
const input = document.querySelector("#message");
const result = document.querySelector("#formResult");
const voice = document.querySelector("#voiceBtn");

function T(key) {
  return LANGS[lang]?.[key] || LANGS.en[key] || key;
}

function applyLanguage(next) {
  lang = LANGS[next] ? next : "en";
  localStorage.setItem("aapdaLanguage", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = T(el.dataset.i18n);
    el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder =
      lang === "hi" ? "उदाहरण: हम फंस गए हैं और हमें सहायता चाहिए।" :
      lang === "bn" ? "উদাহরণ: আমরা আটকে পড়েছি এবং সাহায্য দরকার।" :
      lang === "mr" ? "उदाहरण: आम्ही अडकलो आहोत आणि आम्हाला मदत हवी आहे." :
      lang === "te" ? "ఉదాహరణ: మేము చిక్కుకున్నాము మరియు మాకు సహాయం కావాలి." :
      lang === "ta" ? "உதாரணம்: நாங்கள் சிக்கியுள்ளோம், எங்களுக்கு உதவி தேவை." :
      lang === "gu" ? "ઉદાહરણ: અમે ફસાઈ ગયા છીએ અને અમને મદદ જોઈએ છે." :
      lang === "kn" ? "ಉದಾಹರಣೆ: ನಾವು ಸಿಲುಕಿಕೊಂಡಿದ್ದೇವೆ ಮತ್ತು ನಮಗೆ ಸಹಾಯ ಬೇಕು." :
      lang === "ml" ? "ഉദാഹരണം: ഞങ്ങൾ കുടുങ്ങിയിരിക്കുകയാണ്, സഹായം വേണം." :
      lang === "pa" ? "ਉਦਾਹਰਨ: ਅਸੀਂ ਫਸ ਗਏ ਹਾਂ ਅਤੇ ਸਾਨੂੰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ।" :
      lang === "ur" ? "مثال: ہم پھنس گئے ہیں اور ہمیں مدد چاہیے۔" :
      "For example: We are stranded and need help.";
  });

  if (select) select.value = lang;
}

function show(message, type="") {
  if (!result) return;
  result.className = `form-result ${type}`;
  result.innerHTML = `<span class="result-dot"></span><span>${message}</span>`;
}

async function sendRequest(message) {
  show(lang === "hi" ? "अनुरोध का विश्लेषण हो रहा है…" : "Analyzing demo request…");

  try {
    const r = await fetch("/api/requests", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message})
    });

    const data = await r.json();

    if (!r.ok) throw new Error(data.error);

    const p = data.request.priority;
    const labels = {
      critical:T("critical"),
      urgent:T("urgent"),
      routine:T("routine")
    };

    show(
      `${T("priority")}: <strong>${labels[p] || p}</strong><br>${data.request.reason}`,
      p === "critical" ? "critical-result" : "success-result"
    );

    localStorage.setItem("lastAapdaRequest", JSON.stringify(data.request));
  } catch (e) {
    console.error(e);
    show(T("requestError"), "error-result");
  }
}

form?.addEventListener("submit", e => {
  e.preventDefault();
  const message = input?.value.trim();

  if (!message) {
    show(T("emptyMessage"), "error-result");
    input?.focus();
    return;
  }

  sendRequest(message);
});

document.querySelectorAll('a[href^="#"], button[data-scroll]').forEach(el => {
  el.addEventListener("click", e => {
    const target = el.dataset.scroll || el.getAttribute("href");
    if (target?.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({behavior:"smooth"});
    }
  });
});


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (voice && !SpeechRecognition) {
  voice.addEventListener("click", () => {
    show(
      lang === "hi"
        ? "वॉइस इनपुट इस ब्राउज़र में उपलब्ध नहीं है। Chrome जैसे समर्थित ब्राउज़र का उपयोग करें।"
        : "Voice input is not available in this browser. Try a supported browser such as Chrome.",
      "error"
    );
  });
}

if (voice && SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  voice.addEventListener("click", () => {
    recognition.lang = languageCodes[lang] || "en-IN";
    recognition.start();
    show(lang === "hi" ? "सुन रहा है… अभी बोलें।" : "Listening… speak now.");
    voice.classList.add("listening");
  });

  recognition.onresult = e => {
    input.value = e.results[0][0].transcript;
    show(input.value, "success-result");
  };

  recognition.onend = () => {
    voice.classList.remove("listening");
  };

  recognition.onerror = event => {
    voice.classList.remove("listening");

    const errors = {
      "not-allowed": "Microphone permission was denied. Please allow microphone access for this site.",
      "service-not-allowed": "Speech recognition is not available in this browser.",
      "no-speech": "No speech was detected. Please try speaking again.",
      "audio-capture": "No microphone could be accessed.",
      "network": "Speech recognition could not connect to the speech service.",
    };

    show(
      errors[event.error] || `Speech recognition error: ${event.error}`,
      "error"
    );
  };
}

document.querySelectorAll("#phoneHelp, [data-action='help']").forEach(el => {
  el.addEventListener("click", () => {
    document.querySelector("#demo")?.scrollIntoView({behavior:"smooth"});
    setTimeout(() => input?.focus(), 500);
  });
});

document.querySelectorAll("[data-action='safe']").forEach(el => {
  el.addEventListener("click", () => {
    show(
      lang === "hi"
        ? "डेमो: आपके आसपास सुरक्षित स्थानों की सूची तैयार की जा रही है।"
        : "Demo: nearby safe locations are being prepared.",
      "success-result"
    );
    document.querySelector("#demo")?.scrollIntoView({behavior:"smooth"});
  });
});

select?.addEventListener("change", e => applyLanguage(e.target.value));

applyLanguage(lang);

window.AapdaSaathi = {
  applyLanguage,
  sendRequest,
  languageCodes
};

/* =========================================================
   INTERACTIVE HAZARD EXPERIENCE
   Self-contained simulated data — no external services.
   ========================================================= */

const hazardExperience = {
  flood: {
    icon: "≈",
    level: "HIGH",
    status: "Monitoring",
    metric: "Water level",
    value: "Rising",
    description:
      "Simulated flood conditions are being monitored in this demo. Review the situation, identify a safe direction and report if assistance is needed."
  },
  landslide: {
    icon: "⌁",
    level: "MEDIUM",
    status: "Monitoring",
    metric: "Ground risk",
    value: "Watch",
    description:
      "This demo is simulating rainfall and terrain-related landslide risk. Stay aware of the terrain around the simulated location."
  },
  cyclone: {
    icon: "◌",
    level: "HIGH",
    status: "Prepared",
    metric: "Wind risk",
    value: "Elevated",
    description:
      "A simulated storm condition is active in this demonstration. Review the simulated risk information and use the reporting flow if assistance is needed."
  },
  earthquake: {
    icon: "⌁",
    level: "MEDIUM",
    status: "Prepared",
    metric: "Seismic status",
    value: "Prepared",
    description:
      "This is a preparedness simulation. No live earthquake feed is connected. Use this view to explore how an emergency information interface could work."
  },
  heatwave: {
    icon: "☼",
    level: "HIGH",
    status: "Monitoring",
    metric: "Heat level",
    value: "Elevated",
    description:
      "Simulated high-temperature conditions are being displayed. This demonstration shows how hazard information can be presented clearly."
  },
  lightning: {
    icon: "ϟ",
    level: "MEDIUM",
    status: "Monitoring",
    metric: "Weather risk",
    value: "Watch",
    description:
      "Simulated lightning risk is being monitored in this demo. Review the information and use the report flow if you need assistance."
  }
};

const hazardModalText = {
  en: {
    simulated: "SIMULATED HAZARD",
    status: "STATUS",
    risk: "RISK LEVEL",
    metric: "CURRENT SIGNAL",
    location: "DEMO LOCATION",
    locationValue: "Simulated location",
    report: "Report a situation",
    safe: "Explore safe places",
    close: "Close",
    monitoring: "Monitoring",
    prepared: "Prepared"
  },
  hi: {
    simulated: "सिम्युलेटेड खतरा",
    status: "स्थिति",
    risk: "जोखिम स्तर",
    metric: "वर्तमान संकेत",
    location: "डेमो स्थान",
    locationValue: "सिम्युलेटेड स्थान",
    report: "स्थिति बताएं",
    safe: "सुरक्षित स्थान देखें",
    close: "बंद करें",
    monitoring: "निगरानी",
    prepared: "तैयार"
  }
};

function hazardText(key) {
  return hazardModalText[lang]?.[key] || hazardModalText.en[key];
}

function createHazardModal() {
  if (document.querySelector("#hazardModal")) return;

  const modal = document.createElement("div");
  modal.id = "hazardModal";
  modal.className = "hazard-modal";
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="hazard-modal-card"
         role="dialog"
         aria-modal="true"
         aria-labelledby="hazardModalTitle">

      <div class="hazard-modal-header">
        <div>
          <div class="hazard-modal-kicker" id="hazardModalKicker">
            ${hazardText("simulated")}
          </div>
          <h2 class="hazard-modal-title" id="hazardModalTitle"></h2>
        </div>

        <button class="hazard-close"
                id="hazardClose"
                type="button"
                aria-label="${hazardText("close")}">
          ×
        </button>
      </div>

      <div class="hazard-modal-body">

        <div class="hazard-status-row">

          <div class="hazard-stat">
            <span class="hazard-stat-label" id="hazardStatusLabel">
              ${hazardText("status")}
            </span>
            <strong class="hazard-stat-value" id="hazardStatusValue">
            </strong>
          </div>

          <div class="hazard-stat">
            <span class="hazard-stat-label" id="hazardRiskLabel">
              ${hazardText("risk")}
            </span>
            <strong class="hazard-stat-value" id="hazardRiskValue">
            </strong>
          </div>

          <div class="hazard-stat">
            <span class="hazard-stat-label" id="hazardMetricLabel">
              ${hazardText("metric")}
            </span>
            <strong class="hazard-stat-value" id="hazardMetricValue">
            </strong>
          </div>

        </div>

        <div class="hazard-stat">
          <span class="hazard-stat-label">
            ${hazardText("location")}
          </span>
          <strong class="hazard-stat-value">
            ${hazardText("locationValue")}
          </strong>
        </div>

        <p class="hazard-description" id="hazardDescription"></p>

        <div class="hazard-actions">

          <button class="hazard-action"
                  id="hazardReport"
                  type="button">
            ${hazardText("report")}
          </button>

          <button class="hazard-action secondary"
                  id="hazardSafe"
                  type="button">
            ${hazardText("safe")}
          </button>

        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.querySelector("#hazardClose").addEventListener("click", closeHazardModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeHazardModal();
    }
  });

  document.querySelector("#hazardReport").addEventListener("click", () => {
    closeHazardModal();

    document.querySelector("#demo")?.scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(() => {
      document.querySelector("#message")?.focus();
    }, 500);
  });

  document.querySelector("#hazardSafe").addEventListener("click", () => {
    closeHazardModal();

    document.querySelector("#demo")?.scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(() => {
      show(
        lang === "hi"
          ? "डेमो: आसपास के सुरक्षित स्थानों की जानकारी तैयार की जा रही है।"
          : "Demo: nearby safe-location information is being prepared.",
        "success-result"
      );
    }, 500);
  });
}

function openHazardModal(hazardId) {
  const data = hazardExperience[hazardId];
  if (!data) return;

  createHazardModal();

  document.querySelector("#hazardModalTitle").textContent =
    document.querySelector(`[data-hazard="${hazardId}"] h3`)?.textContent ||
    hazardId;

  document.querySelector("#hazardStatusValue").textContent =
    lang === "hi"
      ? data.status === "Prepared"
        ? "तैयार"
        : "निगरानी"
      : data.status;

  document.querySelector("#hazardRiskValue").textContent =
    data.level;

  document.querySelector("#hazardMetricValue").textContent =
    data.value;

  document.querySelector("#hazardDescription").textContent =
    data.description;

  const modal = document.querySelector("#hazardModal");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  document.querySelector("#hazardClose")?.focus();
}

function closeHazardModal() {
  const modal = document.querySelector("#hazardModal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

document.querySelectorAll("[data-hazard]").forEach((card) => {
  const activate = () => {
    openHazardModal(card.dataset.hazard);
  };

  card.addEventListener("click", activate);

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeHazardModal();
  }
});

/* =========================================================
   DEMO SYSTEM STATUS
   Connects the product UI to the Flask demo API.
   ========================================================= */

async function loadDemoSystemStatus() {
  try {
    const response = await fetch("/api/demo-status");

    if (!response.ok) {
      throw new Error("Demo status request failed");
    }

    const data = await response.json();

    window.AapdaSaathi = {
      ...(window.AapdaSaathi || {}),
      demoStatus: data,
    };

    document.querySelectorAll("[data-system-status]").forEach((element) => {
      element.textContent =
        data.system === "operational"
          ? lang === "hi"
            ? "डेमो सिस्टम सक्रिय"
            : "Demo system operational"
          : lang === "hi"
            ? "डेमो सिस्टम उपलब्ध नहीं"
            : "Demo system unavailable";
    });

    document.querySelectorAll("[data-system-time]").forEach((element) => {
      const date = new Date(data.timestamp);

      element.textContent = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    });
  } catch (error) {
    console.warn("Demo status unavailable:", error);

    document.querySelectorAll("[data-system-status]").forEach((element) => {
      element.textContent =
        lang === "hi"
          ? "डेमो स्थिति उपलब्ध नहीं"
          : "Demo status unavailable";
    });
  }
}

loadDemoSystemStatus();

/* =========================================================
   CONTROL CENTRE DATA
   ========================================================= */

async function loadControlCentre() {
  try {
    const [hazardsResponse, placesResponse] = await Promise.all([
      fetch("/api/hazards"),
      fetch("/api/safe-places"),
    ]);

    if (!hazardsResponse.ok || !placesResponse.ok) {
      throw new Error("Control centre data unavailable");
    }

    const hazardsData = await hazardsResponse.json();
    const placesData = await placesResponse.json();

    const hazardCount = hazardsData.hazards?.length || 0;
    const safePlaceCount = placesData.places?.length || 0;

    const hazardElement = document.querySelector("#activeHazardsCount");
    const safeElement = document.querySelector("#safePlacesCount");

    if (hazardElement) {
      hazardElement.textContent = String(hazardCount).padStart(2, "0");
    }

    if (safeElement) {
      safeElement.textContent = String(safePlaceCount).padStart(2, "0");
    }

    window.AapdaSaathi = {
      ...(window.AapdaSaathi || {}),
      hazards: hazardsData.hazards || [],
      safePlaces: placesData.places || [],
    };
  } catch (error) {
    console.warn("Control centre unavailable:", error);
  }
}


function updateDemoRequestCount() {
  const requestElement = document.querySelector("#requestCount");
  if (!requestElement) return;

  const count = Number(
    localStorage.getItem("aapdaDemoRequestCount") || "0"
  );

  requestElement.textContent = String(count).padStart(2, "0");
}


function incrementDemoRequestCount() {
  const current = Number(
    localStorage.getItem("aapdaDemoRequestCount") || "0"
  );

  localStorage.setItem(
    "aapdaDemoRequestCount",
    String(current + 1)
  );

  updateDemoRequestCount();
}


document.querySelector("#refreshDemo")?.addEventListener("click", async () => {
  const button = document.querySelector("#refreshDemo");

  if (!button) return;

  const originalText = button.textContent;

  button.disabled = true;
  button.textContent =
    lang === "hi"
      ? "अपडेट हो रहा है…"
      : "Refreshing…";

  await Promise.all([
    loadDemoSystemStatus(),
    loadControlCentre(),
  ]);

  button.textContent =
    lang === "hi"
      ? "सिमुलेशन अपडेट हुआ"
      : "Simulation updated";

  setTimeout(() => {
    button.disabled = false;
    button.textContent = originalText;
  }, 1200);
});


loadControlCentre();
updateDemoRequestCount();
