// ---------- Harakat & huruf ----------
const FATHA='\u064E', KASRA='\u0650', DAMMA='\u064F', SUKUN='\u0652', SHADDA='\u0651';
const ALIF='\u0627', WAW='\u0648', YA='\u064A', TA='\u062A', NUN='\u0646', MIM='\u0645', HAMZA='\u0623';

const DHAMIR = [
  {ar:'هُوَ', lt:'huwa', id:'dia (lk)'},
  {ar:'هُمَا', lt:'humā', id:'mereka berdua (lk)'},
  {ar:'هُمْ', lt:'hum', id:'mereka (lk)'},
  {ar:'هِيَ', lt:'hiya', id:'dia (pr)'},
  {ar:'هُمَا', lt:'humā', id:'mereka berdua (pr)'},
  {ar:'هُنَّ', lt:'hunna', id:'mereka (pr)'},
  {ar:'أَنْتَ', lt:'anta', id:'kamu (lk)'},
  {ar:'أَنْتُمَا', lt:'antumā', id:'kalian berdua (lk)'},
  {ar:'أَنْتُمْ', lt:'antum', id:'kalian (lk)'},
  {ar:'أَنْتِ', lt:'anti', id:'kamu (pr)'},
  {ar:'أَنْتُمَا', lt:'antumā', id:'kalian berdua (pr)'},
  {ar:'أَنْتُنَّ', lt:'antunna', id:'kalian (pr)'},
  {ar:'أَنَا', lt:'anā', id:'saya'},
  {ar:'نَحْنُ', lt:'naḥnu', id:'kami/kita'}
];

const WAZAN = [
  {key:'a-u', ainMadhi:FATHA, ainMudhari:DAMMA, label:'فَعَلَ يَفْعُلُ', root:['ن','ص','ر'], meaning:'menolong'},
  {key:'a-i', ainMadhi:FATHA, ainMudhari:KASRA, label:'فَعَلَ يَفْعِلُ', root:['ض','ر','ب'], meaning:'memukul'},
  {key:'a-a', ainMadhi:FATHA, ainMudhari:FATHA, label:'فَعَلَ يَفْعَلُ', root:['ف','ت','ح'], meaning:'membuka'},
  {key:'i-a', ainMadhi:KASRA, ainMudhari:FATHA, label:'فَعِلَ يَفْعَلُ', root:['ع','ل','م'], meaning:'mengetahui'},
  {key:'u-u', ainMadhi:DAMMA, ainMudhari:DAMMA, label:'فَعُلَ يَفْعُلُ', root:['ك','ر','م'], meaning:'mulia'},
  {key:'i-i', ainMadhi:KASRA, ainMudhari:KASRA, label:'فَعِلَ يَفْعِلُ', root:['ح','س','ب'], meaning:'mengira'}
];

let selectedWazan = WAZAN[0];

const grid = document.getElementById('wazanGrid');
WAZAN.forEach((w, i) => {
  const btn = document.createElement('div');
  btn.className = 'wazan-btn' + (i===0 ? ' active' : '');
  btn.innerHTML = `<span class="ar">${w.label}</span><span class="meaning">cth: ${w.root.join('')} — ${w.meaning}</span>`;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.wazan-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    selectedWazan = w;
    document.getElementById('huruf1').value = w.root[0];
    document.getElementById('huruf2').value = w.root[1];
    document.getElementById('huruf3').value = w.root[2];
    document.getElementById('artiKata').value = w.meaning;
  });
  grid.appendChild(btn);
});
document.getElementById('huruf1').value = WAZAN[0].root[0];
document.getElementById('huruf2').value = WAZAN[0].root[1];
document.getElementById('huruf3').value = WAZAN[0].root[2];
document.getElementById('artiKata').value = WAZAN[0].meaning;

