// =========================================================================
// DATABASE DUMMY LENGKAP & RELASIONAL - FAT TRAINING CENTER
// Data Claudia Amanda: 2 Bulan 20 Hari, Status "Sudah Dinilai", Review 4K Lengkap Bulan 1-3
// =========================================================================

const db = {
    // ---------------------------------------------------------------------
    // 1. DATA KARYAWAN
    // ---------------------------------------------------------------------
    employees: [
        { 
            nik: "208260972", 
            name: "Mitia Eka Renisa", 
            nickname: "Mitia", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-08-18",
            tanggalAkhirPKWT: "Tidak ada data PKWT",
            lamaBekerja: "1 Hari",
            kategoriGroup: "Pusat",
            phone: "085817708982", 
            email: "mitia.renisa@gmail.com",
            divisi: "UNI", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 09:47:00"
        },
        { 
            nik: "208260973", 
            name: "Khoirunnisa", 
            nickname: "Nisa", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-08-12",
            tanggalAkhirPKWT: "Tidak ada data PKWT",
            lamaBekerja: "7 Hari",
            kategoriGroup: "JTB",
            phone: "082126025327", 
            email: "khairunisa211022@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Favour BSD", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 09:40:00"
        },
        { 
            nik: "108260971", 
            name: "Christian Widjaja", 
            nickname: "Christian", 
            gender: "Laki-Laki",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-08-10",
            tanggalAkhirPKWT: "2026-11-10",
            lamaBekerja: "9 Hari",
            kategoriGroup: "Pusat",
            phone: "081288773205", 
            email: "christian.widj@gmail.com",
            divisi: "IT", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-18 16:15:00"
        },
        { 
            nik: "208260968", 
            name: "Nabila Rizky Amalia Putri", 
            nickname: "Nabila", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-08-05",
            tanggalAkhirPKWT: "2026-11-05",
            lamaBekerja: "14 Hari",
            kategoriGroup: "Surabaya",
            phone: "082233321757", 
            email: "rizkynabila106@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Champion Citraland", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 08:30:00"
        },
        { 
            nik: "208260969", 
            name: "Rachma Riska Mahani", 
            nickname: "Rachma", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-08-05",
            tanggalAkhirPKWT: "2026-11-05",
            lamaBekerja: "14 Hari",
            kategoriGroup: "JTB",
            phone: "088289459932", 
            email: "rachmamahani@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Favour BSD", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-18 14:20:00"
        },
        { 
            nik: "208260970", 
            name: "Khusnul Khotimah", 
            nickname: "Khusnul", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-08-05",
            tanggalAkhirPKWT: "2026-11-05",
            lamaBekerja: "14 Hari",
            kategoriGroup: "MTB",
            phone: "081249434430", 
            email: "khusnulinsany97@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Bogor", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-18 11:10:00"
        },
        { 
            nik: "208260967", 
            name: "Jelita Anjani", 
            nickname: "Jelita", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-08-03",
            tanggalAkhirPKWT: "2026-11-03",
            lamaBekerja: "16 Hari",
            kategoriGroup: "MTB",
            phone: "089512981192", 
            email: "Jelitaanjanii9@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Yogyakarta", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 09:15:00"
        },
        { 
            nik: "107260966", 
            name: "Tio Satrio Wibisono", 
            nickname: "Tio", 
            gender: "Laki-Laki",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-07-31",
            tanggalAkhirPKWT: "2026-10-31",
            lamaBekerja: "19 Hari",
            kategoriGroup: "Pusat",
            phone: "085190964615", 
            email: "tiosatrio.brighton@gmail.com",
            divisi: "EVENT", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-17 15:45:00"
        },
        { 
            nik: "107260965", 
            name: "Siftiyan Abdullah Zidan Arzaqi", 
            nickname: "Siftiyan", 
            gender: "Laki-Laki",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-07-29",
            tanggalAkhirPKWT: "2026-10-29",
            lamaBekerja: "21 Hari",
            kategoriGroup: "Pusat",
            phone: "085748828183", 
            email: "abdulzidan118@gmail.com",
            divisi: "HRD", 
            jabatan: "Asst. Manager", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 10:00:00"
        },
        { 
            nik: "107260964", 
            name: "Muhammad Ridwan", 
            nickname: "Ridwan", 
            gender: "Laki-Laki",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-07-20",
            tanggalAkhirPKWT: "2026-10-20",
            lamaBekerja: "1 Bulan",
            kategoriGroup: "PUSAT HQ",
            phone: "082210155541", 
            email: "hammadridwan2001@gmail.com",
            divisi: "EVENT", 
            jabatan: "Staff", 
            cabang: "Brighton HQ", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-16 13:00:00"
        },
        { 
            nik: "107260963", 
            name: "Muklis", 
            nickname: "Muklis", 
            gender: "Laki-Laki",
            statusPernikahan: "K0",
            tanggalBergabung: "2026-07-17",
            tanggalAkhirPKWT: "2026-10-17",
            lamaBekerja: "1 Bulan 3 Hari",
            kategoriGroup: "MTB",
            phone: "085249185451", 
            email: "muklis.aini23@gmail.com",
            divisi: "BPI", 
            jabatan: "Staff", 
            cabang: "Brighton Samarinda", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-16 10:25:00"
        },
        { 
            nik: "207260963", 
            name: "Anastasya Maylan Anggraini", 
            nickname: "Tasya", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-07-13",
            tanggalAkhirPKWT: "2026-10-13",
            lamaBekerja: "1 Bulan 7 Hari",
            kategoriGroup: "Pusat",
            phone: "081515191320", 
            email: "anastasyamaylana@gmail.com",
            divisi: "BPI", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-15 11:00:00"
        },
        { 
            nik: "207260960", 
            name: "Angel Nubatonis", 
            nickname: "Angel", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-07-01",
            tanggalAkhirPKWT: "2026-10-01",
            lamaBekerja: "1 Bulan 19 Hari",
            kategoriGroup: "MTB",
            phone: "087726716839", 
            email: "angelnubatonis21@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Gading Serpong", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 08:50:00"
        },
        { 
            nik: "207260962", 
            name: "Silvia Dwi Wulandari", 
            nickname: "Silvia", 
            gender: "Perempuan",
            statusPernikahan: "K1",
            tanggalBergabung: "2026-07-01",
            tanggalAkhirPKWT: "2026-10-01",
            lamaBekerja: "1 Bulan 19 Hari",
            kategoriGroup: "Surabaya",
            phone: "089525709724", 
            email: "viawulandari231@gmail.com",
            divisi: "MARKOM", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-14 14:10:00"
        },
        { 
            nik: "106260959", 
            name: "Muhamad Eidho Isnaeni Harhestian", 
            nickname: "Eidho", 
            gender: "Laki-Laki",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-06-26",
            tanggalAkhirPKWT: "2026-09-26",
            lamaBekerja: "1 Bulan 24 Hari",
            kategoriGroup: "Pusat",
            phone: "082218684638", 
            email: "harhesteidho@gmail.com",
            divisi: "MARKOM", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-14 09:30:00"
        },
        { 
            nik: "206260958", 
            name: "Wanda Aprissa Erina Putri", 
            nickname: "Wanda", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-06-24",
            tanggalAkhirPKWT: "2026-09-24",
            lamaBekerja: "1 Bulan 26 Hari",
            kategoriGroup: "Bali",
            phone: "089697279688", 
            email: "aprissawanda@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Paradise Bali", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-13 16:40:00"
        },
        { 
            nik: "206260956", 
            name: "Cilvi Nanda Indriani", 
            nickname: "Silvi", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-06-22",
            tanggalAkhirPKWT: "2026-09-22",
            lamaBekerja: "1 Bulan 28 Hari",
            kategoriGroup: "Bali",
            phone: "083122328446", 
            email: "cilvinanda00@gmail.com",
            divisi: "OPERASIONAL", 
            jabatan: "Staff", 
            cabang: "Brighton Circle Sanur", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 08:20:00"
        },
        { 
            nik: "206260955", 
            name: "Julita Sari", 
            nickname: "Lita", 
            gender: "Perempuan",
            statusPernikahan: "K0",
            tanggalBergabung: "2026-06-22",
            tanggalAkhirPKWT: "2026-09-22",
            lamaBekerja: "1 Bulan 28 Hari",
            kategoriGroup: "Bali",
            phone: "089651251334", 
            email: "Julitasari47@gmail.com",
            divisi: "FINANCE", 
            jabatan: "Staff", 
            cabang: "Brighton Golden Denpasar", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-12 11:50:00"
        },
        { 
            nik: "206260957", 
            name: "Yohanna Meilani Putri", 
            nickname: "Yohanna", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-06-22",
            tanggalAkhirPKWT: "2026-09-22",
            lamaBekerja: "1 Bulan 28 Hari",
            kategoriGroup: "Pusat",
            phone: "081916243938", 
            email: "yohannameilani@gmail.com",
            divisi: "UNI", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-12 09:10:00"
        },
        { 
            nik: "205260954", 
            name: "Claudia Amanda", 
            nickname: "Amanda", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-06-02",
            tanggalAkhirPKWT: "2026-09-02",
            lamaBekerja: "2 Bulan 20 Hari",
            kategoriGroup: "Pusat",
            phone: "085604331527", 
            email: "claudiaamanda377@gmail.com",
            divisi: "BPI", 
            jabatan: "Supervisor", 
            cabang: "Brighton Real Estate", 
            status: "Sudah Dinilai", // SATU-SATUNYA YANG SUDAH DINILAI (LULUS)
            tanggalInput: "2026-08-10 10:00:00"
        }
    ],

    // ---------------------------------------------------------------------
    // 2. MASTER TRAINING
    // ---------------------------------------------------------------------
    masterTrainingList: [
        {
            id: 1,
            divisi: "FINANCE",
            paketMateri: "Paket Onboarding Finance",
            masaKerja: "All",
            jabatan: ["Staff", "Supervisor", "Asst. Manager"],
            skills: [
                { title: "Piutang Primary, Secondary & DP", tipe: "Hard Skill", description: "Prosedur penanganan piutang transaksi dan pencatatan DP" },
                { title: "Surat Pengantar KPR & Order Komisi KPR", tipe: "Hard Skill", description: "Modul pengurusan KPR dan perhitungan komisi agen" },
                { title: "Invoice Primary, Secondary, Internal & BT", tipe: "Hard Skill", description: "Standar pembuatan invoice transaksi PKP/Non-PKP" }
            ]
        },
        {
            id: 2,
            divisi: "BPI",
            paketMateri: "Paket Onboarding Legal & BPI",
            masaKerja: "All",
            jabatan: ["Staff", "Supervisor", "Asst. Manager"],
            skills: [
                { title: "Pentingnya Legalitas Sebelum Memasarkan", tipe: "Hard Skill", description: "Verifikasi hukum properti sebelum dipublikasikan" },
                { title: "Panduan Pengisian MOU Jual Beli & Sewa Menyewa", tipe: "Hard Skill", description: "Petunjuk teknis draf persetujuan kesepakatan transaksi" }
            ]
        },
        {
            id: 3,
            divisi: "HRD, UNI",
            paketMateri: "Paket Onboarding Human Resource & UNI",
            masaKerja: "All",
            jabatan: ["Staff", "Supervisor", "Asst. Manager"],
            skills: [
                { title: "Sosialisasi & Guideline Pendaftaran Kelas Brighton UNI", tipe: "Soft Skill", description: "Panduan operasional platform e-learning Brighton UNI" },
                { title: "SOP Kinerja Operasional & Audit Internal", tipe: "Hard Skill", description: "Standardisasi instruksi kerja operasional" }
            ]
        },
        {
            id: 4,
            divisi: "OPERASIONAL, EVENT, MARKOM",
            paketMateri: "Paket Onboarding Operasional & Promosi",
            masaKerja: "All",
            jabatan: ["Staff", "Supervisor", "Asst. Manager"],
            skills: [
                { title: "Video Tutorial Brighton App untuk PA", tipe: "Hard Skill", description: "Panduan pemanfaatan fitur aplikasi internal untuk Property Advisor" },
                { title: "Modul dan SOP Media Promosi", tipe: "Hard Skill", description: "Standar penyebaran materi promosi cetak & digital" }
            ]
        }
    ],

    // ---------------------------------------------------------------------
    // 3. MASTER QUIZ
    // ---------------------------------------------------------------------
    quizzes: [
        {
            id: 1,
            title: "Quiz PG: Piutang & Komisi KPR Finance",
            skillType: "Hard Skill",
            tipeSoal: "Pilihan Ganda",
            materiModule: "Surat Pengantar KPR & Order Komisi KPR",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Dokumen utama apa yang wajib disertakan saat pengajuan Order Komisi KPR?", options: ["a. Surat Pengantar KPR & BKU Approved", "b. KTP Karyawan saja", "c. Slip Gaji Agen"], keyAnswer: "a" },
                { id: 2, question: "Status piutang primary yang belum dicairkan oleh pengembang masuk kategori?", options: ["a. Piutang Primary Unbilled", "b. Utang Usaha", "c. Cash in Hand"], keyAnswer: "a" }
            ]
        },
        {
            id: 2,
            title: "Quiz PG: Legalitas Properti & Pengisian MOU",
            skillType: "Hard Skill",
            tipeSoal: "Pilihan Ganda",
            materiModule: "Panduan Pengisian MOU Jual Beli & Sewa Menyewa",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Syarat utama properti dapat dipasarkan secara legal adalah?", options: ["a. Memiliki Sertifikat & MoU Valid", "b. Ada foto lokasi", "c. Disetujui tetangga"], keyAnswer: "a" },
                { id: 2, question: "Sertifikat hak atas tanah yang paling kuat menurut hukum Indonesia adalah?", options: ["a. Sertifikat Hak Milik (SHM)", "b. HGB", "c. Hak Pakai"], keyAnswer: "a" }
            ]
        },
        {
            id: 3,
            title: "Quiz PG: Standar Promosi & Brighton App",
            skillType: "Hard Skill",
            tipeSoal: "Pilihan Ganda",
            materiModule: "Video Tutorial Brighton App untuk PA",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Fitur 'Open House' pada aplikasi Brighton App berfungsi untuk?", options: ["a. Menjadwalkan & mempublikasikan agenda kunjungan", "b. Menutup listing", "c. Absensi harian"], keyAnswer: "a" },
                { id: 2, question: "Bahan materi cetak promosi spanduk outdoor yang tahan cuaca adalah?", options: ["a. Flexi / Albatros Lamination Glossy", "b. HVS 70gr", "c. Kertas Koran"], keyAnswer: "a" }
            ]
        },
        {
            id: 4,
            title: "Quiz PG: Sosialisasi Sistem Brighton UNI",
            skillType: "Soft Skill",
            tipeSoal: "Pilihan Ganda",
            materiModule: "Sosialisasi & Guideline Pendaftaran Kelas Brighton UNI",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Modul pelatihan di Brighton UNI dinyatakan tuntas jika?", options: ["a. Membaca materi & lulus Quiz score >= Passing Grade", "b. Login saja", "c. Mengunduh jadwal"], keyAnswer: "a" }
            ]
        },
        {
            id: 5,
            title: "Quiz Essai: Studi Kasus Piutang & DP Finance",
            skillType: "Hard Skill",
            tipeSoal: "Essai",
            materiModule: "Piutang Primary, Secondary & DP",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Jelaskan alur penanganan DP menggantung pada transaksi secondary yang belum akad notaris!", keyAnswer: "Mencatat dana masuk ke akun Titipan DP, menerbitkan kuitansi titipan resmi, dan mengunci berkas addendum." }
            ]
        },
        {
            id: 6,
            title: "Quiz Essai: Penyelesaian Sengketa Klausul MOU Legal",
            skillType: "Hard Skill",
            tipeSoal: "Essai",
            materiModule: "Panduan Pengisian MOU Jual Beli & Sewa Menyewa",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Apa akibat hukum jika penjual membatalkan kesepakatan MOU Jual Beli secara sepihak?", keyAnswer: "Penjual wajib mengembalikan dana titipan/DP yang telah diterima sebesar 2x lipat sesuai klausul sanksi MOU." }
            ]
        },
        {
            id: 7,
            title: "Quiz Essai: Standardisasi Audit Lapangan Operasional",
            skillType: "Hard Skill",
            tipeSoal: "Essai",
            materiModule: "Modul dan SOP Media Promosi",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Jelaskan spesifikasi dan tata letak pemasangan MMT listing agar menarik dan mematuhi perda reklame!", keyAnswer: "Pemasangan di pagar unit depan menghadap jalan utama, menggunakan bahan tahan cuaca, serta tidak menutupi rambu umum." }
            ]
        },
        {
            id: 8,
            title: "Quiz Essai: Penarikan & Analisa Data Report Brighton UNI",
            skillType: "Soft Skill",
            tipeSoal: "Essai",
            materiModule: "Sosialisasi & Guideline Pendaftaran Kelas Brighton UNI",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Jelaskan langkah menarik data progress report kelas siswa di portal Brighton UNI!", keyAnswer: "Buka menu Admin Brighton UNI -> Reports -> Filter Divisi/Cabang -> Export Data Table Excel." }
            ]
        },
        {
            id: 9,
            title: "Tes Praktik: Simulasi Jurnal Piutang & Pembuatan Kuitansi",
            skillType: "Hard Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "Piutang Primary, Secondary & DP",
            passingGrade: 80,
            instruksi: "Unduh lembar panduan PDF di bawah, isi buku kas simulasi dan buat form invoice KPR sesuai studi kasus transaksi.",
            filePdfName: "Soal_Panduan_Tes_Praktik_Finance_2026.pdf"
        },
        {
            id: 10,
            title: "Tes Praktik: Perancangan & Analisis Draf MOU Properti",
            skillType: "Hard Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "Panduan Pengisian MOU Jual Beli & Sewa Menyewa",
            passingGrade: 80,
            instruksi: "Lakukan review hukum atas draf sengketa tanah waris dan lengkapi klausul addendum pada template PDF terlampir.",
            filePdfName: "Soal_Panduan_Tes_Praktik_Legal_2026.pdf"
        },
        {
            id: 11,
            title: "Tes Praktik: Simulasi Audit Media Promosi & Spanduk",
            skillType: "Hard Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "Modul dan SOP Media Promosi",
            passingGrade: 80,
            instruksi: "Buat laporan checklist foto dan verifikasi perizinan spanduk lapangan sesuai pedoman operasional cabang.",
            filePdfName: "Soal_Panduan_Tes_Praktik_Operasional_2026.pdf"
        },
        {
            id: 12,
            title: "Tes Praktik: Penaikan & Rekonsiliasi Data Brighton UNI",
            skillType: "Soft Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "Sosialisasi & Guideline Pendaftaran Kelas Brighton UNI",
            passingGrade: 80,
            instruksi: "Praktikkan penarikan data CSV hasil kuis siswa dan susun matriks kebutuhan remidi peserta.",
            filePdfName: "Soal_Panduan_Tes_Praktik_Brighton_UNI_2026.pdf"
        }
    ],

    // ---------------------------------------------------------------------
    // 4. MASTER HANDOUT
    // ---------------------------------------------------------------------
    masterHandoutList: [
        {
            id: 1,
            name: "Paket Onboarding Finance",
            divisi: "FINANCE",
            jabatan: ["Staff", "Supervisor", "Asst. Manager"],
            masaKerja: "All",
            totalKaryawan: 5,
            materiItems: [
                { title: "Piutang Primary, Secondary & DP", tipe: "Hard Skill", quizTitle: "Quiz PG: Piutang & Komisi KPR Finance" }
            ],
            employees: [
                { name: "Khoirunnisa", nickname: "Nisa", nik: "208260973", divisi: "FINANCE", jabatan: "Staff", joinDate: "2026-08-12" },
                { name: "Nabila Rizky Amalia Putri", nickname: "Nabila", nik: "208260968", divisi: "FINANCE", jabatan: "Staff", joinDate: "2026-08-05" }
            ]
        }
    ],

    // ---------------------------------------------------------------------
    // 5. KUMPULAN BERKAS PDF LEMBAR TUGAS PRAKTIK DIVISI
    // ---------------------------------------------------------------------
    studentUploadedFiles: {
        "205260954": [ // Claudia Amanda
            { category: "Lembar Tugas Praktik 1: Legal Drafting & Draf MOU", fileName: "Tugas_Praktik_Legal_Drafting_MOU_Amanda.pdf", uploadTime: "2026-08-10 10:15:00" },
            { category: "Lembar Tugas Praktik 2: Audit Sertifikat & BPN", fileName: "Tugas_Praktik_Pemeriksaan_BPN_Amanda.pdf", uploadTime: "2026-08-10 10:20:10" }
        ],
        "208260972": [
            { category: "Lembar Tugas Praktik 1: Pengoperasian Portal", fileName: "Tugas_Praktik_Pendaftaran_Kelas_Brighton_UNI.pdf", uploadTime: "2026-08-19 08:30:10" },
            { category: "Lembar Tugas Praktik 2: Verifikasi Nilai", fileName: "Tugas_Praktik_Report_Tracking_Score_Siswa.pdf", uploadTime: "2026-08-19 09:12:00" }
        ],
        "208260973": [
            { category: "Lembar Tugas Praktik 1: Jurnal Kas & DP", fileName: "Tugas_Praktik_Rekapitulasi_Piutang_Primary_BSD.pdf", uploadTime: "2026-08-19 09:35:00" },
            { category: "Lembar Tugas Praktik 2: Kalkulasi Komisi", fileName: "Tugas_Praktik_Draf_Invoice_Order_Komisi_KPR.pdf", uploadTime: "2026-08-19 09:38:15" }
        ],
        "107260965": [
            { category: "Lembar Tugas Praktik 1: Kurikulum Onboarding", fileName: "Tugas_Praktik_HR_Training_Architecture_2026.pdf", uploadTime: "2026-08-19 09:50:00" },
            { category: "Lembar Tugas Praktik 2: Matriks Evaluasi", fileName: "Tugas_Praktik_Evaluation_Matrix_System_Zidan.pdf", uploadTime: "2026-08-19 09:55:00" }
        ]
    },

    // ---------------------------------------------------------------------
    // 6. LEMBAR BERKAS JAWABAN ESSAI SISWA
    // ---------------------------------------------------------------------
    studentEssaiAnswers: {
        "205260954": [ // Claudia Amanda
            {
                modulName: "Studi Kasus 1: Sengketa Batas Waktu MOU",
                soalText: "Apa akibat hukum jika penjual membatalkan kesepakatan MOU Jual Beli secara sepihak?",
                jawabanSiswa: "Penjual wajib mengembalikan dana titipan/DP yang telah diterima sebesar 2x lipat secara utuh kepada pembeli sesuai klausul baku ganti rugi pada MOU resmi."
            },
            {
                modulName: "Studi Kasus 2: Transaksi Properti Hak Pakai WNA",
                soalText: "Sertifikat hak apa yang diizinkan untuk kepemilikan WNA di Indonesia?",
                jawabanSiswa: "Hanya Sertifikat Hak Pakai di atas Tanah Negara / Hak Milik dengan batas minimal harga properti yang telah diatur dalam Permen ATR/BPN."
            }
        ],
        "208260972": [
            {
                modulName: "Studi Kasus 1: Penarikan Report Progres Kelas",
                soalText: "Jelaskan langkah-langkah menarik data progress report kelas siswa di portal Brighton UNI!",
                jawabanSiswa: "1. Masuk ke dashboard Admin Brighton UNI -> Menu Reports.\n2. Filter berdasarkan cabang dan tanggal onboarding peserta.\n3. Klik 'Export Data Table' ke format Excel."
            }
        ],
        "107260965": [
            {
                modulName: "Studi Kasus 1: Integrasi Rumus Penilaian Evaluasiku",
                soalText: "Jelaskan formula pembobotan integrasi antara Quiz Sistem dan Penilaian Asesor!",
                jawabanSiswa: "Formula akhir dihitung dengan proporsi 40% Rata-rata Kuis Sistem + 60% Rata-rata Penilaian 3 Asesor dengan batas kelulusan minimal 80 poin."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 7. DATA REVIEW 4K LEADER (CLAUDIA AMANDA LULUS BULAN 1-3)
    // ---------------------------------------------------------------------
    review4KData: {
        "205260954": {
            "bulan1": {
                karakter: 4.8, komitmen: 4.7, kontribusi: 4.6, kompetensi: 4.9,
                karakterNote: "Amanda menunjukkan integritas yang sangat tinggi, jujur, teliti, dan memiliki etika komunikasi formal yang luar biasa.",
                komitmenNote: "Tingkat kehadiran 100%, selalu siap saat dibutuhkan dalam penanganan draf perjanjian mendadak.",
                kontribusiNote: "Memberikan kontribusi signifikan dalam standarisasi template klausul MOU sewa beli.",
                kompetensiNote: "Sangat menguasai hukum pertanahan, pengecekan BPN, dan verifikasi sertifikat properti."
            },
            "bulan2": {
                karakter: 4.9, komitmen: 4.8, kontribusi: 4.7, kompetensi: 4.9,
                karakterNote: "Menunjukkan kepemimpinan moral yang baik dan menjadi teladan bagi rekan staf divisi legal lainnya.",
                komitmenNote: "Disiplin tinggi terhadap jadwal kerja dan penyelesaian berkas pra-transaksi.",
                kontribusiNote: "Membantu divisi operasional menyelesaikan sengketa pembatalan sepihak dengan solusi win-win.",
                kompetensiNote: "Mampu menyusun draf addendum kompleks dan kontrak kerja sama korporat dengan sangat rapi."
            },
            "bulan3": {
                karakter: 5.0, komitmen: 4.9, kontribusi: 4.8, kompetensi: 5.0,
                karakterNote: "Karakter kerja konsisten, profesional, dan memiliki loyalitas tinggi terhadap korporasi.",
                komitmenNote: "Komitmen kerja tanpa cela selama 3 bulan masa percobaan (probation).",
                kontribusiNote: "Dampak kerja nyata, efisiensi verifikasi berkas legal meningkat pesat.",
                kompetensiNote: "Kompetensi legalitas properti sempurna, direkomendasikan langsung untuk lulus evaluasi kerja."
            }
        },
        "208260972": {
            "bulan1": {
                karakter: 4.5, komitmen: 4.2, kontribusi: 4.0, kompetensi: 4.3,
                karakterNote: "Mitia menunjukkan etika yang sangat sopan dan jujur.",
                komitmenNote: "Kedisiplinan kehadiran sangat baik.",
                kontribusiNote: "Aktif bertanya saat pendataan kelas.",
                kompetensiNote: "Penguasaan dasar menu Brighton UNI cepat dipahami."
            },
            "bulan2": { karakter: 0.0, komitmen: 0.0, kontribusi: 0.0, kompetensi: 0.0, karakterNote: "", komitmenNote: "", kontribusiNote: "", kompetensiNote: "" },
            "bulan3": { karakter: 0.0, komitmen: 0.0, kontribusi: 0.0, kompetensi: 0.0, karakterNote: "", komitmenNote: "", kontribusiNote: "", kompetensiNote: "" }
        }
    },

    // ---------------------------------------------------------------------
    // 8. NILAI QUIZ & TES PRAKTIK PER KARYAWAN (40% BOBOT)
    // ---------------------------------------------------------------------
    evaluations: [
        { nik: "205260954", materi: "Quiz PG: Legalitas Properti & Pengisian MOU", score: 95, status: "LULUS" },
        { nik: "205260954", materi: "Quiz PG: Standar Promosi & Brighton App", score: 92, status: "LULUS" },
        { nik: "205260954", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 94, status: "LULUS" },
        { nik: "205260954", materi: "Tes Praktik: Perancangan & Analisis Draf MOU Properti", score: 96, status: "LULUS" },

        { nik: "208260972", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 85, status: "LULUS" },
        { nik: "208260972", materi: "Quiz PG: Standar Promosi & Brighton App", score: 82, status: "LULUS" },
        { nik: "208260972", materi: "Tes Praktik: Penaikan & Rekonsiliasi Data Brighton UNI", score: 85, status: "LULUS" },
        { nik: "208260972", materi: "Quiz PG: Piutang & Komisi KPR Finance", score: 80, status: "LULUS" },

        { nik: "208260973", materi: "Quiz PG: Piutang & Komisi KPR Finance", score: 75, status: "TIDAK LULUS" },
        { nik: "208260973", materi: "Tes Praktik: Simulasi Jurnal Piutang & Pembuatan Kuitansi", score: 75, status: "TIDAK LULUS" },
        { nik: "208260973", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 80, status: "LULUS" }
    ],

    // ---------------------------------------------------------------------
    // 9. PENILAIAN 3 ASESOR (60% BOBOT)
    // ---------------------------------------------------------------------
    evaluatorAssessments: {
        "205260954": [ // Claudia Amanda
            { bidang: "Verifikasi Legalitas & Analisis MOU", evaluatorName: "Rudiyanto (Asst. Manager)", score: 95, note: "Pemeriksaan berkas hukum sangat teliti dan akurat tanpa kesalahan." },
            { bidang: "Kepatuhan Hukum & Sengketa", evaluatorName: "Pak Rudi (HRD)", score: 94, note: "Sangat menguasai prosedur penyelesaian sengketa transaksi." },
            { bidang: "Kualitas Lembar Tugas Praktik", evaluatorName: "Emma (Manager HRD)", score: 96, note: "Pengerjaan tugas praktik perancangan MOU luar biasa rapi." }
        ],
        "208260972": [
            { bidang: "Praktik Pengoperasian Brighton UNI", evaluatorName: "Pak Rudi (HRD)", score: 85, note: "Paham alur pendaftaran dan guideline kelas." },
            { bidang: "Komunikasi & Pelayanan", evaluatorName: "Widya (Recruitment)", score: 85, note: "Sikap ramah dan koordinasi baik." },
            { bidang: "Kepatuhan Tugas Praktik", evaluatorName: "Frengky (Manager Ops)", score: 80, note: "Upload berkas tepat waktu." }
        ],
        "208260973": [
            { bidang: "Praktik Jurnal Kas & Piutang", evaluatorName: "Anggit (Finance SPV)", score: 75, note: "Masih butuh ketelitian pada verifikasi DP." },
            { bidang: "SOP Administrasi BSD", evaluatorName: "Pak Rudi (HRD)", score: 75, note: "Disiplin kerja cukup baik." },
            { bidang: "Reporting Finance", evaluatorName: "Frengky (Manager Ops)", score: 70, note: "Perlu bimbingan draf invoice." }
        ]
    }
};