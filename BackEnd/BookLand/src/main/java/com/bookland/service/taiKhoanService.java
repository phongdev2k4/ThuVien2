package com.bookland.service;

import org.springframework.stereotype.Service;

import com.bookland.dto.SignupRequest;
import com.bookland.dto.SignupResponse;
import com.bookland.entity.TaiKhoan;



@Service
public interface taiKhoanService {

	TaiKhoan doRegister(TaiKhoan request);

	SignupResponse doRegister13(SignupRequest request);

	public boolean changePassword(String username, String oldPassword, String newPassword);

}
