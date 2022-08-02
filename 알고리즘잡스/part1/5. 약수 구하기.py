N, K = map(int, input("N과 K를 입력하세요:").split())

cnt = 0
flag = 0

# 작은 약수부터 구하는 기능 및, 그 약수가 몇 번째 수 인지 구현하기
for i in range(1, N+1):
    if N % i == 0:
        cnt += 1
    # 약수 출력 기능 구현하기
    if cnt == K:
        flag = 1
        print(i)
        break
# 찾고자 하는 약수가 없을 때 기능 구현하기
if flag == 0:
    print(0)
