document.addEventListener("DOMContentLoaded", () => {
    renderMasterGrid();
    renderQuizGrid();
    renderHandoutGrid();
    renderEvaluasikuGrid();
});

// ==========================================================================
// 1. MAIN TAB SWITCHER & DETAIL VIEWS
// ==========================================================================
function switchMainTab(tabId, el) {
    document.querySelectorAll('.tab-view').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));

    document.getElementById(`tab-${tabId}`).classList.add('active');
    el.classList.add('active');
    closeDetailViews();
    closeEvalDetailView();
}

function closeDetailViews() {
    const mlv = document.getElementById("master-list-view");
    const mdv = document.getElementById("master-detail-view");
    const qlv = document.getElementById("quiz-list-view");
    const qdv = document.getElementById("quiz-detail-view");
    const hlv = document.getElementById("handout-list-view");
    const hdv = document.getElementById("handout-detail-view");

    if(mlv) mlv.style.display = "block";
    if(mdv) mdv.style.display = "none";
    if(qlv) qlv.style.display = "block";
    if(qdv) qdv.style.display = "none";
    if(hlv) hlv.style.display = "block";
    if(hdv) hdv.style.display = "none";
}

// ==========================================================================
// 2. MASTER TRAINING
// ==========================================================================
function renderMasterGrid() {
    const tbody = document.getElementById("masterGridBody");
    if(!tbody) return;
    tbody.innerHTML = "";

    db.masterTrainingList.forEach((item) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${item.paketMateri}</strong></td>
                <td>${item.divisi}</td>
                <td>${item.jabatan.join(", ")}</td>
                <td>${item.masaKerja}</td>
                <td class="text-center">
                    <i class="fa-solid fa-pen-to-square" style="cursor:pointer; color:#7f8c8d;" onclick="openMasterDetail(${item.id})"></i>
                    <i class="fa-solid fa-circle-xmark" style="cursor:pointer; color:#c0392b; margin-left:5px;"></i>
                </td>
            </tr>
        `;
    });

    const infoText = `View 1-${db.masterTrainingList.length} of ${db.masterTrainingList.length}`;
    document.getElementById("masterHeaderInfo").innerText = infoText;
    document.getElementById("masterFooterInfo").innerText = infoText;
}

function openMasterDetail(id) {
    document.getElementById("master-list-view").style.display = "none";
    document.getElementById("master-detail-view").style.display = "block";

    const data = db.masterTrainingList.find(m => m.id === id) || db.masterTrainingList[0];

    document.getElementById("masterPaketNameInput").value = data.paketMateri;
    renderTags("masterDivisiTags", Array.isArray(data.divisi) ? data.divisi : [data.divisi]);
    renderTags("masterJabatanTags", data.jabatan);

    const tbody = document.getElementById("skillTableBody");
    tbody.innerHTML = "";
    data.skills.forEach(s => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${s.title}</strong></td>
                <td>${s.tipe}</td>
                <td>${s.description}</td>
                <td class="text-center">
                    <div class="action-btns-group">
                        <i class="fa-solid fa-file-lines file-icon" title="Lihat File" onclick="openDirectFileViewer('${s.title}')"></i>
                        <i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" title="Hapus Item" onclick="this.closest('tr').remove()"></i>
                    </div>
                </td>
            </tr>
        `;
    });
}

function openUploadMateriModal() {
    document.getElementById("uploadMateriModal").style.display = "flex";
}

function closeUploadMateriModal() {
    document.getElementById("uploadMateriModal").style.display = "none";
    document.getElementById("newMateriTitle").value = "";
    document.getElementById("newMateriDesc").value = "";
    document.getElementById("newMateriFile").value = "";
}

function submitUploadMateriModal(e) {
    e.preventDefault();

    const titleVal = document.getElementById("newMateriTitle").value;
    const typeVal = document.querySelector('input[name="newMateriType"]:checked').value;
    const descVal = document.getElementById("newMateriDesc").value;

    const tbody = document.getElementById("skillTableBody");
    tbody.innerHTML += `
        <tr>
            <td><strong>${titleVal}</strong></td>
            <td>${typeVal}</td>
            <td>${descVal}</td>
            <td class="text-center">
                <div class="action-btns-group">
                    <i class="fa-solid fa-file-lines file-icon" title="Lihat File" onclick="openDirectFileViewer('${titleVal}')"></i>
                    <i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" title="Hapus Item" onclick="this.closest('tr').remove()"></i>
                </div>
            </td>
        </tr>
    `;

    closeUploadMateriModal();
    alert("Skill & File Materi Berhasil Ditambahkan ke Tabel!");
}