const VOCAB = [
  {madhi:'كَتَبَ', mudhari:'يَكْتُبُ', arti:'menulis', wazan:'فَعَلَ يَفْعُلُ', ar:'كَتَبَ الطَّالِبُ الدَّرْسَ', id:'Siswa itu menulis pelajaran.'},
  {madhi:'قَرَأَ', mudhari:'يَقْرَأُ', arti:'membaca', wazan:'فَعَلَ يَفْعَلُ', ar:'قَرَأَتْ فَاطِمَةُ الْكِتَابَ', id:'Fatimah membaca buku.'},
  {madhi:'لَعِبَ', mudhari:'يَلْعَبُ', arti:'bermain', wazan:'فَعِلَ يَفْعَلُ', ar:'يَلْعَبُ الْأَطْفَالُ فِي الْحَدِيقَةِ', id:'Anak-anak bermain di taman.'},
  {madhi:'أَكَلَ', mudhari:'يَأْكُلُ', arti:'makan', wazan:'فَعَلَ يَفْعُلُ', ar:'أَكَلَ أَحْمَدُ التُّفَّاحَةَ', id:'Ahmad makan apel.'},
  {madhi:'شَرِبَ', mudhari:'يَشْرَبُ', arti:'minum', wazan:'فَعِلَ يَفْعَلُ', ar:'شَرِبَتِ الْبِنْتُ اللَّبَنَ', id:'Anak perempuan itu minum susu.'},
  {madhi:'ذَهَبَ', mudhari:'يَذْهَبُ', arti:'pergi', wazan:'فَعَلَ يَفْعَلُ', ar:'ذَهَبَ الْوَلَدُ إِلَى الْمَدْرَسَةِ', id:'Anak laki-laki itu pergi ke sekolah.'},
  {madhi:'جَلَسَ', mudhari:'يَجْلِسُ', arti:'duduk', wazan:'فَعَلَ يَفْعِلُ', ar:'جَلَسَ الْمُعَلِّمُ عَلَى الْكُرْسِيِّ', id:'Guru itu duduk di kursi.'},
  {madhi:'وَقَفَ', mudhari:'يَقِفُ', arti:'berdiri', wazan:'فَعَلَ يَفْعِلُ', ar:'وَقَفَ التِّلْمِيذُ أَمَامَ الْفَصْلِ', id:'Murid itu berdiri di depan kelas.'},
  {madhi:'فَتَحَ', mudhari:'يَفْتَحُ', arti:'membuka', wazan:'فَعَلَ يَفْعَلُ', ar:'فَتَحَتِ الْأُمُّ الْبَابَ', id:'Ibu membuka pintu.'},
  {madhi:'دَخَلَ', mudhari:'يَدْخُلُ', arti:'masuk', wazan:'فَعَلَ يَفْعُلُ', ar:'دَخَلَ الطُّلَّابُ الْفَصْلَ', id:'Para siswa masuk kelas.'},
  {madhi:'خَرَجَ', mudhari:'يَخْرُجُ', arti:'keluar', wazan:'فَعَلَ يَفْعُلُ', ar:'خَرَجَتِ الْبِنْتُ مِنَ الْبَيْتِ', id:'Anak perempuan itu keluar dari rumah.'},
  {madhi:'نَظَرَ', mudhari:'يَنْظُرُ', arti:'melihat', wazan:'فَعَلَ يَفْعُلُ', ar:'نَظَرَ الْوَلَدُ إِلَى السَّمَاءِ', id:'Anak laki-laki itu melihat langit.'},
  {madhi:'سَمِعَ', mudhari:'يَسْمَعُ', arti:'mendengar', wazan:'فَعِلَ يَفْعَلُ', ar:'سَمِعْنَا الْأَذَانَ', id:'Kami mendengar azan.'},
  {madhi:'فَهِمَ', mudhari:'يَفْهَمُ', arti:'memahami', wazan:'فَعِلَ يَفْعَلُ', ar:'فَهِمَ الطَّالِبُ الدَّرْسَ', id:'Siswa itu memahami pelajaran.'},
  {madhi:'حَفِظَ', mudhari:'يَحْفَظُ', arti:'menghafal', wazan:'فَعِلَ يَفْعَلُ', ar:'حَفِظَتِ التِّلْمِيذَةُ السُّورَةَ', id:'Murid perempuan itu menghafal surah.'},
  {madhi:'رَجَعَ', mudhari:'يَرْجِعُ', arti:'kembali/pulang', wazan:'فَعَلَ يَفْعِلُ', ar:'رَجَعَ أَبِي مِنَ الْعَمَلِ', id:'Ayahku pulang dari kerja.'},
  {madhi:'طَلَبَ', mudhari:'يَطْلُبُ', arti:'meminta', wazan:'فَعَلَ يَفْعُلُ', ar:'طَلَبَ الْوَلَدُ الْمَاءَ', id:'Anak laki-laki itu meminta air.'},
  {madhi:'غَسَلَ', mudhari:'يَغْسِلُ', arti:'mencuci', wazan:'فَعَلَ يَفْعِلُ', ar:'غَسَلَتِ الْأُمُّ الثِّيَابَ', id:'Ibu mencuci pakaian.'},
  {madhi:'لَبِسَ', mudhari:'يَلْبَسُ', arti:'memakai', wazan:'فَعِلَ يَفْعَلُ', ar:'لَبِسَ الطِّفْلُ الْقَمِيصَ', id:'Anak itu memakai baju.'},
  {madhi:'ضَحِكَ', mudhari:'يَضْحَكُ', arti:'tertawa', wazan:'فَعِلَ يَفْعَلُ', ar:'ضَحِكَ الْأَطْفَالُ بِفَرَحٍ', id:'Anak-anak tertawa dengan gembira.'},
  {madhi:'نَصَرَ', mudhari:'يَنْصُرُ', arti:'menolong', wazan:'فَعَلَ يَفْعُلُ', ar:'نَصَرَ الْوَلَدُ صَدِيقَهُ', id:'Anak laki-laki itu menolong temannya.'},
  {madhi:'عَمِلَ', mudhari:'يَعْمَلُ', arti:'bekerja/melakukan', wazan:'فَعِلَ يَفْعَلُ', ar:'يَعْمَلُ أَبِي فِي الْمَكْتَبِ', id:'Ayahku bekerja di kantor.'},
  {madhi:'سَأَلَ', mudhari:'يَسْأَلُ', arti:'bertanya', wazan:'فَعَلَ يَفْعَلُ', ar:'سَأَلَ التِّلْمِيذُ الْمُعَلِّمَ', id:'Murid itu bertanya kepada guru.'},
  {madhi:'كَسَرَ', mudhari:'يَكْسِرُ', arti:'memecahkan', wazan:'فَعَلَ يَفْعِلُ', ar:'كَسَرَ الْوَلَدُ الزُّجَاجَةَ', id:'Anak laki-laki itu memecahkan botol.'},
  {madhi:'حَمَلَ', mudhari:'يَحْمِلُ', arti:'membawa', wazan:'فَعَلَ يَفْعِلُ', ar:'حَمَلَتِ الْبِنْتُ الْحَقِيبَةَ', id:'Anak perempuan itu membawa tas.'},
  {madhi:'رَسَمَ', mudhari:'يَرْسُمُ', arti:'menggambar', wazan:'فَعَلَ يَفْعُلُ', ar:'رَسَمَ الطَّالِبُ صُورَةً جَمِيلَةً', id:'Siswa itu menggambar gambar yang indah.'},
  {madhi:'جَمَعَ', mudhari:'يَجْمَعُ', arti:'mengumpulkan', wazan:'فَعَلَ يَفْعَلُ', ar:'جَمَعَ الْوَلَدُ الْكُتُبَ', id:'Anak laki-laki itu mengumpulkan buku-buku.'},
  {madhi:'طَبَخَ', mudhari:'يَطْبُخُ', arti:'memasak', wazan:'فَعَلَ يَفْعُلُ', ar:'طَبَخَتِ الْأُمُّ الطَّعَامَ', id:'Ibu memasak makanan.'},
  {madhi:'رَكِبَ', mudhari:'يَرْكَبُ', arti:'naik/mengendarai', wazan:'فَعِلَ يَفْعَلُ', ar:'رَكِبَ الْوَلَدُ الدَّرَّاجَةَ', id:'Anak laki-laki itu naik sepeda.'},
  {madhi:'سَبَحَ', mudhari:'يَسْبَحُ', arti:'berenang', wazan:'فَعَلَ يَفْعَلُ', ar:'يَسْبَحُ الْأَوْلَادُ فِي النَّهْرِ', id:'Anak-anak berenang di sungai.'}
];

