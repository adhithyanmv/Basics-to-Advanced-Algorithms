def bigArrs(lists):
    bigs = []
    for i in lists:
        bigs.append(max(i))

    return bigs

print(bigArrs([[4, 9, 1, 3],[13, 35, 18, 26],[32, 35, 97, 39],[1000000, 1001, 857, 1]]))