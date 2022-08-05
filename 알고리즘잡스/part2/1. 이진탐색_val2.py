arr = [1, 2, 3, 4, 5, 6]
val = 0


def binarySearch(start, end, val):
    while start <= end:
        mid = (start + end) // 2

        if arr[mid] == val:
            return mid
        elif arr[mid] < val:
            start = mid + 1
        else:
            end = mid - 1

    return False


print(binarySearch(0, len(arr)-1, val))
