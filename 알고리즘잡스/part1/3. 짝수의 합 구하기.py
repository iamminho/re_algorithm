# n 입력
N = int(input())

# 합을 저장할 변수 sum 선언하기
sum = 0

# 짝수의 합을 단순 반복문을 이용하여 구하기
for num in range(1, N+1):
    if num % 2 == 0:
        sum += num

print(sum)
