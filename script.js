
/* ===== SwasthyaSetu multilingual + role-specific dashboard patch ===== */
const SS_TRANSLATIONS = {
  en: {
    home:"Home", about:"About Us", how:"How It Works", services:"Services", contact:"Contact",
    login:"Login", dashboard:"Dashboard", logout:"Logout", language:"Language",
    ashaDashboard:"ASHA Worker Dashboard", doctorDashboard:"Doctor Dashboard", dhoDashboard:"DHO Dashboard", patientDashboard:"Patient Dashboard",
    patients:"Patients", triage:"Smart Triage", referrals:"Referrals", teleconsult:"Teleconsultation",
    consultations:"Consultations", prescription:"Prescription", sync:"Sync Center", analytics:"Analytics",
    inventory:"Medicine Inventory", alerts:"Disease Alerts", register:"Register Patient",
    welcome:"Welcome to SwasthyaSetu", rural:"Accessible healthcare for rural and underserved communities",
    contactUs:"Contact Us", phone:"Mobile", email:"Email", address:"Address",
    available:"Available", pending:"Pending", urgent:"Urgent", totalPatients:"Total Patients",
    todayTriage:"Today's Triage", referralsPending:"Pending Referrals", lowStock:"Low Stock Items",
    consultationsToday:"Today's Consultations", prescriptions:"Prescriptions", highRisk:"High Risk Cases",
    syncPending:"Pending Sync", inventoryStatus:"Inventory Status", diseaseAlerts:"Disease Alerts",
    myProfile:"My Profile", healthSummary:"Health Summary", nextConsultation:"Next Consultation",
    recentActivity:"Recent Activity", districtOverview:"District Overview", activeCases:"Active Cases",
    stockAlerts:"Stock Alerts", systemStatus:"System Status"
  },
  mr: {
    home:"मुख्यपृष्ठ", about:"आमच्याबद्दल", how:"कसे काम करते", services:"सेवा", contact:"संपर्क",
    login:"लॉगिन", dashboard:"डॅशबोर्ड", logout:"लॉगआउट", language:"भाषा",
    ashaDashboard:"आशा कार्यकर्ता डॅशबोर्ड", doctorDashboard:"डॉक्टर डॅशबोर्ड", dhoDashboard:"DHO डॅशबोर्ड", patientDashboard:"रुग्ण डॅशबोर्ड",
    patients:"रुग्ण", triage:"स्मार्ट ट्रायेज", referrals:"रेफरल्स", teleconsult:"टेलिकन्सल्टेशन",
    consultations:"कन्सल्टेशन्स", prescription:"प्रिस्क्रिप्शन", sync:"सिंक सेंटर", analytics:"विश्लेषण",
    inventory:"औषध साठा", alerts:"रोग सूचना", register:"रुग्ण नोंदणी",
    welcome:"SwasthyaSetu मध्ये स्वागत आहे", rural:"ग्रामीण आणि वंचित भागांसाठी सुलभ आरोग्यसेवा",
    contactUs:"आमच्याशी संपर्क", phone:"मोबाईल", email:"ईमेल", address:"पत्ता",
    available:"उपलब्ध", pending:"प्रलंबित", urgent:"तातडीचे", totalPatients:"एकूण रुग्ण",
    todayTriage:"आजचे ट्रायेज", referralsPending:"प्रलंबित रेफरल्स", lowStock:"कमी साठा",
    consultationsToday:"आजच्या कन्सल्टेशन्स", prescriptions:"प्रिस्क्रिप्शन्स", highRisk:"उच्च-जोखीम प्रकरणे",
    syncPending:"प्रलंबित सिंक", inventoryStatus:"औषध साठा स्थिती", diseaseAlerts:"रोग सूचना",
    myProfile:"माझे प्रोफाइल", healthSummary:"आरोग्य सारांश", nextConsultation:"पुढील कन्सल्टेशन",
    recentActivity:"अलीकडील हालचाली", districtOverview:"जिल्हा आढावा", activeCases:"सक्रिय प्रकरणे",
    stockAlerts:"साठा सूचना", systemStatus:"सिस्टम स्थिती"
  },
  hi: {
    home:"होम", about:"हमारे बारे में", how:"कैसे काम करता है", services:"सेवाएँ", contact:"संपर्क",
    login:"लॉगिन", dashboard:"डैशबोर्ड", logout:"लॉगआउट", language:"भाषा",
    ashaDashboard:"आशा कार्यकर्ता डैशबोर्ड", doctorDashboard:"डॉक्टर डैशबोर्ड", dhoDashboard:"DHO डैशबोर्ड", patientDashboard:"मरीज़ डैशबोर्ड",
    patients:"मरीज़", triage:"स्मार्ट ट्रायेज", referrals:"रेफरल", teleconsult:"टेलीकंसल्टेशन",
    consultations:"कंसल्टेशन", prescription:"प्रिस्क्रिप्शन", sync:"सिंक सेंटर", analytics:"एनालिटिक्स",
    inventory:"दवा स्टॉक", alerts:"रोग अलर्ट", register:"मरीज़ पंजीकरण",
    welcome:"SwasthyaSetu में आपका स्वागत है", rural:"ग्रामीण और वंचित क्षेत्रों के लिए सुलभ स्वास्थ्य सेवा",
    contactUs:"हमसे संपर्क करें", phone:"मोबाइल", email:"ईमेल", address:"पता",
    available:"उपलब्ध", pending:"लंबित", urgent:"तत्काल", totalPatients:"कुल मरीज़",
    todayTriage:"आज का ट्रायेज", referralsPending:"लंबित रेफरल", lowStock:"कम स्टॉक",
    consultationsToday:"आज के कंसल्टेशन", prescriptions:"प्रिस्क्रिप्शन", highRisk:"उच्च-जोखिम मामले",
    syncPending:"लंबित सिंक", inventoryStatus:"स्टॉक स्थिति", diseaseAlerts:"रोग अलर्ट",
    myProfile:"मेरा प्रोफाइल", healthSummary:"स्वास्थ्य सारांश", nextConsultation:"अगला कंसल्टेशन",
    recentActivity:"हाल की गतिविधि", districtOverview:"जिला अवलोकन", activeCases:"सक्रिय मामले",
    stockAlerts:"स्टॉक अलर्ट", systemStatus:"सिस्टम स्थिति"
  }
};

