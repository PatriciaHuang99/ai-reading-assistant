# AI Reading Assistant

A minimal development scaffold for an AI reading assistant monorepo.

This task creates the project structure only. Ollama translation, browser speech synthesis, and SQLite-backed history will be added later.

## Structure

```text
ai-reading-assistant/
  frontend/
    Dockerfile
  backend/
    Dockerfile
    main.py
    requirements.txt
  docker-compose.yml
  README.md
```

## Run Locally Without Docker

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The backend uses `OLLAMA_BASE_URL=http://localhost:11434` by default, but it does not call Ollama yet.

### Frontend

In another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

## Run With Docker Compose

From the repository root:

```bash
docker compose up --build
```

The Compose setup starts:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`

The backend container is configured with:

```text
OLLAMA_BASE_URL=http://host.docker.internal:11434
```

Ollama is intentionally not included in Docker. It will be connected later from the host machine.

## Test

Open the frontend:

```text
http://localhost:5173
```

Check the backend health endpoint:

```text
http://localhost:8000/health
```

Expected response:

```json
{"status":"ok"}
```

## Future Steps

- Add Ollama-powered translation from the host machine.
- Add browser speech synthesis controls.
- Add SQLite history storage.