function openDirectFileViewer(title) {
    const viewerTitle = document.getElementById("fileViewerTitle");
    const viewerContent = document.getElementById("fileViewerContent");
    const viewerSubtext = document.getElementById("fileViewerSubtext");

    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("video") || lowerTitle.includes("tutorial") || lowerTitle.includes("brighton app")) {
        viewerTitle.innerHTML = `<i class="fa-solid fa-file-video" style="color:#3498db;"></i> Video Preview: ${title}`;
        viewerSubtext.innerText = "Format: MP4 Video Player";
        viewerContent.innerHTML = `
            <video controls autoplay style="width: 100%; height: 100%; object-fit: contain;">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            </video>
        `;
    } else if (lowerTitle.includes("script") || lowerTitle.includes("ppt") || lowerTitle.includes("sosialisasi") || lowerTitle.includes("materi")) {
        viewerTitle.innerHTML = `<i class="fa-solid fa-file-powerpoint" style="color:#e67e22;"></i> Presentation Slide: ${title}`;
        viewerSubtext.innerText = "Format: Microsoft PowerPoint (.pptx)";
        viewerContent.innerHTML = `
            <div style="background: #1e1e1e; color: #fff; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; text-align: center;">
                <i class="fa-solid fa-file-powerpoint" style="font-size: 64px; color: #e67e22; margin-bottom: 15px;"></i>
                <h4 style="font-size: 16px; margin-bottom: 8px;">${title}</h4>
                <p style="font-size: 12px; color: #aaa; margin-bottom: 20px;">Slide Presentasi Terlampir (Modul Online Viewer)</p>
                <button class="btn btn-success" onclick="alert('Membuka slide PowerPoint...')"><i class="fa-solid fa-play"></i> Putar Slide Show</button>
            </div>
        `;
    } else {
        viewerTitle.innerHTML = `<i class="fa-solid fa-file-pdf" style="color:#e74c3c;"></i> Document Viewer: ${title}`;
        viewerSubtext.innerText = "Format: PDF Document Viewer";
        viewerContent.innerHTML = `
            <iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" style="width: 100%; height: 100%; border: none;"></iframe>
        `;
    }

    document.getElementById("fileViewerModal").style.display = "flex";
}

function closeFileViewerModal() {
    document.getElementById("fileViewerModal").style.display = "none";
    document.getElementById("fileViewerContent").innerHTML = "";
}

function saveMasterData(e) {
    e.preventDefault();
    alert("Master Training Berhasil Disimpan!");
    closeDetailViews();
}

// ==========================================================================
// 3. MASTER QUIZ
// ==========================================================================
function renderQuizGrid() {
    const tbody = document.getElementById("quizGridBody");
    if(!tbody) return;
    tbody.innerHTML = "";

    db.quizzes.forEach((q) => {
        let totalDisplay = "0 Soal";
        let tipeBadge = "";

        if (q.tipeSoal === "Pilihan Ganda") {
            totalDisplay = `${q.questions ? q.questions.length : 0} Soal`;
            tipeBadge = `<span class="badge badge-pg"><i class="fa-solid fa-list-ul"></i> Pilihan Ganda</span>`;
        } else if (q.tipeSoal === "Essai") {
            totalDisplay = `${q.questions ? q.questions.length : 0} Soal`;
            tipeBadge = `<span class="badge badge-essai"><i class="fa-solid fa-pen-nib"></i> Essai</span>`;
        } else if (q.tipeSoal === "Tes Praktik") {
            totalDisplay = `1 Berkas PDF`;
            tipeBadge = `<span class="badge badge-praktik"><i class="fa-solid fa-file-pdf"></i> Tes Praktik</span>`;
        }

        tbody.innerHTML += `
            <tr>
                <td><strong>${q.title}</strong></td>
                <td>${q.skillType}</td>
                <td>${tipeBadge}</td>
                <td>${q.passingGrade}%</td>
                <td class="text-center">${totalDisplay}</td>
                <td class="text-center">
                    <i class="fa-solid fa-pen-to-square" style="cursor:pointer; color:#7f8c8d;" onclick="openQuizDetail(${q.id})"></i>
                    <i class="fa-solid fa-circle-xmark" style="cursor:pointer; color:#c0392b; margin-left:5px;"></i>
                </td>
            </tr>
        `;
    });

    const infoText = `View 1-${db.quizzes.length} of ${db.quizzes.length}`;
    document.getElementById("quizHeaderInfo").innerText = infoText;
    document.getElementById("quizFooterInfo").innerText = infoText;
}

