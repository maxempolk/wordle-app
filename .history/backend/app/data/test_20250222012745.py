with open('input.txt', 'r') as input_file, open('output.txt', 'w') as output_file:
    for line in input_file:
        word = line.strip()
        if len(word) == 5:
            output_file.write(word + '\n')

print(  )