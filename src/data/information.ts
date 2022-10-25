export type InfoType = {
    teacherId: number,
    teacherName: string,
    imageUrl: string,
    studentName: string,
    studentGrade: string,
    studyPeriod: string,
    reviewTitle: string,
    reviewBody: string,
    hashtags: string[],
    pageUrl: string,
}

export const information: InfoType[] = [
    {
        teacherId: 1,
        teacherName: 'Nam',
        imageUrl: './teacher-images/Mr Nam-min.png',
        studentName: 'Trần Quỳnh',
        studentGrade: '12',
        studyPeriod: '12 tháng',
        reviewTitle: 'Trở ngại không vấn đề nếu HỌC ĐÚNG PHƯƠNG PHÁP!',
        reviewBody: 'Suốt 1 năm theo học em luôn nhận được những trải nghiệm tốt nhất khi tham gia khóa học của thầy Nam Pro',
        hashtags: ['Uy tín', 'Chất lượng', 'Tận tâm'],
        pageUrl: 'https://www.facebook.com/ThayNamPro',
    },
    {
        teacherId: 2,
        teacherName: 'Kien',
        imageUrl: './teacher-images/Mr Kien-min.png',
        studentName: 'Huyền Trang',
        studentGrade: '4',
        studyPeriod: '12 tháng',
        reviewTitle: 'Giáo viên dạy Toán tiểu học hàng đầu',
        reviewBody: 'Củng cố, xây dựng các kiến thức từ nền tảng cho đến nâng cao. Phương pháp giảng dạy khoa học, dễ hiểu.',
        hashtags: ['Tận tụy', 'Chuyên sâu', 'Sáng tạo'],
        pageUrl: 'https://toanthaykien.qandastudy.vn/',
    },
    {
        teacherId: 3,
        teacherName: 'Suong Mai',
        imageUrl: './teacher-images/Ms Suong Mai-min.png',
        studentName: 'Kiều Thu Uyên',
        studentGrade: '12',
        studyPeriod: '5 tháng',
        reviewTitle: 'Học cách yêu Văn lại từ đầu nhờ cô Sương Mai',
        reviewBody: 'Giáo viên đầy nhiệt huyết với giọng nói và lối giảng bài lôi cuốn. Luôn hỗ trợ nhiệt tình, đồng hành và truyền tình yêu môn Văn',
        hashtags: ['Nhiệt huyết', 'Lôi cuốn', 'Truyền cảm'],
        pageUrl: 'https://2k5hocvancosuongmai.qandastudy.vn/',
    },
    {
        teacherId: 4,
        teacherName: 'Tai',
        imageUrl: './teacher-images/Mr Tai-min.png',
        studentName: 'Lan Anh',
        studentGrade: '12',
        studyPeriod: '5 tháng',
        reviewTitle: 'Học hóa không khó vì đã có thầy Tài',
        reviewBody: 'Skill giải nhanh độc quyền của thầy giúp học sinh nắm bắt đề và giải quyết nhanh- gọn-lẹ mọi bài tập hóa học khó nhằn',
        hashtags: ['Tận tâm', 'Dễ hiểu', 'Chuyên sâu'],
        pageUrl: 'https://thaytaihoahoc.k12.qandastudy.vn/',
    },
    {
        teacherId: 5,
        teacherName: 'Khanh',
        imageUrl: './teacher-images/Mr Khanh-min.png',
        studentName: 'Nguyễn Trần Ngọc Thảo',
        studentGrade: '12',
        studyPeriod: '9 tháng',
        reviewTitle: 'Học Hóa chuyên sâu cùng thầy Khánh',
        reviewBody: 'Lớp của thầy giúp bồi dưỡng lý thuyết tốt, tăng khả năng tư duy và giải nhanh. Thầy luôn cập nhật nhưng phương pháp mới',
        hashtags: ['Say mê', 'Sẻ chia', 'Sát sao'],
        pageUrl: 'https://thaykhanhhoahoc.qandastudy.vn/',
    },
    {
        teacherId: 6,
        teacherName: 'Trong',
        imageUrl: './teacher-images/Mr Trong-min.png',
        studentName: 'Tiến Đạt',
        studentGrade: '12',
        studyPeriod: '12 tháng',
        reviewTitle: 'Học Lý thú vị hơn nhờ thầy Trọng',
        reviewBody: 'Thầy Trọng dạy tỉ mỉ, từng chút tới khi thực sự hiểu. Mình thích nhất phương pháp học qua mô hình thực nghiệm bởi có thể nhớ và hiểu ngay.',
        hashtags: ['Tỉ mỉ', 'Đột phá', 'Dễ hiểu'],
        pageUrl: 'https://2k5vatlythaytrong.qandastudy.vn/',
    },
    {
        teacherId: 7,
        teacherName: 'Tra',
        imageUrl: './teacher-images/Ms Tra-min.png',
        studentName: 'Mỹ Anh',
        studentGrade: '5',
        studyPeriod: '24 tháng',
        reviewTitle: 'Nhờ cô Trà mà kết quả môn Toán luôn trên 8+',
        reviewBody: 'Cô dạy bám sát lộ trình trên lớp. Phương pháp giảng truyền lửa, gần gũi, dễ hiểu. Chữa bài tập cẩn thận, chi tiết.',
        hashtags: ['Chất lượng', 'Truyền lửa', 'Tận tâm'],
        pageUrl: 'https://hoctoancungcotra.qandastudy.vn/',
    },
    {
        teacherId: 8,
        teacherName: 'Andy',
        imageUrl: './teacher-images/Mr Andy-min.png',
        studentName: 'Phương Trang',
        studentGrade: '9',
        studyPeriod: '12 tháng',
        reviewTitle: 'Giáo viên Tiếng Anh dạy cuốn nhất từng học',
        reviewBody: 'Thầy Tuấn Anh giảng bài chi tiết và dễ hiểu, học sinh mất gốc cũng có có thể theo được.',
        hashtags: ['Dễ hiểu', 'Nhiệt tình', 'Chuyên sâu'],
        pageUrl: 'http://luyentienganhvao10.thaytuananh.qandastudy.vn/',
    },
    {
        teacherId: 9,
        teacherName: 'Drake',
        imageUrl: './teacher-images/Mr Manh-min.png',
        studentName: 'Phạm Bách',
        studentGrade: '10',
        studyPeriod: '5 tháng',
        reviewTitle: 'Thầy giáo Gen Z có tâm với nghề',
        reviewBody: 'Thầy Mạnh giảng rất hay và lôi cuốn, phù hợp với mọi học sinh. Cách tổng hợp kiến thức logic, dễ hiểu, khoa học.',
        hashtags: ['Tận tâm', 'Nhiệt tình', 'Logic'],
        pageUrl: 'https://toanthaymanhhip.2k7.qandastudy.vn/?fbclid=IwAR017q_UGlN17LDGe_hQK1ZJpwT7yaoGpLmUI0fHKjsg-oNHIV6Hpsj1gAc',
    },
    {
        teacherId: 10,
        teacherName: 'Ngoc Anh',
        imageUrl: './teacher-images/Ms Ngoc Anh-min.png',
        studentName: 'Hà Anh',
        studentGrade: '9',
        studyPeriod: '3 tháng',
        reviewTitle: 'Học Văn mà cuốn kinh khủng',
        reviewBody: 'Cô Ngọc Anh dạy rất tốt, giọng hay, truyền cảm, cách cô khai thác tác phẩm cũng rất đặc biệt nữa. Học cô xong chăm học Văn hơn hẳn.',
        hashtags: ['Chuyên sâu', 'Truyền cảm', 'Tiến bộ nhanh'],
        pageUrl: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0KtrN2z31UKxqksPGXunZctC5DUV6RyvkBLQmvL7ZUEbXh5ya9E8mbBaYyruFEb6Cl&id=108404770865984',
    },
    {
        teacherId: 11,
        teacherName: 'Huyen',
        imageUrl: './teacher-images/Ms Huyen-min.png',
        studentName: 'Phạm Văn Nam',
        studentGrade: '12',
        studyPeriod: '10 tháng',
        reviewTitle: 'Thật sự là ngập trong kiến thức',
        reviewBody: 'Cô dạy rất nhiều luôn. Các chị chuyên viên cũng rất giỏi. Khuyên các em hãy bám chặt vào chương trình cô dạy. Tin anh đi, không thiệt đâu',
        hashtags: ['Vượt trội', 'Lộ trình', 'Chi tiết'],
        pageUrl: 'https://www.facebook.com/ngochuyenlb/videos/702070590778406',
    },
    {
        teacherId: 12,
        teacherName: 'Kien bio',
        imageUrl: './teacher-images/Ms Kien Sinh-min.png',
        studentName: 'L.T.Liễu',
        studentGrade: '12',
        studyPeriod: '5 tháng',
        reviewTitle: 'Giáo viên livestream môn Sinh HAY NHẤT',
        reviewBody: 'Tuy là một thầy giáo trẻ nhưng thầy Kiên là 1 thầy giáo tâm huyết, hết mình với học sinh',
        hashtags: ['Dễ hiểu', 'Lôi cuốn', 'Tâm huyết'],
        pageUrl: 'https://www.facebook.com/HocSinhThayTruongCongKien/posts/pfbid0Jq3Bw3DUB9g7cEMPfjBf7aYcs1GHYQpfBkswCeXimHEvMyER3TVFwQoZCUKwwFxGl',
    },
    {
        teacherId: 13,
        teacherName: 'Thang',
        imageUrl: './teacher-images/Mr Thang-min.png',
        studentName: 'Thúy Đỗ',
        studentGrade: '12',
        studyPeriod: '12 tháng',
        reviewTitle: 'Khoá học online Hóa mà mình thấy đáng học nhất',
        reviewBody: 'Thầy giáo có tâm, có tầm, xây dựng được môi trường lành mạnh và đảm bảo lâu dài kiến thức chuyên sâu hiểu rõ bản chất.',
        hashtags: ['Độc đáo', 'Khoa học', 'Sáng tạo'],
        pageUrl: 'https://www.facebook.com/hoctothoahoc/posts/pfbid02D4kEZvMNgThuGQyRArhbmMdKorqi36wkMs2ZWQt2Job7x8ZAtUg4MvCkBKwyqSLMl',
    },
    {
        teacherId: 14,
        teacherName: 'Bien',
        imageUrl: './teacher-images/Mr Bien-min.png',
        studentName: 'Nhật Minh',
        studentGrade: '12',
        studyPeriod: '12 tháng',
        reviewTitle: 'Nhắc đến Vật lí là nhắc đến thầy CHU VĂN BIÊN',
        reviewBody: 'Giáo viên tận tâm nhiệt huyết nhất em từng theo học, thầy chất và mãi đỉnh',
        hashtags: ['Nhiệt huyết', 'Hiểu biết', 'Sáng tạo'],
        pageUrl: 'https://www.facebook.com/chuvanbien.vn/posts/pfbid02DfUUs8ic4p1YTUoS4f4A16ETpCaTdRoMp4hXQtAUEg33bjJyjdk81W2ecTMbxmFUl',
    },
]