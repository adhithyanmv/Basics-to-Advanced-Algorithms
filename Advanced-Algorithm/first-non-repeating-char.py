#this one is actually a amazon interview qn
def firstnonRepeatingCharacter(arg):
    #getting that argument and turning it into like this
    #{"a":3,"b":1,"c":3,"d":1,"e":3,"f":1} to aaabcccdeeef
    string = ""
    val = ""
    for key,val in arg.items():
        string += key * val

    #now splitting aaabcccdeeef to ['aaa', 'b', 'ccc', 'd', 'eee']
    s = 0
    arr = []
    mainArr = []
    for i in range(len(string)):
        if i == len(string) - 1:
            break

        if(string[i] == string[i+1]):
            continue
        else:
            arr.append(string[s:i+1])
            s += len(string[s:i+1])


    #finally getting the nonrepeatingcharacter by the length
    for i in arr:
        if len(i) == 1:
            mainArr.append(i)

    return mainArr #['b', 'd']
            
        
print(firstnonRepeatingCharacter({"a":3,"b":1,"c":3,"d":1,"e":3,"f":1}))