a, b, c = map(int, input("세개의 수를 입력하세요:").split())
cnt = 0

# 정수 a가 b보다 더 큰 경우 오름차순 정렬해주기
if a > b:
    tmp = a
    a = b
    b = tmp

# 정수 a와 b 사이에 있는 c의 배수 개수를 구하기
for i in range(a, b+1):
    if i % c == 0:
        cnt += 1

print(cnt)
