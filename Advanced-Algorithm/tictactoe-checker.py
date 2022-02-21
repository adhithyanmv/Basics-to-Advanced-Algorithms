def rowChecker(data):
    xsub = {}
    osub = {}

    for i in range(len(data)):
        curr = data[i]
        for x in range(len(curr)):
            if(curr[x] == 1 and curr[x+1] == 1 and curr[x+2] == 1):
                xsub["row{0}".format(i)] = True
                break
            if(curr[x] == 2 and curr[x+1] == 2 and curr[x+2] == 2):
                osub["row{0}".format(i)] = True
                break
            else:
                break
    return [xsub, osub]


def colChecker(data, xsub, osub):
    #rows to col
    arr = []
    row1 = []
    row2 = []
    row3 = []
    for i in range(len(data)):
        curr = data[i]
        for x in range(len(curr)):
            row1.append(curr[x])
            row2.append(curr[x+1])
            row3.append(curr[x+2])
            break
    arr.append(row1)
    arr.append(row2)
    arr.append(row3)

    for i in range(len(arr)):
        curr = arr[i]
        for x in range(len(curr)):
            if(curr[x] == 1 and curr[x+1] == 1 and curr[x+2] == 1):
                xsub["col{0}".format(i)] = True
                break
            if(curr[x] == 2 and curr[x+1] == 2 and curr[x+2] == 2):
                osub["col{0}".format(i)] = True
                break
            else:
                break
    
def slightChecker(data, xsub, osub):
    arr = []
    slight1 = []
    slight2 = []
    num = 0
    for i in range(len(data)):
        slight1.append(data[i][i])

    for i in range(len(data) - 1,-1,-1):
        slight2.append(data[i][num])
        num += 1

    arr.append(slight1)
    arr.append(slight2)

    for i in range(len(arr)):
        curr = arr[i]
        for x in range(len(curr)):
            if(curr[x] == 1 and curr[x+1] == 1 and curr[x+2] == 1):
                xsub["slight{0}".format(i)] = True
                break
            if(curr[x] == 2 and curr[x+1] == 2 and curr[x+2] == 2):
                osub["slight{0}".format(i)] = True
                break
            else:
                break

    print(slight2)



def is_solved(board):
    #0 = empty spot
    #1 = "X"
    #2 = "O"

    #-1 if no one has won yet
    #1 if "X" won
    #2 if "O" won
    #0 if draw

    

    data = rowChecker(board)
    xsub = data[0]
    osub = data[1]
    colChecker(board, xsub, osub)
    slightChecker(board, xsub, osub)

    if(len(xsub) == 0 and len(osub) == 0):
        return -1
    if(len(xsub) == len(osub)):
        return 0
    if(len(xsub) > len(osub)):
        return 1
    if(len(xsub) < len(osub)):
        return 2



    

print(is_solved([[1,2,1],
                [1,1,2],
                [2,1,2]]))

                