def truncStr(string, num):
    stored = ""

    for i in range(num):
        stored += string[i]

    return stored + "..."

print(truncStr("A-tisket a-tasket A green and yellow basket", 8)) #A-tisket...
print(truncStr("A-", 1)) #A...