package myArrays;

public class Student {

	private String name;
	private int StudentId;
	private int Sub1;
	private int Sub2;

	public Student() {
		name = new String();
		StudentId = 0;
		Sub1 = 0;
		Sub2 = 0;

	}

	// Set Name
	public void setName(String name) {
		this.name = name;

	}

	// Set Id
	public void setId(int id) {
		this.StudentId = id;
	}

	// Set marks in sub1
	public void setMarks1(int Sub1) {
		this.Sub1 = Sub1;
	}

	// Set marks in sub2
	public void setMarks2(int Sub2) {
		this.Sub2 = Sub2;

	}

	// Get Name
	public String getname() {
		return name;
	}

	// Get Id
	public int getId() {
		return StudentId;
	}

	// Get Marks
	public int getMarks1() {
		return Sub1;
	}

	// Get Marks 2
	public int getMarks2() {
		return Sub2;

	}
}