function toggleQuizBuilderView() {
    const selectedType = document.querySelector('input[name="builder_quiz_type"]:checked').value;
    const pgSection = document.getElementById("pgCardSection");
    const essaiSection = document.getElementById("essaiCardSection");
    const praktikSection = document.getElementById("praktikCardSection");

    pgSection.style.display = (selectedType === "Pilihan Ganda") ? "block" : "none";
    essaiSection.style.display = (selectedType === "Essai") ? "block" : "none";
    praktikSection.style.display = (selectedType === "Tes Praktik") ? "block" : "none";
}

function openQuizDetail(id) {
    document.getElementById("quiz-list-view").style.display = "none";
    document.getElementById("quiz-detail-view").style.display = "block";

    const data = db.quizzes.find(q => q.id === id) || db.quizzes[0];

    document.getElementById("quizTitleInput").value = data.title;
    document.getElementById("quizPassingGrade").value = data.passingGrade;

    const radios = document.querySelectorAll('input[name="builder_quiz_type"]');
    radios.forEach(r => {
        r.checked = (r.value === data.tipeSoal);
    });

    toggleQuizBuilderView();

    const pgBody = document.getElementById("pgQuestionsTableBody");
    pgBody.innerHTML = "";
    if (data.tipeSoal === "Pilihan Ganda") {
        (data.questions || []).forEach((q, idx) => {
            pgBody.innerHTML += `
                <tr>
                    <td>${idx + 1}</td>
                    <td><textarea class="question-textarea">${q.question}</textarea></td>
                    <td>
                        <div class="options-box">
                            <span>${q.options[0] || 'a. Opsi A'}</span>
                            <span>${q.options[1] || 'b. Opsi B'}</span>
                            <strong>Kunci: (${(q.keyAnswer || 'a').toUpperCase()})</strong>
                        </div>
                    </td>
                    <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
                </tr>
            `;
        });
    }

    const essaiBody = document.getElementById("essaiQuestionsTableBody");
    essaiBody.innerHTML = "";
    if (data.tipeSoal === "Essai") {
        (data.questions || []).forEach((q, idx) => {
            essaiBody.innerHTML += `
                <tr>
                    <td>${idx + 1}</td>
                    <td><textarea class="question-textarea">${q.question}</textarea></td>
                    <td><textarea class="question-textarea" placeholder="Pedoman jawaban kunci...">${q.keyAnswer || ''}</textarea></td>
                    <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
                </tr>
            `;
        });
    }

    if (data.tipeSoal === "Tes Praktik") {
        document.getElementById("praktikInstruksi").value = data.instruksi || "";
    }
}

function addPgQuestionRow() {
    const pgBody = document.getElementById("pgQuestionsTableBody");
    const count = pgBody.children.length + 1;

    pgBody.innerHTML += `
        <tr>
            <td>${count}</td>
            <td><textarea class="question-textarea" placeholder="Tuliskan pertanyaan pilihan ganda..."></textarea></td>
            <td>
                <div class="options-box">
                    <input type="text" placeholder="Option A">
                    <input type="text" placeholder="Option B">
                    <input type="text" placeholder="Kunci (a/b/c)" style="width: 100px;">
                </div>
            </td>
            <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
        </tr>
    `;
}

function addEssaiQuestionRow() {
    const essaiBody = document.getElementById("essaiQuestionsTableBody");
    const count = essaiBody.children.length + 1;

    essaiBody.innerHTML += `
        <tr>
            <td>${count}</td>
            <td><textarea class="question-textarea" placeholder="Tuliskan pertanyaan soal uraian/essai..."></textarea></td>
            <td><textarea class="question-textarea" placeholder="Tuliskan pedoman jawaban / rubrik penilaian..."></textarea></td>
            <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
        </tr>
    `;
}

function saveQuizData(e) {
    e.preventDefault();
    alert("Master Data Quiz / Tes Praktik Berhasil Disimpan!");
    closeDetailViews();
}

