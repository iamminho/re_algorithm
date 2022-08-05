arr = [3]
val = 3


l = 0
r = len(arr) - 1


while True:
    if l > r:
        print("NO")
        break
    elif l == r:
        if val == arr[l]:
            print("YES")
            break
        else:
            print("NO")
            break

    mid = (l+r) // 2
    if arr[mid] == val:
        print("YES")
        break
    elif arr[mid] > val:
        r = mid - 1
    else:
        l = mid + 1
