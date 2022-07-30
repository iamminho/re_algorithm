# 첫번째 풀이방법
def solution(id_list, report, k):
    report = list(set(report))
    reported = {}
    reports = {}
    stoped = []
    answer = []

    for i in range(len(id_list)):
        answer.append(0)

    for names in report:
        tmp = names.split(' ')
        if tmp[1] in reported:
            reported[tmp[1]] += 1
        else:
            reported[tmp[1]] = 1
        if tmp[0] in reports:
            reports[tmp[0]] = [*reports[tmp[0]], tmp[1]]
        else:
            reports[tmp[0]] = [tmp[1]]
    print(reports)

    for id in reported.keys():
        if(reported[id] >= k):
            stoped.append(id)

    if len(stoped) == 0:
        return answer
    else:
        for idx, val in enumerate(id_list):
            for id in stoped:
                if val in reports.keys() and id in reports[val]:
                    answer[idx] += 1
    return answer
