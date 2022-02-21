def possibleWords(listwords, listchars):
    valid = []
    for x in listwords:
        v = ""
        for y in x:
            temp = listchars
            if(y in temp):
                v += y
        if(v == x):
            valid.append(x)
    
    return valid

print(possibleWords(['go', 'bat', 'me', 'eat', 'goal', 'boy', 'run'], ['e', 'o', 'b', 'a', 'm', 'g', 'l']))
#[go, me, goal]