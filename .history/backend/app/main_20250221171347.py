from fastapi import FastAPI#, Request
from fastapi.middleware import CORSMiddleware
from .utils import WordManager

app = FastAPI()

origins: list[str] = [
    "http://localhost:8080",        # Для разработки (frontend)
    "http://localhost:5173",        # Для Vite в режиме разработки
    "https://polyak.pp.ua",            # Продакшен: главный домен frontend
    "https://www.polyak.pp.ua",        # Продакшен: с www (если используется)
    "https://api.myapp.com",        # Продакшен: backend (если frontend делает запросы к своему же серверу)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,       
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  
    allow_headers=["Authorization", "Content-Type", "X-Requested-With"], 
)

wm = WordManager()

@app.get('/api/word')
def get_random_word_route():
    return { 'word': wm.get_current_word() }

# CMD ["/app/.venv/bin/fastapi", "run", "app/main.py", "--port", "80", "--host", "0.0.0.0"]