function ssLang() {
  return localStorage.getItem("ss_language") || "en";
}
function ssT(key) {
  return (SS_TRANSLATIONS[ssLang()] && SS_TRANSLATIONS[ssLang()][key]) || SS_TRANSLATIONS.en[key] || key;
}
function setSwasthyaLanguage(lang) {
  if (!SS_TRANSLATIONS[lang]) lang = "en";
  localStorage.setItem("ss_language", lang);
  document.documentElement.lang = lang === "mr" ? "mr" : lang;
  applySwasthyaTranslations();
  if (typeof render === "function") render();
}
function applySwasthyaTranslations() {
  const lang = ssLang();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (SS_TRANSLATIONS[lang] && SS_TRANSLATIONS[lang][key]) el.textContent = SS_TRANSLATIONS[lang][key];
  });
  const select = document.getElementById("languageSelect");
  if (select) select.value = lang;
}
function ssDashboardTitle(role) {
  if (role === "asha") return ssT("ashaDashboard");
  if (role === "doctor") return ssT("doctorDashboard");
  if (role === "dho") return ssT("dhoDashboard");
  return ssT("patientDashboard");
}
function ssRoleDashboard(role) {
  const patients = JSON.parse(localStorage.getItem("ss_patients") || "[]");
  const referrals = JSON.parse(localStorage.getItem("ss_referrals") || "[]");
  const inventory = JSON.parse(localStorage.getItem("ss_inventory") || "[]");
  const pendingSync = patients.filter(p => p.sync === "Pending Sync").length;
  const red = patients.filter(p => p.priority === "RED").length;
  const yellow = patients.filter(p => p.priority === "YELLOW").length;
  const low = inventory.filter(i => Number(i.stock) <= Number(i.min)).length;

  if (role === "asha") {
    return `
      <div class="dashboard-role-banner asha-banner"><span>🩺</span><div><h2>${ssT("ashaDashboard")}</h2><p>Field care, patient registration and first-level triage</p></div></div>
      <div class="stat-grid">
        <div class="stat-card"><span>👥</span><b>${patients.length}</b><small>${ssT("totalPatients")}</small></div>
        <div class="stat-card"><span>🚦</span><b>${red + yellow}</b><small>${ssT("todayTriage")}</small></div>
        <div class="stat-card"><span>📤</span><b>${pendingSync}</b><small>${ssT("syncPending")}</small></div>
        <div class="stat-card"><span>🚑</span><b>${referrals.filter(r=>r.status==="Pending").length}</b><small>${ssT("referralsPending")}</small></div>
      </div>
      <div class="dashboard-grid">
        <div class="panel"><h3>🩺 Field Work</h3><p>Register patients, check vitals and use Smart Triage during village visits.</p>
          <div class="quick-actions"><button onclick="navigate('register')">➕ ${ssT("register")}</button><button onclick="navigate('triage')">🚦 ${ssT("triage")}</button><button onclick="navigate('sync')">🔄 ${ssT("sync")}</button></div>
        </div>
        <div class="panel"><h3>🚨 Priority Queue</h3><p><b class="red-text">${red} RED</b> • <b class="yellow-text">${yellow} YELLOW</b> • ${patients.length-red-yellow} GREEN</p><button class="secondary" onclick="navigate('patients')">View ${ssT("patients")}</button></div>
      </div>`;
  }
  if (role === "doctor") {
    return `
      <div class="dashboard-role-banner doctor-banner"><span>👨‍⚕️</span><div><h2>${ssT("doctorDashboard")}</h2><p>Remote consultation, diagnosis, prescriptions and referrals</p></div></div>
      <div class="stat-grid">
        <div class="stat-card"><span>📅</span><b>${Math.max(3, patients.filter(p=>p.priority!=="GREEN").length)}</b><small>${ssT("consultationsToday")}</small></div>
        <div class="stat-card"><span>🚨</span><b>${red}</b><small>${ssT("highRisk")}</small></div>
        <div class="stat-card"><span>💊</span><b>${Math.max(2, referrals.length)}</b><small>${ssT("prescriptions")}</small></div>
        <div class="stat-card"><span>🚑</span><b>${referrals.length}</b><small>${ssT("referralsPending")}</small></div>
      </div>
      <div class="dashboard-grid">
        <div class="panel"><h3>🧑‍⚕️ Clinical Workbench</h3><p>Review referred patients, conduct teleconsultations and issue prescriptions.</p>
          <div class="quick-actions"><button onclick="navigate('consultations')">📝 ${ssT("consultations")}</button><button onclick="navigate('teleconsult')">📹 ${ssT("teleconsult")}</button><button onclick="navigate('prescription')">💊 ${ssT("prescription")}</button></div>
        </div>
        <div class="panel"><h3>🚑 Referral Desk</h3><p>${referrals.length} referral cases are available for review.</p><button class="secondary" onclick="navigate('referrals')">Open ${ssT("referrals")}</button></div>
      </div>`;
  }
  if (role === "dho") {
    return `
      <div class="dashboard-role-banner dho-banner"><span>📊</span><div><h2>${ssT("dhoDashboard")}</h2><p>District-level monitoring, inventory and public-health governance</p></div></div>
      <div class="stat-grid">
        <div class="stat-card"><span>👥</span><b>${patients.length}</b><small>${ssT("districtOverview")}</small></div>
        <div class="stat-card"><span>🚨</span><b>${red}</b><small>${ssT("activeCases")}</small></div>
        <div class="stat-card"><span>💊</span><b>${low}</b><small>${ssT("lowStock")}</small></div>
        <div class="stat-card"><span>⚠️</span><b>${referrals.length}</b><small>${ssT("diseaseAlerts")}</small></div>
      </div>
      <div class="dashboard-grid">
        <div class="panel"><h3>📈 Governance Control Room</h3><p>Monitor patient trends, referrals, medicine availability and disease alerts.</p>
          <div class="quick-actions"><button onclick="navigate('analytics')">📊 ${ssT("analytics")}</button><button onclick="navigate('inventory')">💊 ${ssT("inventory")}</button><button onclick="navigate('alerts')">⚠️ ${ssT("alerts")}</button></div>
        </div>
        <div class="panel"><h3>📦 ${ssT("stockAlerts")}</h3><p>${low} medicine items are at or below their minimum stock level.</p><button class="secondary" onclick="navigate('inventory')">Check Inventory</button></div>
      </div>`;
  }
  return `
    <div class="dashboard-role-banner patient-banner"><span>🧑</span><div><h2>${ssT("patientDashboard")}</h2><p>Your health information, appointments and prescriptions</p></div></div>
    <div class="stat-grid">
      <div class="stat-card"><span>❤️</span><b>Good</b><small>${ssT("healthSummary")}</small></div>
      <div class="stat-card"><span>📅</span><b>1</b><small>${ssT("nextConsultation")}</small></div>
      <div class="stat-card"><span>💊</span><b>2</b><small>${ssT("prescriptions")}</small></div>
      <div class="stat-card"><span>🔔</span><b>1</b><small>${ssT("recentActivity")}</small></div>
    </div>
    <div class="dashboard-grid">
      <div class="panel"><h3>🩺 ${ssT("healthSummary")}</h3><p>Recent consultation, vitals and prescription information can be viewed here.</p><div class="quick-actions"><button onclick="navigate('consultations')">📝 ${ssT("consultations")}</button><button onclick="navigate('prescription')">💊 ${ssT("prescription")}</button></div></div>
      <div class="panel"><h3>📹 ${ssT("nextConsultation")}</h3><p>Teleconsultation demo is available for your assigned doctor.</p><button class="secondary" onclick="navigate('teleconsult')">Open ${ssT("teleconsult")}</button></div>
    </div>`;
}

