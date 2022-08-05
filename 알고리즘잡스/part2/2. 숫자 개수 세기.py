# template
n, q = map(int, input().split())
arr = sorted(list(map(int, input().split())))
arr2 = list(map(int, input().split()))


def binarySearch(start, end, target):
    if arr[start] > target:
        return False
    if arr[end] < target:
        return False

    while start <= end:
        mid = (start + end) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    return False


def startSearch(target):
    if target == 0:
        return target
    if arr[target] != arr[target-1]:
        return target
    for i in range(target, 0, -1):
        if arr[i] != arr[target]:
            return i+1
    return 0


for num in arr2:
    a = binarySearch(0, n-1, num)
    if a != False:
        b = startSearch(a)
        cnt = 0
        for i in range(b, n):
            if arr[i] == num:
                cnt += 1
            else:
                break
        print(cnt)
    else:
        print(0)
