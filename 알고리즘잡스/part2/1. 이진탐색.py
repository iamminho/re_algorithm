arr = [1, 3, 5, 7, 8, 9]
val = 1


def binarySearch(l, r, val):
    if l > r:
        return False
    elif l == r:
        if val == arr[l]:
            return True
        else:
            return False

    mid = (l+r) // 2
    if arr[mid] == val:
        return True
    elif arr[mid] > val:
        return binarySearch(l, mid-1, val)
    else:
        return binarySearch(mid+1, r, val)


a = binarySearch(0, len(arr)-1, val)
print(a)
