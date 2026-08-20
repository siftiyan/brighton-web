
const db = {
    // ---------------------------------------------------------------------
    // 1. DATA KARYAWAN (20 USER DENGAN ATRIBUT DETAIL LENGKAP & LAMA BEKERJA)
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
            divisi: "TEAM UNI", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 09:47:00",
            ktp: "3510124505030001",
            address: "Alasmalang Krajan, Singojuruh, Banyuwangi, Jawa Timur"
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
            tanggalInput: "2026-08-19 09:40:00",
            ktp: "3674012345670002",
            address: "BSD City Sektor 1.2, Serpong, Tangerang Selatan"
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
            tanggalInput: "2026-08-18 16:15:00",
            ktp: "3578012345670003",
            address: "Kertajaya Indah Regency Blok F, Surabaya"
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
            tanggalInput: "2026-08-19 08:30:00",
            ktp: "3578098765430004",
            address: "Citraland Bukit Golf International, Surabaya"
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
            tanggalInput: "2026-08-18 14:20:00",
            ktp: "3674098765430005",
            address: "Gading Serpong Sektor 7, Tangerang"
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
            tanggalInput: "2026-08-18 11:10:00",
            ktp: "3271012345670006",
            address: "Pajajaran Indah No. 15, Bogor Timur"
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
            tanggalInput: "2026-08-19 09:15:00",
            ktp: "3471012345670007",
            address: "Jl. Kaliurang KM 5.5, Sleman, Yogyakarta"
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
            divisi: "Team Event", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-17 15:45:00",
            ktp: "3578112233440008",
            address: "Rungkut Mapan Barat Blok GH, Surabaya"
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
            divisi: "Human Resource", 
            jabatan: "Project Manager", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-19 10:00:00",
            ktp: "3510124505030009",
            address: "Perumahan Dian Istana Club House, Surabaya"
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
            divisi: "Team Event", 
            jabatan: "Staff", 
            cabang: "Brighton HQ", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-16 13:00:00",
            ktp: "3578056789010010",
            address: "Pakuwon City Palm Beach, Surabaya"
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
            divisi: "General Affair & Purchasing", 
            jabatan: "Staff", 
            cabang: "Brighton Samarinda", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-16 10:25:00",
            ktp: "6472012345670011",
            address: "Jl. Pangeran Antasari No. 34, Samarinda"
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
            divisi: "LEGAL", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-15 11:00:00",
            ktp: "3578023456780012",
            address: "Wisma Permai Barat Blok MM, Surabaya"
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
            tanggalInput: "2026-08-19 08:50:00",
            ktp: "3674034567890013",
            address: "Ruko Sentra Gading Serpong Blok SG, Tangerang"
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
            divisi: "PRIMARY", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-14 14:10:00",
            ktp: "3515012345670014",
            address: "Taman Pondok Jati Blok AN, Sidoarjo"
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
            divisi: "Relation", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-14 09:30:00",
            ktp: "3578091234560015",
            address: "Puri Surya Jaya Taman Athena, Sidoarjo"
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
            tanggalInput: "2026-08-13 16:40:00",
            ktp: "5171012345670016",
            address: "Jl. Bypass Ngurah Rai No. 88, Sanur, Bali"
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
            tanggalInput: "2026-08-19 08:20:00",
            ktp: "5171098765430017",
            address: "Jl. Danau Tamblingan No. 24, Sanur, Bali"
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
            tanggalInput: "2026-08-12 11:50:00",
            ktp: "5171056789010018",
            address: "Gatot Subroto Barat No. 102, Denpasar, Bali"
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
            divisi: "TEAM UNI", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Belum Dinilai", 
            tanggalInput: "2026-08-12 09:10:00",
            ktp: "3578019988770019",
            address: "Rungkut Asri Timur Blok RL, Surabaya"
        },
        { 
            nik: "205260954", 
            name: "Claudia Amanda", 
            nickname: "Amanda", 
            gender: "Perempuan",
            statusPernikahan: "TK",
            tanggalBergabung: "2026-06-02",
            tanggalAkhirPKWT: "2026-09-02",
            lamaBekerja: "2 Bulan 18 Hari",
            kategoriGroup: "Pusat",
            phone: "085604331527", 
            email: "claudiaamanda377@gmail.com",
            divisi: "LEGAL", 
            jabatan: "Staff", 
            cabang: "Brighton Real Estate", 
            status: "Sudah Dinilai", // HANYA CLAUDIA AMANDA YANG SUDAH DINILAI
            tanggalInput: "2026-08-10 10:00:00",
            ktp: "3578076543210020",
            address: "Graha Residen Kav 18, Darmo Harapan, Surabaya"
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
                { title: "PROSES SEBELUM TRANSAKSI - Piutang Primary, Secondary & DP", tipe: "Hard Skill", description: "Prosedur penanganan piutang transaksi dan pencatatan DP" },
                { title: "PROSES SEBELUM TRANSAKSI - Surat Pengantar KPR & Order Komisi KPR", tipe: "Hard Skill", description: "Modul pengurusan KPR dan perhitungan komisi agen" },
                { title: "PROSES SEBELUM TRANSAKSI - Invoice Primary, Secondary, Internal & BT", tipe: "Hard Skill", description: "Standar pembuatan invoice transaksi PKP/Non-PKP" }
            ]
        },
        {
            id: 2,
            divisi: "LEGAL",
            paketMateri: "Paket Onboarding Legal",
            masaKerja: "All",
            jabatan: ["Staff", "Koordinator", "Supervisor"],
            skills: [
                { title: "LEGAL - Pentingnya Legalitas Sebelum Memasarkan", tipe: "Hard Skill", description: "Verifikasi hukum properti sebelum dipublikasikan" },
                { title: "LEGAL - Panduan Pengisian MOU Jual Beli & Sewa Menyewa", tipe: "Hard Skill", description: "Petunjuk teknis draf persetujuan kesepakatan transaksi" }
            ]
        },
        {
            id: 3,
            divisi: "Human Resource, TEAM UNI",
            paketMateri: "Paket Onboarding Human Resource",
            masaKerja: "All",
            jabatan: ["Staff", "Project Manager", "Manager"],
            skills: [
                { title: "BRIGHTON UNI - Sosialisasi & Guideline Pendaftaran Kelas", tipe: "Soft Skill", description: "Panduan operasional platform e-learning Brighton UNI" },
                { title: "SOP Kinerja Operasional & Audit Internal", tipe: "Hard Skill", description: "Standardisasi instruksi kerja operasional" }
            ]
        },
        {
            id: 4,
            divisi: "OPERASIONAL",
            paketMateri: "Paket Onboarding Operasional",
            masaKerja: "All",
            jabatan: ["Staff", "Supervisor", "Manager"],
            skills: [
                { title: "OPERASIONAL - Video Tutorial Brighton App untuk PA", tipe: "Hard Skill", description: "Panduan pemanfaatan fitur aplikasi internal untuk Property Advisor" },
                { title: "OPERASIONAL - Modul dan SOP Media Promosi", tipe: "Hard Skill", description: "Standar penyebaran materi promosi cetak & digital" }
            ]
        }
    ],

    // ---------------------------------------------------------------------
    // 3. MASTER QUIZ (3 TIPE: PILIHAN GANDA, ESSAI, DAN TES PRAKTIK PDF)
    // ---------------------------------------------------------------------
    quizzes: [
        // --- 1. PILIHAN GANDA ---
        {
            id: 1,
            title: "Quiz PG: Proses Sebelum Transaksi Finance",
            skillType: "Hard Skill",
            tipeSoal: "Pilihan Ganda",
            materiModule: "PROSES SEBELUM TRANSAKSI - Surat Pengantar KPR & Order Komisi KPR",
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
            materiModule: "LEGAL - Panduan Pengisian MOU Jual Beli & Sewa Menyewa",
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
            materiModule: "OPERASIONAL - Video Tutorial Brighton App untuk PA",
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
            materiModule: "BRIGHTON UNI - Sosialisasi & Guideline Pendaftaran Kelas",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Modul pelatihan di Brighton UNI dinyatakan tuntas jika?", options: ["a. Membaca materi & lulus Quiz score >= Passing Grade", "b. Login saja", "c. Mengunduh jadwal"], keyAnswer: "a" }
            ]
        },

        // --- 2. ESSAI ---
        {
            id: 5,
            title: "Quiz Essai: Studi Kasus Piutang & DP Finance",
            skillType: "Hard Skill",
            tipeSoal: "Essai",
            materiModule: "PROSES SEBELUM TRANSAKSI - Piutang Primary, Secondary & DP",
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
            materiModule: "LEGAL - Panduan Pengisian MOU Jual Beli & Sewa Menyewa",
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
            materiModule: "OPERASIONAL - Modul dan SOP Media Promosi",
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
            materiModule: "BRIGHTON UNI - Sosialisasi & Guideline Pendaftaran Kelas",
            passingGrade: 80,
            questions: [
                { id: 1, question: "Jelaskan langkah menarik data progress report kelas Karyawan di portal Brighton UNI!", keyAnswer: "Buka menu Admin Brighton UNI -> Reports -> Filter Divisi/Cabang -> Export Data Table Excel." }
            ]
        },

        // --- 3. TES PRAKTIK (UPLOAD BERKAS PDF PANDUAN & SOAL PRAKTIK) ---
        {
            id: 9,
            title: "Tes Praktik: Simulasi Jurnal Piutang & Pembuatan Kuitansi",
            skillType: "Hard Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "PROSES SEBELUM TRANSAKSI - Piutang Primary, Secondary & DP",
            passingGrade: 80,
            instruksi: "Unduh lembar panduan PDF di bawah, isi buku kas simulasi dan buat form invoice KPR sesuai studi kasus transaksi.",
            filePdfName: "Soal_Panduan_Tes_Praktik_Finance_2026.pdf"
        },
        {
            id: 10,
            title: "Tes Praktik: Perancangan & Analisis Draf MOU Properti",
            skillType: "Hard Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "LEGAL - Panduan Pengisian MOU Jual Beli & Sewa Menyewa",
            passingGrade: 80,
            instruksi: "Lakukan review hukum atas draf sengketa tanah waris dan lengkapi klausul addendum pada template PDF terlampir.",
            filePdfName: "Soal_Panduan_Tes_Praktik_Legal_2026.pdf"
        },
        {
            id: 11,
            title: "Tes Praktik: Simulasi Audit Media Promosi & Spanduk",
            skillType: "Hard Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "OPERASIONAL - Modul dan SOP Media Promosi",
            passingGrade: 80,
            instruksi: "Buat laporan checklist foto dan verifikasi perizinan spanduk lapangan sesuai pedoman operasional cabang.",
            filePdfName: "Soal_Panduan_Tes_Praktik_Operasional_2026.pdf"
        },
        {
            id: 12,
            title: "Tes Praktik: Penaikan & Rekonsiliasi Data Brighton UNI",
            skillType: "Soft Skill",
            tipeSoal: "Tes Praktik",
            materiModule: "BRIGHTON UNI - Sosialisasi & Guideline Pendaftaran Kelas",
            passingGrade: 80,
            instruksi: "Praktikkan penarikan data CSV hasil kuis Karyawan dan susun matriks kebutuhan remidi peserta.",
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
            jabatan: ["Staff", "Supervisor"],
            masaKerja: "All",
            totalKaryawan: 5,
            materiItems: [
                { title: "PROSES SEBELUM TRANSAKSI - Piutang Primary, Secondary & DP", tipe: "Hard Skill", quizTitle: "Quiz PG: Proses Sebelum Transaksi Finance" }
            ],
            employees: [
                { name: "Khoirunnisa", nickname: "Nisa", nik: "208260973", divisi: "FINANCE", jabatan: "Staff", joinDate: "2026-08-12" },
                { name: "Nabila Rizky Amalia Putri", nickname: "Nabila", nik: "208260968", divisi: "FINANCE", jabatan: "Staff", joinDate: "2026-08-05" }
            ]
        }
    ],

    // ---------------------------------------------------------------------
    // 5. KUMPULAN BERKAS PDF LEMBAR TUGAS PRAKTIK DIVISI (HASIL UPLOAD Karyawan)
    // ---------------------------------------------------------------------
    studentUploadedFiles: {
        "208260972": [ // Mitia (TEAM UNI)
            { category: "Lembar Tugas Praktik 1: Pengoperasian Portal", fileName: "Tugas_Praktik_Pendaftaran_Kelas_Brighton_UNI.pdf", uploadTime: "2026-08-19 08:30:10" },
            { category: "Lembar Tugas Praktik 2: Verifikasi Nilai", fileName: "Tugas_Praktik_Report_Tracking_Score_Karyawan.pdf", uploadTime: "2026-08-19 09:12:00" }
        ],
        "208260973": [ // Nisa (FINANCE)
            { category: "Lembar Tugas Praktik 1: Jurnal Kas & DP", fileName: "Tugas_Praktik_Rekapitulasi_Piutang_Primary_BSD.pdf", uploadTime: "2026-08-19 09:35:00" },
            { category: "Lembar Tugas Praktik 2: Kalkulasi Komisi", fileName: "Tugas_Praktik_Draf_Invoice_Order_Komisi_KPR.pdf", uploadTime: "2026-08-19 09:38:15" }
        ],
        "108260971": [ // Christian (IT)
            { category: "Lembar Tugas Praktik 1: Topologi ERP", fileName: "Tugas_Praktik_Topologi_Server_Lokal_Brighton.pdf", uploadTime: "2026-08-18 16:00:00" },
            { category: "Lembar Tugas Praktik 2: Security Audit", fileName: "Tugas_Praktik_Security_Audit_Log_Widjaja.pdf", uploadTime: "2026-08-18 16:10:00" }
        ],
        "208260968": [ // Nabila (FINANCE)
            { category: "Lembar Tugas Praktik 1: Surat Pengantar KPR", fileName: "Tugas_Praktik_Form_Pengantar_KPR_Citraland.pdf", uploadTime: "2026-08-19 08:25:00" },
            { category: "Lembar Tugas Praktik 2: Rekapitulasi Kas Masuk", fileName: "Tugas_Praktik_Kuitansi_Titipan_Booking_Fee.pdf", uploadTime: "2026-08-19 08:28:40" }
        ],
        "107260965": [ // Siftiyan Zidan (HR)
            { category: "Lembar Tugas Praktik 1: Kurikulum Onboarding", fileName: "Tugas_Praktik_HR_Training_Architecture_2026.pdf", uploadTime: "2026-08-19 09:50:00" },
            { category: "Lembar Tugas Praktik 2: Matriks Evaluasi", fileName: "Tugas_Praktik_Evaluation_Matrix_System_Zidan.pdf", uploadTime: "2026-08-19 09:55:00" }
        ],
        "207260963": [ // Tasya (LEGAL)
            { category: "Lembar Tugas Praktik 1: Analisis Draf MOU", fileName: "Tugas_Praktik_Analisis_Klausul_MOU_Tasya.pdf", uploadTime: "2026-08-15 10:45:00" },
            { category: "Lembar Tugas Praktik 2: Audit Berkas Properti", fileName: "Tugas_Praktik_Audit_Legalitas_Hak_Pakai_WNA.pdf", uploadTime: "2026-08-15 10:50:12" }
        ],
        "107260966": [ // Tio (Team Event)
            { category: "Lembar Tugas Praktik 1: Rundown Event", fileName: "Tugas_Praktik_Rundown_Briefing_Staf_Event.pdf", uploadTime: "2026-08-17 15:30:00" }
        ],
        "206260956": [ // Silvi (OPERASIONAL)
            { category: "Lembar Tugas Praktik 1: Audit Spanduk Sanur", fileName: "Tugas_Praktik_Audit_MMT_Listing_Sanur_Silvi.pdf", uploadTime: "2026-08-19 08:15:00" }
        ]
    },

    // ---------------------------------------------------------------------
    // 6. LEMBAR BERKAS JAWABAN ESSAI Karyawan SESUAI DIVISI
    // ---------------------------------------------------------------------
    studentEssaiAnswers: {
        "208260972": [
            {
                modulName: "Studi Kasus 1: Penarikan Report Progres Kelas",
                soalText: "Jelaskan langkah-langkah menarik data progress report kelas Karyawan di portal Brighton UNI!",
                jawabanKaryawan: "1. Masuk ke dashboard Admin Brighton UNI -> Menu Reports.\n2. Filter berdasarkan cabang dan tanggal onboarding peserta.\n3. Klik 'Export Data Table' ke format Excel untuk merekap status nilai kuis dan kelulusan."
            },
            {
                modulName: "Studi Kasus 2: Penanganan Karyawan Gagal Passing Grade",
                soalText: "Apa tindakan yang diambil jika ada peserta training yang gagal passing grade?",
                jawabanKaryawan: "Memberikan rekomendasi modul remidi dan mengaktifkan tiket ujian ulang kuis di sistem maksimal 3 hari kerja."
            }
        ],
        "208260973": [
            {
                modulName: "Studi Kasus 1: Penanganan Titipan DP Menggantung",
                soalText: "Bagaimana prosedur penanganan DP menggantung pada transaksi secondary yang belum akad?",
                jawabanKaryawan: "Mencatat dana masuk ke akun 'Titipan DP Pembeli', menerbitkan Kuitansi Titipan Resmi, dan mengunci berkas addendum sampai jadwal akad notaris ditentukan."
            },
            {
                modulName: "Studi Kasus 2: Validasi Order Komisi KPR Bank",
                soalText: "Sebutkan dokumen wajib sebelum pengajuan pencairan komisi ke Property Advisor!",
                jawabanKaryawan: "Surat Pengantar KPR, bukti pencairan komisi dari bank rekanan yang sudah masuk rekening PT, serta BKU yang telah disetujui SPV Finance."
            }
        ],
        "108260971": [
            {
                modulName: "Studi Kasus 1: Keamanan Server & Database ERP",
                soalText: "Bagaimana langkah mitigasi awal jika terdeteksi aktivitas mencurigakan pada server database?",
                jawabanKaryawan: "Melakukan isolasi IP pengakses yang mencurigakan, memeriksa server error log, dan memastikan integritas data melalui snapshot backup server terkini."
            }
        ],
        "208260968": [
            {
                modulName: "Studi Kasus 1: Standardisasi Faktur Pajak PKP",
                soalText: "Jelaskan perbedaan pembuatan Invoice Primary PKP dan Non-PKP!",
                jawabanKaryawan: "Invoice PKP wajib menyertakan perhitungan PPN 11% dan penerbitan faktur pajak elektronik (e-Faktur), sedangkan Non-PKP hanya mencantumkan DPP komisi jasa."
            }
        ],
        "107260965": [
            {
                modulName: "Studi Kasus 1: Integrasi Rumus Penilaian Evaluasiku",
                soalText: "Jelaskan formula pembobotan integrasi antara Quiz Sistem dan Penilaian Asesor!",
                jawabanKaryawan: "Formula akhir dihitung dengan proporsi 40% Rata-rata Kuis Sistem (teori objektif) + 60% Rata-rata Penilaian 3 Asesor (praktik lapangan) dengan batas passing grade 80 poin."
            },
            {
                modulName: "Studi Kasus 2: Standar Kurikulum Pelatihan Onboarding",
                soalText: "Mengapa pembagian hak akses materi per divisi sangat penting?",
                jawabanKaryawan: "Agar materi yang diterima karyawan spesifik sesuai tanggung jawab jabatannya (Job Description) sehingga efisiensi waktu belajar tercapai tanpa tumpang tindih."
            }
        ],
        "207260963": [
            {
                modulName: "Studi Kasus 1: Pembatalan Sepihak Perjanjian MOU",
                soalText: "Apa akibat hukum jika salah satu pihak membatalkan kesepakatan MOU sepihak?",
                jawabanKaryawan: "Berdasarkan klausul standar MOU: Jika pembeli membatalkan maka tanda jadi/DP dinyatakan hangus. Jika penjual membatalkan maka wajib mengembalikan dana 2x lipat."
            },
            {
                modulName: "Studi Kasus 2: Hak Kepemilikan Properti WNA",
                soalText: "Sertifikat hak apa yang diizinkan untuk kepemilikan WNA di Indonesia?",
                jawabanKaryawan: "Hanya Sertifikat Hak Pakai di atas Tanah Negara / Hak Milik dengan batas minimal nilai harga properti sesuai regulasi Permen ATR/BPN."
            }
        ],
        "107260966": [
            {
                modulName: "Studi Kasus 1: Briefing & Eksekusi Lapangan",
                soalText: "Kapan koordinasi dan pembagian tugas staf event idealnya dilaksanakan?",
                jawabanKaryawan: "Saat Morning Briefing H-1 dan 30 menit sebelum acara dibuka guna memastikan checklist peralatan, booth, dan media promosi siap 100%."
            }
        ],
        "206260956": [
            {
                modulName: "Studi Kasus 1: Spesifikasi Media Promosi Spanduk",
                soalText: "Sebutkan spesifikasi bahan cetak spanduk outdoor yang tahan terhadap cuaca panas/hujan!",
                jawabanKaryawan: "Menggunakan bahan Flexi Jerman / Albatros Lamination Glossy ukuran standar 1x1m atau 1.5x1m dilengkapi logo resmi dan kontak agen."
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 7. DATA REVIEW 4K LEADER (BULAN 1 TERISI, BULAN 2 & 3 DRAFT/KOSONG)
    // ---------------------------------------------------------------------
    review4KData: {
        "208260972": { // Mitia Eka Renisa
            "bulan1": {
                karakter: 4.5,
                komitmen: 4.2,
                kontribusi: 4.0,
                kompetensi: 4.3,
                karakterNote: "Mitia menunjukkan etika yang sangat sopan, jujur, dan mudah beradaptasi dengan rekan kerja.",
                komitmenNote: "Kedisiplinan kehadiran sangat baik, selalu tepat waktu dalam mengikuti sesi orientasi.",
                kontribusiNote: "Aktif bertanya dan memberikan bantuan teknis saat pendataan kelas training berlangsung.",
                kompetensiNote: "Penguasaan dasar menu Brighton UNI tergolong cepat dipahami."
            },
            "bulan2": {
                karakter: 0.0, komitmen: 0.0, kontribusi: 0.0, kompetensi: 0.0,
                karakterNote: "", komitmenNote: "", kontribusiNote: "", kompetensiNote: ""
            },
            "bulan3": {
                karakter: 0.0, komitmen: 0.0, kontribusi: 0.0, kompetensi: 0.0,
                karakterNote: "", komitmenNote: "", kontribusiNote: "", kompetensiNote: ""
            }
        },
        "107260965": { // Siftiyan Zidan
            "bulan1": {
                karakter: 4.8,
                komitmen: 4.9,
                kontribusi: 4.8,
                kompetensi: 4.9,
                karakterNote: "Integritas tinggi, kepemimpinan tim sangat dihormati rekan kerja dan atasan.",
                komitmenNote: "Dedikasi kerja luar biasa, selalu memastikan jadwal sprint project tercapai tepat waktu.",
                kontribusiNote: "Berhasil merancang arsitektur sistem HR Training Center yang terintegrasi penuh.",
                kompetensiNote: "Sangat ahli dalam Project Management dan analisis sistem database."
            },
            "bulan2": {
                karakter: 0.0, komitmen: 0.0, kontribusi: 0.0, kompetensi: 0.0,
                karakterNote: "", komitmenNote: "", kontribusiNote: "", kompetensiNote: ""
            },
            "bulan3": {
                karakter: 0.0, komitmen: 0.0, kontribusi: 0.0, kompetensi: 0.0,
                karakterNote: "", komitmenNote: "", kontribusiNote: "", kompetensiNote: ""
            }
        }
    },

    // ---------------------------------------------------------------------
    // 8. NILAI QUIZ & TES PRAKTIK PER KARYAWAN (40% BOBOT)
    // ---------------------------------------------------------------------
    evaluations: [
        { nik: "208260972", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 85, status: "LULUS" },
        { nik: "208260972", materi: "Quiz PG: Standar Promosi & Brighton App", score: 82, status: "LULUS" },
        { nik: "208260972", materi: "Tes Praktik: Penaikan & Rekonsiliasi Data Brighton UNI", score: 85, status: "LULUS" },
        { nik: "208260972", materi: "Quiz PG: Proses Sebelum Transaksi Finance", score: 80, status: "LULUS" },

        { nik: "208260973", materi: "Quiz PG: Proses Sebelum Transaksi Finance", score: 75, status: "TIDAK LULUS" },
        { nik: "208260973", materi: "Tes Praktik: Simulasi Jurnal Piutang & Pembuatan Kuitansi", score: 75, status: "TIDAK LULUS" },
        { nik: "208260973", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 80, status: "LULUS" },

        { nik: "108260971", materi: "Quiz PG: Standar Promosi & Brighton App", score: 95, status: "LULUS" },
        { nik: "108260971", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 90, status: "LULUS" },
        { nik: "108260971", materi: "Quiz PG: Legalitas Properti & Pengisian MOU", score: 92, status: "LULUS" },

        { nik: "208260968", materi: "Quiz PG: Proses Sebelum Transaksi Finance", score: 78, status: "TIDAK LULUS" },
        { nik: "208260968", materi: "Tes Praktik: Simulasi Jurnal Piutang & Pembuatan Kuitansi", score: 75, status: "TIDAK LULUS" },
        { nik: "208260968", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 78, status: "TIDAK LULUS" },

        { nik: "208260969", materi: "Quiz PG: Proses Sebelum Transaksi Finance", score: 88, status: "LULUS" },
        { nik: "208260969", materi: "Quiz PG: Standar Promosi & Brighton App", score: 85, status: "LULUS" },
        { nik: "208260969", materi: "Tes Praktik: Simulasi Jurnal Piutang & Pembuatan Kuitansi", score: 85, status: "LULUS" },

        { nik: "208260970", materi: "Quiz PG: Proses Sebelum Transaksi Finance", score: 82, status: "LULUS" },
        { nik: "208260970", materi: "Quiz PG: Standar Promosi & Brighton App", score: 85, status: "LULUS" },
        { nik: "208260970", materi: "Quiz PG: Legalitas Properti & Pengisian MOU", score: 85, status: "LULUS" },

        { nik: "208260967", materi: "Quiz PG: Proses Sebelum Transaksi Finance", score: 76, status: "TIDAK LULUS" },
        { nik: "208260967", materi: "Quiz PG: Standar Promosi & Brighton App", score: 80, status: "LULUS" },
        { nik: "208260967", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 78, status: "TIDAK LULUS" },

        { nik: "107260966", materi: "Quiz PG: Standar Promosi & Brighton App", score: 90, status: "LULUS" },
        { nik: "107260966", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 88, status: "LULUS" },
        { nik: "107260966", materi: "Quiz PG: Legalitas Properti & Pengisian MOU", score: 86, status: "LULUS" },

        { nik: "107260965", materi: "Quiz PG: Standar Promosi & Brighton App", score: 96, status: "LULUS" },
        { nik: "107260965", materi: "Quiz PG: Sosialisasi Sistem Brighton UNI", score: 94, status: "LULUS" },
        { nik: "107260965", materi: "Quiz PG: Proses Sebelum Transaksi Finance", score: 95, status: "LULUS" },
        { nik: "107260965", materi: "Tes Praktik: Penaikan & Rekonsiliasi Data Brighton UNI", score: 95, status: "LULUS" },

        { nik: "207260963", materi: "Quiz PG: Legalitas Properti & Pengisian MOU", score: 92, status: "LULUS" },
        { nik: "207260963", materi: "Tes Praktik: Perancangan & Analisis Draf MOU Properti", score: 90, status: "LULUS" },
        { nik: "207260963", materi: "Quiz PG: Standar Promosi & Brighton App", score: 88, status: "LULUS" }
    ],

    // ---------------------------------------------------------------------
    // 9. PENILAIAN 3 ASESOR (60% BOBOT)
    // ---------------------------------------------------------------------
    evaluatorAssessments: {
        "208260972": [
            { bidang: "Praktik Pengoperasian Brighton UNI", evaluatorName: "Pak Rudi (HRD)", score: 85, note: "Paham alur pendaftaran dan guideline kelas." },
            { bidang: "Komunikasi & Pelayanan", evaluatorName: "Widya (Recruitment)", score: 85, note: "Sikap ramah dan koordinasi baik." },
            { bidang: "Kepatuhan Tugas Praktik", evaluatorName: "Frengky (Manager Ops)", score: 80, note: "Upload berkas tepat waktu." }
        ],
        "208260973": [
            { bidang: "Praktik Jurnal Kas & Piutang", evaluatorName: "Anggit (Finance SPV)", score: 75, note: "Masih butuh ketelitian pada verifikasi DP." },
            { bidang: "SOP Administrasi BSD", evaluatorName: "Pak Rudi (HRD)", score: 75, note: "Disiplin kerja cukup baik." },
            { bidang: "Reporting Finance", evaluatorName: "Frengky (Manager Ops)", score: 70, note: "Perlu bimbingan draf invoice." }
        ],
        "108260971": [
            { bidang: "Infrastruktur IT & Server", evaluatorName: "Frengky (Manager Ops)", score: 95, note: "Penguasaan server sangat solid." },
            { bidang: "Mitigasi Bug & Jaringan", evaluatorName: "Pak Rudi (HRD)", score: 90, note: "Troubleshooting cepat." },
            { bidang: "Integritas & Sikap Kerja", evaluatorName: "Emma (Manager HRD)", score: 92, note: "Sangat kooperatif." }
        ],
        "208260968": [
            { bidang: "Pencatatan Piutang Citraland", evaluatorName: "Anggit (Finance SPV)", score: 75, note: "Perlu latihan kalkulasi komisi secondary." },
            { bidang: "Kepatuhan SOP Finance", evaluatorName: "Pak Rudi (HRD)", score: 78, note: "Disiplin jam kerja baik." },
            { bidang: "Reporting Sistem", evaluatorName: "Frengky (Manager Ops)", score: 75, note: "Input rekap harian perlu dicek ulang." }
        ],
        "107260965": [
            { bidang: "Project Management Roadmap", evaluatorName: "Frengky (Manager Ops)", score: 98, note: "Pengembangan sistem digital dan arsitektur stabil." },
            { bidang: "Manajemen Kinerja & Audit HR", evaluatorName: "Pak Rudi (HRD)", score: 96, note: "Standarisasi evaluasi tersusun profesional." },
            { bidang: "Kepemimpinan Tim & Eksekusi", evaluatorName: "Emma (Manager HRD)", score: 95, note: "Perencanaan dan kontrol proyek sangat terukur." }
        ],
        "207260963": [
            { bidang: "Draf MOU & Kontrak Kerja", evaluatorName: "Rudiyanto (Asst. Manager)", score: 92, note: "Sangat teliti memeriksa pasal kesepakatan." },
            { bidang: "Verifikasi Berkas Legal", evaluatorName: "Pak Rudi (HRD)", score: 90, note: "Pemeriksaan sertifikat akurat." },
            { bidang: "Kepatuhan Regulasi", evaluatorName: "Emma (Manager HRD)", score: 88, note: "Disiplin arsip hukum korporat." }
        ]
    }
};