// ==========================================================================
// 4. MASTER HANDOUT
// ==========================================================================
function renderHandoutGrid() {
    const tbody = document.getElementById("handoutGridBody");
    if(!tbody) return;
    tbody.innerHTML = "";

    db.masterHandoutList.forEach((item) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td>${item.divisi}</td>
                <td>${item.masaKerja}</td>
                <td>Total Karyawan : ${item.totalKaryawan}</td>
                <td class="text-center">
                    <i class="fa-solid fa-pen-to-square" style="cursor:pointer; color:#7f8c8d;" onclick="openHandoutDetail(${item.id})"></i>
                    <i class="fa-solid fa-circle-xmark" style="cursor:pointer; color:#c0392b; margin-left:5px;"></i>
                </td>
            </tr>
        `;
    });

    const infoText = `View 1-${db.masterHandoutList.length} of ${db.masterHandoutList.length}`;
    document.getElementById("handoutHeaderInfo").innerText = infoText;
    document.getElementById("handoutFooterInfo").innerText = infoText;
}

function openHandoutDetail(id) {
    document.getElementById("handout-list-view").style.display = "none";
    document.getElementById("handout-detail-view").style.display = "block";

    const data = db.masterHandoutList.find(h => h.id === id) || db.masterHandoutList[0];
    document.getElementById("handoutNameInput").value = data.name;
    renderTags("handoutJabatanTags", data.jabatan);

    const mBody = document.getElementById("handoutMateriTableBody");
    mBody.innerHTML = "";
    data.materiItems.forEach(m => {
        mBody.innerHTML += `
            <tr>
                <td><strong>${m.title}</strong></td>
                <td>${m.tipe}</td>
                <td><i class="fa-solid fa-file-pen"></i> ${m.quizTitle}</td>
                <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
            </tr>
        `;
    });

    const tbody = document.getElementById("employeeTableBody");
    tbody.innerHTML = "";
    data.employees.forEach(emp => {
        tbody.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.nickname}</td>
                <td>${emp.nik}</td>
                <td>${emp.divisi}</td>
                <td>${emp.jabatan}</td>
                <td>${emp.joinDate}</td>
                <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
            </tr>
        `;
    });

    document.getElementById("empFooterInfo").innerText = `View 1-${data.employees.length} of ${data.employees.length}`;
}

function openLinkMateriModal() {
    const dropdown = document.getElementById("selectMasterQuizDropdown");
    dropdown.innerHTML = "";

    db.quizzes.forEach(q => {
        dropdown.innerHTML += `<option value="${q.id}">[${q.tipeSoal}] ${q.title}</option>`;
    });

    document.getElementById("linkMateriModal").style.display = "flex";
}

function closeLinkMateriModal() {
    document.getElementById("linkMateriModal").style.display = "none";
}

function addSelectedMateriToHandout() {
    const quizId = parseInt(document.getElementById("selectMasterQuizDropdown").value);
    const quizObj = db.quizzes.find(q => q.id === quizId);

    if (quizObj) {
        const mBody = document.getElementById("handoutMateriTableBody");
        mBody.innerHTML += `
            <tr>
                <td><strong>${quizObj.materiModule}</strong></td>
                <td>${quizObj.skillType}</td>
                <td><i class="fa-solid fa-file-pen"></i> ${quizObj.title}</td>
                <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
            </tr>
        `;
    }
    closeLinkMateriModal();
}