function renderVocab(list){
  const grid = document.getElementById('vocabGrid');
  grid.innerHTML = list.map((v, i) => `
    <div class="vocab-card">
      <span class="no-badge">#${i+1}</span>
      <div class="ar-word">${v.madhi} <span style="font-size:19px;color:var(--maroon-2);">/ ${v.mudhari}</span></div>
      <div class="wazan-tag">وزن: ${v.wazan}</div>
      <div class="arti">${v.arti}</div>
      <div class="gramatikal"><b>Analisis:</b> Fi'il ṡulāṡī mujarrad — Māḍī: ${v.madhi} • Muḍāri': ${v.mudhari}</div>
      <div class="contoh">
        <div class="audio-action">
          <div class="kalimat-ar" data-ar="${encodeURIComponent(v.ar)}">${v.ar}</div>
          <button class="play-btn" type="button" data-ar="${encodeURIComponent(v.ar)}" aria-label="Putar audio">🔊</button>
        </div>
        <div class="kalimat-id">${v.id}</div>
      </div>
    </div>
  `).join('');
  bindAudioButtons();
}

const fallbackAudio = new Audio();
fallbackAudio.volume = 1.0;
fallbackAudio.preload = 'auto';
fallbackAudio.playsInline = true;
let currentAudioUrl = null;
const audioStatusElement = document.getElementById('audioStatus');

