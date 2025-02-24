from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .utils import WordManager
from pathlib import Path

app = FastAPI()

base_path = Path(__file__).parent.resolve()
app.mount("/assets", StaticFiles(directory=str(base_path / "app/dist/assets")), name="static")

origins: list[str] = [
    "http://localhost:8080",        # Для разработки (frontend)
    "http://localhost:5173",        # Для Vite в режиме разработки
    "https://polyak.pp.ua",            # Продакшен: главный домен frontend
    "https://www.polyak.pp.ua",        # Продакшен: с www (если используется)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,       
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  
    allow_headers=["Authorization", "Content-Type", "X-Requested-With"], 
)

wm = WordManager()
templates = Jinja2Templates(str(base_path / "app/dist"))

@app.get('/api/word')
def get_random_word_route():
    return { 'word': wm.get_current_word() }

@app.get('/')
def index(request: Request):
    return templates.TemplateResponse(request, 'index.html')

# CMD ["/app/.venv/bin/fastapi", "run", "app/main.py", "--port", "80", "--host", "0.0.0.0"]