const state={role:localStorage.getItem("ss_role")||"public",page:"home",font:1,contrast:false,lang:"English",online:navigator.onLine,
patients:JSON.parse(localStorage.getItem("ss_patients")||"null")||[
{id:"P001",name:"Demo Patient",age:42,gender:"Male",village:"Demo Village",blood:"O+",abha:"ABHA-DEMO-001",priority:"RED",temp:"102°F",spo2:88,heart:110,symptoms:["Fever","Breathing Difficulty"],sync:"Synced"},
{id:"P002",name:"Sita Jadhav",age:31,gender:"Female",village:"Khadki",blood:"B+",abha:"ABHA-DEMO-002",priority:"GREEN",temp:"98.6°F",spo2:98,heart:76,symptoms:["Cough"],sync:"Synced"},
{id:"P003",name:"Ramesh Pawar",age:67,gender:"Male",village:"Kolegaon",blood:"A+",abha:"ABHA-DEMO-003",priority:"YELLOW",temp:"100.8°F",spo2:93,heart:96,symptoms:["Fever","Weakness"],sync:"Pending Sync"}],
referrals:JSON.parse(localStorage.getItem("ss_referrals")||"null")||[{token:"REF-2026-00124",patient:"Demo Patient",priority:"RED",destination:"District Hospital",specialist:"General Physician",status:"Pending"}],
inventory:JSON.parse(localStorage.getItem("ss_inventory")||"null")||[
{name:"Paracetamol",stock:120,min:50},{name:"ORS",stock:24,min:30},{name:"Amoxicillin",stock:70,min:25},{name:"Azithromycin",stock:18,min:25},{name:"Insulin",stock:12,min:10},{name:"Salbutamol",stock:8,min:15}]};

