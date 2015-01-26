#Summary

Drawing upon previous work done in my Algorithmic Analysis class, I have already implemented methods for various sorthing 
algorithms in Java. These methods will need to be converted into EcmaScript and checked for correctness befoore they can be used
in this project.
**Note: All refrences to comparisonCount should be removed, they were used for efficency comparison in the previous class but 
should not have relavence here.**

##Selection sort
```
public static void selection(String[] A)
{
	int len = A.length;
	for(int i=0; i<len-1; i++)
	{
		int min = i;
		for(int j=i+1; j<len; j++)
		{
			comparisonCount++;
			if(A[j].compareTo(A[min]) < 0)
			{
				min = j;
			}
		}
		String temp = A[i];
		A[i] = A[min];
		A[min] = temp;
	}
}
```

##Insertion Sort
```
public static void insertion(String[] A)
{
	for(int i=1; i<A.length; i++)
	{
		String u = A[i];
		int j = i-1;
		comparisonCount++;
		while(j>=0 && (A[j].compareTo(u)>0))
		{
			A[j+1] = A[j];
			j--;
			comparisonCount++;
		}
		A[j+1] = u;
	}
}
```

##Mergesort
```
public static void mergesort(String[] A)
{
	int n = A.length;
	if(n>1)
	{
		String[] B,C;
		B = new String[(n/2)];
		System.arraycopy(A, 0, B, 0, (n/2));
		if(n%2 == 0)
		{
			C = new String[(n/2)];
			System.arraycopy(A, (n/2), C, 0, (n/2));
		}
		else
		{
			C = new String[(n/2)+1];
			System.arraycopy(A, (n/2), C, 0, (n/2)+1);
		}
		Sorts.mergesort(B);
		Sorts.mergesort(C);
		Sorts.merge(B,C,A);
	}
}

private static void merge(String[] B, String[] C, String[] A)
{
	int i =0, j = 0, k = 0;
	int p = B.length;
	int q = C.length;
	while(i<p && j<q)
	{
		comparisonCount++;
		if((B[i].compareTo(C[j])) <= 0)
		{
			A[k] = B[i];
			i++;
		}
		else
		{
			A[k] = C[j];
			j++;
		}
		k++;
	}
	if(i==p)
	{
		System.arraycopy(C, j, A, k, q-j);
	}
	else
	{
		System.arraycopy(B, i, A, k, p-i);
	}
}
```

##Quicksort
```
public static void quick(String A[])
{
	quicksort(A,0,A.length-1);
}

private static void quicksort(String arr[], int left, int right)
{
	int index = partition(arr, left, right);
	if(left < index-1)
	{
		quicksort(arr, left, index-1);
	}
	if(index < right)
	{
		quicksort(arr, index+1, right);
	}
}

private static int partition(String arr[], int left, int right)
{
	int i = left, j = right;
	String tmp;
	String pivot = arr[(left+right)/2];
	while(i<=j)
	{
		comparisonCount++;
		while((arr[i].compareTo(pivot))<0)
		{
			i++;
			comparisonCount++;
		}
		comparisonCount++;
		while((arr[j].compareTo(pivot))>0)
		{
			j++;
			comparisonCount++;
		}
		if(i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}
	return i;
}
```