function addEmployeeToHandout() {
    const name = prompt("Masukkan Nama Karyawan Penerima Handout:");
    if (!name) return;
    const tbody = document.getElementById("employeeTableBody");
    tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>User</td>
            <td>101260999</td>
            <td>Human Resource</td>
            <td>Staff</td>
            <td>2026-08-01</td>
            <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
        </tr>
    `;
}

function saveHandoutData(e) {
    e.preventDefault();
    alert("Paket Handout Berhasil Disimpan & Otomatis Terdistribusi!");
    closeDetailViews();
}

// ==========================================================================
// 5. EVALUASIKU (INTEGRASI REVIEW 4K & PERIODE BULAN)
// ==========================================================================

let currentActiveEvalNik = null;
let currentActivePeriode = "bulan1";
let currentDetailAvgQuiz = 0;
let currentDetailAvgEval = 0;

function renderEvaluasikuGrid() {
    const tbody = document.getElementById("evaluasikuGridBody");
    if(!tbody) return;
    tbody.innerHTML = "";

    db.employees.forEach((emp) => {
        const isAssessed = emp.status === "Sudah Dinilai";
        const statusBadge = isAssessed ? "badge-approved" : "badge-pending";
        const rowClass = isAssessed ? "row-approved" : "";

        tbody.innerHTML += `
            <tr class="${rowClass}">
                <td class="text-center"><input type="checkbox"></td>
                <td><strong style="color:#007bff; cursor:pointer;" onclick="openEvalDetailView('${emp.nik}')">${emp.nik}</strong></td>
                <td><strong>${emp.name}</strong></td>
                <td>${emp.cabang}</td>
                <td>${emp.divisi}</td>
                <td>${emp.lamaBekerja}</td>
                <td><span style="font-weight:600; color:#555;">${emp.kategoriGroup}</span></td>
                <td><span class="badge ${statusBadge}">${emp.status}</span></td>
                <td>${emp.tanggalInput}</td>
                <td class="text-center">
                    <button type="button" class="btn btn-secondary btn-xs" onclick="openEvalDetailView('${emp.nik}')">
                        <i class="fa-solid fa-eye"></i> Detail
                    </button>
                </td>
            </tr>
        `;
    });

    const info = `View 1-${db.employees.length} of ${db.employees.length}`;
    document.getElementById("evalGridHeaderInfo").innerText = info;
    document.getElementById("evalGridFooterInfo").innerText = info;
}

function openEvalDetailView(nik) {
    currentActiveEvalNik = nik;
    const emp = db.employees.find(e => e.nik === nik);
    if (!emp) return;

    document.getElementById("eval-grid-view").style.display = "none";
    document.getElementById("eval-detail-view").style.display = "block";

    document.getElementById("evalDetailHeaderName").innerText = `${emp.name} (${emp.nik}) - ${emp.divisi}`;

    // Render Files PDF & Essai
    renderStudentFilesTab(nik, emp.name, emp.divisi);

    // Render Form 4K Default Bulan 1
    currentActivePeriode = "bulan1";
    loadReview4KData(nik, "bulan1");

    // Render Nilai Quiz & Asesor
    renderScoresSubTab(nik);

    // Default aktif ke Sub-Tab 'files'
    document.querySelectorAll('.eval-sub-tab')[0].click();
}

function closeEvalDetailView() {
    const egv = document.getElementById("eval-grid-view");
    const edv = document.getElementById("eval-detail-view");
    if(egv) egv.style.display = "block";
    if(edv) edv.style.display = "none";
}

function switchEvalSubTab(subTabName, el) {
    document.querySelectorAll('.eval-sub-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.eval-sub-tab').forEach(t => t.classList.remove('active'));

    document.getElementById(`eval-sub-content-${subTabName}`).classList.add('active');
    el.classList.add('active');
}

// --------------------------------------------------------------------------
// REVIEW 4K: CONTROLLER & KALKULASI SKALA 1-5
// --------------------------------------------------------------------------
function switchPeriodeTab(periodeKey, el) {
    document.querySelectorAll('.periode-tab-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');

    currentActivePeriode = periodeKey;
    let labelText = "Periode: Bulan 1";
    if(periodeKey === "bulan2") labelText = "Periode: Bulan 2 (Draft)";
    if(periodeKey === "bulan3") labelText = "Periode: Bulan 3 (Draft)";
    document.getElementById("currentPeriodeLabel").innerText = labelText;

    loadReview4KData(currentActiveEvalNik, periodeKey);
}

function loadReview4KData(nik, periodeKey) {
    const userReviews = db.review4KData[nik] || {};
    const data = userReviews[periodeKey] || {
        karakter: 0.0, komitmen: 0.0, kontribusi: 0.0, kompetensi: 0.0,
        karakterNote: "", komitmenNote: "", kontribusiNote: "", kompetensiNote: ""
    };

    document.getElementById("k1_score").value = data.karakter > 0 ? data.karakter.toFixed(1) : "";
    document.getElementById("k2_score").value = data.komitmen > 0 ? data.komitmen.toFixed(1) : "";
    document.getElementById("k3_score").value = data.kontribusi > 0 ? data.kontribusi.toFixed(1) : "";
    document.getElementById("k4_score").value = data.kompetensi > 0 ? data.kompetensi.toFixed(1) : "";

    document.getElementById("k1_note").value = data.karakterNote || "";
    document.getElementById("k2_note").value = data.komitmenNote || "";
    document.getElementById("k3_note").value = data.kontribusiNote || "";
    document.getElementById("k4_note").value = data.kompetensiNote || "";

    calculate4KAverage();
}

function calculate4KAverage() {
    const k1 = parseFloat(document.getElementById("k1_score").value) || 0.0;
    const k2 = parseFloat(document.getElementById("k2_score").value) || 0.0;
    const k3 = parseFloat(document.getElementById("k3_score").value) || 0.0;
    const k4 = parseFloat(document.getElementById("k4_score").value) || 0.0;

    document.getElementById("sumK1").innerText = k1 > 0 ? k1.toFixed(1) : "-";
    document.getElementById("sumK2").innerText = k2 > 0 ? k2.toFixed(1) : "-";
    document.getElementById("sumK3").innerText = k3 > 0 ? k3.toFixed(1) : "-";
    document.getElementById("sumK4").innerText = k4 > 0 ? k4.toFixed(1) : "-";

    const totalValid = [k1, k2, k3, k4].filter(val => val > 0);
    const avgDisplay = document.getElementById("avg4KScoreDisplay");
    const predikatBadge = document.getElementById("predikat4KBadge");

    if(totalValid.length === 0) {
        avgDisplay.innerText = "0.0";
        avgDisplay.className = "total-score-badge score-failed";
        predikatBadge.className = "badge badge-gagal margin-top";
        predikatBadge.innerText = "BELUM DIISI (DRAFT)";
        return;
    }

    const avg = (k1 + k2 + k3 + k4) / 4.0;
    avgDisplay.innerText = avg.toFixed(2);

    if (avg >= 4.0) {
        avgDisplay.className = "total-score-badge score-passed";
        predikatBadge.className = "badge badge-lulus margin-top";
        predikatBadge.innerText = "PREDIKAT: SANGAT BAIK";
    } else if (avg >= 3.0) {
        avgDisplay.className = "total-score-badge score-passed";
        predikatBadge.className = "badge badge-pg margin-top";
        predikatBadge.innerText = "PREDIKAT: BAIK";
    } else if (avg >= 2.0) {
        avgDisplay.className = "total-score-badge score-failed";
        predikatBadge.className = "badge badge-essai margin-top";
        predikatBadge.innerText = "PREDIKAT: CUKUP";
    } else {
        avgDisplay.className = "total-score-badge score-failed";
        predikatBadge.className = "badge badge-gagal margin-top";
        predikatBadge.innerText = "PREDIKAT: KURANG";
    }
}

function saveReview4KData() {
    alert(`Review 4K Periode [${currentActivePeriode.toUpperCase()}] Berhasil Disimpan!\nRata-rata: ${document.getElementById("avg4KScoreDisplay").innerText}`);
}

// --------------------------------------------------------------------------
// RENDER FILES & LEMBAR ESSAI
// --------------------------------------------------------------------------
function renderStudentFilesTab(nik, name, divisi) {
    const containerFiles = document.getElementById("filesContainerList");
    const containerEssai = document.getElementById("essaiCardPreviewList");
    
    containerFiles.innerHTML = "";
    containerEssai.innerHTML = "";

    const fileItems = db.studentUploadedFiles[nik] || [
        { category: `Lembar Tugas Praktik 1: Onboarding (${divisi})`, fileName: `Tugas_Praktik_Modul_${name.replace(/\s+/g, '_')}.pdf`, uploadTime: "2026-08-19 08:30:00" },
        { category: `Lembar Tugas Praktik 2: Studi Kasus (${divisi})`, fileName: `Tugas_Praktik_Studi_Kasus_${name.replace(/\s+/g, '_')}.pdf`, uploadTime: "2026-08-19 09:12:00" }
    ];

    document.getElementById("totalPdfBadge").innerText = `${fileItems.length} File PDF`;

    fileItems.forEach(item => {
        containerFiles.innerHTML += `
            <div class="uploaded-file-row">
                <div class="uploaded-file-label">${item.category}</div>
                <div class="uploaded-file-box">
                    <div class="file-box-left">
                        <i class="fa-solid fa-file-pdf"></i>
                        <div>
                            <div class="file-meta-name">${item.fileName}</div>
                            <div class="file-meta-time">Waktu Upload: ${item.uploadTime}</div>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary-alt btn-xs" onclick="openDirectFileViewer('${item.fileName}')">
                            <i class="fa-solid fa-eye"></i> Lihat PDF
                        </button>
                        <button type="button" class="btn btn-secondary btn-xs" onclick="alert('Mendownload berkas: ${item.fileName}')">
                            <i class="fa-solid fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    const essaiItems = db.studentEssaiAnswers[nik] || [
        {
            modulName: `Modul Pembelajaran Praktik (${divisi})`,
            soalText: "Jelaskan langkah-langkah penanganan pekerjaan harian sesuai SOP divisi Anda!",
            jawabanKaryawan: "Melakukan verifikasi berkas awal, berkoordinasi dengan atasan terkait kelengkapan dokumen, serta menginput data mutasi ke dalam sistem FAT ERP tepat waktu."
        }
    ];

    document.getElementById("totalEssaiBadge").innerText = `${essaiItems.length} Soal Essai`;

    containerEssai.innerHTML = `
        <div class="uploaded-file-row">
            <div class="uploaded-file-label">Lembar Pengerjaan Soal Essai (${divisi})</div>
            <div class="uploaded-file-box">
                <div class="file-box-left">
                    <i class="fa-solid fa-file-signature" style="color: #6f42c1;"></i>
                    <div>
                        <div class="file-meta-name">Lembar_Jawaban_Essai_${name.replace(/\s+/g, '_')}.doc</div>
                        <div class="file-meta-time">Total ${essaiItems.length} Soal Uraian Dikerjakan</div>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-purple btn-xs" onclick="openEssaiViewerModal('${nik}', '${name}', '${divisi}')">
                        <i class="fa-solid fa-eye"></i> Lihat Jawaban Essai
                    </button>
                </div>
            </div>
        </div>
    `;
}