function showAudioStatus(message, isError = false) {
  if (!audioStatusElement) return;
  audioStatusElement.textContent = `Status audio: ${message}`;
  audioStatusElement.classList.toggle('error', isError);
}

fallbackAudio.addEventListener('play', () => showAudioStatus('Audio sedang diputar.'));
fallbackAudio.addEventListener('pause', () => showAudioStatus('Audio berhenti.'));
fallbackAudio.addEventListener('ended', () => showAudioStatus('Audio selesai.'));
fallbackAudio.addEventListener('error', () => showAudioStatus('Gagal memutar audio.', true));

function getArabicVoice(){
  const synth = window.speechSynthesis;
  if (!synth) return null;
  const voices = synth.getVoices();
  return voices.find(v => v.lang && v.lang.toLowerCase().startsWith('ar')) || null;
}

function isLocalServer(){
  return ['localhost', '127.0.0.1'].includes(location.hostname);
}

window.speechSynthesis.onvoiceschanged = () => {
  getArabicVoice();
};

function getGoogleTranslateTtsUrl(text){
  const encoded = encodeURIComponent(text);
  return `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${encoded}`;
}

async function playRemoteAudio(text){
  try {
    if (currentAudioUrl && currentAudioUrl.startsWith('blob:')) {
      URL.revokeObjectURL(currentAudioUrl);
      currentAudioUrl = null;
    }

    if (isLocalServer()) {
      const encoded = encodeURIComponent(text);
      const response = await fetch(`/tts?text=${encoded}&lang=ar`);
      if (!response.ok) {
        throw new Error(`TTS proxy status ${response.status}`);
      }
      const blob = await response.blob();
      currentAudioUrl = URL.createObjectURL(blob);
      fallbackAudio.src = currentAudioUrl;
    } else {
      fallbackAudio.src = getGoogleTranslateTtsUrl(text);
    }

    showAudioStatus('Memutar audio TTS remote...');
    const playPromise = fallbackAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(async err => {
        console.warn('Remote Arabic TTS tidak dapat diputar:', err);
        showAudioStatus('Remote audio tidak bisa diputar. Mencoba fallback browser speechSynthesis...', true);
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'ar-SA';
          utterance.rate = 0.95;
          utterance.pitch = 1.0;
          window.speechSynthesis.speak(utterance);
        }
      });
    }
  } catch (err) {
    console.warn('Gagal memutar remote audio:', err);
    showAudioStatus('Gagal memutar audio remote.', true);
  }
}

