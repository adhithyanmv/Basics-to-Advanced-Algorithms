def titleCase(string):
    listStr = string.split(" ")
    cappedLol = []
    
    for i in listStr:
        mainCurr = i[0].upper()
        mainCurr += i[1:len(i)]
        cappedLol.append(mainCurr)

    return " ".join(cappedLol)



print(titleCase("I'm a little tea pot"))