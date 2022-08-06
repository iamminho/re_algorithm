import sys

n = int(sys.stdin.readline())
x, y, r = map(int, sys.stdin.readline().split())
x -= 1
y -= 1
arr = [[0] * n for _ in range(0, n)]
arr[x][y] = 'x'


for i in range(0, n):
    for j in range(0, n):
        a = abs(i - x)
        b = abs(j - y)
        if 0 < a + b <= r:
            arr[i][j] = a + b

for i in range(0, len(arr)):
    print(*arr[i])