function openEssaiViewerModal(nik, name, divisi) {
    const modalContent = document.getElementById("modalEssaiContent");
    const modalTitle = document.getElementById("essaiModalTitle");
    const modalSubtext = document.getElementById("essaiModalSubtext");

    modalTitle.innerHTML = `<i class="fa-solid fa-file-signature"></i> Lembar Jawaban Soal Essai: ${name}`;
    modalSubtext.innerText = `Divisi: ${divisi} | NIK: ${nik}`;
    modalContent.innerHTML = "";

    const essaiItems = db.studentEssaiAnswers[nik] || [
        {
            modulName: `Modul Pembelajaran Praktik (${divisi})`,
            soalText: "Jelaskan langkah-langkah penanganan pekerjaan harian sesuai SOP divisi Anda!",
            jawabanKaryawan: "Melakukan verifikasi berkas awal, berkoordinasi dengan atasan terkait kelengkapan dokumen, serta menginput data mutasi ke dalam sistem FAT ERP tepat waktu."
        }
    ];

    essaiItems.forEach((item, idx) => {
        modalContent.innerHTML += `
            <div class="modal-essai-item">
                <div class="modal-essai-q-title">#Soal ${idx + 1}: ${item.modulName}</div>
                <div style="font-size:11px; color:#444; margin-bottom:8px;">
                    <strong>Pertanyaan:</strong><br>${item.soalText}
                </div>
                <div class="modal-essai-ans-body">
                    <strong>Jawaban Karyawan:</strong><br>${item.jawabanKaryawan.replace(/\n/g, '<br>')}
                </div>
            </div>
        `;
    });

    document.getElementById("essaiViewerModal").style.display = "flex";
}

