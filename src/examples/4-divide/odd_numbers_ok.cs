string storeOddNumbersInAReversedString(int[] numbers)
{
	List<int> oddNumbers = new List<int>() { };
	List<int> reversedNumbers = new List<int>() { };
	oddNumbers = getOnlyOddNumbers(numbers);
	reversedNumbers = reverseNumbers(oddNumbers);

	return storeNumbersInString(reversedNumbers);
}

List<int> getOnlyOddNumbers(int[] numbers)
{
	return numbers.Where(n => n % 2 == 1).ToList();
}string storeOddNumbersInAReversedString(int[] numbers)
{
	List<int> oddNumbers = new List<int>() { };
	List<int> reversedNumbers = new List<int>() { };
	oddNumbers = getOnlyOddNumbers(numbers);
	reversedNumbers = reverseNumbers(oddNumbers);

	return storeNumbersInString(reversedNumbers);
}

List<int> getOnlyOddNumbers(int[] numbers)
{
	return numbers.Where(n => n % 2 == 1).ToList();
}

List<int> reverseNumbers(List<int> numbers)
{
	 numbers.Reverse();
	 return numbers;
}

string storeNumbersInString(List<int> numbers)
{
	StringBuilder sb = new StringBuilder();
	for (int i = 0; i < numbers.Count; i++)
	{
		sb.Append(numbers.ElementAt(i));
	}
	return sb.ToString();
}

List<int> reverseNumbers(List<int> numbers)
{
	 numbers.Reverse();
	 return numbers;
}

string storeNumbersInString(List<int> numbers)
{
	StringBuilder sb = new StringBuilder();
	for (int i = 0; i < numbers.Count; i++)
	{
		sb.Append(numbers.ElementAt(i));
	}
	return sb.ToString();
}