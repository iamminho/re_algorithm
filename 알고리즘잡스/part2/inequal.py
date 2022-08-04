k = 2
arr = ['<', '>']
ch = [True] * 10
res = [0] * (k+1)
answers = []


def check(sign, num1, num2):
    if sign == '<':
        if num1 > num2:
            return False
    else:
        if num1 < num2:
            return False
    return True


def getNumber(L):
    if L == k+1:
        answers.append(''.join(map(str, res)))
    else:
        for i in range(0, 10):
            if ch[i] and (L == 0 or check(arr[L-1], res[L-1], i)):
                ch[i] = False
                res[L] = i
                getNumber(L+1)
                ch[i] = True


getNumber(0)
print(answers[-1])
print(answers[0])
