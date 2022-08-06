n = 3
cnt = n-1
star = 0
for i in range(1, n+1):
    print(' ' * cnt, end="")
    print('*' * (i + star))
    star += 1
    cnt -= 1
