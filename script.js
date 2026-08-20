/**
 * =========================================================================
 * FAT - AUDIT PROGRAM & HR TRAINING CENTER SYSTEM
 * Master Application Engine (script.js)
 * =========================================================================
 */

let currentActiveEvalNik = null;
let currentActivePeriode = "bulan1";
let currentDetailAvgQuiz = 0;
let currentDetailAvgEval = 0;

document.addEventListener("DOMContentLoaded", () => {
    renderMasterGrid();
    renderQuizGrid();
    renderHandoutGrid();
    renderEvaluasikuGrid();
    initGlobalEventListeners();
    console.log("FAT - HR Training & Evaluation System initialized successfully.");
});

function initGlobalEventListeners() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeFileViewerModal();
            closeEssaiViewerModal();
            closeUploadMateriModal();
            closeLinkMateriModal();
        }
    });

    const modals = document.querySelectorAll(".modal-overlay");
    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                const videoElement = modal.querySelector("video");
                if (videoElement) videoElement.pause();
            }
        });
    });
}

// =========================================================================
// 1. MAIN NAVIGATION TABS CONTROLLER
// =========================================================================
function switchMainTab(tabId, element) {
    document.querySelectorAll(".tab-view").forEach(v => v.classList.remove("active"));
    document.querySelectorAll(".nav-tabs .tab-item").forEach(t => t.classList.remove("active"));

    const targetView = document.getElementById(`tab-${tabId}`);
    if (targetView) targetView.classList.add("active");
    if (element) element.classList.add("active");

    closeDetailViews();
    closeEvalDetailView();
}

function closeDetailViews() {
    const ml = document.getElementById("master-list-view");
    const md = document.getElementById("master-detail-view");
    if (ml && md) { ml.style.display = "block"; md.style.display = "none"; }

    const ql = document.getElementById("quiz-list-view");
    const qd = document.getElementById("quiz-detail-view");
    if (ql && qd) { ql.style.display = "block"; qd.style.display = "none"; }

    const hl = document.getElementById("handout-list-view");
    const hd = document.getElementById("handout-detail-view");
    if (hl && hd) { hl.style.display = "block"; hd.style.display = "none"; }
}

