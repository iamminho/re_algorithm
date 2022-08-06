# version 1
import sys
n = int(sys.stdin.readline())
lists = [list(map(int, sys.stdin.readline().split())) for _ in range(0, n)]
results = []


def calculator(arr):
    arr = sorted(arr, reverse=True)
    dict = {}
    for i in arr:
        if i in dict:
            dict[i] += 1
        else:
            dict[i] = 1
    maxkey = max(dict, key=dict.get)
    maxVal = dict[maxkey]

    if maxVal == 1:
        return maxkey * 100
    elif maxVal == 2:
        return 1000 + (maxkey * 100)
    elif maxVal == 3:
        return 10000 + (maxkey * 1000)


for list in lists:
    results.append(calculator(list))
print(max(results))
