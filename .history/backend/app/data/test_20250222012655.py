# Открываем исходный файл для чтения и новый файл для записи
with open('input.txt', 'r') as input_file, open('output.txt', 'w') as output_file:
    # Проходим по каждой строке в файле
    for line in input_file:
        # Убираем символы перевода строки и пробелы
        word = line.strip()
        # Проверяем длину слова
        if len(word) == 5:
            # Записываем слово в выходной файл
            output_file.write(word + '\n')