// =========================================================================
// 2. MASTER TRAINING MODULE (INPUT TAG DIVISI & JABATAN)
// =========================================================================
function renderMasterGrid() {
    const tbody = document.getElementById("masterGridBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (!db.masterTrainingList || db.masterTrainingList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center">Belum ada data master training.</td></tr>`;
        return;
    }

    db.masterTrainingList.forEach((item) => {
        const jabatanText = Array.isArray(item.jabatan) ? item.jabatan.join(", ") : item.jabatan;
        tbody.innerHTML += `
            <tr>
                <td><strong>${item.paketMateri}</strong></td>
                <td>${item.divisi}</td>
                <td>${jabatanText}</td>
                <td>${item.masaKerja}</td>
                <td class="text-center">
                    <i class="fa-solid fa-pen-to-square" title="Edit Data" style="cursor:pointer; color:#7f8c8d; margin-right:6px;" onclick="openMasterDetail(${item.id})"></i>
                    <i class="fa-solid fa-circle-xmark" title="Hapus Paket" style="cursor:pointer; color:#c0392b;" onclick="deleteMasterTrainingItem(${item.id})"></i>
                </td>
            </tr>
        `;
    });

    const infoText = `View 1-${db.masterTrainingList.length} of ${db.masterTrainingList.length}`;
    const headerInfo = document.getElementById("masterHeaderInfo");
    const footerInfo = document.getElementById("masterFooterInfo");
    if (headerInfo) headerInfo.innerText = infoText;
    if (footerInfo) footerInfo.innerText = infoText;
}

function openMasterDetail(id) {
    document.getElementById("master-list-view").style.display = "none";
    document.getElementById("master-detail-view").style.display = "block";

    let data = null;
    if (id === 'new') {
        data = {
            id: Date.now(),
            divisi: ["FINANCE"],
            paketMateri: "",
            masaKerja: "All",
            jabatan: ["Staff"],
            skills: []
        };
    } else {
        data = db.masterTrainingList.find(m => m.id === id) || db.masterTrainingList[0];
    }

    document.getElementById("masterPaketNameInput").value = data.paketMateri;

    let divArray = Array.isArray(data.divisi) ? data.divisi : data.divisi.split(",").map(s => s.trim());
    renderTags("masterDivisiTags", divArray);
    renderTags("masterJabatanTags", data.jabatan);

    const mkRadios = document.querySelectorAll('input[name="mk_master"]');
    mkRadios.forEach(r => { r.checked = (r.value === data.masaKerja); });

    renderSkillTableBody(data.skills);
}

function addMasterDivisiTag() {
    const select = document.getElementById("masterDivisiSelect");
    const val = select.value;
    if (!val) return;

    const container = document.getElementById("masterDivisiTags");
    const existing = Array.from(container.querySelectorAll(".tag-item")).map(t => t.innerText.replace('×', '').trim());
    if (!existing.includes(val)) {
        container.innerHTML += `
            <span class="tag-item">
                ${val} <span class="close-tag" onclick="this.parentElement.remove()">&times;</span>
            </span>
        `;
    }
    select.value = "";
}

function addMasterJabatanTag() {
    const select = document.getElementById("masterJabatanSelect");
    const val = select.value;
    if (!val) return;

    const container = document.getElementById("masterJabatanTags");
    const existing = Array.from(container.querySelectorAll(".tag-item")).map(t => t.innerText.replace('×', '').trim());
    if (!existing.includes(val)) {
        container.innerHTML += `
            <span class="tag-item">
                ${val} <span class="close-tag" onclick="this.parentElement.remove()">&times;</span>
            </span>
        `;
    }
    select.value = "";
}

function renderSkillTableBody(skillsArray) {
    const tbody = document.getElementById("skillTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (!skillsArray || skillsArray.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center" style="color:#888;">Belum ada modul materi terlampir.</td></tr>`;
        return;
    }

    skillsArray.forEach((s) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${s.title}</strong></td>
                <td><span class="badge ${s.tipe === 'Hard Skill' ? 'badge-pg' : 'badge-essai'}">${s.tipe}</span></td>
                <td>${s.description}</td>
                <td class="text-center">
                    <div class="action-btns-group">
                        <i class="fa-solid fa-file-lines file-icon" title="Lihat Berkas / Preview Media" onclick="openDirectFileViewer('${s.title}')"></i>
                        <i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" title="Hapus Modul" onclick="this.closest('tr').remove()"></i>
                    </div>
                </td>
            </tr>
        `;
    });
}

function deleteMasterTrainingItem(id) {
    if (confirm("Apakah Anda yakin ingin menghapus paket pelatihan ini?")) {
        const index = db.masterTrainingList.findIndex(m => m.id === id);
        if (index !== -1) {
            db.masterTrainingList.splice(index, 1);
            renderMasterGrid();
            showNotificationToast("Paket pelatihan berhasil dihapus!");
        }
    }
}

function saveMasterData(e) {
    e.preventDefault();
    const paketName = document.getElementById("masterPaketNameInput").value;
    if (!paketName.trim()) {
        alert("Nama paket materi wajib diisi!");
        return;
    }

    showNotificationToast("Master Training Berhasil Disimpan!");
    closeDetailViews();
    renderMasterGrid();
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
    if (tbody.children.length === 1 && tbody.children[0].innerText.includes("Belum ada modul")) {
        tbody.innerHTML = "";
    }

    tbody.innerHTML += `
        <tr>
            <td><strong>${titleVal}</strong></td>
            <td><span class="badge ${typeVal === 'Hard Skill' ? 'badge-pg' : 'badge-essai'}">${typeVal}</span></td>
            <td>${descVal}</td>
            <td class="text-center">
                <div class="action-btns-group">
                    <i class="fa-solid fa-file-lines file-icon" title="Lihat Berkas" onclick="openDirectFileViewer('${titleVal}')"></i>
                    <i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" title="Hapus Modul" onclick="this.closest('tr').remove()"></i>
                </div>
            </td>
        </tr>
    `;

    closeUploadMateriModal();
    showNotificationToast("Skill & File Materi Berhasil Ditambahkan!");
}

// =========================================================================
// 3. MASTER QUIZ MODULE
// =========================================================================
function renderQuizGrid() {
    const tbody = document.getElementById("quizGridBody");
    if (!tbody) return;
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
                    <i class="fa-solid fa-pen-to-square" title="Edit Quiz" style="cursor:pointer; color:#7f8c8d; margin-right:6px;" onclick="openQuizDetail(${q.id})"></i>
                    <i class="fa-solid fa-circle-xmark" title="Hapus Quiz" style="cursor:pointer; color:#c0392b;" onclick="deleteQuizItem(${q.id})"></i>
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
    document.getElementById("pgCardSection").style.display = (selectedType === "Pilihan Ganda") ? "block" : "none";
    document.getElementById("essaiCardSection").style.display = (selectedType === "Essai") ? "block" : "none";
    document.getElementById("praktikCardSection").style.display = (selectedType === "Tes Praktik") ? "block" : "none";
}

function openQuizDetail(id) {
    document.getElementById("quiz-list-view").style.display = "none";
    document.getElementById("quiz-detail-view").style.display = "block";

    const data = db.quizzes.find(q => q.id === id) || db.quizzes[0];
    document.getElementById("quizTitleInput").value = data.title;
    document.getElementById("quizPassingGrade").value = data.passingGrade;

    document.querySelectorAll('input[name="builder_quiz_type"]').forEach(r => {
        r.checked = (r.value === data.tipeSoal);
    });
    document.querySelectorAll('input[name="quiz_skill_type"]').forEach(r => {
        r.checked = (r.value === data.skillType);
    });

    toggleQuizBuilderView();

    const pgBody = document.getElementById("pgQuestionsTableBody");
    pgBody.innerHTML = "";
    if (data.tipeSoal === "Pilihan Ganda") {
        (data.questions || []).forEach((q, idx) => {
            const optA = q.options && q.options[0] ? q.options[0] : "a. Opsi A";
            const optB = q.options && q.options[1] ? q.options[1] : "b. Opsi B";
            pgBody.innerHTML += `
                <tr>
                    <td>${idx + 1}</td>
                    <td><textarea class="question-textarea">${q.question}</textarea></td>
                    <td>
                        <div class="options-box">
                            <span>${optA}</span>
                            <span>${optB}</span>
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
                    <input type="text" placeholder="Option A" class="form-control-inline" style="width:100%;">
                    <input type="text" placeholder="Option B" class="form-control-inline" style="width:100%;">
                    <input type="text" placeholder="Kunci (a/b/c)" class="form-control-inline" style="width:100px;">
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
            <td><textarea class="question-textarea" placeholder="Tuliskan pertanyaan soal uraian/studi kasus..."></textarea></td>
            <td><textarea class="question-textarea" placeholder="Tuliskan pedoman jawaban kunci..."></textarea></td>
            <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
        </tr>
    `;
}

function deleteQuizItem(id) {
    if (confirm("Apakah Anda yakin ingin menghapus bank soal/tes ini?")) {
        const index = db.quizzes.findIndex(q => q.id === id);
        if (index !== -1) {
            db.quizzes.splice(index, 1);
            renderQuizGrid();
            showNotificationToast("Bank soal/tes berhasil dihapus!");
        }
    }
}

function saveQuizData(e) {
    e.preventDefault();
    showNotificationToast("Master Data Quiz / Tes Praktik Berhasil Disimpan!");
    closeDetailViews();
    renderQuizGrid();
}

// =========================================================================
// 4. HANDOUT MODULE (SEBELUMNYA MASTER HANDOUT - MENAMPILKAN 4 PAKET)
// =========================================================================
function renderHandoutGrid() {
    const tbody = document.getElementById("handoutGridBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    db.masterHandoutList.forEach((item) => {
        const jabatanText = Array.isArray(item.jabatan) ? item.jabatan.join(", ") : item.jabatan;
        tbody.innerHTML += `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td>${item.divisi}</td>
                <td>${item.masaKerja}</td>
                <td>Total Karyawan : ${item.totalKaryawan}</td>
                <td class="text-center">
                    <i class="fa-solid fa-pen-to-square" title="Edit Handout" style="cursor:pointer; color:#7f8c8d; margin-right:6px;" onclick="openHandoutDetail(${item.id})"></i>
                    <i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i>
                </td>
            </tr>
        `;
    });

    document.getElementById("handoutHeaderInfo").innerText = `View 1-${db.masterHandoutList.length} of ${db.masterHandoutList.length}`;
    document.getElementById("handoutFooterInfo").innerText = `View 1-${db.masterHandoutList.length} of ${db.masterHandoutList.length}`;
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
                <td><span class="badge badge-pg">${m.tipe}</span></td>
                <td><i class="fa-solid fa-file-pen" style="color:#2980b9;"></i> ${m.quizTitle}</td>
                <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
            </tr>
        `;
    });

    const empBody = document.getElementById("employeeTableBody");
    empBody.innerHTML = "";
    data.employees.forEach(emp => {
        empBody.innerHTML += `
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
        document.getElementById("handoutMateriTableBody").innerHTML += `
            <tr>
                <td><strong>${quizObj.materiModule}</strong></td>
                <td><span class="badge badge-pg">${quizObj.skillType}</span></td>
                <td><i class="fa-solid fa-file-pen" style="color:#2980b9;"></i> ${quizObj.title}</td>
                <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
            </tr>
        `;
    }
    closeLinkMateriModal();
}

function addEmployeeToHandout() {
    const name = prompt("Masukkan Nama Karyawan Penerima Handout:");
    if (!name) return;
    document.getElementById("employeeTableBody").innerHTML += `
        <tr>
            <td>${name}</td><td>User</td><td>101260999</td><td>FINANCE</td><td>Staff</td><td>2026-08-01</td>
            <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove()"></i></td>
        </tr>
    `;
}

function saveHandoutData(e) {
    e.preventDefault();
    showNotificationToast("Paket Handout Berhasil Disimpan!");
    closeDetailViews();
}

// =========================================================================
// 5. EVALUASIKU MODULE (GRID VIEW, FILES, REVIEW 4K, NILAI)
// =========================================================================
function renderEvaluasikuGrid() {
    const tbody = document.getElementById("evaluasikuGridBody");
    if (!tbody) return;
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

    renderStudentFilesTab(nik, emp.name, emp.divisi);
    currentActivePeriode = "bulan1";
    loadReview4KData(nik, "bulan1");
    renderScoresSubTab(nik);

    document.querySelectorAll('.eval-sub-tab')[0].click();
}

function closeEvalDetailView() {
    document.getElementById("eval-grid-view").style.display = "block";
    document.getElementById("eval-detail-view").style.display = "none";
}

function switchEvalSubTab(subTabName, element) {
    document.querySelectorAll('.eval-sub-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.eval-sub-tab').forEach(t => t.classList.remove('active'));

    document.getElementById(`eval-sub-content-${subTabName}`).classList.add('active');
    if (element) element.classList.add('active');
}

// REVIEW 4K CONTROLLER
function switchPeriodeTab(periodeKey, element) {
    document.querySelectorAll('.periode-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    currentActivePeriode = periodeKey;
    let labelText = "Periode: Bulan 1";
    if (periodeKey === "bulan2") labelText = "Periode: Bulan 2";
    if (periodeKey === "bulan3") labelText = "Periode: Bulan 3";
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

    if (totalValid.length === 0) {
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
    if (!db.review4KData[currentActiveEvalNik]) db.review4KData[currentActiveEvalNik] = {};
    db.review4KData[currentActiveEvalNik][currentActivePeriode] = {
        karakter: parseFloat(document.getElementById("k1_score").value) || 0.0,
        komitmen: parseFloat(document.getElementById("k2_score").value) || 0.0,
        kontribusi: parseFloat(document.getElementById("k3_score").value) || 0.0,
        kompetensi: parseFloat(document.getElementById("k4_score").value) || 0.0,
        karakterNote: document.getElementById("k1_note").value,
        komitmenNote: document.getElementById("k2_note").value,
        kontribusiNote: document.getElementById("k3_note").value,
        kompetensiNote: document.getElementById("k4_note").value
    };
    showNotificationToast(`Review 4K Periode [${currentActivePeriode.toUpperCase()}] Berhasil Disimpan!`);
}

// RENDER FILES & ESSAI
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
            jawabanSiswa: "Melakukan verifikasi berkas awal, berkoordinasi dengan atasan terkait kelengkapan dokumen, serta menginput data mutasi ke dalam sistem FAT ERP tepat waktu."
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
    document.getElementById("essaiModalTitle").innerHTML = `<i class="fa-solid fa-file-signature"></i> Lembar Jawaban Soal Essai: ${name}`;
    document.getElementById("essaiModalSubtext").innerText = `Divisi: ${divisi} | NIK: ${nik}`;
    modalContent.innerHTML = "";

    const essaiItems = db.studentEssaiAnswers[nik] || [
        {
            modulName: `Modul Pembelajaran Praktik (${divisi})`,
            soalText: "Jelaskan langkah-langkah penanganan pekerjaan harian sesuai SOP divisi Anda!",
            jawabanSiswa: "Melakukan verifikasi berkas awal, berkoordinasi dengan atasan terkait kelengkapan dokumen, serta menginput data mutasi ke dalam sistem FAT ERP tepat waktu."
        }
    ];

    essaiItems.forEach((item, idx) => {
        modalContent.innerHTML += `
            <div class="modal-essai-item">
                <div class="modal-essai-q-title">#Soal ${idx + 1}: ${item.modulName}</div>
                <div style="font-size:11px; color:#444; margin-bottom:8px;"><strong>Pertanyaan:</strong><br>${item.soalText}</div>
                <div class="modal-essai-ans-body"><strong>Jawaban Siswa:</strong><br>${item.jawabanSiswa.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    });

    document.getElementById("essaiViewerModal").style.display = "flex";
}