const save=()=>{localStorage.setItem("ss_patients",JSON.stringify(state.patients));localStorage.setItem("ss_referrals",JSON.stringify(state.referrals));localStorage.setItem("ss_inventory",JSON.stringify(state.inventory));};
const toast=m=>{const t=document.getElementById("toast");t.textContent="✓ "+m;t.className="toast show";setTimeout(()=>t.className="toast",2300)};
const showPage=p=>{state.page=p;render()};
const setRole=r=>{state.role=r;localStorage.setItem("ss_role",r);state.page=r==="public"?"home":"dashboard";toast("Demo login successful");render()};
const logout=()=>{state.role="public";localStorage.removeItem("ss_role");state.page="home";render()};
function toggleMenu(){document.querySelector(".topbar nav").classList.toggle("open")}
function changeFont(n){state.font=Math.max(.9,Math.min(1.2,state.font+n*.06));document.body.style.fontSize=(16*state.font)+"px"}
function toggleContrast(){document.getElementById("app").classList.toggle("contrast")}
function changeLanguage(){state.lang=document.getElementById("language").value;toast("Language UI selection changed (demo)")}

const navPublic=["home","about","how","services","contact"], navA=["dashboard","register","patients","triage","referrals","teleconsult","sync"],navD=["dashboard","consultations","patients","prescription","referrals"],navH=["dashboard","analytics","referrals","inventory","alerts"];
const labels={home:"Home",about:"About",how:"How It Works",services:"Services",contact:"Contact",dashboard:"Dashboard",register:"Register Patient",patients:"Patient Records",triage:"Smart Triage",referrals:"Referrals",teleconsult:"Teleconsultation",sync:"Sync Center",consultations:"Consultations",prescription:"Prescriptions",analytics:"Analytics",inventory:"Medicine Inventory",alerts:"Disease Alerts"};
function renderNav(){let arr=state.role==="asha"?navA:state.role==="doctor"?navD:state.role==="dho"?navH:navPublic;document.getElementById("nav").innerHTML=arr.map(n=>`<button onclick="showPage('${n}')">${labels[n]}</button>`).join("")+`<button class="navcta" onclick="${state.role==="public"?"showPage('login')":"logout()"}">${state.role==="public"?"⇥ Login":"↪ Logout"}</button>`}
function render(){renderNav();document.getElementById("networkText").textContent=state.online?"Online":"Offline Mode";document.getElementById("onlineDot").className=state.online?"dot":"dot off";const p=pages[state.page]||pages.home;document.getElementById("content").innerHTML=p();window.scrollTo({top:0,behavior:"smooth"})}
function layout(title,sub,body){return `<section class="page"><div class="pagehead"><span class="pill">SWASTHYASETU</span><h1>${title}</h1><p>${sub}</p></div>${body}</section>`}
const card=(icon,title,text)=>`<div class="card"><div class="icon">${icon}</div><h3>${title}</h3><p>${text}</p></div>`;
const pages={
home:()=>`<section class="hero"><div><span class="pill">HEALTHTECH • RURAL INDIA</span><h1>Bridging the healthcare gap, <em>one community at a time.</em></h1><p>SwasthyaSetu connects rural patients, frontline workers and specialists through intelligent triage, offline-first workflows and teleconsultation.</p><div class="actions"><button class="primary" onclick="showPage('login')">Explore Dashboard →</button><button class="secondary" onclick="showPage('how')">How It Works</button></div><div class="trust">✓ Designed for rural & underserved communities</div></div><div class="hero-card"><div class="network"><div class="node"><span class="ni">♟</span>SUB-CENTRE</div>→<div class="node"><span class="ni">▣</span>PHC</div>→<div class="node"><span class="ni">🏥</span>DISTRICT HOSPITAL</div>→<div class="node"><span class="ni">⚕</span>SPECIALIST</div></div><div class="triage-mini"><div><small>AI-ASSISTED TRIAGE</small><h3>Demo Patient</h3></div><span class="priority red">RED<br><small>HIGH PRIORITY</small></span></div><div class="mini-stats"><span>Offline Ready</span><span>Auto Sync</span><span>Low Bandwidth</span></div></div></section>
<section class="section"><div class="section-title center"><span>THE HEALTHCARE GAP</span><h2>Healthcare should not depend on where you live.</h2></div><div class="grid4">${card("🚑","Long Travel","Patients may need to travel 40–80 km for specialist consultation.")}${card("⚕","Limited Specialists","Rural communities can have limited access to specialist care.")}${card("▤","Paper Records","Fragile paper files can be lost or difficult to access.")}${card("⌁","Low Connectivity","Many remote regions experience unreliable internet connectivity.")}</div></section>
<section class="section soft"><div class="section-title center"><span>THE SOLUTION</span><h2>One connected platform. Multiple healthcare workflows.</h2></div><div class="grid4">${card("🧠","Smart AI Triage","Capture vitals and symptoms, then classify priority as Red, Yellow or Green.")}${card("☁","Offline-First","Continue essential workflows without internet and sync when connectivity returns.")}${card("◉","Teleconsultation","Connect high-risk cases with specialists through low-bandwidth communication.")}${card("▥","Governance","Give health officers visibility into referrals, inventory and alerts.")}</div></section><section class="cta"><h2>Healthcare should be accessible to everyone.</h2><p>A connected prototype for a more equitable rural healthcare ecosystem.</p><button class="primary" onclick="showPage('login')">Try Demo →</button></section>`,
about:()=>layout("Healthcare, Connected.","An integrated rural healthcare platform concept designed to connect Sub-Centres, PHCs and District Hospitals.",`<div class="network-big">${["SUB-CENTRE|Patient registration • vitals • ASHA triage","PRIMARY HEALTH CENTRE|Doctor consultation • prescription • referral","DISTRICT HOSPITAL|Specialist care • advanced referral","SPECIALIST|Teleconsultation • expert review"].map((x,i)=>{let a=x.split("|");return `<div class="network-box"><b>${a[0]}</b><small>${a[1]}</small></div>${i<3?"→":""}`}).join("")}</div><div class="notice">🛡 <div><b>Prototype note</b><p>ABDM/ABHA, Bhashini, WebRTC and biometric features are represented as integration-ready concepts in this demo, not live government or medical systems.</p></div></div>`),
how:()=>layout("How SwasthyaSetu works","A simple flow from local triage to specialist support.",`<div class="steps">${[["01","Offline Triage","ASHA worker logs vitals and symptoms even when offline."],["02","AI-Assisted Assessment","Demo rules classify the case as RED, YELLOW or GREEN."],["03","Sync & Consult","Pending records sync when connectivity is restored; high-risk cases can request consultation."],["04","Referral & Governance","Prescription, referral, inventory and district analytics continue the care workflow."]].map(x=>`<div class="step"><b>${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join("")}</div>`),
services:()=>layout("Core Services","Functional modules included in the SwasthyaSetu prototype.",`<div class="grid3">${card("🧠","Smart AI Triage","Rule-based demo assessment using symptoms and vitals.")}${card("☁","Offline Healthcare","Local storage with pending-sync status.")}${card("◉","Teleconsultation","Simulated low-bandwidth consultation workflow.")}${card("▤","Digital Records","Searchable patient history and care timeline.")}${card("🎙","Voice Input","Marathi/Hindi voice-input UI concept for frontline workers.")}${card("🛡","Emergency Access","Simulated fingerprint verification and critical information screen.")}</div>`),
contact:()=>layout("Let's build better healthcare together","Demo contact form for the prototype.",`<form class="form" onsubmit="event.preventDefault();toast('Message submitted successfully (demo)');this.reset()"><div class="formgrid">${["Full Name","Email","Phone"].map(x=>`<label>${x}<input required placeholder="${x}"></label>`).join("")}</div><label>Role<select><option>Patient</option><option>ASHA Worker</option><option>Doctor</option><option>Healthcare Administrator</option><option>Partner</option></select></label><label>Message<textarea rows="5" required placeholder="Tell us how you would like to connect..."></textarea></label><button class="primary">Send Message →</button></form>`),
login:()=>layout("Choose Demo Role","Use any demo account to explore the connected workflow.",`<div class="login-grid">${[["asha","ASHA Worker","Patient registration, triage, referrals and sync"],["doctor","Doctor","Consultations, prescriptions and referrals"],["dho","District Health Officer","Analytics, inventory and disease alerts"],["patient","Patient","Patient-facing demo access"]].map(x=>`<button class="login-card" onclick="setRole('${x[0]}')"><div class="icon">👥</div><h3>${x[1]}</h3><p>${x[2]}</p><small>Username: ${x[0]} • Password: 1234</small><span class="arrow">→</span></button>`).join("")}</div>`),
dashboard:()=>dashboard(),
register:()=>registerPage(),
patients:()=>patientsPage(),
triage:()=>triagePage(),
referrals:()=>referralsPage(),
teleconsult:()=>teleconsultPage(),
consultations:()=>teleconsultPage(true),
prescription:()=>prescriptionPage(),
sync:()=>syncPage(),
analytics:()=>analyticsPage(),
inventory:()=>inventoryPage(),
alerts:()=>alertsPage()
};

function dashboard(){let red=state.patients.filter(p=>p.priority==="RED").length,pending=state.referrals.filter(r=>r.status!=="Completed").length,low=state.inventory.filter(x=>x.stock<x.min).length;let name={asha:"ASHA Worker",doctor:"Doctor",dho:"District Health Officer",patient:"Patient"}[state.role];return layout(`${name} Dashboard`,"Demo data • prototype environment",`<div class="stats">${stat("👥","Total Patients",state.patients.length)}${stat("♥","High Priority",red)}${stat("▤","Active Referrals",pending)}${stat("▣","Low Stock",low)}</div><div class="grid2"><div class="panel"><h3>Connected Care Workflow</h3><div class="flow">${["Patient","Triage","Consult","Prescription","Referral"].map((x,i)=>`<div><b>${i+1}</b>${x}</div>`).join("")}</div></div><div class="panel"><h3>Priority Overview</h3>${bars()}</div></div><div class="panel"><h3>Quick Actions</h3><div class="quick">${state.role==="asha"?`<button onclick="showPage('register')">＋ Register Patient</button><button onclick="showPage('triage')">🧠 Smart Triage</button><button onclick="showPage('sync')">↻ Sync Center</button>`:state.role==="doctor"?`<button onclick="showPage('consultations')">◉ Consultations</button><button onclick="showPage('prescription')">▤ Prescription</button>`:state.role==="dho"?`<button onclick="showPage('analytics')">▥ Analytics</button><button onclick="showPage('inventory')">▣ Inventory</button><button onclick="showPage('alerts')">⚠ Alerts</button>`:`<button onclick="showPage('patients')">👥 My Records</button>`}</div></div>`)}
function stat(i,t,v){return `<div class="stat"><div class="ico">${i}</div><span>${t}</span><strong>${v}</strong></div>`}
function bars(){return ["RED","YELLOW","GREEN"].map(x=>{let n=state.patients.filter(p=>p.priority===x).length;return `<div class="bar"><span>${x}</span><i style="width:${Math.max(8,n*35)}%"></i><b>${n}</b></div>`}).join("")}
function registerPage(){return layout("Register Patient","Create a digital patient record. It will be stored locally in this prototype.",`<form class="form" onsubmit="savePatient(event)"><div class="formgrid">${field("name","Full Name",true)}${field("age","Age",true)}${field("village","Village",true)}${field("blood","Blood Group",false,"O+")}${field("abha","ABHA ID (optional)")} ${field("temp","Temperature")} ${field("spo2","SpO2")} ${field("heart","Heart Rate")}</div><label>Gender<select id="gender"><option>Male</option><option>Female</option><option>Other</option></select></label><div class="form-actions"><button class="primary">Save Patient ✓</button><span class="hint">☁ If offline, record is marked Pending Sync.</span></div></form>`)}
function field(id,l,req=false,val=""){return `<label>${l}<input id="${id}" ${req?"required":""} value="${val}" placeholder="${l}"></label>`}
function savePatient(e){e.preventDefault();let p={id:"P"+String(Date.now()).slice(-4),name:v("name"),age:+v("age"),gender:v("gender"),village:v("village"),blood:v("blood"),abha:v("abha"),temp:v("temp"),spo2:+v("spo2")||0,heart:+v("heart")||0,priority:"GREEN",symptoms:[],sync:state.online?"Synced":"Pending Sync"};state.patients.unshift(p);save();toast(state.online?"Patient saved":"Patient saved offline");showPage("patients")}
const v=id=>document.getElementById(id)?.value||"";
function patientsPage(){return layout("Patient Records","Searchable digital health records for the demo.",`<div class="search">🔎 <input id="pq" placeholder="Search patient or village..." oninput="filterPatients()"></div><div class="tablewrap"><table><thead><tr><th>Patient</th><th>Age</th><th>Village</th><th>Priority</th><th>SpO2</th><th>Sync</th></tr></thead><tbody id="patientRows">${patientRows(state.patients)}</tbody></table></div>`)}
function patientRows(ps){return ps.map(p=>`<tr><td><b>${p.name}</b><small>${p.id}</small></td><td>${p.age}</td><td>${p.village}</td><td><span class="badge ${p.priority.toLowerCase()}">${p.priority}</span></td><td>${p.spo2||"—"}</td><td>${p.sync}</td></tr>`).join("")}
function filterPatients(){let q=v("pq").toLowerCase();document.getElementById("patientRows").innerHTML=patientRows(state.patients.filter(p=>(p.name+p.village).toLowerCase().includes(q)))}
function triagePage(){let p=state.patients[0];return layout("Smart AI Triage","AI-assisted demo triage using transparent demonstration rules — not a medical diagnostic system.",`<div class="triage"><form class="panel" onsubmit="analyzeTriage(event)"><label>Patient<select id="tid">${state.patients.map(x=>`<option value="${x.id}">${x.name} • ${x.village}</option>`).join("")}</select></label><div class="formgrid">${field("ttemp","Temperature",false,p?.temp?.replace("°F","")||102)}${field("tspo2","SpO2",false,p?.spo2||88)}${field("theart","Heart Rate",false,p?.heart||110)}</div><div class="checks"><label><input id="fever" type="checkbox" checked> Fever</label><label><input id="breath" type="checkbox" checked> Breathing Difficulty</label><label><input id="chest" type="checkbox"> Chest Pain</label><label><input id="uncon" type="checkbox"> Unconsciousness</label></div><button class="primary">Analyze Patient 🧠</button></form><div id="triageResult" class="result red"><small>AI-ASSISTED DEMO RESULT</small><strong>RED</strong><h3>HIGH PRIORITY</h3><p>Emergency referral / urgent specialist review</p><hr><b>${p?.name||"Demo Patient"}</b><p>102°F • SpO2 88% • HR 110</p></div></div>`)}
function analyzeTriage(e){e.preventDefault();let spo=+v("tspo2"),temp=+v("ttemp"),red=document.getElementById("uncon").checked||document.getElementById("breath").checked||spo<90||document.getElementById("chest").checked;let pri=red?"RED":spo<95||temp>=101||document.getElementById("fever").checked?"YELLOW":"GREEN";let action=pri==="RED"?"Emergency referral / urgent specialist review":pri==="YELLOW"?"Doctor consultation":"Routine PHC follow-up";let p=state.patients.find(x=>x.id===v("tid"));Object.assign(p,{priority:pri,temp:temp+"°F",spo2:spo,heart:+v("theart"),symptoms:["Fever","Breathing Difficulty"].filter((x,i)=>[document.getElementById("fever").checked,document.getElementById("breath").checked][i]),sync:state.online?"Synced":"Pending Sync"});save();document.getElementById("triageResult").className="result "+pri.toLowerCase();document.getElementById("triageResult").innerHTML=`<small>AI-ASSISTED DEMO RESULT</small><strong>${pri}</strong><h3>${pri==="RED"?"HIGH PRIORITY":pri==="YELLOW"?"MODERATE PRIORITY":"ROUTINE"}</h3><p>${action}</p><hr><b>${p.name}</b><p>${temp}°F • SpO2 ${spo}% • HR ${v("theart")}</p>`;toast("Triage result saved")}
function referralsPage(){return layout("Referral Center","Generate and track referral tokens through the connected care pathway.",`<div class="two"><form class="form panel" onsubmit="addReferral(event)"><label>Patient<select id="rp">${state.patients.map(x=>`<option>${x.name}</option>`).join("")}</select></label><label>Destination<select id="rd"><option>PHC</option><option>District Hospital</option></select></label><label>Specialist<select id="rs"><option>General Physician</option><option>Cardiologist</option><option>Pediatrician</option><option>Dermatologist</option></select></label><button class="primary">Generate Referral ▤</button></form><div class="panel"><h3>Referral Timeline</h3>${state.referrals.map(r=>`<div class="ref"><div class="reftop"><b>${r.token}</b><span class="badge ${r.priority.toLowerCase()}">${r.priority}</span></div><p>${r.patient} → ${r.destination}</p><div class="timeline">Created → Sent to PHC → Specialist Review → Completed</div><small>Status: ${r.status}</small></div>`).join("")}</div></div>`)}
function addReferral(e){e.preventDefault();let p=state.patients.find(x=>x.name===v("rp"));state.referrals.unshift({token:"REF-2026-"+String(10000+state.referrals.length+1),patient:p.name,priority:p.priority,destination:v("rd"),specialist:v("rs"),status:"Pending"});save();toast("Referral token generated");showPage("referrals")}
function teleconsultPage(doctor=false){let p=state.patients[0];return layout(doctor?"Consultation Requests":"Teleconsultation","Simulated WebRTC-style interface for the prototype.",`<div class="video-layout"><div class="video"><div class="video-box">◉<span>Patient • ${p.name}</span></div><div class="video-box">⚕<span>${doctor?"You — Specialist":"Specialist Doctor"}</span></div><div class="video-controls"><button onclick="toast('Consultation started (demo)')">▶ Start Consultation</button><button onclick="toast('Low bandwidth mode enabled')">⌁ Enable Low Bandwidth</button></div></div><div class="panel"><span class="badge red">${p.priority}</span><h3>${p.name}</h3><p>Fever + Breathing Difficulty</p><p>Temperature: 102°F<br>SpO2: 88%<br>Heart Rate: 110</p><button class="primary" onclick="toast('Consultation request accepted (demo)')">Accept Consultation</button><p class="hint">Connection quality: Good • prototype</p></div></div>`)}
function prescriptionPage(){return layout("Digital Prescription","Create a printable prototype prescription and optionally simulate stock deduction.",`<div class="two"><div class="panel form"><label>Patient<select id="pp">${state.patients.map(x=>`<option>${x.name}</option>`).join("")}</select></label><label>Medicine<select id="pm">${state.inventory.map(x=>`<option>${x.name}</option>`).join("")}</select></label><label>Dosage<input id="pd" value="500 mg"></label><button class="smallbtn" onclick="addMed()">＋ Add Medicine</button><div id="meds"></div><button class="primary" onclick="savePrescription()">Save Prescription</button></div><div class="prescription"><small>SWASTHYASETU • PROTOTYPE</small><h2>Digital Prescription</h2><p><b>Patient:</b> <span id="printPatient">${state.patients[0].name}</span></p><hr><div id="rxlist" class="hint">Add medicines to preview.</div><button class="smallbtn" onclick="window.print()">Print Prescription</button></div></div>`)}
let meds=[];
function addMed(){meds.push({med:v("pm"),dose:v("pd")});document.getElementById("rxlist").innerHTML=meds.map(x=>`<p>💊 <b>${x.med}</b> — ${x.dose}</p>`).join("");document.getElementById("meds").innerHTML=`<p class="hint">${meds.length} medicine(s) added.</p>`}
function savePrescription(){meds.forEach(m=>{let x=state.inventory.find(i=>i.name===m.med);if(x)x.stock=Math.max(0,x.stock-1)});save();toast("Prescription saved (demo)")}
function syncPage(){let pending=state.patients.filter(p=>p.sync==="Pending Sync").length;return layout("Sync Center","Offline-first demo: local records remain available and can be marked synced when connectivity returns.",`<div class="stats">${stat("☁","Pending Records",pending)}${stat("☁","Synced Records",state.patients.length-pending)}${stat("⌁","Connection",state.online?"Online":"Offline")}</div><div class="panel" style="text-align:center;padding:45px"><h3>${state.online?"Connection available":"No network detected"}</h3><p>${state.online?"You can synchronize pending records now.":"New records and triage can continue locally."}</p><button class="primary" ${(!state.online||!pending)?"disabled":""} onclick="syncNow()">↻ Sync Now</button></div>`)}
function syncNow(){state.patients.forEach(p=>p.sync="Synced");save();toast("All pending records synced");showPage("sync")}
function analyticsPage(){return layout("Governance Analytics","District-level prototype dashboard using demo data.",`<div class="stats">${stat("👥","Total Patients",state.patients.length)}${stat("♥","High Risk",state.patients.filter(p=>p.priority==="RED").length)}${stat("▤","Active Referrals",state.referrals.length)}</div><div class="grid2"><div class="panel"><h3>Priority Distribution</h3>${bars()}</div><div class="panel"><h3>Referral Status</h3><div class="big">${state.referrals.filter(r=>r.status==="Pending").length}</div><p>pending referrals</p></div></div><div class="notice">▥ <div><b>Demo / Prototype Data</b><p>These numbers are fictional demonstration records, not real public-health statistics.</p></div></div>`)}
function inventoryPage(){return layout("PHC Medicine Inventory","Monitor stock levels and simulate updates.",`<div class="tablewrap"><table><thead><tr><th>Medicine</th><th>Stock</th><th>Minimum</th><th>Status</th><th>Action</th></tr></thead><tbody>${state.inventory.map((x,i)=>{let low=x.stock<x.min;return `<tr><td><b>${x.name}</b></td><td>${x.stock}</td><td>${x.min}</td><td><span class="badge ${low?"red":"green"}">${low?"Low Stock":"In Stock"}</span></td><td><button class="smallbtn" onclick="updateStock(${i})">Update</button></td></tr>`}).join("")}</tbody></table></div>`)}
function updateStock(i){let n=prompt("New stock quantity",state.inventory[i].stock);if(n!==null&&!isNaN(n)){state.inventory[i].stock=+n;save();toast("Inventory updated");showPage("inventory")}}
function alertsPage(){return layout("Disease Alerts","Fictional outbreak-monitoring records for the governance prototype.",`<div class="grid3">${[["Demo Village",24,"Medium"],["Khadki",11,"Low"],["Kolegaon",31,"High"]].map((a,i)=>`<div class="card"><span class="badge ${a[2]==="High"?"red":a[2]==="Medium"?"yellow":"green"}">${a[2]} Risk</span><h3>${a[0]}</h3><p><b>${a[1]}</b> reported demo cases</p><small>Status: Monitoring</small><br><button class="smallbtn" onclick="toast('Alert marked resolved')">Mark Resolved</button></div>`).join("")}</div>`)}

addEventListener("online",()=>{state.online=true;render();toast("Connection restored")});
addEventListener("offline",()=>{state.online=false;render();toast("Offline mode enabled")});
render();
/* ===== Runtime overrides ===== */
document.addEventListener("change", function(e) {
  if (e.target && e.target.id === "languageSelect") setSwasthyaLanguage(e.target.value);
});
window.addEventListener("DOMContentLoaded", function() {
  applySwasthyaTranslations();
});

function renderDashboard() {
  const role = localStorage.getItem("ss_role") || "patient";
  const content = document.getElementById("content");
  if (content) content.innerHTML = ssRoleDashboard(role);
  applySwasthyaTranslations();
}


function ssContactPage() {
  return `
    <section class="contact-hero">
      <div><span class="eyebrow">SWASTHYASETU</span><h1>${ssT("contactUs")}</h1>
      <p>We’re here to help improve access to healthcare in rural and underserved communities.</p></div>
    </section>
    <div class="contact-grid">
      <div class="contact-card"><div class="contact-icon">📱</div><h3>${ssT("phone")}</h3><p>+91 98765 43210</p><a href="tel:+919876543210">Call Us</a></div>
      <div class="contact-card"><div class="contact-icon">✉️</div><h3>${ssT("email")}</h3><p>support@swasthyasetu.org</p><a href="mailto:support@swasthyasetu.org">Email Us</a></div>
      <div class="contact-card"><div class="contact-icon">📍</div><h3>${ssT("address")}</h3><p>District Health Office, Solapur, Maharashtra, India</p><a href="https://maps.google.com/?q=Solapur,Maharashtra" target="_blank" rel="noopener">View Location</a></div>
    </div>
    <div class="panel contact-form-panel">
      <h2>Send us a message</h2>
      <form onsubmit="event.preventDefault(); toast('Message sent successfully!'); this.reset();">
        <div class="form-grid"><input required placeholder="Your Name"><input required type="email" placeholder="Your Email"></div>
        <input required placeholder="Subject"><textarea required rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>`;
}

(function(){
  const oldRender = window.render;
  if (typeof oldRender === "function") {
    window.render = function() {
      oldRender();
      const page = localStorage.getItem("ss_page") || "home";
      const content = document.getElementById("content");
      if (page === "contact" && content) content.innerHTML = ssContactPage();
      if (page === "dashboard" && content) content.innerHTML = ssRoleDashboard(localStorage.getItem("ss_role") || "patient");
      applySwasthyaTranslations();
    };
  }
})();
