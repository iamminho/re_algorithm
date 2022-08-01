# 윷들의 상태를 입력 받는 기능 구현
a, b, c, d = map(int, input("정수 4개 입력:").split())

# 배와 등의 개수를 윷들의 상태를 참고하여 구하는 기능 구현
first = 0
second = 0

if a == 0:
    first += 1
if b == 0:
    first += 1
if c == 0:
    first += 1
if d == 0:
    first += 1

if a == 1:
    second += 1
if b == 1:
    second += 1
if c == 1:
    second += 1
if d == 1:
    second += 1

    # 배와 등의 개수를 이용하여 결과를 출력하는 기능 구현

if first == 1 and second == 3:
    print(‘A’)
elif first == 2 and second == 2:
    print(‘B’)
elif first == 3 and second == 1:
    print(‘C’)
elif first == 4 and second 0:
    print(‘D’)
elif first == 0 and second 4:
    print(‘E’)