async function speakArabic(text) {
  if (!('speechSynthesis' in window)) {
    showAudioStatus('Browser Anda tidak mendukung suara.', true);
    await playRemoteAudio(text);
    return;
  }

  const synth = window.speechSynthesis;
  synth.cancel();

  const arabicVoice = getArabicVoice();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  if (arabicVoice) {
    utterance.voice = arabicVoice;
    showAudioStatus('Memutar suara dengan voice Arab lokal...');
    synth.speak(utterance);
    return;
  }

  showAudioStatus('Voice Arab lokal tidak ditemukan. Memutar audio TTS remote...');
  await playRemoteAudio(text);
}

function bindAudioButtons(){
  document.querySelectorAll('.play-btn, .kalimat-ar').forEach(el => {
    el.addEventListener('click', async () => {
      const text = decodeURIComponent(el.dataset.ar || '');
      if (text) await speakArabic(text);
    });
  });
}

renderVocab(VOCAB);

document.getElementById('vocabSearch').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = VOCAB.filter(v =>
    v.arti.toLowerCase().includes(q) ||
    v.madhi.includes(q) ||
    v.mudhari.includes(q) ||
    v.id.toLowerCase().includes(q)
  );
  renderVocab(filtered);
});

function generateMadhi(f, ain, lam, ainH){
  const base = f + FATHA + ain + ainH;
  return [
    base + lam + FATHA,
    base + lam + FATHA + ALIF,
    base + lam + DAMMA + WAW + ALIF,
    base + lam + FATHA + TA + SUKUN,
    base + lam + FATHA + TA + FATHA + ALIF,
    base + lam + SUKUN + NUN + FATHA,
    base + lam + SUKUN + TA + FATHA,
    base + lam + SUKUN + TA + DAMMA + MIM + ALIF,
    base + lam + SUKUN + TA + DAMMA + MIM + SUKUN,
    base + lam + SUKUN + TA + KASRA,
    base + lam + SUKUN + TA + DAMMA + MIM + ALIF,
    base + lam + SUKUN + TA + DAMMA + NUN + SHADDA + FATHA,
    base + lam + SUKUN + TA + DAMMA,
    base + lam + SUKUN + NUN + FATHA + ALIF
  ];
}

function generateMudhari(f, ain, lam, ainH){
  const stem = f + SUKUN + ain + ainH;
  const endA = DAMMA;
  const endB = FATHA + ALIF + NUN + KASRA;
  const endC = DAMMA + WAW + NUN + FATHA;
  const endD = SUKUN + NUN + FATHA;
  const endE = KASRA + YA + NUN + FATHA;
  const rows = [
    {p:YA, e:endA}, {p:YA, e:endB}, {p:YA, e:endC},
    {p:TA, e:endA}, {p:TA, e:endB}, {p:YA, e:endD},
    {p:TA, e:endA}, {p:TA, e:endB}, {p:TA, e:endC},
    {p:TA, e:endE}, {p:TA, e:endB}, {p:TA, e:endD},
    {p:HAMZA, e:endA}, {p:NUN, e:endA}
  ];
  return rows.map(r => r.p + FATHA + stem + lam + r.e);
}

