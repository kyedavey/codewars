# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

# My Solution
def make_negative( number ):
    return number if number < 0 else number * -1 