export interface Sach {
    maSach: string;       // Mã sách
    tenSach: string;      // Tên sách
    nxb: string;          // Nhà xuất bản
    namXB: number;        // Năm xuất bản
    tacGia: {             // Đối tượng tác giả
        maTacGia: string;   // Mã tác giả
        tenTacGia: string;  // Tên tác giả
        ngaySinh: Date;     // Ngày sinh
        quocGia: string;    // Quốc gia
    };
    moTa: string;         // Mô tả sách
}
