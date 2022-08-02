N = int(input("숫자입력:"))
flag = 0

# 임의의 정수 N이 소수 인지를 판별하는 기능 구현
for idx in range(2, N):
    if N % idx == 0:
        flag = 1

# N이 소수라면 YES, 아니라면 NO를 출력하는 기능 구현
if flag == 0:
    print("YES")
else:
    print("NO")
