from fastapi import FastAPI
from random import random
from datetime import datetime

app = FastAPI()

class WordManager:
    def __init__(self, words_file="words.txt", history_file="word_history.txt"):
        self.words_file = words_file
        self.history_file = history_file
        self.current_word = None
        self.last_update = None
        self._load_last_word()

    def _load_last_word(self):
        try:
            with open(self.history_file, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                if lines:
                    last_line = lines[-1].strip()
                    date_str, word = last_line.split(" - ", 1)
                    self.last_update = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
                    self.current_word = word
        except FileNotFoundError:
            pass 

    def _save_word(self, word):
        with open(self.history_file, 'a', encoding='utf-8') as f:
            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            f.write(f"{timestamp} - {word}\n")

    def _get_random_word(self):
        try:
            with open(self.words_file, 'r', encoding='utf-8') as file:
                word = None
                count = 0
                
                for line in file:
                    current_word = line.strip()
                    if current_word: 
                        count += 1
                        if random() < 1/count:
                            word = current_word
                            
                return word if count > 0 else None
        except FileNotFoundError:
            print(f"Ошибка: Файл {self.words_file} не найден")
            return None
        except Exception as e:
            print(f"Произошла ошибка: {str(e)}")
            return None
    
    def get_current_word(self):
        now = datetime.now()
        if self.last_update is None or (now - self.last_update).days >= 1:
            self.current_word = self._get_random_word()
            self.last_update = now
            if self.current_word:
                self._save_word(self.current_word)
        return self.current_word

wm = WordManager()

@app.get('/word')
def get_random_word_route():
    return { 'word': wm.get_current_word() }

# CMD ["/app/.venv/bin/fastapi", "run", "app/main.py", "--port", "80", "--host", "0.0.0.0"]