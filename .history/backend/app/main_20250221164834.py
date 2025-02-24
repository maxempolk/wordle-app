from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from .utils import WordManager

app = FastAPI()
app.mount("/static", StaticFiles(directory="../../dist"), name="static")
templates = Jinja2Templates('../../dist')

wm = WordManager()

@app.get('/word')
def get_random_word_route():
    return { 'word': wm.get_current_word() }

@app.get('/')
def index(request: Request):
    return templates.TemplateResponse( request, 'index.html')

# CMD ["/app/.venv/bin/fastapi", "run", "app/main.py", "--port", "80", "--host", "0.0.0.0"]