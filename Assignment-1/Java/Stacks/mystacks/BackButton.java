package mystacks;

public class BackButton {

	private int size;
	private int top;
	private String[] folders;

	// Constructor accepting the size and intializing top and array of 'folders'
	public BackButton(int s) {
		size = s;
		top = -1;
		folders = new String[size];
	}

	// To insert an element in Stacks
	public void push(String a) {

		folders[++top] = a;

	}

	// To delete element form Stacks
	public String pop() {
		return folders[top--];
	}

	// Check if Stack is Empty
	public boolean isEmpty() {
		return (top == -1);

	}

	// Check if Stack is full
	public boolean isFull() {
		return (top == size - 1);
	}

	public static void main(String[] args) {

		BackButton addfolder = new BackButton(3);

		addfolder.push("MyComputer");
		addfolder.push("D:");
		addfolder.push("Music");

		if (!addfolder.isEmpty() == true) {
			String first = addfolder.pop();
			String second = addfolder.pop();
			String third = addfolder.pop();
			System.out.println("First Folder=" + third);
			System.out.println("Second Folder=" + second);
			System.out.println("Third Folder=" + first);

		}

		else
			System.out.println("No Folders");

	}

}
