package com.bookland.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.bookland.dto.SachDTO;
import com.bookland.dto.addBookRequest;
import com.bookland.dto.addBookResponse;
import com.bookland.entity.*;

public interface SachService {

	public List<addBookResponse> finAll();

	public addBookResponse create(addBookRequest request,MultipartFile[] files);

	public void delete(String masach);

	public List<Sach> findAllBooks();

	public List<addBookResponse> findBookDetailsByName(String tenSach);

	List<SachDTO> findAllSachDTO();
	
	Page<SachDTO> searchSachDTO(String searchKey, Pageable pageabless);
}
