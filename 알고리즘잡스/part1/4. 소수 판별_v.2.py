import math

N = int(input("숫자입력: "))

# N의 제곱근을 구하는 기능 구현
sqrt_num = math.ceil(math.sqrt(N))

# N이 소수인지 판별하는 함수 구현


def isDecimal(N, sqrt):
    flag = 0
    for num in range(2, sqrt):
        if N % num == 0:
            flag = 1
            return flag
    return flag


# flag를 통해 소수인지 아닌지 출력
flag = isDecimal(N, sqrt_num)
if flag == 0:
    print("YES")
else:
    print("NO")
