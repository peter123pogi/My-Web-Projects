import random

def player_step_ladder(a, player, start, end):
    for i in range(start.__len__()):#for loop
        if a == start[i]:#if statement
            print(player + " has step the ladder on tile ", start[i], "-------")
            a = end[i]
    return a

def player_step_snake(a, player, start, end):
    for i in range(start.__len__()):#for loop
        if a == start[i]:
            print(player + " has step the snake on tile ",  start[i], "-------")
            a = end[i]
    return a

def check_winner(x, y):
    if x >= 100:#if statement
        print("Player 1 wins the game while Player 2 loses the game\n")
    elif y >= 100:#elif or else if statement
        print("Player 2 wins the game while Player 1 loses the game\n")

#-------------------------------------------------------------------------------------------------------

snake_start =  [95, 93, 81, 67, 61, 57, 44, 20, 10, 9]
snake_end =    [60, 74, 70, 58, 41, 35, 39, 8,  6, 4]

ladder_start = [5,  7,  11, 14, 22, 29, 38, 50, 75, 87]
ladder_end =   [12, 13, 21, 30, 25, 40, 47, 83, 80, 91]

player1 = 0
player2 = 0

while player1 < 100 and player2 < 100:#while loop
    player1_roll = input("Player 1 press enter to roll your dice")
    player1_move = random.randint(1, 6)
    print("Player1 dice: ", player1_move, "\n")
    
    player1+= player1_move
    player1 = player_step_ladder(player1, "Player1", ladder_start, ladder_end)
    player1 = player_step_snake(player1, "Player1", snake_start, snake_end)
    print("player1 position", player1, "==\n")
    check_winner(player1, player2)
    
    
    player2_roll = input("Player 2 press enter to roll your dice")
    player2_move = random.randint(1, 6)
    print("Player2 dice: ", player2_move, "\n")
    
    player2+= player2_move
    player2 = player_step_ladder(player2, "Player2", ladder_start, ladder_end)
    player2 = player_step_snake(player2, "Player2", snake_start, snake_end)
    print("player2 position", player2, "==\n")
    check_winner(player1, player2)