function closeEssaiViewerModal() {
    document.getElementById("essaiViewerModal").style.display = "none";
}

// RENDER NILAI
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
                <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove(); calculateSubEvaluatorScore();"></i></td>
            </tr>
        `;
    });

    calculateSubEvaluatorScore();
}

function addSubEvaluatorRow() {
    document.getElementById("detailAsesorScoreBody").innerHTML += `
        <tr>
            <td><input type="text" class="evaluator-input" placeholder="Bidang Materi"></td>
            <td><input type="text" class="evaluator-input" placeholder="Nama Evaluator"></td>
            <td><input type="number" class="evaluator-input text-center sub-eval-score-field" value="80" min="0" max="100" onchange="calculateSubEvaluatorScore()"></td>
            <td><input type="text" class="evaluator-input" placeholder="Catatan evaluator..."></td>
            <td class="text-center"><i class="fa-solid fa-circle-xmark" style="color:#c0392b; cursor:pointer;" onclick="this.closest('tr').remove(); calculateSubEvaluatorScore();"></i></td>
        </tr>
    `;
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
    const badge = document.getElementById("subPassBadge");

    scoreDisplay.innerText = finalScore;
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

// DIRECT VIEWER
function openDirectFileViewer(title) {
    const viewerTitle = document.getElementById("fileViewerTitle");
    const viewerContent = document.getElementById("fileViewerContent");
    const viewerSubtext = document.getElementById("fileViewerSubtext");
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("video") || lowerTitle.includes("tutorial") || lowerTitle.includes("brighton app")) {
        viewerTitle.innerHTML = `<i class="fa-solid fa-file-video" style="color:#3498db;"></i> Video Preview: ${title}`;
        viewerSubtext.innerText = "Format: MP4 Video Player";
        viewerContent.innerHTML = `<video controls autoplay style="width: 100%; height: 100%; object-fit: contain;"><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></video>`;
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
        viewerContent.innerHTML = `<iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" style="width: 100%; height: 100%; border: none;"></iframe>`;
    }

    document.getElementById("fileViewerModal").style.display = "flex";
}

function closeFileViewerModal() {
    document.getElementById("fileViewerModal").style.display = "none";
    document.getElementById("fileViewerContent").innerHTML = "";
}

// HELPER TAGS
function renderTags(containerId, tagArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    (tagArray || []).forEach(tag => {
        container.innerHTML += `
            <span class="tag-item">
                ${tag} <span class="close-tag" onclick="this.parentElement.remove()">&times;</span>
            </span>
        `;
    });
}

function showNotificationToast(message) {
    alert(message);
}