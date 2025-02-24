from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from wordManager import WordManager

app = FastAPI()
app.mount("/static", StaticFiles(directory="../dist"), name="static")

wm = WordManager()

@app.get('/word')
def get_random_word_route():
    return { 'word': wm.get_current_word() }

@app.get('/')
def index():
    return HTMLResponse('../dist/index.html')


# CMD ["/app/.venv/bin/fastapi", "run", "app/main.py", "--port", "80", "--host", "0.0.0.0"]