function closeEssaiViewerModal() {
    document.getElementById("essaiViewerModal").style.display = "none";
}

// --------------------------------------------------------------------------
// RENDER NILAI
// --------------------------------------------------------------------------
function renderScoresSubTab(nik) {
    const qBody = document.getElementById("detailQuizScoreBody");
    const aBody = document.getElementById("detailAsesorScoreBody");
    qBody.innerHTML = "";
    aBody.innerHTML = "";

    const quizList = db.evaluations.filter(e => e.nik === nik);
    let quizSum = 0;

    if (quizList.length === 0) {
        qBody.innerHTML = `<tr><td colspan="3" class="text-center">Belum ada riwayat kuis / tes praktik.</td></tr>`;
    } else {
        quizList.forEach(q => {
            quizSum += q.score;
            const badgeClass = q.status === "LULUS" ? "badge-lulus" : "badge-gagal";
            qBody.innerHTML += `
                <tr>
                    <td><strong>${q.materi}</strong></td>
                    <td class="text-center"><strong>${q.score}</strong></td>
                    <td class="text-center"><span class="badge ${badgeClass}">${q.status}</span></td>
                </tr>
            `;
        });
    }

    currentDetailAvgQuiz = quizList.length > 0 ? Math.round(quizSum / quizList.length) : 0;
    document.getElementById("subQuizAvg").innerText = currentDetailAvgQuiz;

    const asesorList = db.evaluatorAssessments[nik] || [
        { bidang: "SOP & Kinerja Praktik", evaluatorName: "Pak Rudi (HRD)", score: 85, note: "Paham alur operasional dasar." },
        { bidang: "Komunikasi & Disiplin", evaluatorName: "Bu Widya (Recruitment)", score: 82, note: "Koordinasi aktif dan rapi." },
        { bidang: "Kualitas Tugas Praktik Akhir", evaluatorName: "Frengky (Manager Ops)", score: 80, note: "Pengerjaan tugas sesuai standar." }
    ];

    asesorList.forEach(a => {
        aBody.innerHTML += `
            <tr>
                <td><input type="text" class="evaluator-input" value="${a.bidang}"></td>
                <td><input type="text" class="evaluator-input" value="${a.evaluatorName}"></td>
                <td><input type="number" class="evaluator-input text-center sub-eval-score-field" value="${a.score}" min="0" max="100" onchange="calculateSubEvaluatorScore()"></td>
                <td><input type="text" class="evaluator-input" value="${a.note}"></td>
                <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="removeSubEvaluatorRow(this)"></i></td>
            </tr>
        `;
    });

    calculateSubEvaluatorScore();
}