function generateAmr(f, ain, lam, ainH){
  const hamzaHarakat = (ainH === DAMMA) ? DAMMA : KASRA;
  const hamza = ALIF + hamzaHarakat;
  const stem = f + SUKUN + ain + ainH + lam;
  return [
    {idx:6,  form: hamza + stem + SUKUN},
    {idx:7,  form: hamza + stem + FATHA + ALIF},
    {idx:8,  form: hamza + stem + DAMMA + WAW + ALIF},
    {idx:9,  form: hamza + stem + KASRA + YA},
    {idx:11, form: hamza + stem + SUKUN + NUN + FATHA}
  ];
}

function buildTable(forms){
  let rows = '';
  forms.forEach((form, i) => {
    const d = DHAMIR[i];
    rows += `<tr>
      <td class="no">${i+1}</td>
      <td class="dhamir-ar">${d.ar}</td>
      <td>${d.lt}<br><span style="opacity:.6;font-size:12px;">${d.id}</span></td>
      <td class="bentuk">${form}</td>
    </tr>`;
  });
  return `<table class="tasrif">
    <thead><tr><th>No</th><th>Ḍamīr</th><th>Arti</th><th>Bentuk Kata</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function buildAmrTable(entries){
  let rows = '';
  entries.forEach(e => {
    const d = DHAMIR[e.idx];
    rows += `<tr>
      <td class="no">${e.idx+1}</td>
      <td class="dhamir-ar">${d.ar}</td>
      <td>${d.lt}<br><span style="opacity:.6;font-size:12px;">${d.id}</span></td>
      <td class="bentuk">${e.form}</td>
    </tr>`;
  });
  return `<table class="tasrif">
    <thead><tr><th>No</th><th>Ḍamīr</th><th>Arti</th><th>Bentuk Kata</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const f = document.getElementById('huruf1').value.trim() || selectedWazan.root[0];
  const ain = document.getElementById('huruf2').value.trim() || selectedWazan.root[1];
  const lam = document.getElementById('huruf3').value.trim() || selectedWazan.root[2];
  const arti = document.getElementById('artiKata').value.trim() || '(arti belum diisi)';

  const madhiForms = generateMadhi(f, ain, lam, selectedWazan.ainMadhi);
  const mudhariForms = generateMudhari(f, ain, lam, selectedWazan.ainMudhari);
  const amrForms = generateAmr(f, ain, lam, selectedWazan.ainMudhari);

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p style="font-size:13.5px;color:var(--ink-soft);margin-bottom:22px;">
      Akar kata: <strong style="font-family:var(--font-ar);font-size:19px;">${f}${ain}${lam}</strong>
      &nbsp;•&nbsp; Arti: <strong>${arti}</strong>
      &nbsp;•&nbsp; Wazan: <strong style="font-family:var(--font-ar);">${selectedWazan.label}</strong>
    </p>
    <div class="result-block">
      <div class="result-title"><span class="ar">فِعْل مَاضٍ</span><span class="lt">— Fi'il Māḍī (Bentuk Lampau)</span></div>
      ${buildTable(madhiForms)}
    </div>
    <div class="result-block">
      <div class="result-title"><span class="ar">فِعْل مُضَارِع</span><span class="lt">— Fi'il Muḍāri' (Bentuk Sekarang/Akan Datang)</span></div>
      ${buildTable(mudhariForms)}
    </div>
    <div class="result-block">
      <div class="result-title"><span class="ar">فِعْل أَمْر</span><span class="lt">— Fi'il Amr (Kata Perintah, untuk mukhāṭab)</span></div>
      ${buildAmrTable(amrForms)}
    </div>
  `;
});

document.getElementById('generateBtn').click();
