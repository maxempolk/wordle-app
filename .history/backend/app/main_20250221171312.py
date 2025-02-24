from fastapi import FastAPI#, Request
from fastapi.middleware import CORSMiddleware
# from fastapi.templating import Jinja2Templates
# from fastapi.staticfiles import StaticFiles
from .utils import WordManager

app = FastAPI()

origins: list[str] = [
    "http://localhost:8080",        # Для разработки (frontend)
    "http://localhost:5173",        # Для Vite в режиме разработки
    "https://myapp.com",            # Продакшен: главный домен frontend
    "https://www.myapp.com",        # Продакшен: с www (если используется)
    "https://api.myapp.com",        # Продакшен: backend (если frontend делает запросы к своему же серверу)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,       
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  # Ограниченные методы
    allow_headers=["Authorization", "Content-Type", "X-Requested-With"],  # Ограниченные заголовки
)

wm = WordManager()

@app.get('/api/word')
def get_random_word_route():
    return { 'word': wm.get_current_word() }

# @app.get('/')
# def index(request: Request):
#     return templates.TemplateResponse( request, 'index.html')

# CMD ["/app/.venv/bin/fastapi", "run", "app/main.py", "--port", "80", "--host", "0.0.0.0"]