function addSubEvaluatorRow() {
    const aBody = document.getElementById("detailAsesorScoreBody");
    aBody.innerHTML += `
        <tr>
            <td><input type="text" class="evaluator-input" placeholder="Bidang Materi"></td>
            <td><input type="text" class="evaluator-input" placeholder="Nama Evaluator"></td>
            <td><input type="number" class="evaluator-input text-center sub-eval-score-field" value="80" min="0" max="100" onchange="calculateSubEvaluatorScore()"></td>
            <td><input type="text" class="evaluator-input" placeholder="Catatan evaluator..."></td>
            <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="removeSubEvaluatorRow(this)"></i></td>
        </tr>
    `;
    calculateSubEvaluatorScore();
}

function removeSubEvaluatorRow(btn) {
    btn.closest('tr').remove();
    calculateSubEvaluatorScore();
}

function calculateSubEvaluatorScore() {
    const fields = document.querySelectorAll('.sub-eval-score-field');
    let sum = 0;
    if (fields.length > 0) {
        fields.forEach(f => sum += (parseInt(f.value) || 0));
        currentDetailAvgEval = Math.round(sum / fields.length);
    } else {
        currentDetailAvgEval = 0;
    }

    document.getElementById("subEvalAvg").innerText = currentDetailAvgEval;

    const quizPart = currentDetailAvgQuiz * 0.40;
    const evalPart = currentDetailAvgEval * 0.60;
    const finalScore = Math.round(quizPart + evalPart);

    document.getElementById("subCalcQuiz").innerText = `${quizPart.toFixed(1)} pt`;
    document.getElementById("subCalcEval").innerText = `${evalPart.toFixed(1)} pt`;
    
    const scoreDisplay = document.getElementById("subTotalPointDisplay");
    scoreDisplay.innerText = finalScore;

    const badge = document.getElementById("subPassBadge");
    if (finalScore >= 80) {
        scoreDisplay.className = "total-score-badge score-passed";
        badge.className = "badge badge-lulus margin-top";
        badge.innerText = "STATUS: LULUS PELATIHAN";
    } else {
        scoreDisplay.className = "total-score-badge score-failed";
        badge.className = "badge badge-gagal margin-top";
        badge.innerText = "STATUS: TIDAK LULUS (REMIDI)";
    }
}

// HELPER: TAG RENDERER
function renderTags(containerId, tagArray) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = "";
    tagArray.forEach(tag => {
        container.innerHTML += `
            <span class="tag-item">
                ${tag} <span class="close-tag" onclick="this.parentElement.remove()">&times;</span>
            </span>
        `;
    });
}