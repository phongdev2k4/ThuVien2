package com.bookland.report;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MostBorrowedBook {
	 private String bookName;
	 private long borrowCount;

}
